import { createContext, useContext, useState } from "react";
import { useDatePicker } from "../hooks/useDatePicker";

export const DatePickerContext = createContext([]);

export const DatePickerProvider = ({ children }) => {
    // useDatePickerから状態と関数を取得
    const datePicker = useDatePicker();

    return (
        <DatePickerContext.Provider value={datePicker}>
            {children}
        </DatePickerContext.Provider>
    );
};
