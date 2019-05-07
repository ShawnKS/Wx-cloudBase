// pages/course_update/course_update.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coursename:'',
    courseintro:'',
    show: false,
    array: ['DSP', '电分', '信号与系统', '？？'],
    index: 0,
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  backtap: function(){
    console.log('1')
    wx.navigateBack({
      delta:1
    })
  },


  onClose() {
    this.setData({ show: false });
  },

  coursenameinput: function(e){
    this.setData({
      coursename:e.detail
    })
    console.log(this.data.coursename)
  },

  courseintro: function(e){
    this.setData({
      courseintro:e.detail
    })
  },

  doUpload: function () {
    // 选择视频
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePath

        // 上传视频
        const cloudPath = Math.random().toString(36).substr(2)
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})