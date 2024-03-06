"use client";

import { Atropos, RotateChildrenOnly } from "atropos/react";
import "./Card.css";
import "atropos/css";
import React from "react";
import { useEffect, useState, useRef } from "react";

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
    e?.target?.classList.remove("animated");
    let pos = [e?.nativeEvent?.offsetX, e?.nativeEvent?.offsetY];

    if (e.type === "touchmove") {
      pos = [e?.touches[0]?.clientX, e?.touches[0]?.clientY];
    }

    setPos(pos);

    let l = pos[1];
    let t = pos[0];
    let h = e?.screenX;
    let w = e?.screenY;
    let px = Math.abs(Math.floor((100 / w) * l - 100));
    let py = Math.abs(Math.floor((100 / h) * t - 100));
    let pa = 50 - px + (50 - py);
    let lp = 0 + (py - 50) / 1.5;
    let tp = 35 + (px - 50) / 1.25;
    let px_spark = 50 + (py - 50) / 7;
    let py_spark = 50 + (px - 50) / 7;
    let p_opc = 20 + Math.abs(pa) * 1.5;
    let ty = ((tp - 50) / 1.5) * 2;
    let tx = ((lp - 50) / 1) * 1;
    let grad_pos = `background-position: ${tp}% ${lp}%;`;
    let sprk_pos = `background-position: ${py_spark}% ${px_spark}%;`;
    let opc = `opacity: ${p_opc / 200};`;
    let tf = `translate3d(0px, 0px, 0px) rotateX(${ty}deg) rotateY(${tx}deg)`;

    setLp(lp);
    setTp(tp);
    setPxSpark(px_spark);
    setPySpark(py_spark);
    setOpacity(opc);
    setTf(tf);
  };

  const handleLeave = (e) => {
    setTimeout(() => {
      setTf("translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)");
      e?.target?.classList.add("animated");
    }, 2500);
  };

  return (
    <li>
      <div
        onMouseMove={(e) => handleMove(e)}
        onMouseLeave={(e) => handleLeave(e)}
        style={{
          transform: tf,
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
