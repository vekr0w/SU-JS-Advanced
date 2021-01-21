class Hex {
  constructor(number) {
    this.number = number;
  }

  ValueOf() {
    return this.number;
  }
  ToString() {
    return `0x${this.number.toString(16)}`;
  }
}

let test = new Hex(260);
console.log(test.ToString());