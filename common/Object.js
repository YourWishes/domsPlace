'use strict';

Object.isUndefined = Object.isUndefined || function(v) {
    return typeof v === typeof undefined;
}

Object.isDefined = Object.isDefined || function(v) {
    return !Object.isUndefined(v);
}

Object.isBoolean = Object.isBoolean || function(v) {
    return Object.isDefined(v) && typeof v === 'boolean';
}

Object.merge = Object.merge || function(left_most, right_most) {
    let d = {};
    var left_keys = Object.keys(left_most);
    for(var i = 0 ; i < left_keys.length; i++) {
        var k = left_keys[i];
        if(typeof right_most[k] !== typeof undefined) continue;
        d[k] = left_most[k];
    }

    var right_keys = Object.keys(right_most);
    for(var i = 0; i < right_keys.length; i++) {
        var k = right_keys[i];
        d[k] = right_most[k];
    }

    return d;
}

Object.extendClass = Object.extendClass || function(super_class,new_methods) {
    return Object.assign(Object.assign({}, super_class), new_methods);
}

module.exports = Object;
