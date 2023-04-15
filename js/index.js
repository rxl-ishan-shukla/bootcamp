
let counter = 0;
const getData = () => {
  console.log(`Fetching Data.....  ${++counter}`);
};

const debounce = function (fn, d = 300) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};

const getDataEnhanced = debounce(getData);
