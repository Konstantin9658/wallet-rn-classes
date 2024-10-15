import { TransactionResponse } from "api/backend/index.schemas";
import { ListRenderItem } from "react-native";
import { TransactionCard } from "./components/TransactionCard/TransactionCard";

export const renderItem: ListRenderItem<TransactionResponse> = ({ item }) => (
  <TransactionCard item={item} />
);

export const getKey = (item: TransactionResponse) =>
  item?.id ? item.id.toString() : `transaction-${Math.random()}`;

export const getDate = (date?: string) => {
  if (!date) return;
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = String(newDate.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
