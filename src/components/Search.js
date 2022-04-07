function Search(props) {
  return (
    <div className="mb-5">
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Pesquise"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Search;
