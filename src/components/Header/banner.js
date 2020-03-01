import React from 'react';
import { name, age, person } from '../../data';
// rfc => functional based component
// rcc => class based component

// export default function Banner(){
//     return (
//         <div>
//             <h1>Hello From Banner {name} </h1>
//         </div>
//     );
// };

function Banner (){
    return (
        <div>
            <h1>Hello From Banner {name} </h1>
        </div>
    );
};

export default Banner;