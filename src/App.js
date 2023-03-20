import "./App.css";
import { CurrencyBox, Footer, Gap } from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CurrencyBox />
        <Gap height={30} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
