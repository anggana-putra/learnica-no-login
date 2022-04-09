import HpUpSection from './hpUpSection';
import ModePembelajaran from './modePembelajaran';
import Lanjutkan from './lanjutkan';
import './homepage.css'

import React from 'react';

function HomePage() {
    return (
        <div className="HomePage">
          <HpUpSection />
          <ModePembelajaran />
          <Lanjutkan />
        </div>
    );
}

export default HomePage;