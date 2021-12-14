import offcanvas from "./offcanvas";
import {getTimeString} from "./util/index";


/**
 * @param {string} headerNodeElement
 * @param {string} bodyNodeElement
 * @param {string} Placement
 * @param {*} Options
 */
const bootstrapOffcanvasJs = (headerNodeElement, bodyNodeElement, Placement, Options, EventType, CallbackFunction) => {
  let timeString = getTimeString()

  document.body.append(offcanvas(headerNodeElement, bodyNodeElement, Placement, Options))
  return timeString
};

export default bootstrapOffcanvasJs;
