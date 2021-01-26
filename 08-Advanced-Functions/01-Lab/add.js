function solution() {
  let storedNum = 0;
  return (num) => {
    storedNum += num;
    return storedNum;
  }
}

let add5 = solution(6);
add5(2);
add5(2);
add5(2);
add5(2);
add5(2);
add5(2);
add5(2);
add5(2);
console.log(add5(5));