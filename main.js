
const selectTitle = document.querySelector('.select_title');
const optionList = document.querySelector('.option_list');

selectTitle.addEventListener('click', ()=>{
   optionList.classList.toggle('show');   
})

const optionItem = document.querySelectorAll('.option_item');
const programming = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'];

for(let i = 0; i < programming.length; i++) {
    optionItem[i].addEventListener('click', () => {
        selectTitle.textContent = programming[i];
        optionList.classList.toggle('show');
    })
}

