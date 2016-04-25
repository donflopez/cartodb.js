var Backbone = require('backbone');

var VisModel = Backbone.Model.extend({
  initialize: function () {
    this._loadingObjects = [];
  },

  clearLoadingObjects: function () {
    this._loadingObjects = [];
    this.set('loading', false);
  },

  trackLoadingObject: function (object) {
    if (this._loadingObjects.indexOf(object) === -1) {
      this._loadingObjects.push(object);
    }
    this.set('loading', true);
  },

  untrackLoadingObject: function (object) {
    var index = this._loadingObjects.indexOf(object);
    if (index >= 0) {
      this._loadingObjects.splice(index, 1);
      if (this._loadingObjects.length === 0) {
        this.set('loading', false);
      }
    }
  }
});

module.exports = VisModel;
