'use strict';
class Question {

  constructor (content) {
    this.content = content;
    this.save();
  }

  save() {
    this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }

  static Find(id) {
    //return this._All[id - 1];
    return this.All()[id - 1];
  }
}

Question._All = [];
