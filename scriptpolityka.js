const navbar = document.getElementsByClassName('navbar-main')[0]
const navButtonsCont=navbar.children[1]
  let burgerConuter=0
  const navBurger = document.getElementsByClassName('navbar-menuburger')[0]
  navBurger.addEventListener('click',()=>{
    if(burgerConuter%2==0){
    navBurger.src='./img/cross.png'
    burgerConuter = burgerConuter +1
    navButtonsCont.style.display='flex'
    navbar.style.height='300px'
    }else{
      navBurger.src='./img/menu-burger.png'
      burgerConuter = burgerConuter +1
      navButtonsCont.style.display='none'
      navbar.style.height='100px'
    }

  })