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

First input password have a parent div element.

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
          import togglePassword from "./src/index.js";
    
          togglePassword().create();
        </script>
    </body>
</html>
```

## Function Summary

Function are `create()`, `styles()`, `position()` and `custom()`. In that function using chaining method, `create` function must be need to call
but other function not need to call every time.

### create()

Create and apply toggle password.

```js

togglePassword().create();

```

You have nothing to modify only that funtion can use.

### styles()

This function is to modify toggle password svg. That have **3** parameters and you can use when you need time.

|           |                                          |
| --------- | ---------------------------------------- |
| `width`   | Number - css pixels                      |
| `height`  | Number - css pixels                      |
| `color`   | String - hex color code                  |


```js

togglePassword().styles({width:50,height:50,color:'#000000'}).create();

```


### postion()

This function is to modify toggle password position. Sometimes you don't use to css framework (eg.tailwindcss) and not include reset code in css 
body 
at that time you can modify toggle password svg. That have **2** parameters.

|           |                                          |
| --------- | ---------------------------------------- |
| `right`   | Number - css pixels                      |
| `top`     | Number - percentage                      |

```js

togglePassword().position({right:8,top:50}).create();

```

### custom()

This function is to change custom toggle password svg. That have **2** parameters and they must be svg code.

|                |                                          |
| -------------  | ---------------------------------------- |
| `visibleSvg`   | String - svg code                        |
| `inVisibleSvg` | String - svg code                        |

```js

togglePassword().custom({visibleSvg:'svgcode',inVisibleSvg:'svgcode'}).create();

```

