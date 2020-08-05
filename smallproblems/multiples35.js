function multisum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    } else { continue; }
  }
  console.log(sum);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(20);       // 98
multisum(1000);    // 234168