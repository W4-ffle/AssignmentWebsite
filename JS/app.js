$(document).ready(function() {
    $(".img1").mouseleave(function() {
        $(this).css({
            transform: 'rotate(60deg) translate(150px, 55px) skew(45deg, 0deg)'
        });
    })

    /*button to reset start */
    $(".img1").keypress(function() {
        $(this).css({
            transform: 'rotate(0deg) translate(0px, 0px) skew(0deg, 0deg)'
        });
    })
    $(".btn").click(function() {
        $(".img1").keypress();
    });
    /*button to reset end */

    $(".img2").mouseleave(function() {
        $(this).css({
            transform: 'rotate(60deg) translate(150px, 55px) skew(45deg, 0deg)'
        });
    })
    $(".img2").keypress(function() {
        $(this).css({
            transform: 'rotate(0deg) translate(0px, 0px) skew(0deg, 0deg)'
        });
    })
    $(".btn").click(function() {
        $(".img2").keypress();
    });

    $(".img3").mouseleave(function() {
        $(this).css({
            transform: 'rotate(60deg) translate(150px, 55px) skew(45deg, 0deg)'
        });
    })
    $(".img3").keypress(function() {
        $(this).css({
            transform: 'rotate(0deg) translate(0px, 0px) skew(0deg, 0deg)'
        });
    })
    $(".btn").click(function() {
        $(".img3").keypress();
    });

    $(".img4").mouseleave(function() {
        $(this).css({
            transform: 'rotate(60deg) translate(150px, 55px) skew(45deg, 0deg)'
        });
    })
    $(".img4").keypress(function() {
        $(this).css({
            transform: 'rotate(0deg) translate(0px, 0px) skew(0deg, 0deg)'
        });
    })
    $(".btn").click(function() {
        $(".img4").keypress();
    });
    /* END OF IMAGE MAP JQUERY */


    $(function() {
        $("#firstNameError").hide();
        $("#lastNameError").hide();

        var error_fname = false;
        var error_lname = false;

        $("#firstname").focusout(function(){
            check_firstname();
        });
        
        $("#lastname").focusout(function(){
            check_lastname();
        });

        function check_firstname() {
            var firstname_length = $("#firstname").val().length;
            if (firstname_length < 2) {
                $("firstNameError").html("At least 2 Characters");
                $("#firstname").css("border-bottom", "3px solid #F90A0A");
                $("#firstNameError").show();
                error_fname = true;
            } else {
                $("firstNameError").hide();
                $("firstname").css("border-bottom", "3px solid #FFFF")
            }
        }

        function check_lastname() {
            var lastname_length = $("#lastname").val().length;
            if (lastname_length < 3) {
                $("lastNameError").html("At least 2 Characters");
                $("#lastname").css("border-bottom", "3px solid #F90A0A");
                $("#lastNameError").show();
                error_lname = true;
            } else {
                $("lastNameError").hide();
                $("lastname").css("border-bottom", "3px solid #FFFF")
            }
        }


        $("#form").submit(function(event){
            event.preventDefault();
            let fname = $("#firstname").val();
            let lname = $("#lastname").val();

            error_fname = false;
            error_lname = false;

            check_firstname();
            check_lastname();

            if (error_fname === false && error_lname === false) {
                alert("Input accepted as it was valid: " + fname.toUpperCase() + " " + lname.toUpperCase());
                return true;
            } else {
                alert("Input rejected as it was invalid")
                return false;
            }
            
        });
    
    });
});
