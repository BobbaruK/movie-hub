import "./App.scss";
import { ThemeProvider } from "./features/ThemeProvider";
import Filtering from "./components/Filtering";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import { Sorting } from "./components/Sorting";
import useConfig from "./hooks/api/useConfig";

// TODO: test env var for api key on netlify
// TODO: make toast a component
function App() {
  const { error } = useConfig();
  return (
    <>
      <ThemeProvider>
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

        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="liveToast"
            className={["toast", "text-bg-danger", error ? "show" : ""].join(
              " "
            )}
            role="alert"
            aria-live="assertive"
            aria-atomic="true">
            <div className="toast-header">
              {/* <img src="..." className="rounded me-2" alt="..." /> */}
              <strong className="me-auto">Error TMDB Config API</strong>
              {/* <small>11 mins ago</small> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={(e) => {
                  const closeBtn = e.target as HTMLButtonElement;
                  closeBtn.closest(".toast")?.classList.remove("show");
                }}></button>
            </div>
            <div className="toast-body">{error?.message}</div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
