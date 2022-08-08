
import './App.css';
import { useState } from 'react';

// import { Hello } from './Hello';
import { Hello } from './components/HelloFn';
import { Ping } from './components/Ping';
import { LoginForm } from './components/LoginForm';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Provider as UserProvider } from './UserContext';

function App() {
  const [user, setUser] = useState({ email: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const defaultUserValues = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <UserProvider value={defaultUserValues}>
          {/* <Hello /> */}
          <LoginForm />
          {/* <Ping /> */}
        </UserProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
