const buttonConfirmYes= document.querySelector('.yesConfirm')
const buttonConfirmNo= document.querySelector('.noConfirm')
const setResultYes = document.querySelector('.setResultYes');
const setResultNo = document.querySelector('.setResultNo');



document.addEventListener('click', function (e){
const el = e.target;

if(el.classList.contains('yesConfirm')){
    setResultYes.classList.add('clear')
    setResultNo.classList.remove('clearNo')


}

if(el.classList.contains('noConfirm')){
    setResultYes.classList.remove('clear')
    setResultNo.classList.add('clearNo')
}


})