import React, { useEffect, useState } from "react";

function useLocalStorage() {
    const [data, setData] = useState();

    const onHandleStorageChange = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
        setData(value);
    };

    const getData = (key: string): any => {
        let data = localStorage.getItem(key);
        if (data) {
            data = JSON.parse(data);
        }
        return data;
    };

    return { data, getData, onHandleStorageChange };
}

export default useLocalStorage;
