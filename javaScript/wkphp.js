var php = {
    in_array: function (needle, haystack, strict) {
        var ix;
        if (haystack instanceof Array) {
            if (!strict) {
                for (ix = 0; ix < haystack.length; ix++) {
                    if (needle == haystack[ix]) { return true; }
                }
            } else {
                for (ix = 0; ix < haystack.length; ix++) {
                    if (needle === haystack[ix]) { return true; }
                }
            }
            return false;

        } else if (this.isObject(haystack)) {
            if (!strict) {
                for (ix in haystack) {
                    if (needle == haystack[ix]) { return true; }
                }
            } else {
                for (ix in haystack) {
                    if (needle === haystack[ix]) { return true; }
                }
            }
        }
        return false;
    },
    array_key_exists: function (key, haystack) {
        if (haystack instanceof Array && this.isNumberOrString(key) && isFinite(key = +key)) {
            return haystack.length > key;
        } else if (this.isObject(haystack)) {
            return key in haystack;
        }
        return false;
    },
    count: function (haystack) {
        if (haystack instanceof Array) { return haystack.length; }
        else if (this.isObject(haystack)) { return haystack.keys.length; }
        return 0;
    },
    
    isObject: function (val) {
        return null != val && 'object' == typeof val;
    },
    isNumberOrString: function (val) {
        return 'number' == typeof val || 'string' == typeof val;
    },
    rusMonths: {
        1: 'янв',
        2: 'фев',
        3: 'мар',
        4: 'апр',
        5: 'май',
        6: 'июн',
        7: 'июл',
        8: 'авг',
        9: 'сен',
        10: 'окт',
        11: 'ноя',
        12: 'дек'
    },

    niceUnixTime: function (format, timestamp) {
        var timeDate;

        if ('undefined' == typeof timestamp) {
            timeDate = new Date();
        } else {
            timeDate = new Date(+timestamp * 1000);
        }

        var minutes = "0" + timeDate.getMinutes();
        var hours = "0" + timeDate.getHours();
        var date = "0" + timeDate.getDate();
        var month = "0" + (timeDate.getMonth() + 1);
        var monthRus = this.rusMonths[+month];
        var year = timeDate.getFullYear();

        if (true === format) {
            return hours.substr(-2) + ':' + minutes.substr(-2);
        } else if (false === format) {
            return date.substr(-2) + ' ' + monthRus + ' ' + year;
        }
    }
};
