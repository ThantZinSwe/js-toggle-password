import { createStyles, createSvgElement } from "./style.js";
import { styles, position, defaults, custom } from "./property.js";

function togglePassword() {
  const toggleSvg = {
    /**
     * Define toggle password svg styles function for modify svg style.
     *
     * @param {number} width - Width must be pixels (px)
     * @param {number} height - Height must be pixels (px)
     * @param {string} color - Color must be hex color code
     *
     * @returns {toggleSvg} - Returns the toggleSvg object for method chaining.
     */
    styles: ({ width, height, color } = {}) => {
      styles.width = width;
      styles.height = height;
      styles.color = color;

      return toggleSvg;
    },

    /**
     * Define toggle password svg position function for modify svg position.
     *
     * @param {number} right - Right must be pixels (px)
     * @param {string} top - Top must be percentage
     *
     * @returns {toggleSvg} - Returns the toggleSvg object for method chaining.
     */
    position: ({ right, top } = {}) => {
      position.right = right;
      position.top = top;

      return toggleSvg;
    },

    /**
     * Define toggle password custom svg for visible and invisible.
     *
     * @param {string} visibleSvg - Custom SVG for the visible state and must be svg
     * @param {string} inVisibleSvg - Custom SVG for the invisible state and must be svg
     *
     * @returns {toggleSvg} - Returns the toggleSvg object for method chaining.
     */
    custom: ({ visibleSvg, inVisibleSvg } = {}) => {
      custom.visibleSvg = visibleSvg;
      custom.inVisibleSvg = inVisibleSvg;

      return toggleSvg;
    },

    /**
     * Create and apply toggle when click svg at input type password field.
     */
    create: () => {
      const passwordFields = document.querySelectorAll("input[type=password]");

      passwordFields.forEach((passwordField) => {
        const parentElement = passwordField.parentElement;
        parentElement.classList.add("js-toggle-password-blk");

        createStyles(styles, position);

        const toggleSvg = document.createElement("span");
        toggleSvg.classList.add("js-toggle-password-position");

        let visibleSvg = custom.visibleSvg
          ? createSvgElement(custom.visibleSvg)
          : createSvgElement(defaults.visibleSvg);

        let inVisibleSvg = custom.inVisibleSvg
          ? createSvgElement(custom.inVisibleSvg)
          : createSvgElement(defaults.inVisibleSvg);

        const updatePasswordToggle = () => {
          const svg = toggleSvg.querySelector("svg");
          if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleSvg.replaceChild(visibleSvg.cloneNode(true), svg);
          } else {
            passwordField.type = "password";
            toggleSvg.replaceChild(inVisibleSvg.cloneNode(true), svg);
          }
        };

        toggleSvg.appendChild(inVisibleSvg.cloneNode(true));
        parentElement.appendChild(toggleSvg);

        toggleSvg.addEventListener("click", updatePasswordToggle);
      });
    },
  };

  return toggleSvg;
}

export default togglePassword;
