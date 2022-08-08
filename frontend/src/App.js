
import './App.css';

// import { Hello } from './Hello';
import { Hello } from './components/HelloFn';
import { Ping } from './components/Ping';
import { LoginForm } from './components/LoginForm';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Provider as UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserProvider value={null}>
          {/* <Hello /> */}
          <LoginForm />
          {/* <Ping /> */}
        </UserProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
