import { ReactNode } from "react";
import useConfigResponse from "./useConfigResponse";
import ConfigContext from "./configContext";
import { Configuration } from "./configReducer";

interface Props {
  children: ReactNode;
}

const Config = ({ children }: Props) => {
  const { data, error } = useConfigResponse();

  return (
    <ConfigContext.Provider value={data || ({} as Configuration)}>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className={["toast", "text-bg-danger", error ? "show" : ""].join(" ")}
          role="alert"
          aria-live="assertive"
          aria-atomic="true">
          <div className="toast-header">
            {/* <img src="..." className="rounded me-2" alt="..." /> */}
            <strong className="me-auto">Error</strong>
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
      {children}
    </ConfigContext.Provider>
  );
};

export default Config;
