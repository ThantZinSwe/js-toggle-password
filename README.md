# JS Toggle Password

This repo enhances the password input fields on your web page by adding a toggle button to switch between masked and plain text passwords.

## Features

- Easily toggle password visibility with a single click.
- Customize the appearance and behavior of the toggle button.
- Support for using custom SVG icons for the toggle button.

## Demo 

![Screenshot from 2023-08-08 21-13-36](https://github.com/ThantZinSwe/js-toggle-password/assets/93695363/8f2350cf-ea79-449f-8d28-7011340db08d)

## Usage

### HTML

First, input type password have a parent `div` element.

```html
<html>
    <head></head>
    <body>
        <form>
            <label>Password</label>
            <div>
                <input type="password" name="password" style="width: 100%" />
            </div>
        </form>

        <script type="module">
          import TogglePassword from "./src/index.js";
    
          const togglePassword = new TogglePassword();
          togglePassword.create();
        </script>
    </body>
</html>
```

## Configuration

You can modify toggle password svg styles, postion and svg icons using below property.


|  Property  | Name            | Type                                     |
|------------| --------------- | ---------------------------------------- |
|   styles   | `width`         | Number - css in pixels                   |
|            | `height`        | Number - css in pixels                   |
|            | `color`         | String - hex color code                  |
|            |                 |                                          |
|  position  | `right`         | Number - css in pixels                   |
|            | `top`           | Number - css in percentage               |
|            |                 |                                          |
|    icons   | `visibleSvg`    | String - svg code                        |
|            | `inVisibleSvg`  | String - svg code                        |


```js
const togglePassword = new TogglePassword({
    styles: {
        width: 24, // default
        height: 24, // default
        color: '#000000', // default
    },
    position: {
        right: 8, // default
        top: 50, // default
    },
    icons: {
        visibleSvg: 'svgcode',
        inVisibleSvg: 'svgcode'
    }
});

togglePassword.create();
```


