;(function () {

  // This features loads a lot slower, resulting in code running before the feature is fully build
  // Therefore, it needs to trigger a few services to ensure the correct behavior
  if (window.services) {
    if (window.services.sliderService) {
      window.services.sliderService.initialize();
      window.services.sliderService.checkDevice();
      window.services.sliderService.vanishTicker();
    }
    if (window.services.StickyServiceAppBar) {
      window.services.StickyServiceAppBar.reSetHeight();
    }
  }

})();
