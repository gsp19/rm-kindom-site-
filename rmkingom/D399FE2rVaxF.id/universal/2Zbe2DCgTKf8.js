window._hbdbrk = window._hbdbrk || [];
window._hbdbrk.push([ '_id', '94db3705-d4bb-5744-86ca-8bca9332b7f9' ]);

var hbdbrkElements = [];
var st = document.createElement('script');
var supportModule = 'noModule' in st;
window._hbdbrk.push([ '_module', supportModule ]);

var hbdbrkConfig = supportModule ? {"main":"assets/js/hbdbrk_e2221ce49950e149948a_m.js","style":"assets/css/hbdbrk_e2221ce49950e149948a.css","dependencies":["assets/js/inc/pbjs_8abc0fa36b9b3c350c70_m.js"],"polyfill":["assets/js/polyfill_7c4868a7d8d62c5bce03_m.js"]} : {"main":"assets/js/hbdbrk_ae7b5597444fe09dd023.js","style":"assets/css/hbdbrk_ae7b5597444fe09dd023.css","dependencies":["assets/js/inc/pbjs_f8f908211743ce00858d.js"],"polyfill":["assets/js/polyfill_4a40fb24d1006daca082.js"]};

try {
  if (
    !(window.ResizeObserver && 'IntersectionObserver' in window)
    || !('IntersectionObserverEntry' in window)
    || typeof document.head.after != 'function')
  {
    var pl = document.createElement('script');
    pl.type = 'text/javascript';
    pl.async = true;
    pl.src = 'https://D399FE2rVaxF.id/' + hbdbrkConfig.polyfill;
    document.head.insertAdjacentElement('afterbegin', pl);
  }
} catch (e) {
}

//add main script
st.type = 'text/javascript';
st.async = true;
st.src = 'https://D399FE2rVaxF.id/' + hbdbrkConfig.main;
hbdbrkElements.push(st);
var hbdbrkDependencies = hbdbrkConfig.dependencies ? hbdbrkConfig.dependencies : [];

for (var i = 0; i < hbdbrkDependencies.length; i++) {
  var st = document.createElement('link');
  st.rel = 'preload';
  st.as = 'script';
  st.href = 'https://D399FE2rVaxF.id/' + hbdbrkDependencies[i];
  hbdbrkElements.push(st);
}

if (hbdbrkConfig.style) {
  var se = document.createElement('link');
  se.rel = 'stylesheet';
  se.href = 'https://D399FE2rVaxF.id/' + hbdbrkConfig.style;
  hbdbrkElements.push(se);
}

for (var p in hbdbrkElements) {
  document.head.insertAdjacentElement('afterbegin', hbdbrkElements[p]);
}
