import { ReactNode } from "react";

type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    two_factor_recovery_codes: string | null;
    two_factor_secret: string | null;
    created_at: string;
    updated_at: string | null;
};

type LoginData = {
    email: string;
    password: string;
};

type RegisterData = {
    email: string;
    password: string;
    password_confirmation: string;
};

type PasswordUpdateData = {
    password: string;
};

type authProps = {
    user: User | null;
    userLoading: boolean;
    register: (registerData: RegisterData) => Promise<void>;
    signin: (loginData: LoginData) => Promise<void>;
    signout: () => Promise<void>;
};

type Props = {
    children: ReactNode;
};

type RouteProps = {
    component: ReactNode;
    redirect: string;
};
