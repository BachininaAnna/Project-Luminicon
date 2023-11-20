import {ButtonsDelete} from "../utilis/buttons-delete.js";
import {ButtonsEdit} from "../utilis/buttons-edit.js";
import {ButtonCancel} from "../utilis/button-cancel.js";

export class Expenses {
    constructor() {
        ButtonsDelete.popupShow();
        ButtonsEdit.redirection('#/edit-expenses');
        ButtonCancel.redirection('#/expenses');
    }


}