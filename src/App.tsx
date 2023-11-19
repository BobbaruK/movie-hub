import "./App.scss";
import { Config } from "./Config";
import Filtering from "./components/Filtering";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import { Sorting } from "./components/Sorting";

// TODO: test env var for api key on netlify

// TODO: option for pagination or infinite querying
function App() {
  return (
    <>
      <Config>
        <Header />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2 sidebar">
                <Sorting />
                <Filtering />
              </div>
              <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-10">
                <MovieGrid />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Config>
    </>
  );
}

export default App;
