import React from "react";

function Search() {
  return (
    <div className="my-2 p-2 flex items-center justify-center">
      {/* <div className="overflow-hidden">
        <form
          role="form"
          className="relative flex bg-gray-200 rounded-full"
        >
          <input
            type="text"
            placeholder="enter your search here"
            className="bg-gray-200 text-lg rounded-full flex-1 px-6 text-gray-700 focus:outline-none"
          />
          <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-3 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
            Search
          </button>
        </form>
      </div> */}
      <div>
        <form
            role="form"
            className="relative flex bg-gray-700 rounded-lg h-10 w-72"
        >
            <input
                type="text"
                placeholder="Enter npub Address to search"
                className="bg-gray-600 text-sm rounded-lg px-6 w-72 text-white-200 focus:outline-none"
             />
        </form>
      </div>
    </div>
  );
}

export default Search;
