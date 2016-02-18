//   var BrooklynBridge = {
//     title: 'Brooklyn Bridge, New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140825_001017_small.jpg',
//     geolocation: [40.707385,-73.986568],
    
//   }

//    var CentralPark = {
//     title: 'Central Park, New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20150127_184501_small.jpg',
//     geolocation: [40.786066,-73.967857],
    
//   }

//    var Gaustavino = {
//     title: 'Gaustavino Subway Entrance, New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/IMG_20150118_122828_small.jpg',
//     geolocation: [40.715582,-73.996181],
    
//   }

//     var LowerEastSide = {
//     title: 'Lower East Side Roofs, New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140913_142838_small.jpg',
//     geolocation: [40.718835,-73.988800],
//       }

//    var DelancyStreet = {
//     title: 'Delancy Street, New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140916_150207_small.jpg',
//     geolocation: [40.717664,-73.984509],
    
//   }

//    var PublicArt = {
//     title: 'Public Art',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/IMG_20150118_122828_small.jpg',
//     geolocation: [40.721486,-73.991890],
    
//   }

//     var Skyline = {
//     title: 'Skyline, New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20150501_200113_small.jpg',
//     geolocation: [40.646913,-74.075661],
    
//   }

//     var Subway = {
//     title: 'Subway - Years of Infrastructure, New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2014/10/PSX_20140926_213329.jpg',
//     geolocation: [40.657592,-73.931465],
    
//   }

//     var MoveableChairs= {
//     title: 'Moveable Chairs- New York City',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012614_small.jpg',
//     geolocation: [40.742786,-74.008327],
    
//   }

//     var Sunset= {
//     title: 'Sunset Over the Hudson',
//     caption: '',
//     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012405_small.jpg',
//     geolocation: [40.733161,-74.010901],
    
//   }

// var galleyimages = [BrooklynBridge, CentralPark, Gaustavino, LowerEastSide, DelancyStreet, PublicArt, Skyline, Subway, MoveableChairs, Sunset]; 
//   console.log(galleyimages.CentralPark);

// galleyimages.forEach(function(galleryimages) {
//     $('#galleyitem').append('<div class ="galleryimg">' + '<img src = (element.url)>' + '</div>');
// var galleryimages = L.marker(element.geolocation).addTo(map);
//     marker.bindPopup( element.title)
//   });

// $(function () {

//         $('.galleryitem img').hover(function() {
//            $(this).fadeTo(500,.2)

//         }, 
//         function() {
//            $(this).fadeTo(500,1)

//         });

//          $('#DisplayText h3').text($(this).parent().data('title')); 

//     });


 var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

  var map = L.map('myMap').setView([40.7127837, -74.0059413], 11);


map.addLayer(layer)

  var panOptions = {
    animate: true,
    duration: 2

// var image = image;

    // $('.galleryitem img').click(function() {
    //     map.panTo($(this).element-url, panOptions); 
    // });