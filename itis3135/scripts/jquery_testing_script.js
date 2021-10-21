// $(function(){
//     $('div').click(function(){
//         $('#box').slideDown('slow');
//         $('p a').css('color','blue');
//     });
// });
$(function(){
    $('#box').click(function(){
        $(this).animate({
            "left": "300px",
            // "width": "50px"
        }, 1500);

        $(this).animate({"width": "50px",}, 1000);
        $('li:even').addClass('alert');
        //$('li>a').removeClass(); li>a gets only anchor tags that are direct children of an li element
    });
});

$(function(){
    //$('li').addClass('alert');
    $('li a[title=title').addClass('alert');
});