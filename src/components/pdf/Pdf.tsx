'use client';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Pdf = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });
  return (
    <div>
      <button onClick={() => reactToPrintFn()}>Print</button>
      <div ref={contentRef}>Content to print</div>
    </div>
  );
};

export default Pdf;
