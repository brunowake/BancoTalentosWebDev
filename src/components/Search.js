import { Search } from "@carbon/icons-react";
function SearchInput(props) {
  return (
    <div className="mb-4 mt-5 w-25">
      <label className="m-2">
        <Search />
      </label>
      <input
        type="text"
        className="input search-bar w-75"
        name="search"
        placeholder="Nome..."
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default SearchInput;
