
# Monkey JS
  [![Monkey JS](https://img.shields.io/badge/monkey-js-blue.svg?style=flat-square)](https://www.npmjs.com/package/monkey-js)
  [![javascript](https://img.shields.io/badge/javascript-ES6-blue.svg?style=flat-square)](https://www.npmjs.com/package/monkey-js)
  [![npm](https://img.shields.io/npm/v/monkey-js.svg?style=flat-square)](https://www.npmjs.com/package/monkey-js)
  [![npm](https://img.shields.io/npm/dm/monkey-js.svg?style=flat-square)](https://www.npmjs.com/package/monkey-js)
## What is a monkey js ?
  

  ### monkey js is a javascript library that allows you to create a reactive custom component 


# How to use monkey js ?

- import the monkey js library in your project
```js
import  monkey  from 'monkey-js';
```
- create a new component
```js
class Custom extends Monkey.Component {}
```
- use State in your component
```js
class Custom extends Monkey.Component {
  state = {
    value: '',
  }
  render() {
    const div = document.createElement('div');
    div.innerHTML = this.state.value;
    div.addEventListener('click', () => {
      this.setState({
        value: 'clicked',
      });
    });
    return div;
  }
}
```
- register your component outside the library
```js
customElements.define('custom', Custom);
```

# API 
list of all api 
  - ## ComponentDidMount
    this  methodes is called when component will be added to dom 
    - ### usage 
      ```js
      componentDidMount(){
        console.log('componentDidMount')
      }
      ```

  - ## ComponentWillUnmount
    this  methodes is called when component will be removed from dom 
    - ### usage 
      ```js
      componentWillUnmount(){
        console.log('componentWillUnmount')
      }
      ```

  - ## componentDidUpdate
    this  methodes is called when component will be updated
    - ### usage 
      ```js
      componentDidUpdate(){
        console.log('componentDidUpdate')
      }
      ```

  - ## setState
    this  methodes is used to update the state of the component
    - ### usage 
      ```js
      this.setState({
        text : 'new text',
      })
      ```

  - ## render
    this  methodes is used to render the component ui 
    each time when state is updated the render methode is automaticaly called also to rebuild the component ui with the new value 
    - ### usage
      ```js
      render(){
        return document.createElement('div');
      }
      ```
    
  - ## envent Emiter 
    this  methodes is used to emit an event
    - ### usage 
      ```js
      this.emitEvent('eventName', {
        data: 'data',
      })
      ```

  - ## state 
    this property is used to store the component state
    to updated the state use the setState methodes 
    ! warning : the state is not immutable , dont try to change the state directly , use the setState methodes
    - ### usage 
      ```js
      state = {
        text : 'text',
      }
      ```
    
# upcoming features

  - ## props 
    this property is used to store the component props
  
  - ## componentWillReceiveProps
    this methodes is called when component will receive new props
    

# License

  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Developer
  [![GitHub](https://img.shields.io/github/followers/toutpuissantged?style=social)](https://github.com/toutpuissantged)
