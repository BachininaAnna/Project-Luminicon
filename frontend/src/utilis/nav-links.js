export class NavLinks {
    static isActive(routeTitle){
        const main = document.getElementById('navbar-main');
        const both = document.getElementById('navbar-both');
        const incomes = document.getElementById('navbar-incomes');
        const expenses = document.getElementById('navbar-expenses');

        if (routeTitle === 'Главная') {
            main.classList.add('active');
        } else {
            main.classList.remove('active');
        }
        if (routeTitle === 'Доходы и Расходы') {
            both.classList.add('active');
        } else {
            both.classList.remove('active');
        }
        if (routeTitle === 'Доходы') {
            incomes.classList.add('active');
        } else {
            incomes.classList.remove('active');
        }
        if (routeTitle === 'Расходы') {
            expenses.classList.add('active');
        } else {
            expenses.classList.remove('active');
        }
    }
}