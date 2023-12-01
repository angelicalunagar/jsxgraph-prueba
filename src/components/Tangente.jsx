import React, { useEffect } from 'react';
import { JSXGraph } from 'jsxgraph';
import "../styles/jsxgraph.css";
import "../styles/Tangente.css";

const Tangente = (props) => {
  useEffect(() => {
    const board = JSXGraph.initBoard('tangente-container', {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      showCopyright: false,
      pan: {
        needShiftToPan: true,
        enabled: true,
      }
    });
    /* props.brd = board; */
  // Crear parámetro a
    const s = board.create('slider',[[0,4],[3,4],[-2,4,5]]);
    const fc = props.func.replace("a", "s.Value()");
    const f = (x) => {return eval (fc);}
    // Crear la curva
    const curve = board.create('functiongraph', [f]);

    // Crear el glider
    const glider = board.create('glider', [0.6, 1.2, curve]);

    // Crear la tangente
    board.create('tangent', [glider]);
  }, [props.func]);

  return <div id="tangente-container" className='jxgbox color-marco'  />;
};

export default Tangente;
