import React from 'react';
import HomeContent from '../content/HomeContent';
import DefaultLayout from '../layouts/DefaultLayout';

function Home() {
  return (
    <DefaultLayout alignItems="center" justifyContent="center" suppressCssWatchMouse>
      <HomeContent />
    </DefaultLayout>
  );
}

export default Home;
