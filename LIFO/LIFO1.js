//  {(([]))[]}
const str = "{[]}()";
const str2 = "{[(}])";
const str3 = ")(";

const sol = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") stack.push("}");
    if (s[i] === "(") stack.push(")");
    if (s[i] === "[") stack.push("]");

    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    }
  }

  console.log(stack);

  if (stack.length === 0) return true;
  return false;
};

sol(str3);

const sol2 = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    // if ([")", "}", "]"].includes(s[i]) && ) {

    // }
  }
};
