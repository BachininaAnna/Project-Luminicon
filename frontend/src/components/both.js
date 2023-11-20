import {ButtonsDelete} from "../utilis/buttons-delete.js";
import {ButtonsEdit} from "../utilis/buttons-edit.js";
import {ButtonCancel} from "../utilis/button-cancel.js";

export class Both {
    constructor() {
        ButtonsDelete.popupShow();
        ButtonsEdit.redirection('#/edit-both');
        ButtonCancel.redirection('#/both');
        this.createIncome();
        this.createExpense();
    }

    createIncome(){
       const buttonCreateIncome = document.getElementById('create-income');
       if (buttonCreateIncome){
           buttonCreateIncome.addEventListener('click', function () {
               window.location.href = '#/create-both';
           })
       }
    }
    createExpense(){
       const buttonCreateExpense = document.getElementById('create-expenses');
       if (buttonCreateExpense){
           buttonCreateExpense.addEventListener('click', function () {
               window.location.href = '#/create-both';
           })
       }
    }
}