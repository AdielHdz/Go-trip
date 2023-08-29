import { useState } from "react";

const Menu = () => {
  const [windowIsOpen, setWindow] = useState("hidden");

  const closeWindow = () => {
    if (windowIsOpen === "") {
      setWindow("hidden");
    } else {
      setWindow("");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        onClick={toggleOpen}
        className=" h-6 w-6 flex flex-col justify-evenly"
      >
        <div className="h-0 w-full border-b-2 border-b-solid border-b-purple_logo"></div>
        <div className="h-0 w-full border-b-2 border-b-solid border-b-purple_logo"></div>
        <div className="h-0 w-full border-b-2 border-b-solid border-b-purple_logo"></div>
      </button>
      <ul></ul>;
    </div>
  );
};

export default Menu;
