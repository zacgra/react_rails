import React from "react";
import * as ReactDOM from "react-dom/client";

const Homepage = () => {
  return <p>This paragraph is being rendered by React Live!</p>;
};

const root = ReactDOM.createRoot(document.querySelector("#react-root"));
root.render(<Homepage />);
