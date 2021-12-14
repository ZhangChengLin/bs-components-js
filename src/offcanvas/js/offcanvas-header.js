/**
 * @param {Node|string} titleElement
 */
const offcanvasHeader = (titleElement) => {
  let header = document.createElement('div')
  let title = document.createElement('h5')
  let btn = document.createElement('button')

  header.className = 'offcanvas-header'

  title.className = 'offcanvas-title'
  title.id = 'offcanvasLabel'
  title.append(titleElement)

  btn.className = 'btn-close text-reset'
  btn.type = 'button'
  btn.dataset['bsDismiss'] = 'offcanvas'
  btn.ariaLabel = 'Close'

  header.append(title, btn)
  return header
}

export default offcanvasHeader
