const now =
  typeof performance === "object" && performance.now
    ? performance.now.bind(performance)
    : Date.now.bind(Date);

const maxTests = 100;
const loopLimit = 50000000;

function runTest(
  index = 1,
  results = { usingVar: 0, usingLet: 0, usingConst: 0 }
) {
  console.log(`Running Test #${index} of ${maxTests}`);
  setTimeout(() => {
    const varTime = usingVar();
    const letTime = usingLet();
    const constTime = usingConst();
    results.usingVar += varTime;
    results.usingLet += letTime;
    results.usingConst += constTime;
    console.log(
      `Test ${index}: var = ${varTime}ms, let = ${letTime}ms, const = ${constTime}`
    );
    ++index;
    if (index <= maxTests) {
      setTimeout(() => runTest(index, results), 0);
    } else {
      console.log(
        `Average time with var: ${(results.usingVar / maxTests).toFixed(2)}ms`
      );
      console.log(
        `Average time with let: ${(results.usingLet / maxTests).toFixed(2)}ms`
      );
      console.log(
        `Average time with const: ${(results.usingConst / maxTests).toFixed(
          2
        )}ms`
      );
    }
  }, 0);
}
function usingVar() {
  const start = now();
  let x = loopLimit;
  while (x--) {
    var i = x;
  }
  return now() - start;
}

function usingLet() {
  const start = now();
  let x = loopLimit;
  while (x--) {
    let i = x;
  }
  return now() - start;
}

function usingConst() {
  const start = now();
  let x = loopLimit;
  while (x--) {
    const i = x;
  }
  return now() - start;
}

runTest();
