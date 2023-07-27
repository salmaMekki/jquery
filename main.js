//HOME
let innerwidth = $('.home-sidebar').innerWidth();


$('.home').click(function () {
    if ($('.home-sidebar').css('left') == '0px') {
        $('.home-sidebar').animate({ left: `-${innerwidth}` }, 1000);
        $('.home2 span').animate({ left: '0px' }, 1000);

    } else {
        $('.home-sidebar').animate({ left: '0px' }, 1000);
        $('.home2 span').animate({ left: '250px' }, 1000);

    }

})


// Acordion section
$('.acording-content h3').click(function () {

    $('.acording-content p').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

})

// COUNT

let countDate = new Date('Dec 31 ,2023,23:59:59');

let counter = setInterval(() => {
    let date = new Date();
    let dateDiff = countDate - date;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    // console.log(days)
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // console.log(hours)
    let min = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    // console.log(min)

    let sec = Math.floor(dateDiff % (1000 * 60) / (1000));
    // console.log(sec)


    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.min').innerHTML = min;
    document.querySelector('.sec').innerHTML = sec;

    if (dateDiff = 0) {
        clearInterval(counter)
    }
}, 1000)

/*CONTACT*/


let maxLength = 100;
$('.text-area').keyup(function () {
    let length = $(this).val().length;
    let amount = maxLength - length
    if (amount <= 0) {
        $('.chars').text('your available character finished')
    } else {
        $('.chars').text(amount)
    }
})



