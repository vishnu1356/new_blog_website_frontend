import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const movedFromTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (movedFromTop / height) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: `${scrollPercentage}%`, height: "5px", backgroundColor: "#f97316", position: "fixed", top: 69, left: 0 }}>
    </div>
  );
};

export default ScrollProgressBar;
