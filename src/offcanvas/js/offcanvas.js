import offcanvasHeader from "./offcanvas-header";
import offcanvasBody from "./offcanvas-body";


/**
 * @param {Node|string} headerElement
 * @param {Node|string} bodyElement
 */
const offcanvas = (headerElement, bodyElement) => {
  let _offcanvas = document.createElement('div')
  let header = offcanvasHeader(headerElement)
  let body = offcanvasBody(bodyElement)

  _offcanvas.className = 'offcanvas offcanvas-start'
  _offcanvas.tabIndex = -1
  _offcanvas.setAttribute('aria-labelledby', 'xxxxxxxxx')

  _offcanvas.append(header, body)

  return _offcanvas
}

export default offcanvas
