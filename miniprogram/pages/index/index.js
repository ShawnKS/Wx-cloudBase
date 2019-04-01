
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    video_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init({
      env: 'hardwa-f51520',
    });
    const db = wx.cloud.database();
    var _this = this;
    db.collection('videos').where({
      tag: '电路分析'

    }).get({
      success: res => {
        console.log(res.data);
        this.setData({
          video_list :res.data
        })
      }
    })
  },
  onChange(event) {
    const db = wx.cloud.database();
    if(event.detail.index == 0)
    {
      var _this = this;
      db.collection('videos').where({
        tag : '电路分析'

      }).get({
        success: res => {
          console.log(res.data);
          this.setData({
            video_list: res.data
          })
        }
      })
    }

    if (event.detail.index == 1) {
      var _this = this;
      db.collection('videos').where({
        tag: '信号与系统'

      }).get({
        success: res => {
          console.log(res.data);
          this.setData({
            video_list: res.data
          })
        }
      })
    }

    if (event.detail.index == 2) {
      var _this = this;
      db.collection('videos').where({
        tag: '硬件基础'

      }).get({
        success: res => {
          console.log(res.data);
          this.setData({
            video_list: res.data
          })
        }
      })
    }

    if (event.detail.index == 3) {
      var _this = this;
      db.collection('videos').where({
        tag: 'DSP'

      }).get({
        success: res => {
          console.log(res.data);
          this.setData({
            video_list: res.data
          })
        }
      })
    }

    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
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
    
  },
  viewItem:function(event){
    console.log(event);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../videosdetail/videosdetail?id='+id,
    });
  }
})