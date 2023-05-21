import { AppProvider } from './app-provider';
import { Test } from './test';

function App() {
  return (
    <AppProvider>
      <Test></Test>
    </AppProvider>
  );
}

export default App;
