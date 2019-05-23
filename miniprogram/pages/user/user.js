const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  navFavtap: function () {
    console.log(1)
    wx.switchTab({
      url: '../fav/fav',
    })
  },

  anatap: function () {
    console.log(1)
    wx.navigateTo({
      url: '../analyseAhead/analyseAhead',
    })
  },
  developer: function(){
    wx.showModal({
      title: '开发者',
      content: '北邮数媒',
      success: function (res) {
        if
        (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  addtap: function () {
    console.log(1)
    wx.navigateTo({
      url: '../course_update/course_update',
    })
  },
  taskupdatetap: function () {
    console.log(1)
    wx.navigateTo({
      url: '../taskupdate/taskupdate',
    })
  },
  taskdatatap: function () {
    console.log(1)
    wx.navigateTo({
      url: '../quizlist/quizlist',
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
});