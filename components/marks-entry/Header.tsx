import React from 'react';

interface HeaderProps {
  teacherName: string;
  onLogout: () => void;
  dashboardLink?: string;
  isDashboardVisible: boolean;
  onToggleDashboard: () => void;
}

const Header: React.FC<HeaderProps> = ({ teacherName, onLogout, dashboardLink, isDashboardVisible, onToggleDashboard }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Marks Entry Portal</h1>
        <p className="text-slate-600 mt-1">Welcome, <span className="font-semibold">{teacherName}</span></p>
      </div>
      <div className="mt-4 sm:mt-0 flex items-center space-x-4">
        <button
            onClick={onToggleDashboard}
            disabled={!dashboardLink}
            className="flex items-center justify-center px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-400 disabled:hover:bg-slate-400 disabled:cursor-not-allowed disabled:scale-100"
            aria-label={isDashboardVisible ? "Back to form" : "View Dashboard"}
        >
            {isDashboardVisible ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                <span>Back to Form</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                <span>Dashboard</span>
              </>
            )}
        </button>
        <button
            onClick={onLogout}
            className="flex items-center justify-center px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 transform hover:scale-105"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;