import React, { useState, useEffect } from "react";

const words = [
  "Innovative", "Creative", "Passionate", "Dedicated",
  "Skilled", "Experienced", "Reliable", "Efficient",
  "Collaborative", "Problem-Solver", "Adaptable",
  "Resourceful", "Detail-Oriented", "Proactive",
  "Communicative", "Team Player", "Self-Motivated",
  "Analytical", "Organized", "Results-Driven"
];

function FlipWords() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        (prevIndex + 1) % words.length
      );
    }, 2100);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="flipwords">
      {words[currentWordIndex]}
    </div>
  );
}

export default FlipWords;
