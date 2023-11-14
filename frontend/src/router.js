import {Form} from "./components/form.js";
import {Popup} from "./utilis/popup.js";

export class Router {
    constructor() {
        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                template: 'templates/main.html',
                styles: 'styles/index.css',
                load: () => {

                }
            },
            {
                route: '#/form',
                title: 'Регистрация',
                template: 'templates/login.html',
                styles: 'styles/index.css',
                modal: '',
                load: () => {
                    new Form();
                }
            },
            {
                route: '#/income',
                title: 'Доходы',
                template: 'templates/income.html',
                styles: 'styles/index.css',
                modal: 'Вы действительно хотите удалить категорию? Связанные доходы будут удалены навсегда.',
                load: () => {
                    Popup.show();
                }
            },
            {
                route: '#/expenses',
                title: 'Расходы',
                template: 'templates/expenses.html',
                styles: 'styles/index.css',
                modal: 'Вы действительно хотите удалить категорию?',
                load: () => {
                    Popup.show();
                }
            },
            {
                route: '#/both',
                title: 'Доходы',
                template: 'templates/both.html',
                styles: 'styles/index.css',
                modal: 'Вы действительно хотите удалить операцию?',
                load: () => {
                    Popup.show();
                }
            }
        ]
    }

    async openRoute(){
        const newRoute = this.routes.find(item => {
            return item.route === window.location.hash;
        })
        if (!newRoute) {
            window.location.href = '#/form';
            return;
        }

        document.getElementById('content').innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        document.getElementById('title').innerText = newRoute.title;
        document.getElementById('modal-text').innerText = newRoute.modal;
        newRoute.load();
    }
}