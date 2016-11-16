import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

const tabs = [
  {label: 'tab 1', content: 'this is content'},
  {label: 'tab 2', content: 'this is more content'},
  {label: 'tab 3', content: 'this is even more content'}
];

ReactDOM.render(
	<Tabs tabs={tabs} />, 
	root);
});
