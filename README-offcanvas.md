
# bsOffcanvasJs

## Demo

[https://ZhangChengLin.github.io/bs-components-js/demo-offcanvas.html]()

---

## Table of Contents

| Contents                                        |
|:------------------------------------------------|
| [How to install](#how-to-install)               |
| [How to use](#how-to-use)                       |
| [Parameter Description](#parameter-description) |



## How to install

```
npm i bs-components-js --save
```

---

## How to use

```
<a href="javascript:;" onclick="bsOffcanvasJs(parameter)">text</a>

<script src="./dist/umd/bsOffcanvasJs.js"></script>
```

OR

```
<a href="javascript:;" id="xx">text</a>

<script src="./dist/umd/bsOffcanvasJs.js"></script>
<script>
    const xx = document.querySelector("#xx");
    xx.addEventListener("click", function () {
        bootstrapModalJs(parameter);
    })
</script>
```

OR MORE


---

## Parameter Description

```
bsOffcanvasJs(title, body, footer, ModalSizes, VerticallyCentered, LongContentType, Options, EventType, CallbackFunction)
```
