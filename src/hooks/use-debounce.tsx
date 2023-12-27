import { useEffect, useState } from "react";

export function useDebounce<T>(
  initialValue: T,
  delayInMs: number
): [T, (value: T) => void] {
  const [tempValue, setTempValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(tempValue);
    }, delayInMs);

    return () => clearTimeout(handler);
  }, [tempValue, delayInMs]);

  return [debouncedValue, setTempValue];
}
