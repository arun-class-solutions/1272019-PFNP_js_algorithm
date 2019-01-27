function findItemInArray(searchItem, sourceArray) {
  for (var i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === searchItem) {
      console.log(i);
    } else {
      continue;
    }
  }
}
