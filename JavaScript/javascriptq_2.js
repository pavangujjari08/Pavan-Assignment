let pav ={
_setVersion: function (versionName) {
    this._version = versionName;
  },
  _setChannel: function (channelName) {
    this._channel = channelName;
  },
  _setkeyField: function (fieldName) {
    this._keyField = fieldName;
  },
  getVersion: function () {
    console.log(`get version function`);
    console.log(this._version);
  },
  getChannel: function () {
    console.log(this._channel);
  },
  getkeyField: function () {
    console.log(`get Field function`);
    console.log(this._keyField);
  }
}
pav._setVersion('2.1');
pav._setkeyField(67);
pav.getkeyField();
pav.getVersion();
//2.C
let newObj = [{ 'channel': 'A', 'age': '21' }, { 'channel': 'B', 'age': '12' }, { 'channel': 'C', 'age': '14' }];
pav.getkeyField.prototype.a1 = function (newObj) {
  let arr = [];
  for (let i = 0; i < newObj.length; i++) {
    arr.push(newObj[i].channel);
  }
  console.log(arr);
}
pav.getkeyField.prototype.a1(newObj);
