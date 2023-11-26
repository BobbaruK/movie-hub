import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const navigate = useNavigate();

  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <div className={[styles.searchBarWrapper].join(" ")}>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search?query=${searchInput.current?.value}`);
              }}>
              <input
                ref={searchInput}
                type="text"
                className="form-control"
                placeholder="Search movie..."
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
