/**
 * Create and apply dynamic styles for the password toggle functionality.
 *
 * @param {object} styles - style properties (width, height, color).
 * @param {object} position - position properties (right, top).
 */
function createStyles(styles, position) {
  const style = document.createElement("style");
  style.textContent = `
    .js-toggle-password-blk {
      position: relative;
    }
    .js-toggle-password-svg {
      width: ${styles.width}px;
      height: ${styles.height}px;
      color: ${styles.color};
    }
    .js-toggle-password-position {
      position: absolute;
      right: ${position.right}px;
      top: ${position.top}%;
      transform: translateY(-50%);
      cursor: pointer;
  }`;

  document.head.appendChild(style);
}

/**
 * Create svg element from string paramemter svg and add necessary svg class
 *
 * @param {string} svg
 * @returns {svgElement} - Created svg element
 */
function createSvgElement(svg) {
  const parser = new DOMParser();
  const svgElement = parser
    .parseFromString(svg, "image/svg+xml")
    .querySelector("svg");
  svgElement.removeAttribute("class");
  svgElement.classList.add("js-toggle-password-svg");

  return svgElement;
}

export { createStyles, createSvgElement };
