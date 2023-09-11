export type SelectOption = {
  label: string;
  value: unknown;
};

export type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};
