import {CustomHttp} from "../services/custom-http.js";
import {Auth} from "../services/auth.js";
import config from "../../config/config.js";

export class Form {
    constructor(page) {
        this.page = page;
        this.btnEnter = document.getElementById('btnEnter');
        this.password = document.getElementById('password');

        this.fields = [
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

        if (this.page === 'signup') {
            this.fields.unshift(
                {
                    name: 'fullName',
                    id: 'fullName',
                    element: null,
                    regex: /^[А-Я][а-я]*\s[А-Я][а-я]*$/,
                    valid: false,
                },
            )
            this.fields.push(
                {
                    name: 'passwordRepeat',
                    id: 'passwordRepeat',
                    element: null,
                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    valid: false,
                },
            )
        }

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this);
            }
        });

        this.btnEnter.setAttribute('disabled', 'disabled');
        this.btnEnter.onclick = function () {
            that.processForm();
        }

    }

    validateField(field, element) {
        if (!element.value || !element.value.match(field.regex)) {
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            field.valid = false;
        } else {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            field.valid = true;
            if (element.id === 'passwordRepeat') {
                this.validatePasswordRepeat(field, element);
            }
        }
        this.validateForm();
    }

    validatePasswordRepeat(field, element) {
        if (element.value === this.password.value) {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            field.valid = true;
        } else {
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            field.valid = false;
        }
    }

    validateForm() {
        const validForm = this.fields.every(item => item.valid);
        if (validForm) {
            this.btnEnter.removeAttribute('disabled');
        } else {
            this.btnEnter.setAttribute('disabled', 'disabled');
        }
        return validForm;
    }

    async processForm() {
        if (this.validateForm()) {
            const email = this.fields.find(item => item.name === 'email').element.value;
            if (email) {
                localStorage.setItem('email', email);
            }
            const password = this.password.value;
            if (password) {
                localStorage.setItem('password', password);
            }

            if (this.page === 'login') {
               this.rememberCheck = document.getElementById('rememberCheck').checked;
            }

            if (this.page === 'signup') {
                const fullName = this.fields.find(item => item.name === 'fullName').element.value;
                try {
                    const result = await CustomHttp.request(config.host + '/signup', 'POST', {
                        name: fullName.split(' ')[0],
                        lastName: fullName.split(' ')[1],
                        email: email,
                        password: password,
                        passwordRepeat: this.fields.find(item => item.name === 'passwordRepeat').element.value
                    })
                    if (result) {
                        if (result.error || !result.user) {
                            throw new Error(result.message);
                        }
                    }
                } catch (error) {
                    return console.log(error);
                }

            }
            try {
                const result = await CustomHttp.request(config.host + '/login', 'POST', {
                    email: email,
                    password: this.password.element.value,
                    rememberMe: this.rememberCheck
                })
                if (result) {
                    if (result.error || !result.accessToken || !result.refreshToken
                        || !result.name || !result.lastName || !result.id) {
                        throw new Error(result.message);
                    }
                    Auth.setTokens(result.accessToken, result.refreshToken);
                    Auth.setUserInfo({
                        fullName: result.name,
                        userId: result.id
                    })
                    location.href = '#/main';
                }

            } catch (error) {
                console.log(error);
            }
        }
    }
}

