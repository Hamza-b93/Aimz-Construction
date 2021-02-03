//alert('working!');


  AOS.init();



window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {

  // `auto` allows automatic responsive
  // width calculations
  slidesToShow: 'auto',
  slidesToScroll: 'auto',

  // should have been named `itemMinWidth`
  // slides grow to fit the container viewport
  // ignored unless `slidesToShow` is set to `auto`
  itemWidth: undefined,

  // if true, slides wont be resized to fit viewport
  // requires `itemWidth` to be set
  // * this may cause fractional slides
  exactWidth: false,

  // speed aggravator - higher is slower
  duration: 2.0,

  // dot container element or selector
  dots: 'CSS Selector',

  // arrow container elements or selector
  arrows: {
    prev: '.glider-prev',
    // may also pass element directly
    next: document.querySelector('.glider-next')
  },

  // allow mouse dragging
  draggable: false,
  // how much to scroll with each mouse delta
  dragVelocity: 3.3,

  // use any custom easing function
  // compatible with most easing plugins
  easing: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },

  // event control
  scrollPropagate: false,
  eventPropagate: true,

  // Force centering slide after scroll event
  scrollLock: false,
  // how long to wait after scroll event before locking
  // if too low, it might interrupt normal scrolling
  scrollLockDelay: 150,

  // Force centering slide after resize event
  resizeLock: true,

  // Glider.js breakpoints are mobile-first
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});
});
