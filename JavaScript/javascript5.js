class SortArray {
  constructor(orginalArray) {
    this._orginalArray = orginalArray;
  }
  getSortedArray(){
    return this._orginalArray.sort();
  }
}
class SortObjectArray extends SortArray{
  constructor(orginalArray,model){
    super(orginalArray);
    this._model=model
  }
  getModel(){
    return this._model;
  }
}
let A = [7,2,4,1];
const objArr = new SortObjectArray(A,'Quick');
console.log(objArr.getSortedArray());
