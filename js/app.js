/**
 * Created by BKottedi on 11/22/2016.
 */
$(document).ready(function(){
    $('#menubtn').click(function(){
        $('#innerContent').fadeToggle();
        $('#sidetoggle').fadeToggle();
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
    });

    $('#rightclosebtn').click(function(){
        $('body').toggleClass('rightpanel');
    });

});