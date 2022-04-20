function Search(props) {
  return (
    <div className="mb-4 mt-5">
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Pesquise pela pessoa..."
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Search;
