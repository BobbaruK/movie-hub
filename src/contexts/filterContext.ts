import React, { Dispatch } from "react";
import { FilterAction, Filters } from "../reducers/filterReducer";

interface FilterContextType {
  filters: Filters;
  filterBy: Dispatch<FilterAction>;
}

const FiltersContext = React.createContext<FilterContextType>(
  {} as FilterContextType
);

export default FiltersContext;
