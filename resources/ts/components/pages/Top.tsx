import { useNavigate } from "react-router-dom";

export const Top = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <div>
            <div>Top</div>
            <button onClick={handleLogin}>ログイン</button>
            <button onClick={handleRegister}>新規登録</button>
        </div>
    );
};
