export type SelectOption = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

export type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

//the type for the select option in the multiple case
export type SelectOptionMProps = {
  value: SelectOption;
  selectOption: (value: SelectOption) => void;
};
