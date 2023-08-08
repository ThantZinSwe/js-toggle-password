function applyStyles(svg, position) {
  const style = document.createElement("style");
  style.textContent = `
      .tp-blk {
        position: relative;
      }
  
      .tp-svg {
        width: ${svg.width}px;
        height: ${svg.height}px;
        color: ${svg.color};
      }
  
      .tp-position {
        position: absolute;
        right: ${position.right}px;
        top: ${position.vertical}%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    `;
  document.head.appendChild(style);
}

function createSvgElement(svg) {
  const parser = new DOMParser();
  const svgElement = parser
    .parseFromString(svg, "image/svg+xml")
    .querySelector("svg");
  svgElement.classList.add("tp-svg");

  return svgElement;
}

export { applyStyles, createSvgElement };
