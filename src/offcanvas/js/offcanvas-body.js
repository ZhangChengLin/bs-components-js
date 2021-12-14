/**
 * @param {Node|string} contentElement
 */
const offcanvasBody = (contentElement) => {
  let offcanvas_body = document.createElement('div')

  offcanvas_body.className = 'offcanvas-body'

  offcanvas_body.append(contentElement)

  return offcanvas_body
}

export default offcanvasBody
