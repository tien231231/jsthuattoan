
//3.8
const sumt = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const remain = target - arr[i];
    if (map.has(remain)) {
      return [map.get(remain), i];
    } else {
      map.set(arr[i], i);

    }
  }
};
