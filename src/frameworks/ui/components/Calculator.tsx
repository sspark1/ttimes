import React, { useState, useEffect } from 'react';

/**
 * 계산기 컴포넌트
 * 
 * 일반 모드와 공학용 모드를 지원하는 계산기 UI 컴포넌트입니다.
 * 다크 모드와 라이트 모드를 전환할 수 있습니다.
 */
const Calculator: React.FC = () => {
  // 상태 관리
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('0');
  const [history, setHistory] = useState<Array<{ expression: string; result: string }>>([]);
  const [isEngineeringMode, setIsEngineeringMode] = useState<boolean>(false);
  
  // 다크 모드 상태 초기화 (localStorage 또는 시스템 설정에서 가져오기)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 다크 모드 초기화 및 시스템 설정 변경 감지
  useEffect(() => {
    // 다크 모드 클래스 적용
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }

    // 시스템 다크 모드 설정 감지
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 시스템 설정 변경 시 다크 모드 업데이트 (localStorage에 저장된 설정이 없을 경우에만)
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setIsDarkMode(e.matches);
      }
    };
    
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, [isDarkMode]);

  // 키 입력 처리
  const handleKeyPress = (key: string) => {
    switch (key) {
      case 'C':
        // 모든 입력 초기화
        setExpression('');
        setResult('0');
        break;
      case '=':
        // 계산 실행 (추후 usecase 연결)
        try {
          // 임시 계산 로직 (추후 math.js 라이브러리로 대체)
          const calculatedResult = eval(expression).toString();
          setResult(calculatedResult);
          
          // 계산 기록 저장
          setHistory([
            { expression, result: calculatedResult },
            ...history.slice(0, 9), // 최근 10개 기록만 유지
          ]);
          
          // 새로운 계산을 위해 표현식 초기화
          setExpression('');
        } catch {
          setResult('Error');
        }
        break;
      case '←':
        // 마지막 문자 삭제
        setExpression(expression.slice(0, -1));
        break;
      case '+/-':
        // 부호 변경
        if (expression.startsWith('-')) {
          setExpression(expression.slice(1));
        } else {
          setExpression('-' + expression);
        }
        break;
      case 'sin':
      case 'cos':
      case 'tan':
      case 'log':
      case 'ln':
      case 'π':
      case '√':
        // 함수 처리 (추후 math.js 라이브러리로 대체)
        setExpression(expression + key + '(');
        break;
      default:
        // 표현식에 키 추가
        setExpression(expression + key);
        break;
    }
  };

  // 테마 전환
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 키패드 배열 정의 (5x5 그리드)
  const standardKeypad = [
    ['C', '+/-', '%', '/', '←'],
    ['7', '8', '9', '*', '('],
    ['4', '5', '6', '-', ')'],
    ['1', '2', '3', '+', '^'],
    ['0', '.', '=', '√', 'π'],
  ];

  // 공학용 함수 배열
  const engineeringFunctions = ['sin', 'cos', 'tan', 'log', 'ln'];

  return (
    <div className="calculator">
      <div className="calculator-header">
        <div className="calculator-title">공학용 계산기</div>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="mode-toggle">
        <button 
          className={!isEngineeringMode ? 'active' : ''} 
          onClick={() => setIsEngineeringMode(false)}
        >
          일반 모드
        </button>
        <button 
          className={isEngineeringMode ? 'active' : ''} 
          onClick={() => setIsEngineeringMode(true)}
        >
          공학용 모드
        </button>
      </div>
      
      <div className="calculator-display">
        <div className="calculator-expression">{expression}</div>
        <div className="calculator-result">{result}</div>
      </div>
      
      <div className="calculator-keypad">
        {standardKeypad.flat().map((key) => (
          <button
            key={key}
            className={`calculator-key ${
              ['/', '*', '-', '+'].includes(key) ? 'operator' : ''
            } ${key === '=' ? 'equals' : ''} ${key === 'C' ? 'clear' : ''} ${
              ['√', 'π', '^'].includes(key) ? 'function' : ''
            } ${key === '←' ? 'backspace' : ''}`}
            onClick={() => handleKeyPress(key)}
          >
            {key}
          </button>
        ))}
      </div>
      
      {isEngineeringMode && (
        <div className="calculator-functions">
          {engineeringFunctions.map((func) => (
            <button
              key={func}
              className="calculator-function"
              onClick={() => handleKeyPress(func)}
            >
              {func}
            </button>
          ))}
        </div>
      )}
      
      {history.length > 0 && (
        <div className="calculator-history">
          <h3>계산 기록:</h3>
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <div className="history-expression">{item.expression}</div>
              <div className="history-result">{item.result}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calculator;
