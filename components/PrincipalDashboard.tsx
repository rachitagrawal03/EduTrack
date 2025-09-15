import React from 'react';
import type { Teacher } from '../types';

interface PrincipalDashboardProps {
  teacher: Teacher;
  onLogout: () => void;
}

const PrincipalDashboard: React.FC<PrincipalDashboardProps> = ({ teacher, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Simplified Header for Principal */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Welcome, <span className="font-semibold">{teacher.name}</span></p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center justify-center mt-4 sm:mt-0 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <span>Logout</span>
          </button>
        </header>

        {/* Embedded Dashboard */}
        <main>
          {teacher.dashboardLink ? (
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <iframe
                src={teacher.dashboardLink}
                title="Principal Dashboard"
                className="w-full h-[calc(100vh-140px)] border-0"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg shadow-lg border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-700">Dashboard Not Available</h2>
              <p className="text-slate-500 mt-2">The dashboard link for your role could not be found.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PrincipalDashboard;