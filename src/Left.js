import React from "react";
import { useState } from "react";
import Right from "./Right";

const Left = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [calcTip, setCalcTip] = useState(0);
  const [individualTip, setIndividualTip] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleBill = (event) => {
    setBill(event.target.value);
  };
  const handlePeople = (event) => {
    setPeople(event.target.value);
  };
  const calculateAmount = (event) => {
    setCalcTip(event.target.value);
  };

  const handleCustom = (event) => {
    setCalcTip(event.target.value);
  };

  const finalAmount = () => {
    const individualBill = bill / people;
    const tipValue = (individualBill * calcTip) / 100;
    const finalAmountPerPerson = individualBill + tipValue;
    setIndividualTip(tipValue);
    setTotalAmount(finalAmountPerPerson);
  };

  function refreshPage() {
    window.location.reload();
  }

  return (
    <React.Fragment>
      <div>
        <p className=" text-gray-700">Bill</p>
        <span class="z-10 h-full absolute w-8 pl-2 py-3">
          <i class="fas fa-dollar-sign text-gray-400"></i>
        </span>
        <input
          type="text"
          placeholder="0.0"
          onChange={handleBill}
          className="border-2 border-black rounded-md mt-2 text-right w-48"
        ></input>
        <p className="text-xs mb-2 mt-5 text-gray-700">Select Tip %</p>
        {/* Div for Tip Buttons */}
        <div>
          {/* Div for 3 buttons */}
          <div>
            <button
              value="5"
              onClick={calculateAmount}
              className="bg-green-900 mr-2 rounded-md w-14 text-white transition duration-200 transform hover:scale-105"
            >
              5%
            </button>
            <button
              value="10"
              onClick={calculateAmount}
              className="bg-green-900 mr-2 rounded-md w-14 text-white transition duration-200 transform hover:scale-105"
            >
              10%
            </button>
            <button
              value="15"
              onClick={calculateAmount}
              className="bg-green-600 rounded-md w-14 text-white transition duration-200 transform hover:scale-105"
            >
              15%
            </button>
          </div>
          {/* Div for next 3 buttons */}
          <div className="mt-3">
            <button
              value="25"
              onClick={calculateAmount}
              className="bg-green-900 mr-2 rounded-md w-14 text-white transition duration-200 transform hover:scale-105"
            >
              25%
            </button>
            <button
              value="50"
              onClick={calculateAmount}
              className="bg-green-900 mr-2 rounded-md w-14 text-white transition duration-200 transform hover:scale-105"
            >
              50%
            </button>
            <input
              type="text"
              placeholder="Custom"
              onChange={handleCustom}
              className="bg-gray-100 rounded-md w-12 h-7 text-gray-900 text-sm border-0 border-green-900 text-center"
            />
          </div>
        </div>
        {/* Num of people */}
        <p className="text-xs text-gray-700 mt-4 mb-2">Number of People</p>
        <span class="z-10 h-full absolute w-8 pl-2 py-1">
          <i class="fas fa-user-friends text-gray-400"></i>
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="0"
          onChange={handlePeople}
          className="border-2 border-black rounded-md w-48 text-right"
        />
        <div className="flex">
          <button
            onClick={finalAmount}
            className="bg-green-900 rounded-xl py-1 text-center mt-3 w-24 transition duration-200 transform hover:scale-105 text-white"
          >
            Calculate
          </button>
          <button
            onClick={refreshPage}
            className="bg-green-900 rounded-xl py-1 text-center mt-3 ml-1 w-24 transition duration-200 transform hover:scale-105 text-white"
          >
            Reset
          </button>
        </div>
      </div>
      <Right tipAmount={individualTip} totalBill={totalAmount} />
    </React.Fragment>
  );
};

export default Left;
