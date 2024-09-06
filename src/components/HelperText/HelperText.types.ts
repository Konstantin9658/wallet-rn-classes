export type TypeOfHelperText = "error" | "hint";

export interface HelperTextProps {
  type: TypeOfHelperText;
  text?: string;
}
