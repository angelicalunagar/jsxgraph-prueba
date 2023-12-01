import { JSXGraph } from 'jsxgraph';
import React, { useEffect } from 'react';

const Pruebas = () => {
  useEffect(() => {
    const board = JSXGraph.initBoard('pruebas-container', {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      showCopyright: false,
      pan: {
        needShiftToPan: true,
        enabled: true,
      }
    });

    // Create an arc out of three free points
  const p1 = board.create('point', [2.0, 2.0]);
  const p2 = board.create('point', [1.0, 0.5]);
  const p3 = board.create('point', [3.5, 1.0]);

  board.create('arc', [p1, p2, p3]);
  }, []);

  return <div id="pruebas-container" className='jxgbox color-marco'  />;
};

export default Pruebas;