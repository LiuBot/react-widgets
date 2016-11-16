// Make a Tabs component. Root should pass Tabs an 
// array of Javascript objects (the data for the 
// tabs) that have title and content as keys. 

// Display all the titles, but have the selected 
// title in bold font. 

// Below, it should display only 
// the contents of the selected tab. The content 
// pane should update when the user selects 
// different headers.
import React from 'react';


class Tabs extends React.Component{
	constructor(props){
		super(props);

		this.state = {selectedTab: 0};
	}

	updateSelectedTab(selectedTab){
		this.setState({selectedTab});
	}
	
	render(){  
		let {tabs} = this.props; //Root should pass Tabs an array of Javascript objects (the data
														//for the tabs)
		let {selectedTab} = this.state;

//In the render method of Tabs, render a collection of <h1>s (with titles)
// in a <ul> and the content of the selected tab in an <article>.
		return(
			<div>

				<div>
				<h1>Tabs</h1>
				<ul>
				{tabs.map((tab, i) =>(
						<li onClick={this.updateSelectedTab.bind(this, i)} 
						key={tab.label}><h1>{tab.label}</h1></li>
					)) 
				}
				</ul>
				</div>

				<div>
					<article>
					{tabs[selectedTab].content}
					</article>
				</div>

			</div>
		)
	}
}
export default Tabs;