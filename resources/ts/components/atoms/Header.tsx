import { useState, useRef, useEffect } from "react";

export const Header = () => {
    const menuRef = useRef(null);
    const [showOptionsMenu, setShowOptionsMenu] = useState(false);

    const toggleOptionsMenu = () => {
        setShowOptionsMenu(!showOptionsMenu);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowOptionsMenu(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className="flex justify-between items-center bg-[#111931] h-14">
            <img
                src="/images/Original.png"
                alt="Soccer"
                className="h-10 w-hull ml-5"
            />
            <div className="mr-2">
                <div className="flex items-center ml-4 md:ml-6">
                    <div className="relative ml-3">
                        <div
                            ref={menuRef}
                            className="relative inline-block text-left"
                        >
                            <div>
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                                    id="options-menu"
                                    onClick={toggleOptionsMenu}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="w-8 h-8"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                    </svg>
                                </button>
                            </div>
                            {showOptionsMenu && (
                                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <a
                                            href="/#"
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            role="menuitem"
                                        >
                                            アカウント
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            role="menuitem"
                                        >
                                            ログアウト
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
