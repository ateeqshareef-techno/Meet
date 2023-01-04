import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import SuperAdminLayout from './Layout/SuperAdminLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { colors } from './theme/colors';
import Conferences from './Pages/Conferences';
import ConferencesAdmins from './Pages/ConferencesAdmins';
import Settings from './Pages/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './components/LogIn';
let theme = createTheme({
  palette: {
    backgroundColors: {
      primary: colors.backgroundColors.primary,
      secondary: colors.backgroundColors.secondary
    },
    textColors: {
      primary: colors.textColors.primary,
      secondary: colors.textColors.secondary,
      black: colors.textColors.black
    },
    buttonColors: {
      primary: colors.buttonColors.primary,
      secondary: colors.buttonColors.secondary
    },
    borderColors: {
      primary: colors.borderColors.primary,
      secondary: colors.borderColors.secondary
    }
  },
  typography: {
    h1: {
      fontFamily: '"Cinzel", serif'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/superAdmin" element={<SuperAdminLayout />}>
            <Route path="confernces" element={<Conferences />} />
            <Route path="conferncesAdmins" element={<ConferencesAdmins />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
