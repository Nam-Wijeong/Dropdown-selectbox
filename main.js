'use strict';
// 1. 첫 화면에는 select box title 만 보인다.
// 2. select box title을 클릭하면 
// 3. option list의 아이템 목록이 나온다.
// 4. select box title을 한 번 더 클릭하면 box가 닫힌다.
// 5. option 아이템을 클릭하면 아이템의 텍스트가 select box 안으로 들어가고 목록이 닫힌다.

const selectTitle = document.querySelector('.select_title');
const optionList = document.querySelector('.option_list');

// 셀렉박스 클릭 시 열고 닫기
selectTitle.addEventListener('click', ()=>{
   optionList.classList.toggle('show');   
})

// 옵션아이템의 항목 선택 시 선택한 아이템이 셀렉타이틀에 입력됨 
const optionItem = document.querySelectorAll('.option_item');
const programming = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'];

for(let i = 0; i < programming.length; i++) {
    optionItem[i].addEventListener('click', () => {
        selectTitle.textContent = programming[i];
        optionList.classList.toggle('show');
    })
}

