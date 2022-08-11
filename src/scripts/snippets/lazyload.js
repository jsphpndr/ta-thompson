// https://github.com/aFarkas/lazysizes/commit/01fe48672dd38f05e4166a433aab64e519521aa8
// http://afarkas.github.io/lazysizes/rias/

document.addEventListener('lazyriasmodifyoptions', function(e) {
  e.detail.aspectratio = e.target.offsetWidth / e.target.offsetHeight;
});


let prefix = 'https://res.cloudinary.com/filiio/image/fetch/c_fill,g_auto,f_auto,w_{width}/';

if(document.getElementById('exact')) {
    prefix = prefix.replace(/\/$/, "") + ',h_{height}/';
}

window.lazySizesConfig = window.lazySizesConfig || {};

window.lazySizesConfig.rias = window.lazySizesConfig.rias || {
prefix: prefix,
absUrl: true
};
