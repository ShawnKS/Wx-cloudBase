var app = getApp();
Page({
  data:{
    userName:'',
    userPassword:'',
    userPasswordAgain:'',
    repetition: false
  },


userNameInput: function(e) {
  this.setData({
    userName: e.detail.value
  });
},
// 密码
userPasswordInput: function(e) {
  this.setData({
    userPassword: e.detail.value
  });
},
// 再次输入密码
userPasswordAgainInput: function(e) {
  this.setData({
    userPasswordAgain: e.detail.value
  });
},

backHome: function(){
  wx.switchTab({
    url: '../index/index',
  })
},

onrigistTap: function(){
  var that = this;
  var userName = this.data.userName;
  var userPassword = this.data.userPassword;
  var userPasswordAgain = this.data.userPasswordAgain;
  var repetition = this.data.repetition;
  if (userName === '') {
    wx.showToast({
      title: '请输入用户名',
      duration:2000,
    })
   } else if(repetition === true){
     wx.showToast({
       title:'用户已存在',
       duration: 2000
     })
   }
   else if (userPassword.length<6){
     wx.showToast({
       title:'密码最少6位',
       duration:2000
     })
   }
   else if (userPassword !==userPasswordAgain){
     wx.showToast({
       title:'两次密码输入不一致',
       icon:'none',
       duration: 2000
     })
   }
   else{
    wx.cloud.init({
      env: 'hardwa-f51520',
    });
    const db = wx.cloud.database();
    db.collection('users').add({
      data:{
        userName: userName,
        userPassword : userPassword,
      },
      success:function(res){
        wx.showToast({
          title: '注册成功',
          duration: 2000
        })
        console.log(res);
        console.log(res.errMsg);
      }
    })
   }
   
   
}

})