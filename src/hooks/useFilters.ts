import { useContext } from "react";
import FiltersContext from "../contexts/filterContext";

const useFilters = () => useContext(FiltersContext);

export default useFilters;
