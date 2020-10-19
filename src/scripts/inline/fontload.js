function loadFonts() {
  if ("fonts" in document) {
  var fontRegular = new FontFace(
    "Font",
    "url(https://static.josephpinder.com/fonts/metropolis-regular.woff2) format('woff2'), url(https://static.josephpinder.com/fonts/metropolis-regular.woff) format('woff')",
    { weight: "400"}
  );

  var fontRegularItalic = new FontFace(
    "Font",
    "url(https://static.josephpinder.com/fonts/metropolis-regular-italic.woff2) format('woff2'), url(https://static.josephpinder.com/fonts/metropolis-regular-italic.woff) format('woff')",
    { weight: "400"}
  );

  var fontMedium = new FontFace(
    "Font",
    "url(https://static.josephpinder.com/fonts/metropolis-medium.woff2) format('woff2'), url(https://static.josephpinder.com/fonts/metropolis-medium.woff) format('woff')",
    { weight: "500" }
  );

  var fontMediumItalic = new FontFace(
    "Font",
    "url(https://static.josephpinder.com/fonts/metropolis-medium-italic.woff2) format('woff2'), url(https://static.josephpinder.com/fonts/metropolis-medium-italic.woff) format('woff')",
    { weight: "500" }
  );

  var fontBold = new FontFace(
    "Font",
    "url(https://static.josephpinder.com/fonts/metropolis-bold.woff2) format('woff2'), url(https://static.josephpinder.com/fonts/metropolis-bold.woff) format('woff')",
    { weight: "700" }
  );

  var fontBoldItalic = new FontFace(
    "Font",
    "url(https://static.josephpinder.com/fonts/metropolis-bold-italic.woff2) format('woff2'), url(https://static.josephpinder.com/fonts/metropolis-bold-italic.woff) format('woff')",
    { weight: "700" }
  );

  Promise.all([
    fontRegular.load(),
    fontRegularItalic.load(),
    fontMedium.load(),
    fontMediumItalic.load(),
    fontBold.load(),
    fontBoldItalic.load()
  ]).then(function(loadedFonts) {

    // Render them at the same time
    loadedFonts.forEach(function(font) {
      document.fonts.add(font);
    });
  });
}
}

if( navigator.connection &&
    navigator.connection.saveData ) {
} else {
  loadFonts();
}

if( "matchMedia" in window &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ) {
  // do nothing
} else {
  loadFonts();
}

if( navigator.connection &&
  ( navigator.connection.effectiveType === "slow-2g" ||
    navigator.connection.effectiveType === "2g" ) ) {
  // do nothing
} else {
  loadFonts();
};
