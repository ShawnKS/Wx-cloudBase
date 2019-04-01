var app = getApp()
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textinput: '',
    Y: '',
    M: '',
    D: '',
    h: '',
    m: '',
    s: '',
    timestamp: '',
    comment_list: [],
    videoid : '',
    id: ''
  },
  textinput: function (e) {
    this.setData({
      textinput: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.videoid = options.id;
    db.collection('videos').doc(options.id).get({
      success: res => {
        this.setData({
          video: res.data
        });
      }
    })
    db.collection('comments').where({
      videoid: options.id
    })
    .get({
      success: res =>{
        this.setData({
          comments: res.data
        });
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

  favtap : function(e){
    console.log(1)
    var stuid = app.globalData.useropenid
    var videoid = this.data.videoid
    console.log(2)
    wx.cloud.init({
      env: 'hardwa-f51520',
    });
    const db = wx.cloud.database();
    db.collection('fav').add({
      data: {
        videoid : videoid
      },
      success: function (res) {
        console.log(2)
        wx.showToast({
          title: '收藏成功',
          duration: 2000
        })
        console.log(res);
        console.log(res.errMsg);
      }
    })
  },

  onSendtap: function (e) {
    var that = this;
    var videoid = this.data.videoid;
    var textinput = this.data.textinput;
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();


    const db = wx.cloud.database();
    db.collection('comments').add({
      data: {
        textinput: textinput,
        Y: Y,
        M: M,
        D: D,
        h: h,
        m: m,
        s: s,
        timestamp: n,
        videoid : videoid
      },
      success: function (res) {
        wx.showToast({
          title: '提交成功',
          duration: 2000
        })
        console.log(res);
        console.log(res.errMsg);
      }
    })
    this.data.id = this.data.videoid
    this.onLoad(this.data)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})