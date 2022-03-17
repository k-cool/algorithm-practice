/* 
소괄호, 중괄호, 대괄호 오류 검증하는 스택 자료구조

case 1
input: '(var x = {y: [1, 2, 3]});'
output: '오류 없음!'

case 2
input: '(var x = 2;'
output: '오류 타입 1!'

case 3
input: 'var x = 2;)'
output: '오류 타입 2!'

case 4
input: '(var x = [1, 2, 3)];'
output: '오류 타입 3!'


*/

class BracketLinter {
  constructor() {
    this.stack = [];
    this.mappingTable = {
      '(': ')',
      '[': ']',
      '{': '}',
      ')': '(',
      ']': '[',
      '}': '{',
    };
  }

  lint = text => {
    for (let i = 0; i < text.length; i++) {
      if (this.isOpeningBracket(text[i])) this.stack.push(text[i]);
      else if (this.isClosingBracket(text[i])) {
        const popedElement = this.stack.pop();

        if (!popedElement) {
          this.clear();
          return `오류타입 2: '${text[i]}'에 대응하는 여는 괄호가 없습니다.`;
        }

        if (!this.isBracketMatching(popedElement, text[i])) {
          this.clear();
          return `오류타입 3: '${text[i]}'와 매치되지 않는 괄호입니다.('${popedElement}')`;
        }
      }
    }

    if (this.stack.length) {
      const lastStackElement = this.stack[this.stack.length - 1];
      this.clear();
      return `오류타입 1: '${lastStackElement}'와 대응하는 닫는 괄호가 없습니다.`;
    }

    return '오류 없음!';
  };

  isOpeningBracket = str => {
    if (str === '(' || str === '{' || str === '[') return true;
    else return false;
  };

  isClosingBracket = str => {
    if (str === ')' || str === '}' || str === ']') return true;
    else return false;
  };

  isBracketMatching = (stackElement, str) => {
    if (stackElement === this.mappingTable[str]) return true;
    else false;
  };

  clear = () => {
    this.stack = [];
  };
}

// 클래스 객체 생성
const Linter = new BracketLinter();

// case 1
const input1 = '(var x = {y: [1, 2, 3]});';
const output1 = Linter.lint(input1);
console.log(output1);

// case 2
const input2 = '(var x = 2;';
const output2 = Linter.lint(input2);
console.log(output2);

// case 3
const input3 = 'var x = 2;)';
const output3 = Linter.lint(input3);
console.log(output3);

// case 4
const input4 = '(var x = [1, 2, 3)];';
const output4 = Linter.lint(input4);
console.log(output4);
