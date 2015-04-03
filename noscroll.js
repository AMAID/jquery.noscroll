(function($){
    $.fn.extend({
        noscroll:function(outer){
            var $inner=$(this),
                $outer
            if(!outer){$outer=$inner.parent()}
            else{$outer=$(outer)}
            $outer.mousemove(function(e){

                var ow=$outer.width(),
                    iw=$inner.width(),
                    oh=$outer.height(),
                    ih=$inner.height()
                $.event.fix(e);
                var positionX = e.originalEvent.x - $outer.offset().left || e.originalEvent.layerX,
                    positionY = e.originalEvent.y - $outer.offset().top || e.originalEvent.layerY
                if (positionX > 0&& ow<iw) {
                    $inner.css({ "margin-left": (ow - iw) * (positionX) / ow + "px" });
                }
                if (positionY > 0&&oh<ih) {
                    $inner.css({ "margin-top": (oh - ih) * (positionY) / oh + "px" });
                }
            })
        }
    })
})(jQuery);


