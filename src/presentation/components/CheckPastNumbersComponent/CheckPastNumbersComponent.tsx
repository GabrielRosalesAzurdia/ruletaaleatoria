import React from "react";

interface CheckPastNumbersComponentInterface {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
	handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
	numberToVerify: string;
}

const CheckPastNumbersComponent: React.FC<
  CheckPastNumbersComponentInterface
> = ({handleSubmit,handleChange,numberToVerify}) => {
  return (
    <section className="flex justify-center pt-10">
      <div className="w-full max-w-xs object-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Number to verify
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="numberToVerify"
              name="numberToVerify"
              type="text"
              onChange={handleChange}
              value={numberToVerify}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckPastNumbersComponent;
