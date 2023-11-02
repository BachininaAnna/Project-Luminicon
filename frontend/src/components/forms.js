class Form {
    constructor(page) {
        this.btnEnter = null;
        this.fields = [
            {
                name: 'fullName',
                id: 'fullName',
                element: null,
                regex: /^[А-Я][а-я]+s*/,
                valid: false,
            },
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                valid: false,
            }
        ];

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this);
            }
        });

        this.btnEnter = document.getElementById('btnEnter');
        this.btnEnter.onclick = function () {

        }
    }

    validateField(field, element) {
        if (!element.value || !element.value.match(field.regex)) {
            element.parentNode.style.borderColor = 'red';
            field.valid = false;
        } else {
            element.parentNode.removeAttribute('style');
            field.valid = true;
        }
    }
}
const inputs = [...document.getElementsByClassName('form-control')];
//const inputs = [...document.querySelectorAll('.needs-validation')[0]];

/*Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })*/

inputs.forEach(input => {
    input.oninput = function () {
        if (input.value) {
            input.classList.add('is-valid');
            console.log('true');
        } else {
            input.classList.add('is-invalid');
        }
        console.log(input.value);
    };
})
console.log(inputs);