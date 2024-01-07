import { motion } from "framer-motion";
const ToggleButtton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 3">
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
      </svg>
    </button>
  );
};

export default ToggleButtton;
