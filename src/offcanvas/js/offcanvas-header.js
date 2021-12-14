/**
 * @param {Node | string} HeaderTitleElement
 */
const offcanvasHeader = (HeaderTitleElement) => {
  let header = document.createElement('div')
  let title = document.createElement('h5')
  let btn = document.createElement('button')

  header.className = 'offcanvas-header'

  title.className = 'offcanvas-title'
  title.append(HeaderTitleElement)

  btn.className = 'btn-close text-reset'
  btn.type = 'button'
  btn.dataset['bsDismiss'] = 'offcanvas'
  btn.ariaLabel = 'Close'

  header.append(title, btn)
  return header
}

export default offcanvasHeader
