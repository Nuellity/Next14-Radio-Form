"use client";
import Image from "next/image";
import React, { useState } from "react";

function RadioButton({ title }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      onClick={() => handleClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row justify-between items-center py-3">
        <div>
          <p className="text-style ">{title}</p>
        </div>
        <div>
          <Image
            src={
              isChecked && isHovered
                ? "/hoverchecked.png"
                : isHovered
                ? "/hover.png"
                : isChecked
                ? "/checked.png"
                : "/unchecked.png"
            }
            width={20}
            height={20}
            alt="checkbox"
          />
        </div>
      </div>
    </div>
  );
}

export default RadioButton;
