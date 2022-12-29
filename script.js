const form = document.getElementsByClassName("Kontaktform-form-formcont")[0]
const WycenaCheckbox = document.getElementById("WycenaCheckbox")
const KontaktCheckbox = document.getElementById("KontaktCheckbox")
Checkboxfunc=()=>{
if(KontaktCheckbox.checked==true){
  form.innerHTML='<textarea id="msg" name="user_message"placeholder="Wiadomość"></textarea>'} else if(WycenaCheckbox.checked==true){
  form.innerHTML='<div class="kontaktform-form-cont-adreszaladunku"><input type="text" name="" id="adreszaladunku" placeholder="Adres załadunku"></div><div class="kontaktform-form-cont-adresdostawy"><input type="text" name="" id="adreszaladunku"placeholder="Adres dostawy"></div><div class="kontaktform-form-cont-daneprzesylki"><input type="text" name="" id="adreszaladunku"placeholder="Dane przesyłki"></div>'}
  }

KontaktCheckbox.addEventListener('click',Checkboxfunc)
WycenaCheckbox.addEventListener('click',Checkboxfunc)
// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
  
    } 
  };
  
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
const navbar = document.getElementsByClassName('navbar-main')[0]
const mainpage = navbar.children[1].children[0]
const aboutUs =navbar.children[1].children[1]
const service = navbar.children[1].children[2]
const contanct = navbar.children[1].children[3]
navButs=[mainpage,aboutUs,service,contanct]
const removingAllActives=()=>{
  navButs.forEach(el=>el.classList.remove('active'))
  navButs.forEach(el=>el.classList.add('unactive'))
}
const addingActive=(el)=>{
el.classList.remove('unactive')
el.classList.add('active')
}
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    const scrollY = window.scrollY
    if(scrollY==300)
    navbar.classList.add('hide')
    if(scrollY>300)
        navbar.classList.add('fixed')
    if(scrollY==0)
        navbar.classList.remove('fixed')
    if(scrollY<823){
          removingAllActives()
          addingActive(mainpage)
    }else if(scrollY>=823&scrollY<2550){
    removingAllActives()
    addingActive(aboutUs)}
    else if(scrollY>=3217&scrollY<4417){
      removingAllActives()
      addingActive(service)}
      else if(scrollY>=4417){
        removingAllActives()
        addingActive(contanct)}

  }
  const zapytanie = document.getElementsByClassName('zapytanie')[0]
  const serwisbut = document.getElementsByClassName('serwis-footer-checkmorebut')[0]
  const doswiadczeniebut = document.getElementsByClassName('doswiadczenie-text-checkmorebut')[0]
  const ofertabut = document.getElementsByClassName('oferta-checkmorebut')[0]
  navButs=[mainpage,aboutUs,service,contanct]
  ofertabut.addEventListener('click',()=>{scrollTo(0,4535)})
  doswiadczeniebut.addEventListener('click',()=>{scrollTo(0,4535)})
  serwisbut.addEventListener('click',()=>{scrollTo(0,4535)})
  zapytanie.addEventListener('click',()=>{scrollTo(0,4535)})
  mainpage.addEventListener('click',()=>{scrollTo(0,0)})
  aboutUs.addEventListener('click',()=>{scrollTo(0,833)})
  service.addEventListener('click',()=>{scrollTo(0,3334)})
  contanct.addEventListener('click',()=>{scrollTo(0,4535)})
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });


  // phone navbar
  const navButtonsCont=navbar.children[1]
  let burgerConuter=0
  const navBurger = document.getElementsByClassName('navbar-menuburger')[0]
  navBurger.addEventListener('click',()=>{
    if(burgerConuter%2==0){
    navBurger.src='/img/cross.png'
    burgerConuter = burgerConuter +1
    navButtonsCont.style.display='flex'
    navbar.style.height='300px'
    }else{
      navBurger.src='/img/menu-burger.png'
      burgerConuter = burgerConuter +1
      navButtonsCont.style.display='none'
      navbar.style.height='100px'
    }

  })

  // if(navBurger.src=='/img/menu-burger.png'){
  //   navBurger.src='./img/cross.png'}else{
  //     navBurger.src='/img/menu-burger.png'


  // Update scroll position for first time
  storeScroll();

