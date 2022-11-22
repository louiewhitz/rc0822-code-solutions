/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // _1 * _1 = O(1) constant time
  const unique = [];                // _ 1* _1 = O(1) constant time
  for (
    let i = 0;                      // _1 * _1 = O(1) constant time
    i < words.length;               // _2 * _n = O(n) less than and length
    i++                             // _2 * _n = O(n) add and reassign
  ) {
    const word = words[i];          // _2 * n_ = O(n) assign and finding words[i]
    if (!seen[word]) {              // _2 * _n = O(n) not operator, index and conditional
      seen[word] = true;            // _1 * _n = O(n) assign index and of word, since true
      unique[unique.length] = word; // _2 * _n = O(n) index, length, assign
    }
  }
  return unique;                    // _1 * _1 = O(1)
} // Big O Notation for uniqueLinear: 0(n) linear

function uniqueQuadratic(words) {
  const unique = [];                // _1 * _1 = O(1)
  for (
    let i = 0;                      // _1 * _1 = O(1)
    i < words.length;               // _2 * _n = O(n) less than and length
    i++                             // _2 * _n = O(?) reassign and add
  ) {
    const word = words[i];          // _2 * _n = O(n)
    let isUnique = true;            // _1 * _n = O(1)
    for (
      let c = 0;                    // _ 1* _n = O(n)
      c < i;                        // _1 * _n * n  = O(n^2)
      c++                           // _2 * _n * n = O(n^2)
    ) {
      const comparing = words[c];   // _2 * _n * n = O(n^2)
      if (comparing === word) {     // _1 * _n * n = O(n^2)
        isUnique = false;           // 1 * _n^2 = O(n^2?)
      }
    }
    if (isUnique) {                 // _ 1* _n = O(n)
      unique[unique.length] = word; // _2 * n_ = O(n)
    }
  }
  return unique;                    // _1 * _1 = O(?)
} // Big O Notation for uniqueQuadratic: O(n^2)
