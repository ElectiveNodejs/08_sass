$(document).ready(function(){
    $('#mobile-drpdown-btn').click(function(){
        var clicked = $(this).data('clicked');

        if ( clicked ) {
            $('#mobile-nav-dropdown').css({'height': '0', 'opacity':'0','filter':'alpha(opacity=0)'});
        }else{
            $('#mobile-nav-dropdown').css({'height': '160px','opacity':'1','filter':'alpha(opacity=100)'});
        }

        $(this).data('clicked', !clicked);
    });
    
    var windowHeight = $(window).height();
    $('#title-img').css('height', windowHeight);
});

//MODAL TICKETS

function openTicketModal(){
    document.getElementById('modal-tc').classList.remove('modal-t-back');
    document.getElementById('modal-tc').className += " modal-t-forward";
    document.getElementById('modal-t').style.display = 'block';
}

function closeTicketModal() {
    document.getElementById('modal-tc').classList.remove('modal-t-forward');
    document.getElementById('modal-tc').className += ' modal-t-back';
    document.getElementById('modal-t').className += ' modal-t-bg';
    setTimeout(function() {
        document.getElementById('modal-t').style.display = 'none';
        document.getElementById('modal-t').classList.remove('modal-t-bg');
    }, 500);
    
}

//Closing modal on escape key press -->
   window.document.onkeydown = function (e){
    if (!e) e = event;
    if (e.keyCode == 27){
        closeTicketModal();
    }
   } 

//GOOGLE MAP
   
function myMap() {
    var myCenter = new google.maps.LatLng(53.811597, -1.548099);
    var mapProp = {center: myCenter, zoom: 12, scrollwheel: false};
    var mapCanvas = document.getElementById('map');
    var map = new google.maps.Map(mapCanvas, mapProp);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    map.setOptions({styles: styles.silver});
}
    var styles = {
        default: null,
        silver: [
          {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#c9c9c9'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          }
        ]
    }
