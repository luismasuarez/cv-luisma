import { FaArrowDown } from "react-icons/fa";
import { scrollToBottom } from "../utils/utils";

const DownArrow = () => {
  return (
    <div>
      {/* Flecha flotante */}
      <button
        onClick={scrollToBottom}
        className="fixed bottom-10 right-10 bg-indigo-500 text-white rounded-full p-2 shadow-lg hover:bg-indigo-600 transition duration-200"
        title="Ir al final"
      >
        <FaArrowDown />
      </button>
    </div>
  );
};

export default DownArrow;
