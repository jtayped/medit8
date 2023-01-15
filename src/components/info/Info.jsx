import "./info.css";
import { InfoOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Info = () => {
  const [infoShow, setInfoShow] = useState(false);

  return (
    <div className="info">
      {infoShow ? (
        <motion.div
          className="popup"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 350, opacity: 1 }}
        >
          <p>
            Unlock the power of deep breathing with our guided meditation app
            based on the Wim Hof Method. Follow the instructions, and don't
            force yourself, start gradually and always in a safe environment.
            Avoid practicing deep breathing in bodies of water.
          </p>
        </motion.div>
      ) : (
        <div></div>
      )}
      <button className="info-btn" onClick={() => setInfoShow(!infoShow)}>
        <InfoOutlined className="info-icn" />
      </button>
    </div>
  );
};

export default Info;
