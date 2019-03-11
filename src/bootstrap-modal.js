function bootstrapModal(title, body, footer, titleColor, ModalSizes, VerticallyCentered, longContentType, EventType, CallbackFunction, Options) {

    title = title ? title : "";
    body = body ? body : "";
    footer = footer ? footer : "";

    const TimeID = new Date().getTime();
    const modal_ID = "modal_" + TimeID;
    const modal_title_ID = "modal_title" + TimeID;
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
    modal_dialog.role = "document";

    modal_content.className = "modal-content";

    modal_header.className = "modal-header";

    modal_title.id = modal_title_ID;
    modal_title.className = "modal-title";
    modal_title.innerHTML = title;

    modal_close_btn.type = "button";
    modal_close_btn.className = "close";
    modal_close_btn.setAttribute("data-dismiss", "modal");//检查后期事件规则
    modal_close_btn.setAttribute("aria-label", "Close");

    modal_close_span.setAttribute("aria-hidden", "true");

    modal_body.className = "modal-body";
    modal_body.innerHTML = body;

    modal_footer.className = "modal-footer";
    modal_footer.innerHTML = footer;

}