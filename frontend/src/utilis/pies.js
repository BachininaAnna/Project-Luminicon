//import Chart from 'chart.js/auto';

export class Pies {
    constructor() {
        this.CHART_COLORS = ['#DC3545', '#FD7E14', '#FFC107', '#0D6EFD', '#20C997'];
        this.incomesPer = [20, 30, 15, 15, 20];
        this.incomesCategory = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
        this.expensesPer = [30, 30, 15, 15, 10];
        this.expensesCategory = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

        this.incomesElem = document.getElementById('pie-incomes');
        this.expensesElem = document.getElementById('pie-expenses');

        this.config(this.incomesElem, this.incomesPer, this.incomesCategory, 'Доходы');
        this.config(this.expensesElem, this.expensesPer, this.expensesCategory, 'Расходы');
    }

    data(arrPercentages, arrCategory) {
        return {
            labels: arrCategory,
            datasets: [
                {
                    label: '%',
                    data: arrPercentages,
                    backgroundColor: Object.values(this.CHART_COLORS),
                }
            ]
        };
    }

    config(elem, arrPercentages, arrCategory, title) {
        new Chart(elem, {
            type: 'pie',
            data: this.data(arrPercentages, arrCategory),
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: title,
                        color: '#052C65',
                        font: {
                            size: '28px',
                            weight: '500',
                            family: 'Roboto'
                        },
                    },
                },
            },
        });
    }
}



