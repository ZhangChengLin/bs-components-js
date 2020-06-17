## bootstrap-modal-js

Bootstrap 5 components <a href="https://v5.getbootstrap.com/docs/5.0/components/modal/" title="Modal" target="_blank">"Modal"</a>

Currently relying on Bootstrap v5, because it is a function package of Bootstrap modal.

Supports arbitrary calls of 9 parameters, supports callback functions based on modal events.

---

If it helps you, please **star** this repository

---

## Demo

<a href="https://zhangchenglin.github.io/bootstrap-modal-js/demo.html" target="_blank" title="bootstrap-modal-js DEMO">https://zhangchenglin.github.io/bootstrap-modal-js/demo.html</a>

---

<p align="center">
<a href="https://github.com/zhangchenglin/bootstrap-modal-js" target="_blank"><img alt="GitHub Stars" title="GitHub Stars" src="https://img.shields.io/github/stars/zhangchenglin/bootstrap-modal-js.svg?style=social"></a>
<a href="https://github.com/zhangchenglin/bootstrap-modal-js/issues" target="_blank"><img alt="GitHub Issues" title="GitHub Issues" src="https://img.shields.io/github/issues/zhangchenglin/bootstrap-modal-js.svg"></a>
<a href="https://github.com/zhangchenglin/bootstrap-modal-js/releases" target="_blank"><img alt="GitHub Release" title="GitHub Release" src="https://img.shields.io/github/release/zhangchenglin/bootstrap-modal-js.svg"></a>
<a href="https://github.com/zhangchenglin/bootstrap-modal-js/blob/master/LICENSE" target="_blank"><img alt="GitHub License" title="GitHub License" src="https://img.shields.io/github/license/zhangchenglin/bootstrap-modal-js.svg"></a>
</p>

<p align="center">
<a href="https://nodei.co/npm/bootstrap-modal-js" target="_blank" title="NPM package info"><img src="https://nodei.co/npm/bootstrap-modal-js.png?downloads=true&downloadRank=true&stars=true&compact=false&mini=false" alt="NPM package info" title="NPM package info"></a>
<a href="https://nodei.co/npm/bootstrap-modal-js/" title="NPM package down info"><img src="https://nodei.co/npm-dl/bootstrap-modal-js.png?months=12&height=2" alt="NPM package down info" title="NPM package down info"></a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/bootstrap-modal-js" target="_blank"><img alt="NPM Version" title="NPM Package" src="https://img.shields.io/npm/v/bootstrap-modal-js.svg"></a>
<img alt="npm download number" src="https://img.shields.io/npm/dt/bootstrap-modal-js.svg">
<img alt="npm download number" src="https://img.shields.io/npm/dy/bootstrap-modal-js.svg">
<img alt="npm download number" src="https://img.shields.io/npm/dm/bootstrap-modal-js.svg">
<img alt="npm download number" src="https://img.shields.io/npm/dw/bootstrap-modal-js.svg">
<img alt="npm License" src="https://img.shields.io/npm/l/bootstrap-modal-js.svg">
</p>

<p align="center">
<a href="https://npm.taobao.org/package/bootstrap-modal-js" target="_blank" title="taonpm version"><img src="https://npm.taobao.org/badge/v/bootstrap-modal-js.svg" alt="taonpm version" title="taonpm version"></a>
<img src="https://npm.taobao.org/badge/d/bootstrap-modal-js.svg" alt="taonpm download number">
</p>

<p align="center">
<a href="https://cnpmjs.org/package/bootstrap-modal-js" target="_blank" title="cnpm version"><img src="https://cnpmjs.org/badge/v/bootstrap-modal-js.svg" alt="cnpm version" title="cnpm version"></a>
<img src="https://cnpmjs.org/badge/d/bootstrap-modal-js.svg" alt="cnpm download number">
</p>

<p align="center">
<a href="https://www.jsdelivr.com/package/npm/bootstrap-modal-js" target="_blank" title="jsDelivr"><img src="https://img.shields.io/badge/jsDelivr-jsDelivr-orange.svg" alt="jsDelivr" title="jsDelivr"></a>
<img src="https://img.shields.io/jsdelivr/npm/hd/bootstrap-modal-js.svg" alt="jsDelivr hits (npm) day" title="jsDelivr hits (npm) day">
<img src="https://img.shields.io/jsdelivr/npm/hw/bootstrap-modal-js.svg" alt="jsDelivr hits (npm) week" title="jsDelivr hits (npm) week">
<img src="https://img.shields.io/jsdelivr/npm/hm/bootstrap-modal-js.svg" alt="jsDelivr hits (npm) month" title="jsDelivr hits (npm) month">
<img src="https://img.shields.io/jsdelivr/npm/hy/bootstrap-modal-js.svg" alt="jsDelivr hits (npm) year" title="jsDelivr hits (npm) year">
</p>

<p align="center">
<img src="https://badgen.net/badgesize/normal/https/unpkg.com/bootstrap-modal-js/dist/bootstrap-modal-js.min.js" alt="UNPKG minified size" title="UNPKG minified size">
</p>

---

## Table of Contents

|                                                 |
| :---------------------------------------------- |
| [How to use it](#how-to-use-it)                 |
| [How to install](#how-to-install)               |
| [CDN](#cdn)                                     |
| [Parameter Description](#parameter-description) |
| [Donate](#donate)                               |
| [License](#license)                             |


## How to use it

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
    }
</script>
```
OR MORE


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
<script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js/dist/bootstrap-modal-js.min.js"></script>
```

OR

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js/dist/bootstrap-modal-js.js"></script>
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

## Parameter Description

```
bootstrapModalJs(title, body, footer, ModalSizes, VerticallyCentered, LongContentType, EventType, CallbackFunction, Options)
```

**Return Values**

|   type   | such as       | Description          |
|  :----:  | :------------:| :-------------------:|
|  String  | 1552756356601 | modal element number |

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

Default value:

Description: <a href="https://getbootstrap.com/docs/4.3/components/modal/#options" target="_blank">Bootstrap Modal options</a>

| parameter | default value (boolean) | other                 |
| :-------: | :---------------------: | :-------------------: |
| backdrop  | true                    | false &#124; "static" |
| keyboard  | true                    | false                 |
| focus     | true                    | false                 |
| show      | true                    | false                 |

---

## Donate

| Method (priority) | type                                                            |
| :---------------- | :-------------------------------------------------------------: |
| alipay （支付宝） | [QR code](https://zhangchenglin.github.io/image/pay-alipay.jpg) |
| QQ                | [QR code](https://zhangchenglin.github.io/image/pay-qq.png)     |
| WeChat （微信）   |                                                                 |
| PayPal （贝宝）   | [PayPal.Me](https://www.paypal.me/zhangchenglin)                |

---

## License

**MIT**

under the MIT License (license terms are at https://opensource.org/licenses/MIT).

