/*!
    * Name: bs-components-js
    * Version: 0.0.1
    * Author: ZhangChengLin
    * Email: 469946668@qq.com
    * Description: Generate Bootstrap components through JavaScript
    * Copyright (c) 2020 - 2021 ZhangChengLin
    * Licenses: MIT
    * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
    * GitHub: https://github.com/ZhangChengLin/bs-components-js
    * issues: https://github.com/ZhangChengLin/bs-components-js/issues
*/
/**
 * @param {Node|string} titleElement
 */
const offcanvasHeader = (titleElement) => {
  let header = document.createElement('div');
  let title = document.createElement('h5');
  let btn = document.createElement('button');

  header.className = 'offcanvas-header';

  title.className = 'offcanvas-title';
  title.id = 'offcanvasLabel';
  titleElement instanceof HTMLElement ? title.append(titleElement) : title.innerHTML = titleElement;

  btn.className = 'btn-close text-reset';
  btn.type = 'button';
  btn.dataset['bsDismiss'] = 'offcanvas';
  btn.ariaLabel = 'Close';

  header.append(title, btn);
  return header
};

/**
 * @param {Node|string} contentElement
 */
const offcanvasBody = (contentElement) => {
  let offcanvas_body = document.createElement('div');

  offcanvas_body.className = 'offcanvas-body';

  contentElement instanceof HTMLElement ? offcanvas_body.append(contentElement) : offcanvas_body.innerHTML = contentElement;

  return offcanvas_body
};

const getTimeString = () => {
  return new Date().getTime().toString()
};


/**
 * @param {string} offcanvasId
 * @param {string} eventName
 * @param {function} eventFunction
 */
const offcanvasEvents = (offcanvasId, eventName, eventFunction) => {
  const offcanvas = document.querySelector("#Offcanvas_" + offcanvasId);
  switch (eventName) {
    case "show":
      offcanvas.addEventListener("show.bs.modal", function () {
        return eventFunction();
      });
      break;
    case "shown":
      offcanvas.addEventListener("shown.bs.modal", function () {
        return eventFunction();
      });
      break;
    case "hide":
      offcanvas.addEventListener("hide.bs.modal", function () {
        return eventFunction();
      });
      break;
    case "hidden":
      offcanvas.addEventListener("hidden.bs.modal", function () {
        return eventFunction();
      });
      break;
    default:
      throw 'eventName error'
  }
};

/**
 * @param {Node|string|null} headerElement
 * @param {Node|string|null} bodyElement
 * @param {string|null} placement
 */
const offcanvas = (headerElement = null, bodyElement = null, placement) => {
  let _offcanvas = document.createElement('div');
  let header = offcanvasHeader(headerElement);
  let body = offcanvasBody(bodyElement);
  let timeString = getTimeString();

  placement = placement ?? 'start';
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

/**
 * @param {string|null} headerNodeElement
 * @param {string|null} bodyNodeElement
 * @param {string} Placement
 * @param {object|null} Options
 * @param {string|null} EventsType
 * @param {Function|null} EventsFunction
 */
const bsOffcanvasJs = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  let timeString = getTimeString();

  let _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement);
  document.body.append(_offcanvas);

  let x = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas);
  x.show();

  EventType && EventFunction ? offcanvasEvents(timeString, EventType, EventFunction) : '';

  return timeString
};

export { bsOffcanvasJs };
//# sourceMappingURL=bsOffcanvasJs.js.map
