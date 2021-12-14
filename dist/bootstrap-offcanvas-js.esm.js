/*!
    * Name: bootstrap-modal-js
    * Version: 2.0.2
    * Author: ZhangChengLin
    * Email: 469946668@qq.com
    * Description: Bootstrap Modal
    * Copyright (c) 2020 - 2021 ZhangChengLin
    * Licenses: MIT
    * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
    * GitHub: https://github.com/ZhangChengLin/bootstrap-modal-js
    * issues: https://github.com/ZhangChengLin/bootstrap-modal-js/issues
*/
/**
 * @param {Node | string} HeaderTitleElement
 */
const offcanvasHeader = (HeaderTitleElement) => {
  let header = document.createElement('div');
  let title = document.createElement('h5');
  let btn = document.createElement('button');

  header.className = 'offcanvas-header';

  title.className = 'offcanvas-title';
  title.id = 'offcanvasLabel';
  title.append(HeaderTitleElement);

  btn.className = 'btn-close text-reset';
  btn.type = 'button';
  btn.dataset['bsDismiss'] = 'offcanvas';
  btn.ariaLabel = 'Close';

  header.append(title, btn);
  return header
};

/**
 * @param {Node | string} BodyContentElement
 */
const offcanvasBody = (BodyContentElement) => {
  let offcanvas_body = document.createElement('div');

  offcanvas_body.className = 'offcanvas-body';

  offcanvas_body.append(BodyContentElement);

  return offcanvas_body
};

const getTimeString = () => {
  return new Date().getTime().toString()
};

/**
 * @param {Node|string} headerElement
 * @param {Node|string} bodyElement
 * @param {string} placement
 */
const offcanvas = (headerElement, bodyElement, placement = 'start') => {
  let _offcanvas = document.createElement('div');
  let header = offcanvasHeader(headerElement);
  let body = offcanvasBody(bodyElement);
  let timeString = getTimeString();

  switch (placement) {
    case 'start':
    case 'top':
    case 'end':
    case 'bottom':
      break;
    default:
      throw `placement 参数错误`
  }

  _offcanvas.className = `offcanvas offcanvas-${placement}`;
  _offcanvas.id = timeString;
  _offcanvas.tabIndex = -1;
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasLabel');

  _offcanvas.append(header, body);

  return _offcanvas
};

const bootstrapOffcanvasJs = (headerNodeElement, bodyNodeElement, Placement, Options, EventType, CallbackFunction) => {
  let timeString = getTimeString();

  document.body.append(offcanvas(headerNodeElement, bodyNodeElement, Placement));
  return timeString
};

export { bootstrapOffcanvasJs };
//# sourceMappingURL=bootstrap-offcanvas-js.esm.js.map
