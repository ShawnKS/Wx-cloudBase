Page(
  {
    data: {
      username: '',
      password: ''
    },
    registerTap:function(){
      wx.redirectTo(
        {
          url:'../regist/regist'
        }
      )
    },

    userName: function (e) {
      this.setData({
        username: e.detail.value
      })
    },
    login: function (e) {
      wx.showToast({
        title: '登陆请求中..',
        icon: 'loading',
        duration: 10000
      });
      wx.hideToast();
      wx.switchTab({
        url: '../../pages/index/index',
      })
    }
  }
)