
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
			<div className='widget col-1-4'>

				<div className='col-1 cf'>
				<h1>Tabs</h1>
				<ul className='tab-list cf'>
				{tabs.map((tab, i) =>(
						<li onClick={this.updateSelectedTab.bind(this, i)} 
						//Add a click handler to each li that updates the selected index in the Tabs component.
						key={tab.label}><h2>{tab.label}</h2></li>
					)) 
				}
				</ul>
				</div>

				<div className="col-1">
					<article className="tab-content">
					<p>{tabs[selectedTab].content}</p>
					</article>
				</div>

			</div>
		)
	}
}
export default Tabs;