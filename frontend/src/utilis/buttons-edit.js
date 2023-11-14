export class ButtonsEdit {
    static redirection(buttonsEdit, location) {
        if (buttonsEdit) {
            buttonsEdit.forEach(item => {
                item.addEventListener('click', function () {
                    window.location.href = location;
                })
            })
        }
    }
}