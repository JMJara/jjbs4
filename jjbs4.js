/**
 * JJara Boostrap 4 functions
 * Juan Manuel Jaramillo
 */

/**
 * contains the all the breakpoints used
 * by Bootstrap 4
 * @type {array}
 */
var jjbs4Breakpoints = ['xs','sm','md','lg','xl'];

/**
 * Timeout in ms to trigger the 'resizeEnd' event
 * after changing window size
 * @type {integer}
 */
var jjbs4ResizeEndTimeout = 100;

/**
 * contains the current breakpoint
 * @type {string}
 */
var currentBreakpoint;

/**
 * Check if given breakpoint is in this moment true or false
 * @param {string} breakpoint
 * @returns {boolean}
 */
function isBreakpoint( breakpoint ) {
    $.each(jjbs4Breakpoints,function (index, value) {
        var classes = 'jjbs4-device jjbs4-device-'+value+' ';
        $.each(jjbs4Breakpoints,function (i, v) {
            if(index != i){
                if(i==0)classes = classes + 'd-none ';
                else classes = classes + 'd-'+v+'-none ';
            }
            else{
                if(i==0)classes = classes + 'd-block ';
                else classes = classes + 'd-'+v+'-block ';
            }
        });
        $( 'body' ).append( '<div style="width: 0;height: 0" class="'+classes+'"></div>' );
    });
    var isBreakpoint = $( '.jjbs4-device-' + breakpoint ).is( ':visible' );
    $('.jjbs4-device').remove();
    return isBreakpoint;
}

/**
 * Set currentBreakpoint an breakpoint HTML Class on init
 */
$(function() {
    currentBreakpoint = getCurrentBreakpoint();
    $('html').addClass( getCurrentBreakpoint() );
});

/**
 * Set currentBreakpoint an breakpoint HTML Class
 * on and resize
 */
$(function() {
    $(window).on('resize', function() {
        $.each(jjbs4Breakpoints,function (index, value) {
            if(isBreakpoint(value)){
                currentBreakpoint = value;
                $('html').addClass(value);
            }
            else{
                $('html').removeClass(value);
            }
        });
    });
});

/**
 * 'resizeEnd' event function
 */
$(function() {
    var resizeEnd;
    $(window).on('resize', function() {
        clearTimeout(resizeEnd);
        resizeEnd = setTimeout(function() {
            $(window).trigger('resizeEnd');
        }, jjbs4ResizeEndTimeout);
    });
});

/**
 * 'breakpointHasChanged' event function
 */
$(function() {
    lastBreakpoint = getCurrentBreakpoint();
    $(window).on('resize', function() {
    if(lastBreakpoint != getCurrentBreakpoint())
        $(window).trigger('breakpointHasChanged');
        lastBreakpoint = getCurrentBreakpoint();
    });
});

/**
 * Get the current breakpoint
 * @returns {string}
 */
function getCurrentBreakpoint() {
    var breakpoint = false;
    $.each(jjbs4Breakpoints,function (index, value) {
        if( isBreakpoint( value ) ){
            breakpoint =  value;
        }
    });
    return breakpoint;
}

/**
 * IMG src load after Page Ready
 */
$(function() {
    $( window ).on( "load breakpointHasChanged" , function(event) {
        console.log(event.type);
        $('[data-jjbs4-src]').each(function (  ) {
            var element = $(this);
            if( element.is('img') ){
                var srcTemp = element.attr("data-jjbs4-src").split(",");
                if(srcTemp.length == 1 && event.type != 'breakpointHasChanged' ){
                    setImgSrc( element , $.trim(srcTemp[0]) );
                }
                if(srcTemp.length > 1){
                    var srcArray = [];
                    var srcSmal = false;
                    $.each( srcTemp , function (index, value) {
                        srcTempData = $.trim(value).split(/\s+/);
                        if( typeof srcTempData[1] !== 'undefined' ) {
                            srcArray[srcTempData[1]] = srcTempData[0];
                        }
                        else{
                            srcArray['default'] = srcTempData[0]
                        }
                    });
                    $.each(jjbs4Breakpoints,function (index, value) {
                        if( typeof srcArray[value] !== 'undefined' && !srcSmal ) {
                            srcSmal = srcArray[value];
                        }
                        if( !srcSmal ) {
                            srcSmal = srcArray['default'];
                        }
                    });
                    $.each(jjbs4Breakpoints,function (index, value) {
                        if( typeof srcArray[value] === 'undefined') {
                            srcArray[value] = srcSmal;
                        }
                        else{
                            srcSmal = srcArray[value];
                        }
                    });
                    setImgSrc( element , srcArray[currentBreakpoint]);
                }
            }
        });
    });
});

/**
 * Set IMG src
 * @param $img
 * @param {string} src
 */
function setImgSrc( $img , src ) {
    var $image = $img;
    var $tempImage = $("<img>");
    $tempImage.load(function(){
        $image.attr("src", $(this).attr("src"));
    });
    $tempImage.attr("src", src);
}
