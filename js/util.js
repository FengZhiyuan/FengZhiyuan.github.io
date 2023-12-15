const log = console.log.bind(console)

const EventListenerType = {
  click: 'click',
  input: 'input',
}

const e = (selector) => {
  return document.querySelector(selector)
}
