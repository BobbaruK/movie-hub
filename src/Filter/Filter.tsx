import { ReactNode, useReducer } from "react";
import { SortBy } from "../components/Sorting/Sorting";
import FilterContext from "./filterContext";
import filterReducer from "./filterReducer";

interface Props {
  children: ReactNode;
}

const Filter = ({ children }: Props) => {
  const [filters, filterBy] = useReducer(filterReducer, {
    genres: [],
    language: "",
    page: 1,
    sorting: SortBy.popularityDesc,
  });

  return (
    <>
      <FilterContext.Provider value={{ filters, filterBy }}>
        {children}
      </FilterContext.Provider>
    </>
  );
};

export default Filter;
