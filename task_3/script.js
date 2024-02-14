const colorBlocks = document.querySelectorAll('.color-block');

colorBlocks.forEach(colorBlock => {
  colorBlock.addEventListener('click', () => {
    
    const colorCode = colorBlock.getAttribute('data-color');

    navigator.clipboard.writeText(colorCode);

   
    telegramSound.play();
  
    const copyMessage = document.querySelector('.copy-message');
    copyMessage.classList.add('show');
  
    setTimeout(() => {
      copyMessage.classList.remove('show');
    }, 2000);
  });
});


/// scripts 
const colors = document.querySelector('.colors');
const colorsFixed = document.querySelector('.colors-fixed');
const filter = document.querySelector('.filter');
const backBtn = document.querySelector('.back-btn');
const copied = document.querySelector('.copied');
const colorsFixedFlexSpan = document.querySelectorAll('.colors-fixed-flex span');
colors.onclick = ()=>{
  colorsFixed.classList.add('active');
  setTimeout(() => {
    filter.classList.add('active');
  }, 300);
  setTimeout(() => {
    
  }, timeout);
}
backBtn.onclick = ()=>{
  filter.classList.remove('active');
  setTimeout(() => {
    colorsFixed.classList.remove('active');
  }, 300);
  
};
function copyToClipboard(text) {
  var tempInput = document.createElement("textarea");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
for (let i = 0; i < colorsFixedFlexSpan.length; i++) {
  colorsFixedFlexSpan[i].onclick = (e) =>{
   const color = e.target.getAttribute('data-color');
    copied.classList.add('active');
    console.log(color);
    copyToClipboard(color);
    copied.style.backgroundColor = color;
    const telegramSound = new Audio('telegram.mp3');
    telegramSound.play();
    setTimeout(() => {
      copied.classList.remove('active');
    }, 700);
  }
}