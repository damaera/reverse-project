var h = document.querySelector('h1');
var arr = {
  ssr: ['100k', '80k'],
  sr: ['10k', '5k', '2k', 'gelas'],
  r: ['teh', 'permen', 'indomie', 'kopi', 'stiker']
};

var gacha = function() {
  var rand = Math.random() * 100;
  var arRand = function(max) {
    var a = Math.round(Math.random() * max);
    return a;
  };


  if (rand <= 1) {
    var x = arRand(arr.ssr.length - 1);
    var result = arr.ssr[x];
    h.innerHTML = result;
    document.querySelector('h2').innerHTML = "SSR";
    document.querySelector('h2').setAttribute('type', 'SSR');
  } else if (rand > 1 && rand <= 10) {
    var x = arRand(arr.sr.length - 1);
    var result = arr.sr[x];
    h.innerHTML = result;
    document.querySelector('h2').innerHTML = "SR";
    document.querySelector('h2').setAttribute('type', 'SR');

  } else if (rand > 10 && rand <= 100) {
    var x = arRand(arr.r.length - 1);
    var result = arr.r[x];
    h.innerHTML = result;
    document.querySelector('h2').innerHTML = "R";
    document.querySelector('h2').setAttribute('type', 'R');


  }

}
