import * as echarts from '../../ec-canvas/echarts';

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
    ecBar1: {
      onInit: function (canvas, width, height) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption1());

        return barChart;
      }
    },
    ecBar2: {
      onInit: function (canvas, width, height) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption2());

        return barChart;
      }
    },
    ecBar3: {
      onInit: function (canvas, width, height) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption3());

        return barChart;
      }
    },
  },

  onclick: function () {
    wx.showModal({
      title: '提示',
      content: '点击确定查看下一问卷数据',
      success: function (res) {
        if
        (res.confirm) {
          console.log('用户点击确定')
          this.onload()
        }
      }
    })
  },

  onReady() {
  }
});


function getBarOption1() {
  return {
    color: ["#EEB422", "#EEE685", "#D2691E", "#91F2DE"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 55,
        name: '满意'
      }, {
        value: 20,
        name: '不满意'
      }, {
        value: 10,
        name: '非常满意'
      }, {
        value: 20,
        name: '非常不满意'
      },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };
}

function getBarOption2() {
  return {
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 55,
        name: '满意'
      }, {
        value: 20,
        name: '不满意'
      }, {
        value: 10,
        name: '非常满意'
      }, {
        value: 20,
        name: '非常不满意'
      },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };
}

function getBarOption3() {
  return {
    color: ["#37A2DA", "#eee", "#FFB6C1", "#91F2DE"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 55,
        name: '偶尔'
      }, {
        value: 20,
        name: '一般'
      }, {
        value: 10,
        name: '经常'
      }, {
        value: 20,
        name: '频繁'
      },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };
}

