function compareArrays(arr1, arr2) {
  let result;

  result = (arr1.lenght === arr2.lenght) && arr1.every((elem, index) => {elem === arr2[index]})

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}

// console.log(compareArrays([8, 9], [6]))
// console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))
// console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]))
// console.log(compareArrays([1, 2, 3], [2, 3, 1]))
// console.log(compareArrays([8, 1, 2], [8, 1, 2]))
// console.log(compareArrays([1, 2, 3], [1, 2, 3]))