import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import { Flex, Text } from "rebass";

import _throttle from "lodash.throttle";

import "./styles.css";

const handleScroll = cb => _throttle(cb, 100);
const applyParallax = (scroll, y, amount) => {
  if (scroll > y) {
    const value = (scroll - y) * amount;
    return value;
  }

  return 0;
};

const ParallaxItem = props => {
  const { scroll, ...rest } = props;

  let speed = props.speed || -0.02;

  const [y, setY] = React.useState();
  const el = React.useRef();

  React.useEffect(() => {
    if (el) {
      window.addEventListener(
        "scroll",
        handleScroll(() => {
          setY(el.current.getBoundingClientRect().top);
        })
      );
    }
  }, []);

  return (
    <motion.div
      ref={el}
      initial={{ opacity: 1 }}
      animate={{
        opacity: scroll > y ? 1 : 0,
        y: applyParallax(scroll, y, speed)
      }}
      transition={{ duration: 0.5 }}
      {...rest}
    />
  );
};

const AnimateOnScroll = props => {
  const [scroll, setScroll] = React.useState(window.innerHeight || 0);

  React.useEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll(() => {
        setScroll(window.pageYOffset + window.innerHeight);
      })
    );
  }, []);

  const styles = {
    fontSize: 40,
    padding: 16,
    borderRadius: 16,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
  };

  return (
    <div>
      <Text as="h1" fontSize="6" p="5" my="6">
        A basic parallax component example with Framer Motion
      </Text>
      <Flex justifyContent="space-around" alignItems="center" p={5}>
        <code>speed: default === (-0.02)</code>
        <ParallaxItem style={styles} scroll={scroll}>
          Default
        </ParallaxItem>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center" p={5}>
        <code>speed: -0.05</code>
        <ParallaxItem speed={-0.05} style={styles} scroll={scroll}>
          Custom
        </ParallaxItem>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center" p={5}>
        <code>speed: -0.1</code>
        <ParallaxItem speed={-0.1} style={styles} scroll={scroll}>
          Custom
        </ParallaxItem>
      </Flex>

      <Text as="h1" fontSize="6" p="5" my="7">
        <code>speed</code> property
      </Text>

      <Flex justifyContent="space-around" alignItems="center" p={5}>
        <ParallaxItem
          speed={0.2}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: 0.2</code>
        </ParallaxItem>
        <ParallaxItem
          speed={0.1}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: 0.1</code>
        </ParallaxItem>

        <ParallaxItem
          speed={0.05}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: 0.05</code>
        </ParallaxItem>

        <ParallaxItem
          speed={0.02}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: 0.02</code>
        </ParallaxItem>

        <ParallaxItem
          speed={-0.02}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: -0.02</code>
        </ParallaxItem>

        <ParallaxItem
          speed={-0.05}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: -0.05</code>
        </ParallaxItem>

        <ParallaxItem
          speed={-0.1}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: -0.1</code>
        </ParallaxItem>

        <ParallaxItem
          speed={-0.2}
          style={{ ...styles, fontSize: 12 }}
          scroll={scroll}
        >
          <code>speed: -0.2</code>
        </ParallaxItem>
      </Flex>

      <Text as="h1" fontSize="6" p="5" my="7">
        It's really that simple!
      </Text>
    </div>
  );
};

export default AnimateOnScroll