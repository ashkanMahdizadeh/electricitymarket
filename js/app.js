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

    // count products
    let count = 1
    $('#plus').click(()=>{
        if(count <= 20 ) {
            count++
            $('#count').attr('value',count)
        }
    })
    $('#min').click(()=>{
        if(count > 1 ) {
            count--
            $('#count').attr('value',count)
        }
    })


    // product properties
    let otherprop = [
        ['ارتباط داخلی', "دارد"],
        ['جنس بدنه', "pvc"],
        ['رنگ', "سفید"],
        ['ویژگی 4', "دارد"],
        ['ویژگی 5', "ندارد"]
    ]

    function propertiesProduct(c=3){
        $('.properties').empty()
        j = 0
        otherprop.forEach((item)=>{
            j++
            if(j <= c){
                $('.properties').append(`<li>${item[0]} : <span>${item[1]}</span></li>`)
            }
        })
    }
    propertiesProduct(3)
     $('.other').click(()=>{
        propertiesProduct(5)
         $('.other').hide()
         $('.othermin').show()
     })

     $('.othermin').click(()=>{
        propertiesProduct(3)
        $('.other').show()
         $('.othermin').hide()
     })


    //  slider
    let images = $('.other-images')
    let fullImage = $('.image-large img')
    images.children().click((e)=> {
        images.children().removeClass('img-active')
        e.target.classList = 'img-active'
        fullImage.attr('src', e.target.src)
        fullImage.attr('alt', e.target.alt)
    })
});