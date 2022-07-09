$(document).ready(function(){
    // menu mobile
   $('.menu-btn-mobile').click(()=>{
        $('.dark-overlay').show()
        $('.navbar_site').addClass("right-menu")

        $('.dark-overlay').click(()=> {
            $('.dark-overlay').hide()
            $('.navbar_site').removeClass("right-menu")
        })
   })
   
    //search mobile
    $('.search-btn-mobile').click(()=>{
        $('.dark-overlay').show()
        $('.search-box').addClass("search-mobile")

        $('.dark-overlay').click(()=> {
            $('.dark-overlay').hide()
            $('.search-box').removeClass("search-mobile")
        })
    })
});

// Validation
function Validation(){
    let firstName = $("#firstname").val()
    let lastname = $("#lastname").val()
    let email = $("#email").val()
    let phonenumber = $("#phonenumber").val()
    let password = $("#password").val()
    let repassword = $("#repassword").val()

    if(firstName == ''){
        $('#errFirstName').show().html('نام را وارد نمایید')
    } else{
        $('#errFirstName').hide()
    }
    
    if(lastname == ''){
        $('#errLastName').show().html('نام خانوادگی را وارد نمایید')
    } else{
        $('#errLastName').hide()
    }

    if(email == ''){
        $('#errEmail').show().html('ایمیل را وارد نمایید')
    } else{
        $('#errEmail').hide()
    }

    if(phonenumber == ''){
        $('#errPhoneNumber').show().html('شماره تلفن را وارد نمایید')
    } else{
        $('#errPhoneNumber').hide()
    }

    if(password == ''){
        $('#errPassword').show().html('رمز عبور را وارد نمایید')
    } else{
        $('#errPassword').hide()
    }
    return false
}
 