import { SearchBar } from "../components/pages/Home/Search";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Homepage</h1>
          </div>
        </div>
      </div>
      <SearchBar />
    </section>
  );
};

export default Home;
