
var firstNameForm = document.getElementById('firstName');
var lastNameForm = document.getElementById('lastName');
var phoneNumberForm = document.getElementById('phoneNumber');
var confirmPhoneNumberForm = document.getElementById('confirmPhoneNumber');
regForm.addEventListener('submit',function(e) {
    e.preventDefault();
    if (phoneNumberForm.value!=confirmPhoneNumberForm.value) { 

        Swal.fire ({ 
            position: 'center',
            icon: 'error',
            title: 'PhoneNumber and Confirm PhoneNumber are not the same',
            showConfirmButton: false,
            timer: 6000
        });

        // location.replace("../index.html");
        // window.location ="../pages/home.html";

    }
    else{
       
        localStorage.setItem( 'firstName', firstNameForm.value);
        localStorage.setItem( 'lastName',lastNameForm.value);
        localStorage.setItem( 'phoneNumber',phoneNumberForm.value);
        localStorage.setItem( 'confirmPhoneNumber',confirmPhoneNumberForm.value);
        
        Swal.fire({
            position: 'center',
            icon: "success",
            title: 'Your account was created successfully',
            showConfirmButton: false,
            timer: 6000
          });
        }
        // window.location ="./pages/home.html";
        window.location ="./pages/home.html";
});