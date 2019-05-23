// pages/analyseAhead/analyseAhead.js
var userdata = [0,0,0,0,0,0]
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2019-01-01',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    wx.cloud.init({
      env: 'hardwa-f51520',
    });
    const db = wx.cloud.database();
    const _ = db.command
    db.collection('logintime').where({
      date: _.eq(this.data.date),
      h: _.lt(4).and(_.gte(0))
    })
      .count({
        success(res) {
          console.log(res.total)
          userdata[0] = res.total
          console.log(userdata)
        }
      })
    db.collection('logintime').where({
      date: _.eq(this.data.date),
      h: _.lt(8).and(_.gte(4))
    })
      .count({
        success(res) {
          console.log(res.total)
          userdata[1] = res.total
          console.log(userdata)
        }
      })
    db.collection('logintime').where({
      date: _.eq(this.data.date),
      h: _.lt(12).and(_.gte(8))
    })
      .count({
        success(res) {
          console.log(res.total)
          userdata[2] = res.total
          console.log(userdata)
        }
      })
    db.collection('logintime').where({
      date: _.eq(this.data.date),
      h: _.lt(16).and(_.gte(12))
    })
      .count({
        success(res) {
          console.log(res.total)
          userdata[3] = res.total
          console.log(userdata)
        }
      })
    db.collection('logintime').where({
      date: _.eq(this.data.date),
      h: _.lt(20).and(_.gte(16))
    })
      .count({
        success(res) {
          console.log(res.total)
          userdata[4] = res.total
          console.log(userdata)
        }
      })
    db.collection('logintime').where({
      date: _.eq(this.data.date),
      h: _.lt(24).and(_.gte(20))
    })
      .count({
        success(res) {
          console.log(res.total)
          userdata[5] = res.total
          console.log(userdata)
        }
      })
      app.globalData.userdata = userdata
      app.globalData.date = this.data.date
      console.log(this.data.date)
      console.log(app.globalData.userdata)
      console.log(app.globalData.date)
  },
  analysetap: function () {
    console.log(1)
    wx.navigateTo({
      url: '../analyse/analyse',
    })
  },
})