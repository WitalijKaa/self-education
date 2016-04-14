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
    }
};
