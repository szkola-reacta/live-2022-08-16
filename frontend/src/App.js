
import './App.css';

// import { Hello } from './Hello';
import { Hello } from './components/HelloFn';
import { Ping } from './components/Ping';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Provider as UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserProvider value={null}>
          <Hello />
          <Ping />
        </UserProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
