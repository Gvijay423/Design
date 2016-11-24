/**
 * Created by BKottedi on 11/22/2016.
 */
$(document).ready(function(){
    $('#menuico').click(function(){
        $('#innerContent').fadeToggle();
        $('#sidetoggle').fadeToggle();
        $('#menubar').toggleClass('menu');
        $('#menubar').toggleClass('home');
    });
    $('#homeico').click(function(){
        $('#innerContent').fadeToggle();
        $('#sidetoggle').fadeToggle();
        $('#menubar').toggleClass('home');
        $('#menubar').toggleClass('menu');
    });

    $('#sidebtn').click(function(){
        $('body').toggleClass('fullscreen');
    });

    $('#contractbtn').click(function(){
        if($('body').hasClass('rightpanel')){
            $('body').toggleClass('rightpanel');
        }
        else{
            if($('body').hasClass('fullscreen')) {
                $('body').toggleClass('fullscreen');
            }
        }
    });

    $('#rightpnlbtn').click(function(){
        $('body').toggleClass('rightpanel');
        $('#contract').toggle();
    });

    $('#rightclosebtn').click(function(){
        $('body').toggleClass('rightpanel');
        $('#contract').toggle();
    });

});