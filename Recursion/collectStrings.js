// Helper Method Recursion Version
function collectStrings(obj) {
  let arr = [];

  function gatherStrings(o) {
    for (let key in o) {
      if (typeof o[key] === 'string') {
        arr.push(o[key]);
      } else if (typeof o[key] === 'object' && !Array.isArray(o[key])) {
        gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return arr;
}

// Pure Recursion Version
function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

collectStrings(obj); // ["foo", "bar", "baz"])
