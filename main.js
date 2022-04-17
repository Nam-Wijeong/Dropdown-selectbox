'use strict';
// 1. 첫 화면에는 select box title 만 보인다.
// 2. select box title을 클릭하면 
// 3. option list의 아이템 목록이 나온다.
// 4. select box title을 한 번 더 클릭하면 box가 닫힌다.
// 5. option 아이템을 클릭하면 아이템의 텍스트가 select box 안으로 들어가고 목록이 닫힌다.

const selectBox = document.querySelector('.selectbox')
const optionItem = document.querySelector('.option_item')
