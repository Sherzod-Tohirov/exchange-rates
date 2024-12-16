import { useCallback, useLayoutEffect, useState } from "react";

export default function useLocalStorage(storageKey) {
  const [key, setKey] = useState(storageKey);
  const [currentValue, setCurrentValue] = useState(null);
  const setValue = useCallback((key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setKey(key);
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);
  const getValue = useCallback((key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || "");
    } catch (error) {
      console.log("Error: ", error);
      return;
    }
  }, []);

  useLayoutEffect(() => {
    setCurrentValue(getValue(key));
  }, [getValue, key]);

  return { value: currentValue, setValue, getValue };
}
