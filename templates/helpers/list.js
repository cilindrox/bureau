'use strict';

module.exports = (items, options) => {
    let out = '';

    // FIXME: use map

    for (let i=0, l=items.length; i < l; ++i) {
        out = out + '<li><a>' + options.fn(items[i]) + '</a></li>';
    }

    return out;
};
