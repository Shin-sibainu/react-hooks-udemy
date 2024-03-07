import React, { useState, useEffect } from "react";
import useFetchUser from "./useFetchUser";
import useSWR from "swr";
import { cache } from "swr/_internal";

const fetcher = (args: string) => fetch(args).then((res) => res.json());
console.log(cache);

const Lesson2_3: React.FC = () => {
  // const { user, loading, error } = useFetchUser(1); // カスタムフックを使用してユーザー情報を取得

  const {
    data: user,
    error,
    isLoading: loading,
  } = useSWR("https://jsonplaceholder.typicode.com/users/5", fetcher);

  // const [user, setUser] = useState<User | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   let isMounted = true; // このフラグはコンポーネントのマウント状態を追跡します

  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users/1"
  //       );
  //       if (!response.ok) {
  //         throw new Error("データの取得に失敗しました");
  //       }
  //       const userData: User = await response.json();

  //       if (isMounted) {
  //         setUser(userData);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         console.error(error);
  //         setLoading(false);
  //       }
  //     }
  //   };

  //   fetchUser();

  //   // クリーンアップ関数
  //   return () => {
  //     isMounted = false; // コンポーネントがアンマウントされたらフラグをfalseに設定
  //   };
  // }, []); // 空の依存配列

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>ユーザー情報が見つかりません。</div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>ユーザー情報</h1>
      <p>
        <strong>名前:</strong> {user.name}
      </p>
      <p>
        <strong>ユーザー名:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>都市:</strong> {user.address.city}
      </p>
    </div>
  );
};

export default Lesson2_3;
