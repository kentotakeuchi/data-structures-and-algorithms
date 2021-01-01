// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */

// MINE..
// var evalRPN = function(tokens) {
//     // declare stack
//     // declare valid operators
//     // iterate through token
//         // if operand -> push into stack
//         // if operator ->
//             // pop operand from stack & calculate
//             // put the operator between the operands(infix)
//             // push the answer into stack
//     // return result

//     const stack = []
//     const operators = ['+', '-', '*', '/']

//     for(let t of tokens) {
//         if(operators.includes(t)) {
//             if(stack.length) {
//                 const o1 = parseInt(stack.pop())
//                 const o2 = parseInt(stack.pop())
//                 const calc = Math.floor(calculate(o2, o1, t))
//                 console.log({o2, o1, calc})
//                 stack.push(calc)
//             }
//         } else {
//             stack.push(t)
//         }
//     }

//     return stack[0]
// };

// function calculate(x, y, o) {
//     switch(o) {
//         case '+':
//             return x + y
//         case '-':
//             return x - y
//         case '*':
//             return x * y
//         case '/':
//             return x / y
//         default:
//             return
//     }
// }

// ANSWER
const evalRPN = function (tokens) {
  const stack = [];

  // If the token is an operator, the operands will be
  // the last two items on the stack.
  // Evaluate the expression then add the value back on to the stack,
  // as it will be the operand for the next expression.
  // Otherwise, its an operand (digit). Cast to number and add to stack.
  tokens.forEach((token) => {
    if (/^[+\-*/]$/.test(token)) {
      const [y, x] = [stack.pop(), stack.pop()];
      stack.push(evaluate(x, y, token));
    } else {
      stack.push(+token); // Number(token)
    }
  });

  // The last evaluated expression is the answer
  return stack.pop();
};

const evaluate = (x, y, op) => {
  switch (op) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return (x / y) | 0; // Math.trunc()
  }
};
