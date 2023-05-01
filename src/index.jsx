import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import Navigation from './navigation/Navigation';

const Listitems = ['Home', 'Impressum', 'Medien'];

const otherItems = ['Hallo', 'Kontakt', 'Formular'];

const links = ['http://www.google.de', 'http://www.amazon.de'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Navigation testitems={Listitems} randomName='Döddel'/>
        <Navigation
          testitems={otherItems}
          randomName='Hodensack'
          links={links}
          />
    </div>
);
