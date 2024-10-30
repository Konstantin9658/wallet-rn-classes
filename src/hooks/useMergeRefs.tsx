import { useCallback, Ref } from "react";

export function useMergeRefs<T>(...refs: (Ref<T> | undefined)[]): Ref<T> {
  return useCallback(
    (element: T) => {
      refs.forEach(ref => {
        if (typeof ref === "function") {
          ref(element);
        } else if (ref) {
          (ref as React.MutableRefObject<T>).current = element;
        }
      });
    },
    [refs],
  );
}
