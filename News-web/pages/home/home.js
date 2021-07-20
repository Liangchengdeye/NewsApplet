// pages/home/home.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
      // 设置导航栏信息
      navType: [
        { key: 'headline', name: '推荐', newMsgId: 'T1348647853363', keep: '' },
        { key: 'dangjian', name: '党建', newMsgId: 'T1348648756010', keep: '' },
        { key: 'car', name: '汽车', newMsgId: 'T1348654060988', keep: '' },
        { key: 'hot', name: '热点', newMsgId: 'T1348647853363', keep: '' },
        { key: 'fasion', name: '时尚', newMsgId: 'T1348650593803', keep: '' },
        { key: 'list', name: '娱乐', newMsgId: 'T1348648517839', keep: '' },
        { key: 'life', name: '健康', newMsgId: 'T1414389941036', keep: '' },
        { key: 'money', name: '财经', newMsgId: 'T1348648756099', keep: '' }
      ],
      test: '',
      // 设置当前的导航栏选中值为：
      cursor: 'headline',
      scrollHeight: '500',
      // 设置新闻内容
      newMsg: [],
      // 设置新闻请求数据ID
      newMsgId: 'T1348647853363',
      // 初始化页码数
      page: 1,
      // 设置请求的内容栏目(默认为推荐headline)
      requestKey: 'headline',
      // 下拉刷新设置
      pageAdd: 10,
      pageAddEnd: 20
    },

    // 切换导航栏选项底边框
    change: function (e) {
      this.setData({ cursor: e.target.dataset.key })
      // console.log(this.data.newMsgId)
      // 调用函数请求数据
      if (e.target.dataset.newmsgid != this.data.newMsgId) {
        this.setData({ newMsgId: e.target.dataset.newmsgid })
        // console.log('请求数据')
        // this.Request()
      } else {
        // console.log('您点击的是同样的栏目')
      }
    },

    // swiper自带的bindchange事件
    swiperChange: function (e) {
      // console.log(e.detail.source)
      var that = this;
      // 判断是否是由于用户触摸引起的
      if (e.detail.source == 'touch') {
        // console.log(e.detail.currentItemId);
        // 设置到导航栏的切换
        this.setData({ cursor: e.detail.currentItemId })
      }
    },

    // scroll-view 触底事件
    scrollEnd: function (e) {
      var that = this;
      // 推荐新闻触底
      if (e.target.dataset.id == 'headline') {
        // console.log('触底了')
        this.setData({ page: this.data.page + 1 })
        // 请求数据
        var pageStart = (that.data.page - 1) * 10;
        var pageEnd = that.data.page * 10;
        console.log('https://c.m.163.com/nc/article/headline/' + that.data.newMsgId + '/' + pageStart + '-' + pageEnd + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore');
        wx.request({
          url: 'https://c.m.163.com/nc/article/headline/' + that.data.newMsgId + '/' + pageStart + '-' + pageEnd + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
          method: 'GET',
          dataType: 'json',
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.data)
            // 获取原有的页面信息
            var News = that.data.navType[0].keep;
            // 请求的新的内容合并一起
            var sentData = News.concat(res.data.T1348647853363);
            // console.log(sentData)
            that.setData({
              "navType[0].keep": sentData
            })
          }
        })
      }
      // 热点新闻触底
      if (e.target.dataset.id == 'hot') {
        // console.log('触底了')
        this.setData({ page: this.data.page + 1 })
        // 请求数据
        var pageStart = (that.data.page - 1) * 10;
        var pageEnd = that.data.page * 10;
        wx.request({
          url: 'http://c.3g.163.com/recommend/getSubDocPic?passport=&devId=B45E64F7-002F-4126-8C7E-3DB0ACF6C85E&size=' + pageEnd + '', //仅为示例，并非真实的接口地址
          method: 'GET',
          dataType: 'json',
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.data)
            // 获取原有的页面信息
            var News = that.data.navType[1].keep;
            // console.log(res.data['推荐'])
            // 请求的新的内容合并一起
            var sentData = News.concat(res.data['推荐']);
            // console.log(sentData)
            that.setData({
              "navType[1].keep": sentData
            })
          }
        })
      }
      // 请求时尚数据
      if (e.target.dataset.id == 'fasion') {
        // console.log('触底了')
        this.setData({ page: this.data.page + 1 })
        // 请求数据
        var pageStart = (that.data.page - 1) * 10;
        var pageEnd = that.data.page * 10;
        wx.request({
          url: 'http://c.m.163.com/nc/article/list/T1348650593803/' + pageStart + '-' + pageEnd + '.html', //仅为示例，并非真实的接口地址
          method: 'GET',
          dataType: 'json',
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.data)
            // 获取原有的页面信息
            var News = that.data.navType[2].keep;
            // console.log(res.data.T1348650593803)
            // 请求的新的内容合并一起
            var sentData = News.concat(res.data.T1348650593803);
            // console.log(sentData)
            that.setData({
              "navType[2].keep": sentData
            })
          }
        })
      }
      // 请求娱乐数据
      if (e.target.dataset.id == 'list') {
        // console.log('触底了')
        this.setData({ page: this.data.page + 1 })
        // 请求数据
        var pageStart = (that.data.page - 1) * 10;
        var pageEnd = that.data.page * 10;
        wx.request({
          url: 'http://c.3g.163.com/nc/article/list/T1348648517839/' + pageStart + '-' + pageEnd + '.html',
          method: 'GET',
          dataType: 'json',
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.data.T1348648517839)
            // 获取原有的页面信息
            var News = that.data.navType[3].keep;
            // console.log(res.data.T1348650593803)
            // 请求的新的内容合并一起
            var sentData = News.concat(res.data.T1348648517839);
            // console.log(sentData)
            that.setData({
              "navType[3].keep": sentData
            })
          }
        })
      }
      // 请求健康数据
      if (e.target.dataset.id == 'life') {
        // console.log('触底了')
        this.setData({ page: this.data.page + 1 })
        // 请求数据
        var pageStart = (that.data.page - 1) * 10;
        var pageEnd = that.data.page * 10;
        wx.request({
          url: 'http://c.3g.163.com/nc/article/list/T1414389941036/' + pageStart + '-' + pageEnd + '.html',
          method: 'GET',
          dataType: 'json',
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.data.T1348648517839)
            // 获取原有的页面信息
            var News = that.data.navType[4].keep;
            // console.log(res.data.T1348650593803)
            // 请求的新的内容合并一起
            var sentData = News.concat(res.data.T1414389941036);
            // console.log(sentData)
            that.setData({
              "navType[4].keep": sentData
            })
          }
        })
      }
      // 请求财经数据
      if (e.target.dataset.id == 'money') {
        // console.log('触底了')
        this.setData({ page: this.data.page + 1 })
        // 请求数据
        var pageStart = (that.data.page - 1) * 10;
        var pageEnd = that.data.page * 10;
        wx.request({
          url: 'http://c.m.163.com/nc/article/list/T1348648756099/' + pageStart + '-' + pageEnd + '.html',
          method: 'GET',
          dataType: 'json',
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.data.T1348648517839)
            // 获取原有的页面信息
            var News = that.data.navType[5].keep;
            // console.log(res.data.T1348650593803)
            // 请求的新的内容合并一起
            var sentData = News.concat(res.data.T1348648756099);
            // console.log(sentData)
            that.setData({
              "navType[5].keep": sentData
            })
          }
        })
      }
      // 请求汽车数据
      if (e.target.dataset.id == 'car') {
        // console.log('触底了')
        this.setData({ page: this.data.page + 1 })
        // 请求数据
        var pageStart = (that.data.page - 1) * 10;
        var pageEnd = that.data.page * 10;
        wx.request({
          url: 'http://c.m.163.com/nc/article/list/T1348654060988/' + pageStart + '-' + pageEnd + '.html',
          method: 'GET',
          dataType: 'json',
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.data.T1348654060988)
            // 获取原有的页面信息
            var News = that.data.navType[1].keep;
            // console.log(res.data.T1348650593803)
            // 请求的新的内容合并一起
            var sentData = News.concat(res.data.T1348654060988);
            // console.log(sentData)
            that.setData({
              "navType[1].keep": sentData
            })
          }
        })
      }
    },
    
    // 请求推荐,热点，时尚，娱乐，健康数据
    Request: function (url, success) {
      var that = this;
      wx.request({
        url: url,
        method: 'GET',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
          // 'Content-Type': 'json'
        },
        success: success
      })
    },
    RequestPost: function (url, success, msgdata) {
      var that = this;
      wx.request({
        url: url,
        method: 'POST',
        data: msgdata,
        header: {
          'content-type': 'application/json' // 默认值
          // 'Content-Type': 'json'
        },
        success: success
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      var that = this;
      // 设置swiper占满屏幕高度
      wx.getSystemInfo({
        success: function (res) {
          var rh = res.windowHeight - 45 - 1;
          that.setData({ scrollHeight: rh })
        }
      });
      //调用初始化请求数据
      that.Request(
        'https://gw.m.163.com/nc-main/api/v1/hqc/no-repeat-hot-list',
        function (res) {
          // console.log("===>"+JSON.stringify(res.data));
          var sentData = res.data.data.items
          // console.log(sentData)
          that.setData({
            "navType[0].keep": sentData
          })
        }
      );
      // 调用党建
      that.RequestPost(
        'http://127.0.0.1:8090/system/news/api/list',
        function (res) {
          var sentData = res.data;
          console.log("===>"+JSON.stringify(sentData));
          that.setData({
            "navType[1].keep": sentData.rows
          })
        }
        ,{

          "params": {
        "pageSize": 3,
        "pageNum": 1,
        "isAsc": "desc",
        "orderByColumn":"hot"
        },
          "tag": "首页"
         
        }
      );
      // // 请求汽车数据
      // that.Request(
      //   'http://c.m.163.com/nc/article/list/T1348654060988/0-10.html',
      //   function (res) {
      //     // console.log(res.data)
      //     var sentData = res.data.T1348654060988;
      //     // console.log(sentData)
      //     that.setData({
      //       "navType[1].keep": sentData
      //     })
      //   }
      // );
      // // 调用热点数据
      // that.Request(
      //   'http://c.3g.163.com/recommend/getSubDocPic?passport=&devId=B45E64F7-002F-4126-8C7E-3DB0ACF6C85E&size=40',
      //   function (res) {
      //     var sentData = res.data['推荐'];
      //     // console.log(sentData)
      //     that.setData({
      //       "navType[2].keep": sentData
      //     })
      //   }

      // );
      // // 调用时尚数据
      // that.Request(
      //   'http://c.m.163.com/nc/article/list/T1348650593803/0-10.html',
      //   function (res) {
      //     var sentData = res.data.T1348650593803;
      //     that.setData({
      //       "navType[3].keep": sentData
      //     })
      //   }
      // );
      // // 调用娱乐数据
      // that.Request(
      //   'http://c.3g.163.com/nc/article/list/T1348648517839/0-10.html',
      //   function (res) {
      //     var sentData = res.data.T1348648517839;
      //     that.setData({
      //       "navType[4].keep": sentData
      //     })
      //   }
      // );
      // // 调用健康数据
      // that.Request(
      //   'http://c.3g.163.com/nc/article/list/T1414389941036/0-10.html',
      //   function (res) {
      //     var sentData = res.data.T1414389941036;
      //     that.setData({
      //       "navType[5].keep": sentData
      //     })
      //   }
      // );
      // // 调用财经数据
      // that.Request(
      //   'http://c.m.163.com/nc/article/list/T1348648756099/0-20.html',
      //   function (res) {
      //     var sentData = res.data.T1348648756099;
      //     that.setData({
      //       "navType[6].keep": sentData
      //     })
      //   }
      // );
    },

    //下拉刷新
    // 注意：在小程序中,scroll-view组件 与 onPullDownRefresh不能同时使用，一起使用，下拉scroll-view不能触发onPullDownRefresh事件。
    onPullDownRefresh: function () {
      var that = this;
      //在标题栏中显示加载
      wx.showNavigationBarLoading();
      //刷新数据
      that.Request(
        'http://127.0.0.1:8090/system/news/api/list',
        function (res) {
          var sentData = res.data;
          console.log("===>"+JSON.stringify(sentData));
          that.setData({
            "navType[1].keep": sentData.rows
          })
          that.data.pageAdd += 10;
          that.data.pageAddEnd += 10;
        }
        ,{
          "pageSize": 10,
          "pageNum": 1,
          "isAsc": "asc"
          }
      
      );
      //模拟加载
      setTimeout(function () {
        // complete
        //完成停止加载
        wx.hideNavigationBarLoading()
        //停止下拉刷新
        wx.stopPullDownRefresh()
      }, 1500);
    }
})