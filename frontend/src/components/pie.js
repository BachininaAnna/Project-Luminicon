//const DATA_COUNT = 5;
//const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
const CHART_COLORS = ['#DC3545', '#FD7E14', '#FFC107', '#0D6EFD', '#20C997'];
const incomesPer = [20, 30, 15, 15, 20];
const incomesCategory = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
const expensesPer = [30, 30, 15, 15, 10];
const expensesCategory = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];



function data(arrPercentages, arrCategory) {
    return  {
        labels: arrCategory,
        datasets: [
            {
                label: '%',
                data: arrPercentages,
                backgroundColor: Object.values(CHART_COLORS),
            }
        ]
    };
}


const pieIncomes = document.getElementById('pie-incomes');
new Chart(pieIncomes, {
    type: 'pie',
    data: data(incomesPer, incomesCategory),
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Доходы',
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

const pieExpenses = document.getElementById('pie-expenses');
new Chart(pieExpenses, {
    type: 'pie',
    data: data(expensesPer, expensesCategory),
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Расходы',
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

