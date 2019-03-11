function bootstrapModal(title, body, footer, titleColor, ModalSizes, VerticallyCentered, LongContentType, EventType, CallbackFunction, Options) {

    title = title ? title : "";
    body = body ? body : "";
    footer = footer ? footer : "";
    titleColor = titleColor && typeof titleColor === "string" ? titleColor : "";
    ModalSizes = ModalSizes && typeof ModalSizes === "string" ? ModalSizes : "";
    VerticallyCentered = VerticallyCentered ? VerticallyCentered : false;
    LongContentType = LongContentType ? LongContentType : false;
    EventType = EventType ? EventType : "";
    CallbackFunction = CallbackFunction ? CallbackFunction : "";
    Options = Options ? Options : "";//加入判断数组

    const TimeID = new Date().getTime();
    const modal_ID = "Modal_" + TimeID;
    const modal_title_ID = "modalTitle_" + TimeID;
    const modal = document.createElement("div");
    const modal_dialog = document.createElement("div");
    const modal_content = document.createElement("div");
    const modal_header = document.createElement("div");
    const modal_title = document.createElement("h5");
    const modal_close_btn = document.createElement("button");
    const modal_close_span = document.createElement("span");
    const modal_body = document.createElement("div");
    const modal_footer = document.createElement("div");


    modal.id = modal_ID;
    modal.className = "modal";
    modal.tabIndex = "-1";
    modal.role = "dialog";
    modal.setAttribute("aria-hidden", "true");

    modal_dialog.className = "modal-dialog";
    switch (ModalSizes) {
        case "sm":
            modal_dialog.className += " modal-sm";
            break;
        case "lg":
            modal_dialog.className += " modal-lg";
            break;
        case "xl":
            modal_dialog.className += " modal-xl";
            break;
        default:
            modal_dialog.className += " " + ModalSizes;
    }

    switch (VerticallyCentered) {
        case true:
            modal_dialog.className += " modal-dialog-centered";
            break;
        default:
            modal_dialog.className += " " + VerticallyCentered;
    }

    switch (LongContentType) {
        case true:
            modal_dialog.className += " modal-dialog-scrollable";
            break;
        default:
            modal_dialog.className += " " + VerticallyCentered;
    }
    modal_dialog.role = "document";

    modal_content.className = "modal-content";

    modal_header.className = "modal-header";

    modal_title.id = modal_title_ID;
    modal_title.className = titleColor ? "modal-title " + titleColor : "modal-title";
    modal_title.innerHTML = title;

    modal_close_btn.type = "button";
    modal_close_btn.className = "close";
    modal_close_btn.setAttribute("data-dismiss", "modal");//检查后期事件规则
    modal_close_btn.setAttribute("aria-label", "Close");

    modal_close_span.setAttribute("aria-hidden", "true");
    modal_close_span.innerHTML = "&times;";

    modal_body.className = "modal-body";
    modal_body.innerHTML = body;

    modal_footer.className = "modal-footer";
    modal_footer.innerHTML = footer;


    modal_close_btn.appendChild(modal_close_span);
    modal_header.appendChild(modal_title);
    modal_header.appendChild(modal_close_btn);
    modal_content.appendChild(modal_header);
    modal_content.appendChild(modal_body);
    modal_content.appendChild(modal_footer);
    modal_dialog.appendChild(modal_content);
    modal.appendChild(modal_dialog);

    removeBootstrapModal();
}

function removeBootstrapModal(modal_id) {
    const modal = document.querySelector("#" + modal_id);
    $("#" + modal).on("hidden.bs.modal", function () {
        this.parentElement.removeChild(this);
        console.log("123");
    });
}
