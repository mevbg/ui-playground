export type OptionsListItemProps = {
  value: string | number;
  text: string;
  isSeparator?: boolean;
  selected?: boolean;
  disabled?: boolean;
  options?: OptionsListItemProps[];
};
