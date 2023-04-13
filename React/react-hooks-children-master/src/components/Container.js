import React from "react";

function Container({
  header,
  children,
  textPosition = "left", // possible values: left, right, center
  direction = "vertical", // possible values: vertical, horizontal
  contentPosition = "right", // possible values: left, right, center
}) {
  console.log(children)
  console.log(contentPosition)
  
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
