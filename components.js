import EventTypes from './types/events.js'
// custom html element using javascript to create a new element like react component

/**
 * Component is Monkey Framework custom Component class
 * @class Component
 * @extends {HTMLElement}
 * @param {Object} props - props object
 * @param {Object} state - state object
 * @param {Object} context - context object
 */
class Component extends HTMLElement {
  state = {}
  constructor () {
    super()
    this.state = {
      text: 'hello'
    }
  }

  connectedCallback () {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    this.#constructElement()
    this.#__INIT__()
    this.componentDidMount()
  }

  disconnectedCallback () {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
    this.componentWillUnmount()
  }

  static get observedAttributes () {
    return [this.state]
  }

  attributeChangedCallback (name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  adoptedCallback () {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }

  /**
     * Initialize the component
     */
  #__INIT__ () {
    const className = this.constructor.name
    const toKebabCase = this.#kebabize(className)
    // customElements.define(toKebabCase, new this.constructor())
    console.log(`${toKebabCase} is defined`)
  }

  /**
     * Change string to kebab case
     * @param {string} string - string to be kebabized
     * @returns {string} - kebabized string
     */
  #kebabize (string) {
    // uppercase after a non-uppercase or uppercase before non-uppercase
    const upper = /(?<!\p{Uppercase_Letter})\p{Uppercase_Letter}|\p{Uppercase_Letter}(?!\p{Uppercase_Letter})/gu
    return string.replace(upper, '-$&').replace(/^-/, '').toLowerCase()
  }

  /**
     * Mount the component
     */
  #constructElement = () => {
    const domElement = this.render()
    this.innerHTML = ''
    if (domElement) {
      this.appendChild(domElement)
    }
    // console.log(this.constructor.name, ' is rendered')
  }

  /**
     * updated the component state
     * @param {Object} state - state to be updated
     */
  setState = (state) => {
    this.state = { ...this.state, ...state }
    this.#constructElement()
    const event = new CustomEvent(EventTypes.StateIsChanged, { detail: this.state })
    this.dispatchEvent(event)
  }

  /**
   * Emit an event
   * @param {string} eventType - event type
   * @param {Array} detail - event detail
   */
  emitEvent = (eventType, detail) => {
    const event = new CustomEvent(eventType, { detail })
    this.dispatchEvent(event)
  }

  /**
     * Execute if the component is mounted
     * @returns {void}
     */
  componentDidMount () {
    // console.log(this.constructor.name, ' componentDidMount')
  }

  /**
     *  Execute if the component is updated
     */
  componentDIdUpdate () {
    // console.log(this.constructor.name, ' componentDidUpdate')
  }

  /**
     * Execute if the component is unmounted
     */
  componentWillUnmount () {
    // console.log(this.constructor.name, ' componentWillUnmount')
  }

  /**
     * Render the component
     * @returns {HTMLElement} - dom element
     */
  render () {
    const div = document.createElement('')
    return div
  }
}

export default Component
