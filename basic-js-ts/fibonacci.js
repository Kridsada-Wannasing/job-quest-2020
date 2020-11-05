function fib(num) {
  if (num < 2) return num;

  let f = [0, 1];
  let result;

  for (let i = 2; i <= num; i++) {
    f[i] = f[i - 1] + f[i - 2];
    result = f[i];
  }

  return result;
}

console.log(fib(12));
