import './App.css';
import Calculator from './frameworks/ui/components/Calculator';

function App() {
  return (
    <div className="container">
      <header>
        <h1>공학용 계산기</h1>
        <p>Clean Architecture와 SOLID 원칙을 적용한 계산기 웹앱</p>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
