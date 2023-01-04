import React from 'react';
import { Route } from 'react-router-dom';
import SuperAdminLayout from '../../Layout/SuperAdminLayout';
import Conferences from '../../Pages/Conferences';
import ConferencesAdmins from '../../Pages/ConferencesAdmins';
import Settings from '../../Pages/Settings';

const SuperAdmin = () => {
  return (
    <SuperAdminLayout>
      <Route path="/confernces" element={<Conferences />} />
      <Route path="/conferncesAdmins" element={<ConferencesAdmins />} />
      <Route path="/settings" element={<Settings />} />
    </SuperAdminLayout>
  );
};

export default SuperAdmin;
