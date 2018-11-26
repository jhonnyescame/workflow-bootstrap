/*external js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/
window.onload = function() {

  var logo 	= document.getElementById('logo');

  //TweenLite.to(logo, 2, {left:"450px", backgroundColor:"black", borderBottomColor:"#90e500", color:"white"});
  TweenLite.to(logo, 2, {x: -550} );
  //TweenLite.set(h2, 2, {x: -200} );

}



// (function($){
//   	var logo = $('#logo');
//   	// Simple Tween
//   	TweenLite.set(logo , 1 , {x: -200} , {x: 200});
//   	TweenLite.to(logo , 2, {width:200, height:150});
// })(jQuery);