for (let num = 1; num <= 50; num++) {
  let res;
  if (num % 3 === 0 && num % 5 === 0) {
    res = "5 va 3 ga bolinadi";
  } else if (num % 5 == 0) {
    res = "5 ga bolinadi";
  } else if (num % 3 == 0) {
    res = "3 ga bolinadi";
  } else {
    res = num;
  }
  console.log(res);
}
