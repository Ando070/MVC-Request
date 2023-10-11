export class View{
  constructor() {
    this.app = this.getElement('#root')
    this.form = this.createElement('form')
    this.input = this.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Request'
    this.requestButton = this.createElement('button')
    this.requestButton.textContent = 'Request'
  
    this.userList = this.createElement('ul','user-list')

    this.form.append(this.input, this.requestButton)
    
    this.app.append(this.input , this.requestButton , this.userList)
    
    this.span.append(this.input ,  this.requestButton , this.userList)

    this._tmpText

    this._initLocalListeners()
  }



  initRequestBtnClick(onRequestButtonClickListener) {
    this.requestButton.addEventListener('click' , function onclick(){

      onRequestButtonClickListener(this.input = '')

    })
  }

  
  _initLocalListeners() {
    this.app.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this._tmpText = event.input.innerText
      }
    })
  }

  // get _todoText() {
  //   return this.input.value
  // }

  changeBtnName(name) {
    this.requestButton.textContent = name
  }
 


  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }

  createElement(tag, className) {
    const element = document.createElement(tag)

    if (className) element.classList.add(className)

    return element
  }
  
  
}
