import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { styles } from "./HistoryScreen.styles";
import { EmptyState } from "./components/EmptyState/EmptyState";
import { getApiTransactionsMy } from "api/backend";
import { Button } from "components/Button/Button";
import { useCallback, useMemo, useState } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import {
  TransactionResponse,
  TransactionResponsePaginationResponse,
} from "api/backend/index.schemas";
import { TransactionCard } from "./components/TransactionCard/TransactionCard";

const queryKey = ["/transactions/my"];

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

export const HistoryScreen = () => {
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchMyTransactions = (context: QueryFunctionContext) => {
    const { pageParam } = context;
    return getApiTransactionsMy({
      Page: typeof pageParam === "number" ? pageParam : page,
      PageSize: 30,
    });
  };

  const { data, isFetching, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<TransactionResponsePaginationResponse>({
      queryKey,
      queryFn: fetchMyTransactions,
      initialPageParam: page,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (!lastPage.data || lastPage.data.length === 0) {
          return undefined;
        }
        return (lastPageParam as number) + 1;
      },
    });

  const handleIncreasePage = () => {
    if (!hasNextPage) return;
    fetchNextPage();
    setPage(page + 1);
  };

  const getKey = (item: TransactionResponse) =>
    item?.id ? item.id.toString() : `transaction-${Math.random()}`;

  const transactions = useMemo(() => {
    return data
      ? data.pages.flatMap(
          page =>
            page.data?.filter((item): item is TransactionResponse => !!item) ||
            [],
        )
      : [];
  }, [data]);

  const renderItem: ListRenderItem<TransactionResponse> = useCallback(
    ({ item }) => <TransactionCard item={item} />,
    [],
  );

  if (isLoading) return <ActivityIndicator size="large" />;

  if (!transactions || transactions.length === 0) {
    return <EmptyState />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      refreshControl={
        // TODO: add refresh logic
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      removeClippedSubviews
      ListEmptyComponent={EmptyState}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={<Text style={styles.title}>Transfer history</Text>}
      ListFooterComponent={
        hasNextPage ? (
          <Button
            style={styles.footer}
            isDisabled={isFetching}
            isLoading={isFetching || isLoading}
            onPress={handleIncreasePage}
            label="Load more"
          />
        ) : null
      }
      data={transactions}
      keyExtractor={getKey}
      renderItem={renderItem}
    />
  );
};
