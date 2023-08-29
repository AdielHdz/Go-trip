"use client";
import { useSelector } from "react-redux";
import Options from "./Options";

const Select = ({ toggleOpen }) => {
  /* const cityResults= useSelector(state => state.city.copyDataCity); */
  const cityResults = [];

  return (
    <div>
      {cityResults.length ? (
        <ul className="absolute top-16 z-50 h-auto max-h-80 overflow-y-auto w-full bg-white rounded-lg shadow-img p-3">
          {cityResults.map((result) => (
            <Options
              key={result.id}
              id={result.id}
              city={result.city}
              country={result.country}
              state={result.state}
              toggleOpen={toggleOpen}
            />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Select;
