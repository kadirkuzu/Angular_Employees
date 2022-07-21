import {Injectable} from '@angular/core';
import {colors} from "@angular/cli/utilities/color";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() {
  }
  menuColor="default"

  changeColor(color: any) {
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")
    const buttons: HTMLCollectionOf<Element> = document.getElementsByClassName("tableButton")
    if (header && footer && buttons) {
      if (color == "default") {
        header.style.backgroundColor = "black"
        footer.style.backgroundColor = "black"
        // @ts-ignore
        for (let button of buttons) button.style.backgroundColor = "darkcyan"
        this.menuColor ="default"
        return
      }
      // @ts-ignore
      for (let button of buttons) button.style.backgroundColor = color
      header.style.backgroundColor = color
      footer.style.backgroundColor = color
      this.menuColor=color
    }
  }

}
