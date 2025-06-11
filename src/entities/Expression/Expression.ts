/**
 * Expression 엔티티
 * 
 * 수학적 표현식을 나타내는 엔티티 클래스입니다.
 * 표현식의 유효성을 검증하고 값을 관리합니다.
 */
export class Expression {
  private readonly value: string;

  /**
   * 표현식 객체를 생성합니다.
   * @param expression 수학적 표현식 문자열
   * @throws 빈 문자열이 전달될 경우 에러를 발생시킵니다.
   */
  constructor(expression: string) {
    if (!expression || expression.trim() === '') {
      throw new Error('Expression cannot be empty');
    }
    this.value = expression.trim();
  }

  /**
   * 표현식의 값을 반환합니다.
   * @returns 표현식 문자열
   */
  getValue(): string {
    return this.value;
  }

  /**
   * 표현식의 유효성을 검사합니다.
   * @returns 유효한 표현식이면 true, 그렇지 않으면 false
   */
  isValid(): boolean {
    // 괄호 균형 검사
    if (!this.hasBalancedParentheses()) {
      return false;
    }

    // 함수 호출이 포함된 경우
    if (this.value.match(/(sin|cos|tan|log|sqrt)\(/)) {
      // 함수 호출 패턴 검사
      const functionMatches = this.value.match(/(sin|cos|tan|log|sqrt)\([^)]*\)/g);
      if (!functionMatches) {
        return false;
      }
      
      // 함수 호출을 제외한 나머지 부분이 유효한지 검사
      let remainingExpression = this.value;
      for (const match of functionMatches) {
        remainingExpression = remainingExpression.replace(match, '0'); // 함수 호출을 숫자로 대체
      }
      
      // 남은 표현식에 유효하지 않은 문자가 있는지 검사
      if (!/^[\d+\-*/().^,\s]+$/.test(remainingExpression)) {
        return false;
      }
    } else {
      // 함수 호출이 없는 경우, 전체 표현식이 유효한지 검사
      if (!/^[\d+\-*/().^,\s]+$/.test(this.value)) {
        return false;
      }
    }

    // 연속된 연산자 검사 (++, --, +*, 등)
    if (/[+\-*/]{2,}/.test(this.value)) {
      return false;
    }

    return true;
  }

  /**
   * 괄호의 균형이 맞는지 검사합니다.
   * @returns 괄호 균형이 맞으면 true, 그렇지 않으면 false
   */
  private hasBalancedParentheses(): boolean {
    const stack: string[] = [];
    
    for (const char of this.value) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    
    return stack.length === 0;
  }
}
