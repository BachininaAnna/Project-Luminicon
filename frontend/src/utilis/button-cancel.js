export class ButtonCancel {
    static redirection(location) {
        const buttonCancel = document.getElementById('cancel');
        if (buttonCancel) {
            buttonCancel.addEventListener('click', function () {
                window.location.href = location;
            })
        }
    }
}