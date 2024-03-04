import { useEffect } from "react";

// T は Event を拡張する型で、listener の引数の型として使用されます。
export function useWindowListener<T extends Event>(
  eventType: string,
  listener: (event: T) => void
) {
  useEffect(() => {
    // 型アサーションを使用して、イベントハンドラー内で event を T 型として扱います。
    const handler = (event: Event) => listener(event as T);

    window.addEventListener(eventType, handler);

    return () => {
      window.removeEventListener(eventType, handler);
    };
  }, [eventType, listener]);
}
