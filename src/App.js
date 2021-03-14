import React from 'react';

import MainLayout from '@/layouts/Main/MainLayout';

import BurgerBuilder from '@/containers/BurgerBuilder';

const App = () => {
  return (
    <MainLayout>
      <BurgerBuilder />
    </MainLayout>
  );
};

export default App;
