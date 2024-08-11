import React, { useEffect } from 'react';
import '../styles/ColoredMouse.scss';

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    let timeout;

    const handleMouseMove = (e) => {
      let x = e.pageX;
      let y = e.pageY;
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";
      clearTimeout(timeout);
      timeout = setTimeout(() => cursor.style.display = "none", 1000);
    };

    const handleMouseOut = () => cursor.style.display = "none";

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div className="cursor"></div>;
}

export default CustomCursor;