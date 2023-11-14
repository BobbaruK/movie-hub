import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={[styles.siteFooter].join(" ")}>
      <div className="container">
        <div className="row">
          <div className={["col-12", styles.siteFooter__Inner].join(" ")}>
            <small>
              <a href="https://www.themoviedb.org/" target="_blank">
                TMDB
              </a>{" "}
              api based
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
