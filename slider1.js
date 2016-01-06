jQuery.noConflict();
jQuery( document ).ready( function($) {

  var myslider = new YerSlider();

  myslider.init({

    // sliderid
    sliderid: '.mysliderclass',

    // fadein
    sliderfadeinspeed: 'slow',
    
    // slidegap
    slidegap: 10,
    
    // slidegroups
    slidegroupresp: {
      0: 1,
      450: 2,
      900: 3
    },
    
    // swipe
    swipe: true,
    swipemouse: false,
    swipeandprevnextbtn: false,
    swipeanimationspeed: 300,
    
    // keys
    nextkey: 13,
    prevkey: 14,
    
    // animation
		animationtype: 'ease', /* ease, ease-in-out, ease-in, ease-out, linear */
		animationspeed: 1000,
    
    // loop
    loop: 'infinite', // none, rollback, infinite

    // animation
    animationspeed: 1000,
    animationtype: 'ease', // ease, ease-in-out, ease-in, ease-out, linear

    // autoplay
    autoplay: true,
    autoplayinterval: 2000,
    autoplaydelaystart: 0,
    autoplaystoponhover: true,

    // buttons
    nextbtn: true,
    prevbtn: true,
    prevnextlocation: 'inside', // inside, outside
    
    // bullets
    bullets: true,
    bulletslocation: 'outside', // inside, outside,
    // TODO: bulletclickable: false,

    // thumbs
    thumbs: true,
    thumbshideiflessthan: 2,
    thumbslocation: 'outside', // inside, outside
    thumbsclickable: true,
    thumbstemplates: {
	    '1': {
		    'html': '<p>{{thumb-text}}</p>',
		    'class': 'thumb-template-1'
	    }
    },
    thumbsready: function( p ) {

      var yersliderthumbs = new   YerSliderThumbs();
      yersliderthumbs.init({
          obj: p.obj,
          param: p.param
      });
    },
    
    // detach
    detach: {
      targets: {
        '1': {
          selector_wrap: '.detach-target', // selector
          selector_item: '.detach-target-item', // selector
          insert_selector: '.code', // 'this' (the current slider wrap element) / 'viewport' / 'bullets' / 'thumbs' / any class / any id
          insert_method: 'append', // 'before', 'after', 'append', 'prepend'
          template_wrap: '<div class="detach-target">detach: {content} (content from current slides)</div>', // html
          template_item: '<span class="detach-target-item"> {content}</span>', // html
          change: function( p ) {
   
            /*  This function is called on every slide event and
                is intended to show the current detachings.
  
                p: {
                  items: slider items objects,
                  items_current: current slider items objects
                }
            */
            var root = p.items.parents( '.detach-target' ),
            height = root.height();
  
            root.css( 'height', height + 'px' );
		  						
            window.setTimeout( function () {
		  						
              p.items.fadeOut( 90 );
            }, 600 );
		  						
            window.setTimeout( function () {
		  	
              p.items_current.fadeIn( 300 );
		  	
              window.setTimeout( function () {
		  								
                root.css( 'height', 'auto' );
              }, 100 );
		  	
            }, 700 );
          },
        }
      },
      sources: {
        '1': {
          target_id: '1', // key of targets object
          selector: '.detach', // selector
          source: 'element', // 'element' / 'content'
          remove: '.detach', // selector
        }
      }
    },
    
    // callbacks
    sliderready: function() {
      $('.code').append('sliderready: Slider is ready!');
    },
    
  });
 
});
