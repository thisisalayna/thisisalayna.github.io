;(function () {
  window.serviceCallbacks.push(function() {
    const stickyService = new services.StickyService({selector: '#app-bar-sticky'});

    if (stickyService.element) {
      stickyService.stick();
    }
    window.services.StickyServiceAppBar = stickyService;

    const stickyRailService = new services.StickyService({selector: '#left-rail'});

    if (stickyRailService.element) {
      stickyRailService.stick();
    }
  })
})();

;(function () {
  trb.run.push(function() {
    imageService.loadContainer({
      container: '#right-rail'
    })
    imageService.loadContainer({
      container: '#left'
    })
  })
})();
