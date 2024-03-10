"use client";

import "./Card.css";
import React from "react";
import { useState } from "react";

export const Card = ({ card, rarity }) => {
  const [effect, setEffect] = useState("");
  const [pos, setPos] = useState(0, 0);
  const [tf, setTf] = useState("");
  const [tp, setTp] = useState(0);
  const [lp, setLp] = useState(0);
  const [pxSpark, setPxSpark] = useState(0);
  const [pySpark, setPySpark] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e) => {
    
    e?.target?.classList.add("activeCard");
    let pos = [e?.nativeEvent?.offsetX, e?.nativeEvent?.offsetY];

    console.log(e);

    if (e.type === "touchmove") {
      pos = [e?.touches[0]?.clientX, e?.touches[0]?.clientY];
    }

    setPos(pos);

    let l = pos[0];
    let t = pos[1];
    let h = e?.target?.clientHeight;
    let w = e?.target?.clientWidth;
    let px = Math.abs(Math.floor((100 / w * l) - 100));
    let py = Math.abs(Math.floor((100 / h * t) - 100));
    let pa = (50 - px) + (50 - py);
    let lp = (50 + (px - 50) / 1.5);
    let tp = (50 + (py - 50) / 1.5);
    let px_spark = (50 + (px - 50) / 7);
    let py_spark = (50 + (py - 50) / 7);
    let p_opc = 20 + (Math.abs(pa) * 1.5);
    let ty = ((tp - 50) / 2) * -1;
    let tx = ((lp - 50) / 1.5) * 0.5;
    let grad_pos = `background-position: ${lp}% ${tp}%;`;
    let sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    let opc = p_opc / 100;
    let tf = `rotateX(${ty}deg) rotateY(${tx}deg)`;

    /* eslint-enable */
    setLp(lp);
    setTp(tp);
    setPxSpark(px_spark);
    setPySpark(py_spark);
    setOpacity(opc);
    setTf(tf);
  };

  const handleLeave = (e) => {
    
    setTimeout(() => {
      e?.target?.classList.remove("activeCard");
      setTf("rotateX(0deg) rotateY(0deg)");
     
    }, 2500);
    
  };

  return (
    <li>
      <div
        onMouseMove={(e) => handleMove(e)}
        onMouseLeave={(e) => handleLeave(e)}
        style={{
          transform: tf,
          transitionTimingFunction: "ease-in-out",
          backgroundImage: `url(${card.images.large})`,
          "--opc": `${opacity}`,
          "--lp": `${lp}%`,
          "--tp": `${tp}%`,
          "--pxSpark": `${pxSpark}%`,
          "--pySpark": `${pySpark}%`,
        }}
        className={`card ${card.name} activeCard ${rarity
          .split(" ")
          .join("_")}`}
      />
    </li>
  );
};
