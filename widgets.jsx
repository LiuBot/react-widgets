import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
// import Weather from './weather';
import Clock from "./clock";

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

const tabs = [
  {label: 'tab 1', content: 'Welcome to tab 1 content!'},
  {label: 'tab 2', content: 'WOW. Welcome to tab 2 content!'},
  {label: 'tab 3', content: 'BAM. Welcome to tab 3 content!'}
];

ReactDOM.render(
	<div>
	<Clock />
	<Tabs tabs={tabs} />
	</div>,
	root);
});
