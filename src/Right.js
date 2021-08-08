import React from "react";

const Right = (props) => {
  return (
    <div>
      <div
        className="container mx-height p-7 bg-green-900 
       rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl
       transition duration-300 grid grid-cols-2 text-white h-44 ml-3"
      >
        <div>
          <label htmlFor="" className="text-xs text-gray-200">
            Tip Amount
          </label>
          <br />
          <p className="text-xs text-green-100">/ person</p>
        </div>
        <p className="text-green-400 text-lg ml-8">
          ${props.tipAmount.toFixed(2)}
        </p>
        <div>
          <label htmlFor="" className="text-xs text-gray-200">
            Total Amount
          </label>
          <br />
          <p className="text-xs text-green-100">/ person</p>
        </div>
        <p className="text-green-400 text-lg ml-8">
          ${props.totalBill.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Right;
