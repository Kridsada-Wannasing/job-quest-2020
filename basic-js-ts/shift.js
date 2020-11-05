function shift(array, direction, numberOfElement) {
  if (direction == "left") {
    const splice = array.splice(0, numberOfElement);
    return [...array, ...splice];
  } else if (direction == "right") {
    const splice = array.splice(array.length - numberOfElement);
    return [...splice, ...array];
  } else {
    throw new Error("Error!!");
  }
}

try {
  const result = shift([1, 2, 3, 4, 5], "right", 2);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
