import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../ThemeProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useConfig from "../hooks/useConfig";
import "../App.scss";

const AppLayout = () => {
  const { error } = useConfig();

  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className={["toast", "text-bg-danger", error ? "show" : ""].join(" ")}
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
  );
};

export default AppLayout;
