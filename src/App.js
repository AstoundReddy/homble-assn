import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRouter from "./AppRouter";
import { ToastProvider } from "./context/ToastProvider";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <AppRouter />
      </ToastProvider>
    </div>
  );
}

export default App;
