let smallNavList=document.querySelector('ul');
let navRight=document.querySelector('.nav-right');
bar.addEventListener('click',()=>{
smallNavList.style.display='flex';
navRight.style.display='none';
bar.classList.add('bar-hide');
setTimeout(()=>{
bar.classList.remove('bar-hide');
smallNavList.style.display='none';
navRight.style.display='flex';

},10000);
});
