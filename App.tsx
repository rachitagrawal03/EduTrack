import React, { useState } from 'react';
import type { Teacher } from './types';
import Login from './components/Login';
import MarksEntryForm from './components/MarksEntryForm';
import PrincipalDashboard from './components/PrincipalDashboard';
import { authService } from './services/authService';

const App: React.FC = () => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (id: string, pass: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const loggedInTeacher = await authService.login(id, pass);
      setTeacher(loggedInTeacher);
    } catch (err: any)      {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setTeacher(null);
  };

  if (!teacher) {
    return <Login onLogin={handleLogin} isLoading={isLoading} error={error} />;
  }

  // A principal is identified by having no teaching assignments but having a dashboard link.
  const isPrincipal = teacher.assignments.length === 0 && !!teacher.dashboardLink;

  if (isPrincipal) {
    return <PrincipalDashboard teacher={teacher} onLogout={handleLogout} />;
  }

  return <MarksEntryForm teacher={teacher} onLogout={handleLogout} />;
};

export default App;