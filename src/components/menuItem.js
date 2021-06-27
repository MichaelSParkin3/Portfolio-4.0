import * as React from "react";
import { motion } from "framer-motion";

import EmailInline from "../images/svg/email.inline.svg"
import GithubInline from "../images/svg/github.inline.svg"
import LinkedinInline from "../images/svg/linkedin.inline.svg"
import CloseInline from "../images/svg/close.inline.svg"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const svgs = [{
  src: <CloseInline fill={'#0f1010'}/>},
{
  src: <LinkedinInline fill={'#0f1010'}/>},
  {
  src: <GithubInline fill={'#0f1010'}/>},
  {
  src: <EmailInline fill={'#0f1010'}/>},
]

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {svgs[i].src}
    </motion.li>
  );
};
