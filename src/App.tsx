import { Toaster } from "react-hot-toast";
import "./App.css";
import { NavBar } from "./layout";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AllRoutes />
        <Toaster
          containerStyle={{
            top: 40,
          }}
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              color: "#713200",
            },
          }}
          position="top-center"
          reverseOrder={false}
        />
      </main>
    </>
  );
}

export default App;
