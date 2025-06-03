'use client';
import { useState } from "react";

export default function FeatureOne() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>
      {show && <p>This is a conditional message!</p>}
    </div>
  );
}
