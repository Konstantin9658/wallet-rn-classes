import { ThemeResponse } from "api/backend/index.schemas";
import * as yup from "yup";
import { makeStorage, useStorage } from "./storage";

const ThemesScheme: yup.ObjectSchema<ThemeResponse> = yup.object().shape({
  theme: yup.string().oneOf(["Light", "Dark", "Auto"]).required(),
});

export const theme = makeStorage(ThemesScheme, "theme");

export const useTheme = () => useStorage(theme);
