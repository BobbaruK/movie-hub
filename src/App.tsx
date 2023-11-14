import "./App.scss";
import Filtering from "./components/Filtering";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";

// TODO: Sorting

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
