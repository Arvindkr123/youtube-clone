import React from "react";
import { AppContext } from "./context/contextApi";

const App = () => {
  return (
    <AppContext>
      <div className="text-4xl text-red-800">App</div>
    </AppContext>
  );
};

export default App;
