import * as React from "react";
import { render } from "react-dom";
import { motion, useTime, useTransform } from "framer-motion";

import "./index.css";

const Rotate = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div className="example-container">
      <motion.div style={{ rotate }} />
      
    </div>
  );
};

export default Rotate;