// функция вывести меню и обратно скрыть
function toggleMenu(menu,btnOpen,btnClose){
    const menuBlock = document.querySelector(menu);
    const btnBurger = document.querySelector(btnOpen);
    const closeBtn = document.querySelector(btnClose);
    btnBurger.onclick = () => {
        menuBlock.classList.add('active');
    };
    closeBtn.onclick = () => {
        menuBlock.classList.remove('active');
    }
};
toggleMenu('.header','.burger-btn','.menu-close-btn');
// question list toggle 
function questionList(){
    const btnList = document.querySelectorAll('.questions-list li button');
    const list = document.querySelectorAll('.questions-list li');
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].onclick = () => {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            list[i].classList.add('active');
        }
    }
};
questionList();
// script slider
($('.say-client-slider').slick({
    infinite: false,
    arrow:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }))();