import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
};

export default App;
