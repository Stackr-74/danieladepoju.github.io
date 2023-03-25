// PRELOADER EFFECT
window.onload = () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('loaded')},
         1000);
}

// NHEADER
const header = document.querySelector('#header');

window.onscroll = () => {
    header.classList.toggle('active', window.scrollY > 10);
}

// NAV BUTTON
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
const navLinks = document.querySelectorAll('.link-item');

navButton.onclick = () => {
    navButton.classList.toggle('active');
    navBar.classList.toggle('active');
}

for (let j = 0; navLinks.length > j; j++ ){
    navLinks[j].addEventListener('click', (e) => {
        navButton.classList.toggle('active');
        navBar.classList.toggle('active');
    })
}

const myform = document.querySelector('#myform');
const fullname = document.querySelector('#fullname');
const emailAddress = document.querySelector('#email');
const message = document.querySelector('#message');


 const submitButton = document.querySelector('.submit-btn');

myform.addEventListener('submit', function(e) {
    e.preventDefault()

    if(fullname.value === "" || emailAddress.value === "" || message.value === "" ) {
        const all = [fullname, emailAddress, message];
        for (let i = 0; all.length > i; i++) {
            all[i].setAttribute('required', 'required');
        }
    }

    else {
        submitButton.innerHTML = "Sending...";

        window.setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 3000);
      
    }
});

const hireBtn = document.querySelector('#hire-btn') 

hireBtn.addEventListener('click', function() {
    window.location.href = "https://github.com/Stackr-74";
})

const connectBtn = document.querySelector('#connect-btn') 

connectBtn.addEventListener('click', function() {
    window.location.href = "https://www.instagram.com/stackr12";
})