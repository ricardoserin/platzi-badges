// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import Badge from './components/Badge';
import BadgeNew from './containers/BadgeNews';
import Badges from './containers/Badges';
// const nombre = 'Ricardo Serin';
// const element = React.createElement('h1', {}, `Hola ${nombre}`);

// const jsx2 = <h1>Hello, Platzi Badges!</h1>;
// const jsx = <h1>Hola soy {nombre} y tengo {2*15-8+1} años.</h1>
// const element = React.createElement('a',{href: 'https://platzi.com'}, 'Ir a platzi');
const container = document.getElementById('app');
// ReactDOM.render(<BadgeNew />, container);
ReactDOM.render(<Badges />, container);
// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
// <Badge 
//   firstName='Ricardo' 
//   lastName='Serin'
//   jobTitle='Kickass Fronted Engineer'
//   twitter='@ricardoserin'
//   />, container);
