import axios from "axios";
import {
    useContext,
    createContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    two_factor_recovery_codes: string | null;
    two_factor_secret: string | null;
    created_at: string;
    updated_at: string | null;
}
interface LoginData {
    email: string;
    password: string;
}
interface RegisterData {
    email: string;
    password: string;
    password_confirmation: string;
}
interface authProps {
    user: User | null;
    register: (registerData: RegisterData) => Promise<void>;
    signin: (loginData: LoginData) => Promise<void>;
    signout: () => Promise<void>;
}
interface Props {
    children: ReactNode;
}
interface RouteProps {
    children: ReactNode;
    path: string;
    exact?: boolean;
}
interface From {
    from: Location;
}

const authContext = createContext<authProps | null>(null);

const ProvideAuth = ({ children }: Props) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
export default ProvideAuth;

export const useAuth = () => {
    return useContext(authContext);
};

const useProvideAuth = () => {
    // ユーザー情報を保持
    const [user, setUser] = useState<User | null>(null);

    // ローディングフラグ
    const [userLoading, setUserLoading] = useState(true);

    /**
     * 新規登録
     * 成功時にはユーザー情報をstateで管理
     *
     * @param {RegisterData} registerData - 登録データ
     * @returns {Promise<void>} ユーザー情報を設定する Promise
     */
    const register = async (registerData: RegisterData) => {
        try {
            const res = await axios.post("/api/register", registerData);
            setUser(res.data);
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        }
    };

    /**
     * ログイン
     * 成功時にはユーザー情報をstateで管理
     *
     * @param {LoginData} loginData - ログインに必要なデータ
     * @returns {Promise<void>} ログインが成功した場合に解決される Promise
     */
    const signin = async (loginData: LoginData) => {
        try {
            const res = await axios.post("/api/login", loginData);
            console.log(res.data);
            setUser(res.data);
        } catch (error) {
            console.error("login error:", error);
            throw error;
        }
    };

    /**
     * ログアウト
     * 成功時にはユーザー情報を削除
     *
     * @returns {Promise<void>} ログアウトが成功した場合に解決される Promise
     */
    const signout = async () => {
        try {
            await axios.post("/api/logout", {});
            setUser(null);
        } catch (error) {
            console.error("logout error:", error);
            throw error;
        }
    };

    /**
     * Googleログイン
     * 成功時にはユーザー情報をstateで管理
     *
     */
    const signinWithGoogle = async (token: string) => {
        try {
            const res = await axios.post(
                `/api/login/google/callback${token}`,
                {}
            );
            console.log(res.data);
            setUser(res.data);
        } catch (error) {
            console.error("signinWithGoogle error:", error);
            throw error;
        }
    };

    /**
     * パスワードの更新
     *
     */
    const passwordUpdate = async (password) => {
        try {
            await axios.put("/api/user/password", password);
        } catch (error) {
            console.error("passwordUpdate error:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setUserLoading(true);

                const response = await axios.get("/api/user");

                console.log(response.data);
                setUser(response.data);

                setUserLoading(false);
            } catch (error) {
                console.error("API call error:", error);
                setUserLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        user,
        userLoading,
        register,
        signin,
        signout,
        signinWithGoogle,
        passwordUpdate,
    };
};

/**
 * 認証済みのみアクセス可能 (ホーム画面など)
 */
export const PrivateRoute = ({ component, redirect }: RouteProps) => {
    const location = useLocation();

    // 認証ユーザーを取得
    const auth = useAuth();

    // user情報が取得されるまで待つ
    if (auth?.userLoading) {
        return <div>Loading...</div>;
    }

    if (auth?.user === null) {
        return (
            <Navigate
                to={redirect}
                state={{ from: location }}
                replace={false}
            />
        );
    } else {
        return component;
    }
};

/**
 * 認証していない場合のみアクセス可能（ログイン画面など）
 */
export const PublicRoute = ({ component, redirect }: RouteProps) => {
    const location = useLocation();

    const auth = useAuth();

    // user情報が取得されるまで待つ
    if (auth?.userLoading) {
        return <div>Loading...</div>;
    }

    if (auth?.user === null) {
        return component;
    } else {
        return (
            <Navigate
                to={redirect}
                state={{ from: location }}
                replace={false}
            />
        );
    }
};
