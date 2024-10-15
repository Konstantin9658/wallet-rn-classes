import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { styles } from "./HistoryScreen.styles";
import { EmptyState } from "./components/EmptyState/EmptyState";
import { getApiTransactionsMy } from "api/backend";
import { useCallback, useMemo, useState } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import {
  TransactionResponse,
  TransactionResponsePaginationResponse,
} from "api/backend/index.schemas";
import { getKey, renderItem } from "./utils";
import { QUERY_KEY } from "./consts";

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
      queryKey: QUERY_KEY,
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

  const transactions = useMemo(() => {
    return data
      ? data.pages.flatMap(
          page =>
            page.data?.filter((item): item is TransactionResponse => !!item) ||
            [],
        )
      : [];
  }, [data]);

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
      onEndReached={() => handleIncreasePage()}
      ListEmptyComponent={EmptyState}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={<Text style={styles.title}>Transfer history</Text>}
      ListFooterComponent={
        isFetching && hasNextPage ? <ActivityIndicator size="large" /> : null
      }
      data={transactions}
      keyExtractor={getKey}
      renderItem={renderItem}
    />
  );
};
