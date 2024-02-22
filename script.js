function displayAlert(){
    const alert = document.getElementById("success-alert");
    alert.style.display="block";

    const formClose = document.getElementById("signUp-form");
    formClose.style.display="none";

    

}

function closeAlert(){
    const alert = document.getElementById("success-alert");
    alert.style.display="none";

    const formClose = document.getElementById("signUp-form");
    formClose.style.display="flex";
}

  // Desktop Image
function desktopImage(){
  const image = document.getElementById("M-image");
  
  if(window.innerWidth < 768){
    image.src="./assets/images/illustration-sign-up-mobile.svg";
  }else {
    image.src="./assets/images/illustration-sign-up-desktop.svg";
  }

}
desktopImage();
window.addEventListener("resize", desktopImage);

  function validateForm(){
    const Valid = document.signUp-form.email.value;

    if(!Valid == /\S+@\S+\.\S+/){
     const emailError = document.getElementById("emailInvalid");
     emailError.style.display ="block";


    }else{
      const email = document.getElementById("emailButton");
      email.style.display="none";

    }
  }

