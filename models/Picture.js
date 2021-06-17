class Picture {
  constructor(data) {
    this.url = data.urls.thumb;
    this.description = data.description;
  }
}

module.exports = Picture;
