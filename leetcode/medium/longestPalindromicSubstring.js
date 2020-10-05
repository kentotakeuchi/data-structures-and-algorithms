// https://www.youtube.com/watch?v=VNiqbcow64c&ab_channel=TomBaranowicz

/**
 * OPTIMIZED
 */
function expandAroundCenterSolution(s) {
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let center = getCenter(s, i);
    let bounds = expandAroundCenter(s, center[0], center[1]);
    let L = bounds[0],
      R = bounds[1];
    if (R - L > end - start) {
      start = L;
      end = R;
    }
    console.log('---');
    i = center[1]; //move to the end of center, i++ will then shift pointer to index right after current center
  }
  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  let L = left,
    R = right;

  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }
  console.log('expand return ' + (L + 1) + ':' + (R - 1));
  return [++L, --R];
}

function getCenter(s, c) {
  let L = c,
    R = c;
  console.log('get center start index: ' + c);
  while (s[L] === s[++R] && R <= s.length);
  console.log('return ' + L + ':' + (R - 1));
  return [L, --R];
}

/**
 * BRUTE FORCE
 */
function isPalindrome(s) {
  let k = 0;
  let l = s.length - 1;
  let isPalindrome = true;
  while (k <= l) {
    if (!(s.charAt(k) === s.charAt(l))) {
      isPalindrome = false;
      break;
    }
    k++;
    l--;
  }
  return isPalindrome;
}

function bruteForce(s) {
  let maxPalindrome = '';

  for (let i = 0; i <= s.length - 1; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let subStr = s.substring(i, j);
      console.log('check: ' + subStr);
      if (isPalindrome(subStr)) {
        console.log(subStr + ' is palindrome');
        if (subStr.length > maxPalindrome.length) {
          maxPalindrome = subStr;
        }
      }
    }
    console.log('---');
  }

  return maxPalindrome;
}

/**
 * MAIN
 */
function longestPalindrome(s) {
  // let maxPalindrome = bruteForce(s);
  let maxPalindrome = expandAroundCenterSolution(s);

  return maxPalindrome;
}

let testCase = 'cccaba';
console.log('Longest Palindromic Substring: ' + longestPalindrome(testCase));
