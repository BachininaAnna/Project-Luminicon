import {Form} from "./components/form.js";

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
                template: 'templates/signup.html',
                styles: 'styles/index.css',
                load: () => {
                    new Form();
                }
            },
            {
                route: '#/income',
                title: 'Доходы',
                template: 'templates/income.html',
                styles: 'styles/index.css',
                load: () => {

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
        newRoute.load();
    }
}