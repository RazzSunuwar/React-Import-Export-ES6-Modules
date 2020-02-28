// named and default import/export
// only one default export module
// think one module as file

import React from 'react';
import {name, age, person} from './data';

const App = () => (
  <section>
  <p>This is is my content.</p>
<p>{name}</p>
<p>{age}</p>
<p>{person.name}</p>
  </section>
);

// import * as data from './data';
// const App = () => (
//   <section>
//   <p>This is is my content.</p>
// <p>{data.name}</p>
// <p>{data.age}</p>
// <p>{data.person.name}</p>
//   </section>
// );


export default App
