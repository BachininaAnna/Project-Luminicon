import {Form} from "./components/form.js";
import {Main} from "./components/main.js";
import {Incomes} from "./components/incomes.js";
import {Expenses} from "./components/expenses.js";
import {Both} from "./components/both.js";
import {NavLinks} from "./utilis/nav-links.js";


export class Router {
    constructor() {
        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                template: 'templates/main.html',
                load: () => {
                    new Main();
                }
            },
            {
                route: '#/signup',
                title: 'Регистрация',
                template: 'templates/signup.html',
                modal:'',
                load: () => {
                    new Form('signup');
                }
            },
            {
                route: '#/login',
                title: 'Вход в систему',
                template: 'templates/login.html',
                modal:'',
                load: () => {
                    new Form('login');
                }
            },
            {
                route: '#/income',
                title: 'Доходы',
                template: 'templates/income.html',
                modal: 'Вы действительно хотите удалить категорию? Связанные доходы будут удалены навсегда.',
                load: () => {
                    new Incomes();
                }
            },
            {
                route: '#/expenses',
                title: 'Расходы',
                template: 'templates/expenses.html',
                modal: 'Вы действительно хотите удалить категорию?',
                load: () => {
                    new Expenses();
                }
            },
            {
                route: '#/both',
                title: 'Доходы и Расходы',
                template: 'templates/both.html',
                modal: 'Вы действительно хотите удалить операцию?',
                load: () => {
                    new Both();
                }
            },
            {
                route: '#/create-income',
                title: 'Доходы',
                template: 'templates/create-income.html',
                load: () => {
                    new Incomes();
                }
            },
            {
                route: '#/edit-income',
                title: 'Доходы',
                template: 'templates/edit-income.html',
                load: () => {
                    new Incomes();
                }
            },
            {
                route: '#/create-expenses',
                title: 'Расходы',
                template: 'templates/create-expenses.html',
                load: () => {
                    new Expenses();
                }
            },
            {
                route: '#/edit-expenses',
                title: 'Расходы',
                template: 'templates/edit-expenses.html',
                load: () => {
                    new Expenses();
                }
            },
            {
                route: '#/create-both',
                title: 'Доходы и Расходы',
                template: 'templates/create-both.html',
                load: () => {
                    new Both();
                }
            },
            {
                route: '#/edit-both',
                title: 'Доходы и Расходы',
                template: 'templates/edit-both.html',
                load: () => {
                    new Both();
                }
            }
        ]
    }

    async openRoute() {
        const newRoute = this.routes.find(item => {
            return item.route === window.location.hash;
        })
        if (!newRoute) {
            window.location.href = '#/login';
            return;
        }

        document.getElementById('content').innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        document.getElementById('title').innerText = newRoute.title;
        if (newRoute.modal) {
            document.getElementById('modal-text').innerText = newRoute.modal;
        }

        const navbar = document.getElementById('navbar');
        if (newRoute.route === '#/signup' || newRoute.route === '#/login') {
            navbar.classList.add('d-none');
        } else {
            navbar.classList.remove('d-none');
        }

        NavLinks.isActive(newRoute.title);
        newRoute.load();
    }
}