import React from 'react';

import MainLayout from '@/layouts/MainLayout';
import BurgerBuilder from '@/components/containers/BurgerBuilder';

function App () {
  return (
    <MainLayout>
      <BurgerBuilder />
    </MainLayout>
  );
}

export default App;
