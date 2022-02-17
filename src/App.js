import './App.css';
import Dashboard from './pages/Dashboard';
import { GithubProvider } from './context/context';

function App() {
  return (
    <GithubProvider>
      <Dashboard></Dashboard>
    </GithubProvider>
  );
}

export default App;
