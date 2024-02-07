import { motion, AnimatePresence } from "framer-motion";
import ReactDom from "react-dom";

interface ModalMotionProps {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
}
const ModalMotion = ({ children, onClick, isOpen }: ModalMotionProps) => {
  return ReactDom.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="sidebarModalOverlay"
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            exit={{ y: 100 }}
            className="bg-white p-4 rounded-lg shadow"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal")!
  );
};

export default ModalMotion;
