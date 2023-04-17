import "./App.css";
import { CurrencyTable, Footer, Gap } from "./Components";

function App() {
  return (
    <div className="container-table">
      <CurrencyTable />
      <Gap height={30} />
      <Footer />
    </div>
  );
}

export default App;
