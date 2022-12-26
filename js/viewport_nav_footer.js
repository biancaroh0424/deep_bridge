    const topNavPhone = document.getElementById('topnav_phone');
    const topNavTablet = document.getElementById('topnav_tablet');
    const topNavComputer = document.getElementById('topnav_computer');
    const bottomNavComputer = document.getElementById('bottom_nav_com');
    const bottomNavTablet = document.getElementById('bottom_nav_tablet');
    const letsTalk = document.querySelector('.lets_talk');


    function device_phoneView(xxs){
      if (xxs.matches) { // If media query matches
          letsTalk.style.display = 'none';
          topNavTablet.style.display = 'none';
          topNavComputer.style.display = 'none';
          topNavPhone.style.display='flex';
  
        }
  }

function phoneView(xs){
    if (xs.matches) { // If media query matches
        letsTalk.style.display = 'none';
        topNavTablet.style.display = 'none';
        topNavComputer.style.display = 'none';
        topNavPhone.style.display='flex';

      }
}

function tabletView(x){
  if (x.matches) { // If media query matches
    letsTalk.style.display = 'flex';
      topNavComputer.style.display = 'none';
      topNavPhone.style.display = 'none';
      topNavTablet.style.display = 'flex';
      bottomNavComputer.style.display = 'none';
      bottomNavTablet.style.display ='flex';

    }
};

function computerView(xl){
  if(xl.matches){
    bottomNavTablet.style.display = 'none';
    bottomNavComputer.style.display='flex';
    letsTalk.style.display = 'flex';
    topNavComputer.style.display = 'flex';
    topNavTablet.style.display = 'none'; 
    topNavPhone.style.display = 'none'; 

    }
  }






let xl = window.matchMedia("(min-width: 1279px)")
computerView(xl) // Call listener function at run time
xl.addListener(computerView) // Attach listener function on state changes

let x = window.matchMedia("(max-width: 1280px)")
tabletView(x) // Call listener function at run time
x.addListener(tabletView) // Attach listener function on state changes

let xs = window.matchMedia("(max-width: 725px)")
phoneView(xs) // Call listener function at run time
xs.addListener(phoneView) // Attach listener function on state changes


let xxs = window.matchMedia("(max-width: 555px)")
device_phoneView(xxs) // Call listener function at run time
xxs.addListener(device_phoneView) // Attach listener function on state changes