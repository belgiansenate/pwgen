function resize(){var o=window.innerWidth;console.log(o),o>992?jQuery("#reviewSlider").hasClass("grid-3")||(window.revslider&&window.revslider.destroy(),jQuery("#reviewSlider").addClass("grid-3")):jQuery("#reviewSlider").hasClass("grid-3")&&(window.revslider=tns({container:"#reviewSlider",loop:!0,mouseDrag:!0,navPosition:"bottom",gutter:30,items:1,nav:!1,preventScrollOnTouch:!1,controls:!1,disable:!1,slideBy:1,controls:!0,controlsPosition:"bottom",controlsText:["<strong></strong>","<strong></strong>"],responsive:{992:{items:3},767:{items:2,gutter:15}}}),jQuery("#reviewSlider").removeClass("grid-3"))}$=jQuery.noConflict(),jQuery(function(){if(resize(),jQuery(document).find("#map").length>0){var o=L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'}),e=L.latLng(52.2097,5.28183),r=L.map("map",{center:e,zoom:17,scrollWheelZoom:!1,layers:[o]});L.marker([52.2097,5.28183]).bindPopup("<strong>Tools4ever BV</strong><br />Amalialaan 126C<br />3743 KJ Baarn<br />Nederland",{autoClose:!1}).addTo(r).openPopup(),L.polygon([[52.20826100754171,5.281616712226249],[52.20836866577901,5.2817266827900236],[52.208295934861056,5.281955709587972],[52.20830579668742,5.28197113228899],[52.208261418451535,5.282101889971525],[52.20824169477692,5.282097196105998],[52.20818334551926,5.282244717598688],[52.20808554870815,5.282148158079276]],{color:"#07a0b5"}).bindPopup("Station Baarn",{autoClose:!1}).addTo(r).openPopup()}}),jQuery(window).resize(function(){resize()})