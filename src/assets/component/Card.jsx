import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 8 }}
      className="relative flex-shrink-0 w-60 h-80 bg-zinc-900/50 rounded-[45px] text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer  absolute bottom-0  w-full  left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-6 bg-zinc-200  rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size=".9em" color="#000" />
            ) : (
              <IoMdDownload size=".9em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } === flex text-center justify-center`}
          >
            <h3 className="text-md font-semibold text-zinc-800">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
export default Card;
