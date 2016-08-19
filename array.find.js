'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return root.Array.prototype.find = factory(root.Array.prototype);
        });

    } else if (typeof exports !== 'undefined') {
        root.Array.prototype.find = factory(root.Array.prototype);

    } else {
        root.Array.prototype.find = factory(root.Array.prototype);
    }
}(this, function (ArrayPrototype) {
    if (ArrayPrototype.find !== undefined) {
        return ArrayPrototype.find;
    }

    return function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }

        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }

        var list    = Object(this);
        var length  = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}));
