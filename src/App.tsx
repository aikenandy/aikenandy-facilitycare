import "./App.css";
import { NavBar } from "./layout";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AllRoutes />
      </main>
    </>
  );
}

export default App;
