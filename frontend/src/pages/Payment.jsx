import { useState } from "react";

function Payment() {
  const [method, setMethod] = useState("card");

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Complete Payment
        </h2>

        {/* Payment Options */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMethod("card")}
            className={`flex-1 p-3 rounded-lg ${
              method === "card" ? "bg-yellow-500 text-black" : "bg-gray-700"
            }`}
          >
            Card
          </button>

          <button
            onClick={() => setMethod("upi")}
            className={`flex-1 p-3 rounded-lg ${
              method === "upi" ? "bg-yellow-500 text-black" : "bg-gray-700"
            }`}
          >
            UPI
          </button>
        </div>

        {/* Card Payment */}
        {method === "card" && (
          <form className="flex flex-col gap-4">
            <input
              className="p-3 bg-gray-800 rounded-lg outline-none"
              placeholder="Card Number"
            />

            <div className="flex gap-3">
              <input
                className="p-3 bg-gray-800 rounded-lg w-1/2 outline-none"
                placeholder="Expiry"
              />
              <input
                className="p-3 bg-gray-800 rounded-lg w-1/2 outline-none"
                placeholder="CVV"
              />
            </div>

            <button className="bg-yellow-500 text-black py-3 rounded-lg mt-3">
              Pay Now
            </button>
          </form>
        )}

        {/* UPI Payment */}
        {method === "upi" && (
          <form className="flex flex-col gap-4">
            <input
              className="p-3 bg-gray-800 rounded-lg outline-none"
              placeholder="Enter UPI ID"
            />

            <button className="bg-yellow-500 text-black py-3 rounded-lg mt-3">
              Pay Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Payment;
