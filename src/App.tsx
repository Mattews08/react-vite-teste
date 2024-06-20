import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
