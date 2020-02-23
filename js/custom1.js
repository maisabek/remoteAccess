$(function(){
    $('.info-list li').click(function(){
    $(this).addClass('selected').siblings('li').removeClass('selected');
    $('.about,.history,.specification,.technical,.review').hide();
    $('.'+$(this).data('class')).fadeIn();
    });
});


$(function(){
        $('.li2').click(function(){
        $('.li2').css("color","goldenrod");

        $('.content1').hide();

        $('.content2').fadeIn();
        
        });
});
$(function(){
    $('.li1').click(function(){
    $('.li1').css("color","goldenrod");
    $('.content2').hide();
    $('.content1').fadeIn();
    });
});