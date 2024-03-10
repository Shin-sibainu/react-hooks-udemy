import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type User = {
  id: string;
  username: string;
  email: string;
};

// 認証状態を表すコンテキストの型
interface AuthContextType {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((userInfo: User) => {
    // ダミーの認証条件。実際のアプリではAPI呼び出し等で認証を行います。
    if (
      userInfo.username === "testUser" &&
      userInfo.email === "test@example.com"
    ) {
      setUser(userInfo); // ダミーのユーザー情報をセット
    } else {
      console.log("ログイン失敗：ユーザー名またはメールアドレスが不正です。");
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
