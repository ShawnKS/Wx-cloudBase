import * as echarts from '../../ec-canvas/echarts';
var userdata = [0, 0, 0, 0, 0, 0];
var app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    title: {
      text: '测试曲线图',
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['A', 'B', 'C'],
      top: 50,
      left: 'center',
      backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      name: '时间',
      type: 'category',
      boundaryGap: false,
      data: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00',],
      // show: false
    },
    yAxis: {
      name : '登入人数',
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'test',
      type: 'line',
      smooth: false,
      data: app.globalData.userdata
    }, ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    multiIndex: [0, 0, 0],
    date: app.globalData.date,
    time: '12:01',
    customItem: '全部',
    ec: {
      onInit: initChart
    }
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
          userdata[0]=res.total
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
  }, onLoad: function (options){
    this.setData({
      date:app.globalData.date
    })
  },
  onReady() {
  }
});
