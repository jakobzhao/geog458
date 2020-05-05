/**
 *  Extend the Polygon Object to set an image to fill the path in SVG
 *  exp:
 *    L.Polygon(points, {fill: 'url(image.gif)'});
 *  Author: lanwei@cloudybay.com.tw
 */

(function (window, document, undefined) {

if (L.Browser.svg) {
    L.SVG.include({
        _updateStyle: function (layer) {
            var path = layer._path,
                options = layer.options;

            if (!path) { return; }

            if (options.stroke) {
                path.setAttribute('stroke', options.color);
                path.setAttribute('stroke-opacity', options.opacity);
                path.setAttribute('stroke-width', options.weight);
                path.setAttribute('stroke-linecap', options.lineCap);
                path.setAttribute('stroke-linejoin', options.lineJoin);

                if (options.dashArray) {
                    path.setAttribute('stroke-dasharray', options.dashArray);
                } else {
                    path.removeAttribute('stroke-dasharray');
                }

                if (options.dashOffset) {
                    path.setAttribute('stroke-dashoffset', options.dashOffset);
                } else {
                    path.removeAttribute('stroke-dashoffset');
                }
            } else {
                path.setAttribute('stroke', 'none');
            }

            if (options.fill) {
                if (typeof(options.fill) == "string" &&
                        options.fill.match(/^url\(/)) {
                    // here what we add
                    this.__fillPattern(layer);
                }
                else {
                    path.setAttribute('fill', options.fillColor || options.color);
                }
                path.setAttribute('fill-opacity', options.fillOpacity);
                path.setAttribute('fill-rule', options.fillRule || 'evenodd');
            } else {
                path.setAttribute('fill', 'none');
            }
        },

        __fillPattern: function(layer) {
            var path = layer._path,
                options = layer.options;

            if (!this._defs) {
                this._defs = L.SVG.create('defs');
                this._container.appendChild(this._defs);
            }
            var _img_url = options.fill.substring(4, options.fill.length-1);
            var _ref_id = _img_url + (Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17));
            _ref_id += new Date().getUTCMilliseconds();
            var _p = document.getElementById(_ref_id);
            if (!_p) {
                var _im = new Image();
                _im.src = _img_url;

                _p = L.SVG.create('pattern');
                _p.setAttribute('id', _ref_id);
                _p.setAttribute('x', '0');
                _p.setAttribute('y', '0');
                _p.setAttribute('patternUnits', 'userSpaceOnUse');
                _p.setAttribute('width', '24');
                _p.setAttribute('height', '24');
                var _rect = L.SVG.create('rect');
                _rect.setAttribute('width', 24);
                _rect.setAttribute('height', 24);
                _rect.setAttribute('x', 0);
                _rect.setAttribute('x', 0);
                _rect.setAttribute('fill', options.fillColor || options.color);

                _p.appendChild(_rect);
                this._defs.appendChild(_p);

                var _img = L.SVG.create('image');
                _img.setAttribute('x', '0');
                _img.setAttribute('y', '0');
                _img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', _img_url);
                _img.setAttribute('width', '24');
                _img.setAttribute('height', '24');
                _p.appendChild(_img);

                _im.onload = function() {
                    _p.setAttribute('width', _im.width);
                    _p.setAttribute('height', _im.height);
                    _img.setAttribute('width', _im.width);
                    _img.setAttribute('height', _im.height);
                };
            }
            path.setAttribute('fill', "url(#"+_ref_id+")");
        }
    });
}

}(this, document));

