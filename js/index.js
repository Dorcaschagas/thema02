$(document).ready(function(){
    loadPages('home');
    $('body').removeClass('toggle-sidebar')
})

function loadPages(pages) {
    $(".body").load(`${pages}.html`)
}


