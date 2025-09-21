import Main from './componentes/main/Main';
import { LojaProvider } from './contexts/LojaContexts';

function App() {
  return (
    <div className="centralizar">
      <LojaProvider>
        <Main />
      </LojaProvider>
    </div>
  );
}

export default App;
