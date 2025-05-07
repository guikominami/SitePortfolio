import { useState, useEffect } from "react";

import "./index.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  const [dataProjects, setDataProjects] = useState();

  useEffect(() => {
    fetch("/portfolioguikominami/data/data.json")
      .then((response) => response.json())
      .then((data) => setDataProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className='main'>
      {!dataProjects && <div>Loading...</div>}
      {dataProjects && <Carousel projectsJsonData={dataProjects} />}
      <Footer />
    </section>
  );
}

export default App;
