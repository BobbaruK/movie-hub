import React, { Dispatch } from "react";
import { FilterAction, Filters } from "./filterReducer";

interface FilterContextType {
  filters: Filters;
  filterBy: Dispatch<FilterAction>;
}

const FilterContext = React.createContext<FilterContextType>(
  {} as FilterContextType
);

export default FilterContext;
