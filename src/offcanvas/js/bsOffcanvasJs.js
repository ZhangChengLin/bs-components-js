import offcanvas from "./offcanvas";
import {getTimeString, offcanvasEvents} from "./util/index";


/**
 * @param {string|null} headerNodeElement
 * @param {string|null} bodyNodeElement
 * @param {string} Placement
 * @param {object|null} Options
 * @param {string|null} EventsType
 * @param {Function|null} EventsFunction
 */
const bsOffcanvasJs = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  let timeString = getTimeString()

  let _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement)
  document.body.append(_offcanvas)

  let x = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas)
  x.show()

  EventType && EventFunction ? offcanvasEvents(timeString, EventType, EventFunction) : ''

  return timeString
};

export default bsOffcanvasJs;
