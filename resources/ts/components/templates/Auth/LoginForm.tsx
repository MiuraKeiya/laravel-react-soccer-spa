import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Icon } from "../../atoms/Icon/Icon";

export const LoginForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    // ログイン処理
    const onSubmit = (data) => {
        axios.get("/sanctum/csrf-cookie").then(() => {
            axios.post("/api/login", data).then((res) => {
              console.log(res.data)
                navigate("/home");
            });
        });
    };

    return (
        <div className="bg-[#111931] flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div>
                <Icon
                    src="/images/Original1.png"
                    alt="Football"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#EEEEEE]">
                    アカウントにサインインする
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-[#EEEEEE]">
                            メールアドレス
                        </label>
                        <div className="mt-2">
                            <input
                                className="block w-full rounded-md border-0 py-1.5 text-[#EEEEEE] bg-[#111931] shadow-sm ring-1 ring-inset ring-gray-300 placeholder-text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("email")}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-[#EEEEEE]"
                            >
                                パスワード
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    パスワードをお忘れですか？
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                className="block w-full rounded-md border-0 py-1.5 text-[#EEEEEE] bg-[#111931] shadow-sm ring-1 ring-inset ring-gray-300 placeholder-text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("password")}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#B0EE1B] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            サインイン
                        </button>
                    </div>
                </form>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#EEEEEE]"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-[#EEEEEE] bg-[#111931]">
                            {" "}
                            or{" "}
                        </span>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                    <svg
                        className="h-5 w-5 shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                            fill="#EA4335"
                        />
                    </svg>
                    <p className="text-[13px]">Googleアカウントでサインイン</p>
                </button>

                <p className="mt-10 text-center text-sm text-[#C8CDCD]">
                    まだ登録をしていませんか？{" "}
                    <a
                        href="#"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        新規登録する
                    </a>
                </p>
            </div>
        </div>
    );
};
