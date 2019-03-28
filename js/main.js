var controller = new ScrollMagic.Controller();

var animateIn = new TimelineMax();

animateIn
  .fromTo(
    ".overlay",
    2,
    { skewX: 30, scale: 2.5 },
    {
      skewX: 0,
      xPercent: 100,
      transformOrigin: "0% 100%",
      ease: Power4.easeOut
    }
  )
  .from(
    ".project-info",
    1,
    { scaleY: 0, transformOrigin: "bottom left" },
    "-=1.5"
  );

//   making a scroll magic scene

var scene = new ScrollMagic.Scene({
  triggerElement: ".project"
})
  .setTween(animateIn)
  .addTo(controller);
