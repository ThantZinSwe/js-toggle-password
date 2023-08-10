import { createStyles, createSvgElement } from "./style.js";
import { styles, position, defaults, icons } from "./property.js";
class TogglePassword {
  constructor(options = {}) {
    this.styles = options.styles || styles;
    this.position = options.position || position;
    this.icons = options.icons || icons;
  }

  create() {
    const passwordFields = document.querySelectorAll("input[type=password]");

    passwordFields.forEach((passwordField) => {
      const parentElement = passwordField.parentElement;
      parentElement.classList.add("js-toggle-password-blk");

      createStyles(this.styles, this.position);

      const toggleSvg = document.createElement("span");
      toggleSvg.classList.add("js-toggle-password-position");

      let visibleSvg = this.icons.visible
        ? createSvgElement(this.icons.visible)
        : createSvgElement(defaults.visible);

      let inVisibleSvg = this.icons.inVisible
        ? createSvgElement(this.icons.inVisible)
        : createSvgElement(defaults.inVisible);

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
  }
}

export default TogglePassword;
