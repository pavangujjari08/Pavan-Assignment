class SortArray {
  constructor(orginalArray) {
    this._orginalArray = orginalArray;
  }
  getSortedArray(){
    return this._orginalArray.sort();
  }
}
class SortObjectArray extends SortArray
  {
    constructor(orginalArray,arrayObject)
      {
        super(orginalArray);
        this._arrayObject=arrayObject;
      }

  getSortObjectArray()
  {
    this._arrayObject.sort(function (a, b)
                           {
                              return a.value - b.value;
                            }
                          );
    return this._arrayObject;
  }
}
let A = [7,2,4,1];
let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
const objArr = new SortObjectArray(A,items);
console.log(objArr.getSortedArray());
console.log(objArr.getSortObjectArray());
