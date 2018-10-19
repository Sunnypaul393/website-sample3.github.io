// Custom Script
new WOW().init();
var $ = jQuery.noConflict();

var windowHeight = jQuery(window).height();
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 5) {
        jQuery(".header").addClass("hide-header-top-fixed");
        jQuery("body").addClass("header-top-fixed");
    } else {
        jQuery(".header").removeClass("hide-header-top-fixed");
        jQuery("body").removeClass("header-top-fixed");
    }
});
jQuery(document).ready(function() {
    //alert(windowHeight);
	jQuery("#portfolio-list, #portfolio-grid").mixitup({
        effects: ["fade", "scale"]
        , easing: "snap"
    });
    jQuery('#portfolio-list-section #container').masonry({
        "itemSelector": ".item",
        "columnWidth": ".grid-sizer",
    });
    if (jQuery(window).width() < 767) {
        jQuery(".footer-col h5").click(function(d) {
            jQuery(this).toggleClass("active");
            jQuery(this).parent(".footer-col").find(".footer-col-content").slideToggle()
        })
    }
    
});
jQuery(document).keydown(function(a) {
    if (a.keyCode == 27) {
        jQuery(".fixed-header-navigation ul li").removeClass("active");
        jQuery(".sub-nav-full").removeClass("open")
    }
});
function openNav() {
    document.getElementById("header-nav").style.width = "100%"
}

function closeNav() {
    document.getElementById("header-nav").style.width = "0"
}
jQuery(window).on("scroll", function() {
    var a = jQuery(window).scrollTop();
    jQuery(".header_parent").animate({
        marginTop: a
    }) / 2
});
jQuery(window).scroll(function() {
    var a = jQuery(window).scrollTop();
    jQuery("#home-slider .carousel-caption").css("margin-top", a * 1.2)
});
jQuery("#radio_btn_1").click(function() {
    jQuery("html,body").animate({
        scrollTop: jQuery("#radio_btn_2").offset().top
    }, "slow")
});
jQuery("#radio_btn_2").click(function() {
    jQuery("html,body").animate({
        scrollTop: jQuery("#radio_btn_3").offset().top
    }, "slow")
});
$(function() {
    $("a.nav-bar").click(function() {
        $(this).toggleClass("active");
        $(".nav-content").toggleClass("open");
        $("body").toggleClass("onHoldNavigation");
        if ($("body").hasClass("onHoldNavigation")) {
            disableScroll()
        } else {
            enableScroll()
        }
    })
});
    

function preventDefault(a) {
    a = a || window.event;
    if (a.preventDefault) {
        a.preventDefault()
    }
    a.returnValue = false
}

function preventDefaultForScrollKeys(a) {
    if (keys[a.keyCode]) {
        preventDefault(a);
        return false
    }
}

function disableScroll() {
    if (window.addEventListener) {
        window.addEventListener("DOMMouseScroll", preventDefault, false)
    }
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    if (window.removeEventListener) {
        window.removeEventListener("DOMMouseScroll", preventDefault, false)
    }
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null
}




