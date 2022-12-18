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
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    const scrollY = window.scrollY
    if(scrollY>0)
        navbar.classList.add('fixed')
    if(scrollY==0)
        navbar.classList.remove('fixed')
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();

