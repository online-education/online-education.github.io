$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })
        // magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
        }
        // other options
    });
});

function myFunction(btn, text) {
    if ($('#paragraph111')) {
        $('#paragraph111').remove();
    }
    var para = document.createElement("P");
    para.id = 'paragraph111';
    var t = document.createTextNode(text);
    para.appendChild(t);
    $(btn).after(para);
}