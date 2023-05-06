import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import AppLayout from './AppLayout';
import NotFound from './NotFound';
import AboutPage from '@routes/public/AboutPage';
import LandingPage from '@routes/public/LandingPage';
import PublicLayout from './PublicLayout';
import GoogleDorksPage from './googleDorks/GoogleDorksPage';
import OSINTPage from './osint/OsintPage';
import SettingsPage from './settings/SettingsPage';

export default function AppRoutes(): React.ReactElement {
  return (
  <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='about' element={<AboutPage />} />
      </Route>
      <Route path='/app' element={<AppLayout />}>
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='dashboard/:caseId' element={<OSINTPage />} />
        <Route path='dorking' element={<GoogleDorksPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
