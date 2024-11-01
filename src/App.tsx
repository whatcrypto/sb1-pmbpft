import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { RegisterPage } from './pages/RegisterPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CoinAnalysisPage } from './pages/CoinAnalysisPage';
import { PricingPage } from './pages/PricingPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { ReportsPage } from './pages/ReportsPage';
import { SettingsPage } from './pages/SettingsPage';
import { InvestingIdeasPage } from './pages/InvestingIdeasPage';
import { EducationPage } from './pages/EducationPage';
import { CoursePage } from './pages/CoursePage';
import { ModulePage } from './pages/ModulePage';
import { PersonalFinancePage } from './pages/PersonalFinancePage';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProgressProvider>
          <PortfolioProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/investing-ideas" element={<InvestingIdeasPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/personal-finance" element={<PersonalFinancePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route 
                  path="/education/:courseId" 
                  element={
                    <ProtectedRoute>
                      <CoursePage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/education/:courseId/module/:moduleId" 
                  element={
                    <ProtectedRoute>
                      <ModulePage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/portfolio/:category" 
                  element={
                    <ProtectedRoute>
                      <PortfolioPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/coin/:coinId" 
                  element={
                    <ProtectedRoute>
                      <CoinAnalysisPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/analytics" 
                  element={
                    <ProtectedRoute>
                      <AnalyticsPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/reports" 
                  element={
                    <ProtectedRoute>
                      <ReportsPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/settings" 
                  element={
                    <ProtectedRoute>
                      <SettingsPage />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </Router>
          </PortfolioProvider>
        </ProgressProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}