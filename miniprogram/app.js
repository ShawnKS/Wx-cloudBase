//app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);
    //获取当前时间
    var n = timestamp * 1000;
    var date = new Date(n)
    console.log(date.getDate())
    var h = date.getHours();
    //分
    var m = date.getMinutes();
    //秒
    var s = date.getSeconds();
    var month = date.getMonth() + 1;
    if(month<10)
    month = "0"+month
    if(date.getDate()<10)
      var datee = date.getFullYear() + "-" + month + "-0" + date.getDate();
    else
      var datee = date.getFullYear() + "-" + month + "-" +date.getDate();
    console.log("当前时间："+ h + ":" + m + ":" + s);
    console.log(datee);
    wx.cloud.init({
      env: 'hardwa-f51520',
    });
    const db = wx.cloud.database();
    db.collection('logintime').add({
      data: {
        h: h,
        m: m,
        s: s,
        date : datee,
      },
      success: function (res) {
        wx.showToast({
          title: '登入成功',
          duration: 2000
        })
        console.log(res);
        console.log(res.errMsg);
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    this.globalData = {}
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
      this.globalData.useropenid = res.result.openid
        console.log(this.globalData.useropenid);
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  }, globalData: {
    userInfo: null
  }
})
