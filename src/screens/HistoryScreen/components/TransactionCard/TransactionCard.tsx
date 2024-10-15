import { useGetApiProfileMe } from "api/backend";
import { TransactionResponse } from "api/backend/index.schemas";
import { Text, View } from "react-native";
import { styles } from "./TransactionCard.styles";
import { memo } from "react";
import { getDate } from "screens/HistoryScreen/utils";

export const TransactionCard = memo(
  ({ item }: { item: TransactionResponse }) => {
    const { data: me } = useGetApiProfileMe();

    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.heading}>
            {item?.transactionType === "Transfer" &&
              (item.debitUserName === `${me?.lastName} ${me?.firstName}`
                ? "From "
                : "To ")}
            {item?.debitUserName === `${me?.lastName} ${me?.firstName}`
              ? item?.creditUserName
              : item?.debitUserName}
            {item?.transactionType === "Debit" && "Added from Internal Service"}
            {item?.transactionType === "Credit" &&
              "Subtracted by Internal Service"}
          </Text>
          <Text style={styles.date}>{getDate(item?.date)}</Text>
        </View>
        <Text
          style={[
            styles.amount,
            item?.debitUserName === `${me?.lastName} ${me?.firstName}`
              ? styles.amount_increase
              : styles.amount_decrease,
          ]}>
          {item?.debitUserName === `${me?.lastName} ${me?.firstName}`
            ? `+ ${item.amount}`
            : `- ${item?.amount}`}{" "}
          M
        </Text>
      </View>
    );
  },
  (prevProps, nextProps) => prevProps.item === nextProps.item,
);
