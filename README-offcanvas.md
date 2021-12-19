
# bootstrapOffcanvasJs

## Demo

<a href="https://ZhangChengLin.github.io/bootstrap-modal-js/demo-offcanvas.html" target="_blank" title="bootstrap-modal-js DEMO">https://ZhangChengLin.github.io/bootstrap-modal-js/demo.html </a>

---

## Table of Contents

|                                                 |
|:------------------------------------------------|
| [How to install](#how-to-install)               |
| [CDN](#cdn)                                     |
| [How to use](#how-to-use-it)                    |
| [Parameter Description](#parameter-description) |



## How to install

```
npm i bootstrap-modal-js --save
```

OR

```
cnpm i bootstrap-modal-js --save
```


## CDN

- **jsDelivr**

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js/dist/bootstrap-offcanvas-js.min.js"></script>
```

View all versions

```
https://cdn.jsdelivr.net/npm/bootstrap-modal-js/
```


- **UNPKG**

View all versions

```
https://unpkg.com/bootstrap-modal-js/
```

After the browser parses, get the latest version address

```
https://unpkg.com/bootstrap-modal-js
```


## How to use

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js/dist/bootstrap-modal-js.min.js"></script>
<script src="./dist/bootstrap-modal-js.js"></script>

<a href="javascript:;" onclick="bootstrapModalJs(parameter)">text</a>
```

OR

```
<a href="javascript:;" id="xx">text</a>

<script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js/dist/bootstrap-modal-js.min.js"></script>
<script src="./dist/bootstrap-modal-js.js"></script>
<script>
    const xx = document.querySelector("#xx");
    xx.addEventListener("click", function () {
        bootstrapModalJs(parameter);
    })
</script>
```
OR MORE


## Parameter Description

```
bootstrapModalJs(title, body, footer, ModalSizes, VerticallyCentered, LongContentType, Options, EventType, CallbackFunction)
```

**Return Values**

|  type  |    such as    |     Description      |
|:------:|:-------------:|:--------------------:|
| String | 1552756356601 | modal element number |

---

- **title**

Type: String \| Function \| Function HTMLElement

Default value: undefined

Description: If you want to add a child element to the '.modal-header' element, use the Function HTMLElement.

说明： 如果要向 ".modal-header" 元素添加子元素，请使用 Function HTMLElement。

---
- **body**

Type: String \| Function \| Function HTMLElement

Default value: undefined

Description:

---
- **footer**

Type: String \| Function \| Function HTMLElement

Default value: undefined

Description:

---
- **ModalSizes**

Type: String

Default value: undefined

Description:

| parameter |
|:---------:|
|    sm     |
|    lg     |
|    xl     |
|   full    |
|  full-sm  |
|  full-md  |
|  full-lg  |
|  full-xl  |
| full-xxl  |

---
- **VerticallyCentered**

Type: Boolean

Default value: false

Description:

| parameter |
|:---------:|
|   true    |
|   false   |

---
- **LongContentType**

Type: Boolean

Default value: false

Description:

| parameter |
|:---------:|
|   true    |
|   false   |

---
- **Options**

Type: Object

Default value:

Description: <a href="https://getbootstrap.com/docs/4.3/components/modal/#options" target="_blank">Bootstrap Modal options</a>

| parameter | default value (boolean) |         other         |
|:---------:|:-----------------------:|:---------------------:|
| backdrop  |          true           | false &#124; "static" |
| keyboard  |          true           |         false         |
|   focus   |          true           |         false         |

---
- **Events Type**

Type: String

Default value: undefined

Description:

| parameter |
|:---------:|
|   show    |
|   shown   |
|   hide    |
|  hidden   |

---

- **Events Function**

Type: Function

Default value: undefined

Description:

