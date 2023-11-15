import { useReducer } from "react";
import "./App.scss";
import Filtering from "./components/Filtering";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import filterReducer from "./reducers/filterReducer";
import FilterContext from "./contexts/filterContext";

// TODO: Sorting

function App() {
  const [filters, filterBy] = useReducer(filterReducer, {
    genres: [],
    language: "",
  });

  return (
    <>
      <FilterContext.Provider value={{ filters, filterBy }}>
        <Header />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
                <Filtering />
              </div>
              <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-10">
                <MovieGrid />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </FilterContext.Provider>
    </>
  );
}

export default App;
