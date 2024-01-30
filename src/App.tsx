import "@/App.css";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import GameBoard from "@components/GameBoard/GameBoard";

const App = () => {
  return (
    <>
      <Header />
      <GameBoard />
      <Footer />
    </>
  );
};

export default App;
