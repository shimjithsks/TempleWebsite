import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Donations() {
  // Redirect to the main Donate overview (this file was a duplicate)
  return <Navigate to="/donate" replace />;
}
