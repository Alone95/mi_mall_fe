/*
 * @Author: alone 
 * @Date: 2017-12-12 14:55:37 
 * @Last Modified by:   alone 
 * @Last Modified time: 2017-12-12 14:55:37 
 */

'use strict';

var _mm = require('util/mm.js');


var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    },
   //获取推荐商品
    getProductRecommend: function (listParam, resolve, reject) {
        _mm.request({
            data: listParam,
            url: _mm.getServerUrl('/index/getProductRecommend.do'),
            success: resolve,
            error: reject 
        });
    }
};
module.exports = _product;