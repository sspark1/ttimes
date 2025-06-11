# 공학용 계산기 웹앱

[![Deploy](https://github.com/roboco-io/vibecoding-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/roboco-io/vibecoding-demo/actions/workflows/deploy.yml)

이 프로젝트는 티타임즈TV의 **[AX에 코리아 운명이 달렸다](https://www.youtube.com/watch?v=tTeCnBi6GPU&list=PL7d4-rFjtYdJ92huzIuksMynSBhA_FfMH)** 시리즈의 인터뷰에서 라이브 코딩으로 만든 공학용 계산기 웹 애플리케이션입니다.

[계산기 앱](https://roboco.io/vibecoding-demo/)

## 문서

- [프롬프트 시나리오](docs/demo-scenario.md)
- [설계 문서](docs/design.md)
- [요구사항 문서](docs/requirements.md)
- [개발 체크리스트](docs/checklist.md)

## 유튜브 영상
- [1편 아! 바이브코딩이 이런 거였구나!!](https://www.youtube.com/watch?v=tTeCnBi6GPU)
- [2편 바이브코딩 잘 하는 법 보여드립니다](https://www.youtube.com/watch?v=Ak2SiHYekdA)

## 기능

- 기본 수학 연산 (덧셈, 뺄셈, 곱셈, 나눗셈, 제곱, 제곱근)
- 공학용 함수 (삼각함수, 로그함수, 지수함수)
- 괄호를 사용한 복잡한 수식 계산
- 계산 기록 저장 및 조회
- 일반 계산기와 공학용 계산기 모드 전환
- 다크/라이트 모드 지원
- 반응형 디자인

## 기술 스택

- **프론트엔드**: React 19.1 + TypeScript
- **UI 라이브러리**: Chakra UI
- **상태 관리**: React Context API + useReducer
- **수학 계산 엔진**: Math.js
- **빌드 시스템**: Vite
- **테스트**: Vitest + React Testing Library

## 프로젝트 구조

프로젝트는 Clean Architecture 원칙에 따라 구성되어 있습니다:

```
src/
├── entities/       # 핵심 비즈니스 로직과 데이터 모델
├── usecases/       # 애플리케이션 특화 비즈니스 규칙
├── adapters/       # 외부 라이브러리와의 인터페이스
└── frameworks/     # UI 컴포넌트, 상태 관리 등
    ├── ui/         # UI 컴포넌트
    └── state/      # 상태 관리
```

## 개발 환경 설정

### 필수 조건

- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 프로덕션 빌드
npm run build
```

## 테스트

이 프로젝트는 TDD(Test-Driven Development) 방식으로 개발되었습니다:

- 코어 로직(엔티티, 유스케이스, 어댑터)은 TDD로 구현
- UI 컴포넌트는 구현 후 테스트 작성

```bash
# 모든 테스트 실행
npm test

# 테스트 커버리지 확인
npm run test:coverage
```

## 라이선스

MIT


