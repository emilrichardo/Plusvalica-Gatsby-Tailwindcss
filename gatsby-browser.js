import "./src/assets/styles/global.css"
import React from 'react';
import PageLayout from './src/layouts/Layout';
export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>;
};