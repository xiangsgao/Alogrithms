/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
 // idea is to create a maxtix after counting the frequency and then multiply the frequency with its assoicated nums to get the total numbers of chars. to get the t times, we simply exponetiate the matrix t times.

// this guy has very good video on the topic
// https://www.youtube.com/watch?v=1wJJPLS1VOk

// the code is quiet complicated and require a good understand of matrix arithmetic
// also, the below js code does not work due to the usual mod nonsense

const MOD = 10 ** 9 + 7;

// multiply two 26x26 matrices
function multiply(a, b) {
  const newMatrix = Array.from({ length: 26 }, () => Array(26).fill(0));
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      for (let k = 0; k < 26; k++) {
        newMatrix[i][j] = (newMatrix[i][j] + a[i][k] * b[k][j]) % MOD;
      }
    }
  }
  return newMatrix;
}

// matrix exponentiation
function powMatrix(base, exp) {
  let newMatrix = Array.from({ length: 26 }, () => Array(26).fill(0));
  for (let i = 0; i < 26; i++) {
    newMatrix[i][i] = 1; // identity matrix
  }

  while (exp) {
    if (exp % 2) {
      newMatrix = multiply(newMatrix, base);
    }
    base = multiply(base, base);
    exp = Math.floor(exp / 2);
  }

  return newMatrix;
}

function lengthAfterTransformations(s, t, nums) {
  const matrix = Array.from({ length: 26 }, () => Array(26).fill(0));
  for (let i = 0; i < 26; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      matrix[(i + j) % 26][i] = 1;
    }
  }

  const finalMatrix = powMatrix(matrix, t);

  const map = Array(26).fill(0);
  for (const ch of s) {
    map[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const res = Array(26).fill(0);
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      res[i] = (res[i] + finalMatrix[i][j] * map[j]) % MOD;
    }
  }

  return res.reduce((acc, val) => (acc + val) % MOD, 0);
}