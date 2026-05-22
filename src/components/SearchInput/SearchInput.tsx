import "./SearchInput.scss";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Поиск продуктов...",
}: SearchInputProps) => {
  return (
    <label className="search-input">
      <span className="search-input__label">Поиск</span>
      <input
        className="search-input__field"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};
