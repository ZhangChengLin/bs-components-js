/**
 * @param {Node | string} BodyContentElement
 */
const offcanvasBody = (BodyContentElement) => {
  let offcanvas_body = document.createElement('div')

  offcanvas_body.className = 'offcanvas-body'

  offcanvas_body.append(BodyContentElement)

  return offcanvas_body
}

export default offcanvasBody
