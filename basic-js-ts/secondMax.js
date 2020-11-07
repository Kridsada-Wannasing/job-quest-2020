function secondMax(arr) {
  if (!arr.length) throw new Error("Error!");
  else if (arr.length === 1) return arr[0];

  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}
try {
  console.log(secondMax([4123]));
} catch (error) {
  console.log(error.message);
}
