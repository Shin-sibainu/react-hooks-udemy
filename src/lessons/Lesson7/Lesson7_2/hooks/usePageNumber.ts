import { useCallback, useMemo, useState, useTransition } from "react";

export const usePageNumber = () => {
  const [page, setPage] = useState<number>(1);
  const [isPending, startTransition] = useTransition();

  //   const incrementPage = useCallback(() => {
  //     startTransition(() => setPage((p) => p + 1));
  //   }, [startTransition]);

  const incrementPage = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  //   const decrementPage = useCallback(() => {
  //     startTransition(() => setPage((p) => Math.max(p - 1, 1)));
  //   }, [startTransition]);

  const decrementPage = useCallback(() => {
    setPage((p) => Math.max(p - 1, 1));
  }, []);

  return useMemo(
    () => ({
      page,
      isPending,
      incrementPage,
      decrementPage,
    }),
    [page, isPending, incrementPage, decrementPage]
  );
};
