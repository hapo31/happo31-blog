import { useMemo, useState } from "react";

export function useInput(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue ?? "");

  const [input] = useState(
    <input
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );

  return {
    input: () => input,
    value,
    setValue,
  };
}

export function useText(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue ?? "");

  return {
    input: () => (
      <textarea
        defaultValue={defaultValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    ),
    value,
    setValue,
  };
}
