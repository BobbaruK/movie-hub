import { ReactNode, useReducer } from "react";
import filterReducer from "./reducers/filterReducer";
import FiltersContext from "./contexts/filterContext";
import { SortBy } from "./components/Sorting/Sorting";

interface Props {
  children: ReactNode;
}

const FilterContext = ({ children }: Props) => {
  const [filters, filterBy] = useReducer(filterReducer, {
    genres: [],
    language: "",
    page: 1,
    sorting: SortBy.popularityDesc,
  });

  return (
    <>
      <FiltersContext.Provider value={{ filters, filterBy }}>
        {children}
      </FiltersContext.Provider>
    </>
  );
};

export default FilterContext;
