import "./index.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <section className="main">
      <Header />
      <Carousel />;
      {/* {projects.map((item) => (
        <>
          <Carousel project={item} />;
        </>
      ))} */}
      ;
    </section>
  );
}

export default App;
