import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
              sidebar
            </div>
            <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-10">
              content
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
