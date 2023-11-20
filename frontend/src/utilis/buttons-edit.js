export class ButtonsEdit {
    static redirection(location) {
        const buttonsEdit = document.querySelectorAll('button.edit');
        if (buttonsEdit) {
            buttonsEdit.forEach(item => {
                item.addEventListener('click', function () {
                    window.location.href = location;
                })
            })
        }
    }
}