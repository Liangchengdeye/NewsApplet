// pages/detail/detail.js
// 引入转换插件
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //保存用户点击文章的id
    ArticleId: '',
    // 新闻详情内容
    newArticle: '',
    body: '',
    // 屏幕可用的高度
    height: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取当前用户点击的文章ID
    this.setData({ ArticleId: options.id })
    // console.log(this.options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成-原
   *   onReady: function () {
    var that = this;
    console.log(this.data.ArticleId)
    // 页面初始化时，向服务器发送请求
    wx.request({
      url: 'http://c.m.163.com/nc/article/' + this.data.ArticleId + '/full.html', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res);
        // 保存新闻内容
        that.setData({ newArticle: res.data[that.data.ArticleId] });
        var body = res.data[that.data.ArticleId].body;
        var img = res.data[that.data.ArticleId].img;
        var video = res.data[that.data.ArticleId].video;
        // 循环遍历图片
        if (img.length > 0) {
          for (var i = 0; i < img.length; i++) {
            // 替换掉body里面的图片
            body = body.replace(img[i].ref, '<img src="' + img[i].src + '"/>')
          }
        }
        //循环遍历视频组件
        if(video) {
          for (var i = 0; i < video.length; i++ ) {
            // console.log(video[i].url_mp4)
            body = body.replace(video[i].ref, '<video autoplay="true" poster="'+video[i].cover+'" src="' + video[i].url_mp4+ '"/>')
          }
        }
        // 设置内容
        WxParse.wxParse('body', 'html', body, that, 5);
      }
    });

    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({ height: res.windowHeight })
      }
    })
  },
   */
  onReady: function () {
    var that = this;
    // 页面初始化时，向服务器发送请求
    wx.request({
      url: 'http://127.0.0.1:8090/system/news/api/visit', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        "titleId": this.data.ArticleId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    });

    wx.request({
      url: 'http://127.0.0.1:8090/system/news/api/title/'+this.data.ArticleId, //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // 保存新闻内容
        that.setData({ newArticle: res.data });
        var body = res.data.content;
        // var img = res.data.indexImgPath;
        // var video = res.data[that.data.ArticleId].video;
        // 循环遍历图片
        // body = body.replace(img[i].ref, '<img src="' + img[i].src + '"/>')
        // if (img.length > 0) {
          
        //   for (var i = 0; i < img.length; i++) {
        //     console.log(img);
        //     // 替换掉body里面的图片
        //     body = body.replace(img[i].ref, '<img src="' + img[i].src + '"/>')
        //   }
        // }
        //循环遍历视频组件
        // if(video) {
        //   for (var i = 0; i < video.length; i++ ) {
        //     // console.log(video[i].url_mp4)
        //     body = body.replace(video[i].ref, '<video autoplay="true" poster="'+video[i].cover+'" src="' + video[i].url_mp4+ '"/>')
        //   }
        // }
        // 设置内容
        WxParse.wxParse('body', 'html', body, that, 5);
      }
    });

    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({ height: res.windowHeight })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})