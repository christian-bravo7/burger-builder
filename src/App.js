import React from 'react';

import MainLayout from '@/layouts/MainLayout';
import BurgerBuilder from '@/components/containers/BurgerBuilder';

const App = () => {
  return (
    <MainLayout>
      <BurgerBuilder />
    </MainLayout>
  );
};

export default App;
