import "./App.css";
import GenreMovieList from "./component/GenreMovieList.jsx";
import Header from "./component/Header.jsx";
import ProductionHouse from "./component/ProductionHouse.jsx";
import Slider from "./component/Slider.jsx";

function App() {
  return (
  <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
  </div>
  );
}

export default App;