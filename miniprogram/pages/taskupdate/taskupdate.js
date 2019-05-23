var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Data: [{ id: 1 }, { id:2 }, { id: 3 }, { id:4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }],
    Index: 0,
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
  tasktap: function () {
    console.log(1)
    wx.navigateTo({
      url: '../taskdata/taksdata',
    })
  },
  bindChange(e){
    var newindex = Number(e.detail.value)
    this.setData({
      Index : newindex
    });
    console.log(newindex+1)
    app.globalData.quizNumber = Number(newindex + 1);
    console.log(app.globalData.quizNumber)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})