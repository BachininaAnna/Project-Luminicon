export class Popup {
    static show() {
        const buttonsDelete = document.querySelectorAll('button.delete');
        const modal = document.getElementById('modal');

        const buttonConfirm = document.getElementById('modal-confirm');
        const buttonCancel = document.getElementById('modal-cancel');

        if (buttonsDelete && modal) {
            buttonsDelete.forEach(item => {
                item.addEventListener('click', function () {
                    modal.classList.add('d-block');
                })
            })
            buttonCancel.addEventListener('click', function () {
                modal.classList.remove('d-block');
            })

            buttonConfirm.addEventListener('click', function () {
                modal.classList.remove('d-block');
                /*--*/
            })
        }
    }
}
