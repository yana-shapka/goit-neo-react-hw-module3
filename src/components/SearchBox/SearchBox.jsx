import css from './SearchBox.module.css';

const SearchBox = ({filter, setFilter}) => {
  return (
    <div className={css.searchContainer}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className="formInput"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Search contacts..."
      ></input>
    </div>
  );
};

export default SearchBox;
