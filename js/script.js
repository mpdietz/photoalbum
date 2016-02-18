  var BrooklynBridge = {
    title: 'Brooklyn Bridge, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140825_001017_small.jpg' width="300" height='300',
    geolocation: [40.707385,-73.986568],/*[y,x]*/
    ]
  }

   var CentralPark = {
    title: 'Central Park, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20150127_184501_small.jpg' width="300" height='300',
    geolocation: [40.786066,-73.967857],/*[y,x]*/
    ]
  }

   var Gaustavino = {
    title: 'Gaustavino Subway Entrance, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/IMG_20150118_122828_small.jpg' width="300" height='300',
    geolocation: [40.715582,-73.996181],/*[y,x]*/
    ]
  }

    var LowerEastSide = {
    title: 'Lower East Side Roofs, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140913_142838_small.jpg' width="300" height='300',
    geolocation: [40.718835,-73.988800],/*[y,x]*/
    ]
  }

   var DelancyStreet = {
    title: 'Delancy Street, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140916_150207_small.jpg' width="300" height='300',
    geolocation: [40.717664,-73.984509],/*[y,x]*/
    ]
  }

   var PublicArt = {
    title: 'Public Art',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/IMG_20150118_122828_small.jpg' width="300" height='300',
    geolocation: [40.721486,-73.991890],/*[y,x]*/
    ]
  }

    var Skyline = {
    title: 'Skyline, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20150501_200113_small.jpg' width="300" height='300',
    geolocation: [40.646913,-74.075661],/*[y,x]*/
    ]
  }

    var Subway = {
    title: 'Subway - Years of Infrastructure, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2014/10/PSX_20140926_213329.jpg' width="300" height='300',
    geolocation: [40.657592,-73.931465],/*[y,x]*/
    ]
  }

    var MoveableChairs= {
    title: 'Moveable Chairs- New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012614_small.jpg' width="300" height='300',
    geolocation: [40.742786,-74.008327],/*[y,x]*/
    ]
  }

    var Sunset= {
    title: 'Sunset Over the Hudson',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012405_small.jpg' width="300" height='300',
    geolocation: [40.733161,-74.010901],/*[y,x]*/
    ]
  }

var galleyimages = [BrooklynBridge, CentralPark, Gaustavino, LowerEastSide, DelancyStreet, PublicArt, Skyline, Subway, MoveableChairs, Sunset]; 

galleyimages.forEach(function(item) {
    $('#galleyitem').data('url');
  });

 var layer = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

 var map = L.map('map').setView([40.753239,-73.981247], 13);


var image = image;


$(function () {

        $('.gallery img').hover(function() {
           $(this).fadeTo(500,.2)

        }, 
        function() {
           $(this).fadeTo(500,1)

        });

         $('#DisplayText h3').text($(this).parent().data('title')); 

    });


// $('img[src]').hover(function()
// 		{
// 		$(this.data[src]).fadeIn("slow");
// 		},
// 		function ()
// 			{
// 		$(this.data[src]).fadeOut();		
// 			});
// });
