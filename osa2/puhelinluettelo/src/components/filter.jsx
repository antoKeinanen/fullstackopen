function Filter({ setSearch }) {
  return (
    <div>
      search: <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default Filter;
