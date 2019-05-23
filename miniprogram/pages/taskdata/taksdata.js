var app = getApp()
var quiznum = Number(app.globalData.quizNumber)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quizindex : Number(1)
  },


  onLoad: function (options) {
    console.log(app.globalData.quizNumber)
    if (parseInt(app.globalData.quizNumber) > parseInt(0)) {
      app.globalData.quizNumber = Number(app.globalData.quizNumber - 1)
    }
    else{
      wx.showModal({
        title: '提示',
        content: '所有问题与选项输入完毕，点击确定退回主页',
        success: function (res) {
          if
          (res.confirm) {
            console.log('用户点击确定')
            wx.switchTab({
              url: '../user/user',
            })
          }
        }
      })
    }
  },
  tasktap: function(){
    this.setData({
      quizindex: Number(this.data.quizindex+1)
    });
    this.onLoad()
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