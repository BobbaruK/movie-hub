import { useContext } from "react";
import FilterContext from "../Filter/filterContext";

const useFilterContext = () => useContext(FilterContext);

export default useFilterContext;
