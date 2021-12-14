import offcanvas from "./offcanvas";
import {getTimeString, offcanvasEvents} from "./util/index";


/**
 * @param {string} headerNodeElement
 * @param {string} bodyNodeElement
 * @param {string} Placement
 * @param Options
 * @param {string} EventType
 * @param {Function} EventFunction
 */
const bootstrapOffcanvasJs = (headerNodeElement, bodyNodeElement, Placement, Options, EventType, EventFunction) => {
  let timeString = getTimeString()

  let _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement)
  document.body.append(_offcanvas)

  let x = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas)
  x.show()

  EventType && EventFunction ? offcanvasEvents(timeString, EventType, EventFunction) : ''

  return timeString
};

export default bootstrapOffcanvasJs;
