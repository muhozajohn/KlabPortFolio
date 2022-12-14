
    const form = document.getElementById('form');
    const user = document.getElementById('user');
    const email = document.getElementById('email');
    const mesg = document.getElementById('msg');

    
    
    const setError =(el,sms) =>{
        const inputControl = el.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = sms;
        errorDisplay.classList.add("error");
        inputControl.classList.remove("success");
    }
    
    const setSucc = Element =>{
        const inputControl = Element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
        
        if (errorDisplay != null) {
            errorDisplay.innerText = " ";
            errorDisplay.classList.remove("error");
            inputControl.classList.add("success");
        }
        
    }
    const  checkEmail =(email)=> {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const validatInputs = () =>{
        const userValue = user.value.trim();
        const emailValue = email.value.trim();
        const msgValue = mesg.value.trim();
        
        if(userValue === ''){
            setError(user, "Username is Required*");
        }
        else{
            setSucc(user);
        }
        if(msgValue === ''){
            setError(mesg, "Your message is Required*");
        }
        else{
            setSucc(mesg);

        }
        if(emailValue === ''){
            setError(email, "Email is Required*");
        }
        else if(!checkEmail(emailValue)){
            setError(email, "Provide valid Email Address*");
        }
        else{
            setSucc(email);
        }
        
        
        
    };

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
    
        validatInputs();
    });



    // 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        grabCursor: true,
        // slidesPerView
        loop: true,
        pagination: {
            el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); 
    
    

    