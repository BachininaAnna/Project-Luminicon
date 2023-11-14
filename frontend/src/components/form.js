export class Form {
    constructor() {
        this.form = document.querySelectorAll('.needs-validation');
        this.validateForm();
    }


    validateForm() {
        Array.prototype.slice.call(this.form)
            .forEach(function (field) {
                    field.addEventListener('submit', function (event) {
                        if (!field.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        field.classList.add('was-validated')
                    }, false)
                }
            )
    }
}

