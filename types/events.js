
class EventTypes {
  #StateIsChanged = 'update-state'
  get StateIsChanged () {
    return this.#StateIsChanged
  }
}

export default new EventTypes()
