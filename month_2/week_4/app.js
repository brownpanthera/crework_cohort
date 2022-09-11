class Calculator {
    add(a, b) {
      return a + b;
    }
  
    sub(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b == 0) throw new Error("not allowed");
      return a / b;
    }
  }
  
  // ENTER YOUR NUMBER
  const a = 20;
  const b = 10;
  
  const calcultion = new Calculator();
  
  const aplusb = calcultion.add(a, b);
  const aminusb = calcultion.sub(a, b);
  const amultib = calcultion.multiply(a, b);
  const adivb = calcultion.divide(a, b);
  
  console.log(aplusb);
  