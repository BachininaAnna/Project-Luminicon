import {Popup} from "../utilis/popup.js";
import {ButtonsEdit} from "../utilis/buttons-edit.js";

export class Incomes {
    constructor() {
        this.buttonsEdit = document.querySelectorAll('button.edit');
        Popup.show();
        ButtonsEdit.redirection(this.buttonsEdit,'#/edit-income');
    }
}



