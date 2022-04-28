function Search(props) {
  return (
    <div className="mb-4 mt-5 col-3">
      <label className="me-2"></label>
      <input
        type="text"
        className="input search-bar w-75"
        name="search"
        placeholder="Nome da pessoa..."
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Search;
