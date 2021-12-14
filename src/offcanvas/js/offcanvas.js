import offcanvasHeader from "./offcanvas-header";
import offcanvasBody from "./offcanvas-body";
import {getTimeString} from "./util/index";


/**
 * @param {Node|string} headerElement
 * @param {Node|string} bodyElement
 * @param {string} placement
 */
const offcanvas = (headerElement, bodyElement, placement = 'start') => {
  let _offcanvas = document.createElement('div')
  let header = offcanvasHeader(headerElement)
  let body = offcanvasBody(bodyElement)
  let timeString = getTimeString()

  switch (placement) {
    case 'start':
    case 'top':
    case 'end':
    case 'bottom':
      break;
    default:
      throw `placement 参数错误`
  }

  _offcanvas.className = `offcanvas offcanvas-${placement}`
  _offcanvas.id = timeString
  _offcanvas.tabIndex = -1
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasLabel')

  _offcanvas.append(header, body)

  return _offcanvas
}

export default offcanvas
