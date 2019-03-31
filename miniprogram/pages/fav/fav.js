// pages/fav/fav.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fav_list:[],
    video_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _userid = app.globalData.useropenid
    wx.cloud.init({
      env: 'hardwa-f51520',
    });
    const db = wx.cloud.database();
    var _this = this;
    db.collection('fav').where({
      _openid : _userid
    }).get({
      success: res => {
        console.log(res.data);
        this.setData({
          fav_list: res.data
        })
        // console.log(this.data.fav_list)
        var favlist = this.data.fav_list
        var countlist = []
        console.log(favlist)
        for (let i = 0; i < favlist.length; i++) {
          db.collection('videos').where({
            _id: favlist[i].videoid
          }).get({
            success: res => {
              console.log(res.data);
              countlist = countlist.concat(res.data)
              console.log(countlist)
              this.setData({
                video_list : countlist
              })
            }
          })
        }
        
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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