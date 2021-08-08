import React from "react";
import "./App.css";
import Left from "./Left";

function App() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center mb-20">
          <h1 className="mt-20 pb-0 ml-0 text-4xl text-green-900 tracking-widest font-mono">
            SPLITTER
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="container mx-height p-9 bg-white max-w-lg
       rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl
       transition duration-300 grid grid-cols-2 mr-8"
          >
            {/* Div for left side data */}
            <Left />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
// overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
