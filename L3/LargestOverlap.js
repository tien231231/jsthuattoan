function LargestOverlap(strings) {
    let largestOverlap = 0;
    let largestOverlapStrings = [];
  
    for (let i = 0; i < strings.length; i++) {
      for (let j = i + 1; j < strings.length; j++) {
        const overlap = getOverlap(strings[i], strings[j]);
  
        if (overlap > largestOverlap) {
          largestOverlap = overlap;
          largestOverlapStrings = [strings[i], strings[j]];
        }
      }
    }
  
    return largestOverlapStrings;
  }
  
  function getOverlap(str1, str2) {
    let overlap = 0;
  
    for (let i = 0; i < str1.length; i++) {
      if (str2.startsWith(str1.slice(i))) {
        overlap = Math.max(overlap, str1.length - i);
      }
    }
  
    return overlap;
  }
  console.log(LargestOverlap([ "cdefghijklm", "ghijklmnopqr"]));