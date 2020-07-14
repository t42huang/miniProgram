Page({
  data: {
    nowTemp: 14,
    nowWeather: 'cloudy'
  },
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now', //仅为示例，并非真实的接口地址
      data: {
        city: '广州市'
      },
      success (res) {
        console.log(res)
        let result = res.data.result
        let temp = result.now.temp
        let weather = result.now.weather
        console.log(temp, weather)
      }
    })
  }
  

})