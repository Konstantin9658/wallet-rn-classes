import { useEffect, useState } from "react";
import { MMKV } from "react-native-mmkv";
import { Schema } from "yup";

const storage = new MMKV();

// List of available keys for persistent storage
type StorageKey = "credentials";

const storageKeyRegister = new Map<StorageKey, true>();

// Prevent accidentally losing the data by creating multiple storages with the same key
const assertStorageKey = (storageKey: StorageKey) => {
  if (storageKeyRegister.has(storageKey)) {
    throw new Error(
      `Storage with key '${storageKey}' has been already registered`,
    );
  }
  storageKeyRegister.set(storageKey, true);
};

// Creates persistent storage with specific data shape, described by Yup schema
export const makeStorage = <SchemaType>(
  schema: Schema<SchemaType>,
  storageKey: StorageKey,
) => {
  assertStorageKey(storageKey);

  return {
    get(): SchemaType | null {
      const rawData = storage.getString(storageKey);
      const data = rawData ? JSON.parse(rawData) : null;

      return data && schema.isValidSync(data)
        ? schema.validateSync(data)
        : null;
    },
    set(payload: SchemaType) {
      storage.set(storageKey, JSON.stringify(payload));
    },
    delete() {
      storage.delete(storageKey);
    },
    addOnValueChangedListener(callback: (value: SchemaType | null) => void) {
      return storage.addOnValueChangedListener(key => {
        if (key === storageKey) {
          return callback(this.get());
        }
      });
    },
  } as const;
};

type StorageInstance<SchemaType> = ReturnType<typeof makeStorage<SchemaType>>;

// Converts stored data to the React state so it can be used in the React components
export const useStorage = <SchemaType>(
  storageInstance?: StorageInstance<SchemaType>,
) => {
  const [state, setState] = useState(storageInstance?.get());

  useEffect(() => {
    if (storageInstance) {
      setState(storageInstance.get());
      const listener = storageInstance.addOnValueChangedListener(value =>
        setState(value),
      );
      return () => listener.remove();
    } else {
      setState(undefined);
    }
  }, [storageInstance]);

  const setStorageState = (value: SchemaType | null) => {
    if (storageInstance) {
      if (value) {
        storageInstance.set(value);
      } else {
        storageInstance.delete();
      }
    }
  };

  return [state, setStorageState] as const;
};
