Page({
  data: {
    joke: '',
  },
  onLoad(query) {

  },
  onReady() {
    // Page loading is complete
    this.fetchJoke()

  },
  onShow() {
    // Page display

  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  async fetchJoke(e) {
    my.showLoading({content: 'loading...'});
    let data = null
    await my.request({
      url: 'https://api.chucknorris.io/jokes/random',
      method: 'GET',
      success: function (res) {
      },
      fail: function (res) {
        my.alert({ content: 'fail' });
      },
      complete: function (res) {
        my.hideLoading();

        data = res.data.value
      }
    });
    this.setData({
      joke: data
    });
  },
  
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'Chuck Norris App',
      desc: 'Open source chuck norris API',
      path: 'pages/index/index',
    };
  },
});
