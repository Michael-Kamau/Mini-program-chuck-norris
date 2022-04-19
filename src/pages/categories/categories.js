Page({
  data: {

    categories: [],
    selectedCategoryIndex: null

  },

  bindCategoriesPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      selectedCategoryIndex: e.detail.value,
    });
  },

  onReady() {

    this.fetchcategories()

  },
  async fetchcategories(e) {
    my.showLoading({content: 'loading...'});
    let data = null
    await my.request({
      url: `https://api.chucknorris.io/jokes/categories`,
      method: 'GET',
      success: function (res) {
      },
      fail: function (res) {
        my.alert({ content: 'fail' });
      },
      complete: function (res) {
        my.hideLoading();

        data = res.data
        console.info(data)
      }
    });

    this.setData({
      categories: data
    });

  },
  async fetchCategoryJoke(e) {
    const { categories, selectedCategoryIndex } = this.data
    let data = null

    if (categories.length < 1 || selectedCategoryIndex == null) {
      my.alert({ content: 'Select category' });
      return
    }
    my.showLoading({content: 'loading...'});

    await my.request({
      url: `https://api.chucknorris.io/jokes/random?category=${categories[selectedCategoryIndex]}`,
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
      path: 'pages/categories/categories',
    };
  },
});


