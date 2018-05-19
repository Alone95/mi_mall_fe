/*
 * @Author: alone 
 * @Date: 2017-12-12 14:56:23 
 * @Last Modified by:   alone 
 * @Last Modified time: 2017-12-12 14:56:23 
 */


'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide         = require('page/common/nav-side/index.js');
var templateBanner  = require('./banner.string');
// var htmlTemplate = require('./index.string');
var _mm             = require('util/mm.js');
var _index          = require('service/index-service.js');

$(function() {
    // 渲染banner的html
    var bannerHtml  = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});

$(function () {
    $('.banner').unslider();
   // page.init();
});

// var page ={
//     init: function () {
//         var html ="";
//         html =_mm.renderHtml(htmlTemplate,'');
//         this.getProductRecommend();
        
//     },




// }

