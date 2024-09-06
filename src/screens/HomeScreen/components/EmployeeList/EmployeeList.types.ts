import { ProfileSearchResponse } from "api/backend/index.schemas";
import { FormDataTransfer } from "screens/HomeScreen/HomeScreen.types";

export interface EmployeeListProps {
  onChange: (value: string) => void;
  onValueChange: (name: keyof FormDataTransfer, value: string | number) => void;
  inputValue: string;
  isRefetching?: boolean;
  employees?: ProfileSearchResponse[];
}
