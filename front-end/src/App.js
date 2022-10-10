import { GlobalState } from "./globalState/GlobalContext";
import Router from "./routes/Router";

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
