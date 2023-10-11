

export class Controller {
  constructor(model , view) {
    this.model = model
    this.view = view

    this.view.initRequestBtnClick(this.onRequestButtonClicked)  
  }

  onRequestButtonClicked = (inp) => {
    
    this.view.changeBtnName(inp)
    
    }
}