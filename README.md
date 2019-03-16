## last beta time


Bootstrap components <a href="https://getbootstrap.com/docs/4.3/components/modal/" title="Modal">"Modal"</a>

Currently relying on Bootstrap and jQuery environments, because it is a function extension of Bootstrap.

Supports arbitrary calls of 9 parameters, supports callback functions based on modal events.


<p align="center">
<img alt="GitHub Release" src="https://img.shields.io/github/release/zhangchenglin/bootstrap-modal-js.svg">
<img alt="GitHub License" src="https://img.shields.io/github/license/zhangchenglin/bootstrap-modal-js.svg">
</p>
<p align="center">
<a href="https://www.npmjs.com/package/bootstrap-modal-js" target="_blank"><img alt="NPM Version" title="NPM Package" src="https://img.shields.io/npm/v/bootstrap-modal-js.svg"></a>
<img alt="NPM License" src="https://img.shields.io/npm/l/bootstrap-modal-js.svg">
</p>
<p align="center">
<a href="https://www.jsdelivr.com/package/npm/bootstrap-modal-js" target="_blank"><img src="https://data.jsdelivr.com/v1/package/npm/bootstrap-modal-js/badge?style=rounded" alt="jsDelivr" title="jsDelivr"></a>
</p>


## Demo

<a href="https://zhangchenglin.github.io/bootstrap-modal-js/demo.html" target="_blank" title="bootstrap-modal-js DEMO">https://zhangchenglin.github.io/bootstrap-modal-js/demo.html</a>

## How to use it?

```
<script src="./dist/bootstrap-modal-js.js"></script>

<a href="javascript:" onclick="bootstrapModalJs(parameter)">text</a>
```

OR

```
<a href="javascript:" id="xx">text</a>
<script src="./dist/bootstrap-modal-js.js"></script>
<script>
    const xx = document.querySelector("#xx");
    xx.addEventListener("click", function () {
        bootstrapModalJs(parameter);
    }
</script>
```
OR MORE


## How to install?

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
<script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js/dist/bootstrap-modal-js.js"></script>
```

OR

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js/dist/bootstrap-modal-js.min.js"></script>
```

## Parameter Description

```
bootstrapModalJs(title, body, footer, ModalSizes, VerticallyCentered, LongContentType, EventType, CallbackFunction, Options)
```

- **title**

Type: String || Function || Object HTML DOM Element

Default value: undefined

Description:

---
- **body**

Type: String || Function || Object HTML DOM Element

Default value: undefined

Description:

---
- **footer**

Type: String || Function || Object HTML DOM Element

Default value: undefined

Description:

---
- **ModalSizes**

Type: String

Default value: undefined

Description:

| parameter|
| :-------:| 
| sm       |
| lg       |
| xl       |

---
- **VerticallyCentered**

Type: Boolean

Default value: false

Description:

| parameter|
| :-------:| 
| true     |
| false    |

---
- **LongContentType**

Type: Boolean

Default value: false

Description:

| parameter|
| :-------:| 
| true     |
| false    |

---
- **EventType**

Type: String

Default value: undefined

Description:

| parameter|
| :-------:| 
| show     |
| shown    |
| hide     |
| hidden   |

---
- **CallbackFunction**

Type: Function

Default value: undefined

Description:

---
- **Options**

Type: Object

Default value: undefined

Description: [modal options](https://getbootstrap.com/docs/4.3/components/modal/#options)

| parameter | default |
| :-------: | :-----: | 
| backdrop  | true    |
| keyboard  | true    |
| focus     | true    |
| show      | true    |

---

## License

**MIT**

under the MIT License (license terms are at https://opensource.org/licenses/MIT).

