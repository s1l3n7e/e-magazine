/**
 * Created by IMPERATOR on 23.01.2016.
 */

$(document).ready(function () {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#nav-shadow').css("margin-top", "0px");
        } else {
            $('#nav-shadow').css("margin-top", "-60px");
        }
    });
    $("#button-catalog").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('.content-sub-container').offset().top-60}, 500);
    });
    $("#button-contacts").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('#contacts').offset().top-60}, 700);
    });
    $("#button-solar").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('#solar-catalog').offset().top-60}, 500);
    });
    $("#button-adv-running").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('#adv-running').offset().top-60}, 700);
    });
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map-container'), {
        center: {lat: 55.178365, lng: 61.259161},
        zoom: 16,
        scrollwheel: false
    });
    var contentString = '<div id="g-map-logo">Liberty</div>' + '<div id="g-map-header">Новградский проспект, 64</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: {lat: 55.178365, lng: 61.259161},
        map: map,
        title: "Liberty"
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}