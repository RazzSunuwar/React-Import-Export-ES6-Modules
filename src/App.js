//Preference
// Functional Vs Class Based Components
// Performance Benefits

import React, {Component } from 'react';
import {name, age, person} from './data';
import Banner from './components/Header/banner';

// Functional Based Component
const App = () => (
  <section>
    <Banner />
  <p>This is is my content.</p>
<p>{name}</p>
<p>{age}</p>
<p>{person.name}</p>
  </section>
);

// Class Based Component
class App1 extends Component {
    render(){
        return(
            <section>
            <Banner />
            <p>This is is my content.</p>
            <p>{name}</p>
            <p>{age}</p>
            <p>{person.name}</p>
            </section>
        );
    };
};

export default App1;
