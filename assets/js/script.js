let menu = document.getElementById('menu');
let sidebar = document.getElementById('sidebar');
let close = document.getElementById('close');


menu.addEventListener('click',function(){
    sidebar.classList.add('active');
})

close.addEventListener('click',function(){
    sidebar.classList.remove('active');
})
