(function() {

  var body = document.querySelector('body');
  var container = document.getElementById('container');
  var score = document.getElementById('score');
  var div;
  var counter = 0;
  var clicked = [];
  var results = [];

  var images = {div1: 'url("https://boldlyproclaimingchrist.files.wordpress.com/2009/09/wolf.jpg?w=600")',
  div5: 'url("https://boldlyproclaimingchrist.files.wordpress.com/2009/09/wolf.jpg?w=600")',
  div2: 'url("http://cdn4.list25.com/wp-content/uploads/2011/11/dangerousanimals.png")',
  div15: 'url("http://cdn4.list25.com/wp-content/uploads/2011/11/dangerousanimals.png")',
  div3: 'url("http://www.planetdeadly.com/wp-content/uploads/grizzly-bear-420x347.jpg")',
  div9: 'url("http://www.planetdeadly.com/wp-content/uploads/grizzly-bear-420x347.jpg")',
  div4: 'url("http://www.hd-wallpapersdownload.com/upload/bulk-upload/ferocious-tiger-images.jpg")',
  div10: 'url("http://www.hd-wallpapersdownload.com/upload/bulk-upload/ferocious-tiger-images.jpg")',
  div6: 'url("http://www.freemalaysiatoday.com/wp-content/uploads/2013/12/Sun-Bears-300x224.jpg")',
  div8: 'url("http://www.freemalaysiatoday.com/wp-content/uploads/2013/12/Sun-Bears-300x224.jpg")',
  div7: 'url("http://www.awesomelycute.com/gallery/2011/09/awesomely-cute-animals-245.jpg")',
  div13: 'url("http://www.awesomelycute.com/gallery/2011/09/awesomely-cute-animals-245.jpg")',
  div14: 'url("http://i00.i.aliimg.com/wsphoto/v0/1904821646_1/ferocious-panther-diamond-painting-set-for-embroidery-diamond-cross-stitch-kit-Inlaid-decorative-painting-handmade-craft.jpg")',
  div16: 'url("http://i00.i.aliimg.com/wsphoto/v0/1904821646_1/ferocious-panther-diamond-painting-set-for-embroidery-diamond-cross-stitch-kit-Inlaid-decorative-painting-handmade-craft.jpg")',
  div12: 'url("http://3.bp.blogspot.com/-6EQqAX2Sqec/TvpEs6R6B8I/AAAAAAAAAZo/GJvvR4mO2eA/s1600/piranha+1.jpg")',
  div11: 'url("http://3.bp.blogspot.com/-6EQqAX2Sqec/TvpEs6R6B8I/AAAAAAAAAZo/GJvvR4mO2eA/s1600/piranha+1.jpg")'
  };

function scoreTally() {
  score.innerHTML = 'current score is ' + results.length / 2;

  if (results.length == 16) {
    alert('YOU WON!');
  }
}
  (function board() {

    for (var i = 1; i < 17; i++) {
      var checker = document.createElement('div');


      checker.style.float = "left";
      checker.style.paddingBottom = '150px';
      checker.style.width = '150px';
      checker.style.border = 'solid 1px black';
      checker.style.backgroundColor = 'teal';
      checker.setAttribute('id', 'div' + i);




      checker.addEventListener("click", function() {
        if (counter === 2) {
          console.log(results);
         for (var i = 0; i < div.length; i ++) {
            div[i].style.backgroundImage = '';
          for (var j = 0; j < results.length; j ++) {
            if(div[i].getAttribute('id') === results[j]) {
              div[i].style.backgroundImage = images[results[j]];
            }
          }
        }
        counter = 0;
        }
        else if (this.style.backgroundColor === "teal") {
          for (var key in images) {
            if (key === this.getAttribute('id')) {
              this.style.backgroundImage = images[key];
              this.style.backgroundSize = "150px 150px";
              counter ++;
              clicked.push(images[key]);
              results.push(key);
              if (counter == 2) {
                if (clicked[0] === clicked[1]) {
                  clicked = [];
                  scoreTally();
                } else {results.pop(); results.pop();
                  clicked = []; }
              }
            }
          }
        }
      });
      container.appendChild(checker);
    }
  })();
div = document.querySelectorAll('div');

})();

