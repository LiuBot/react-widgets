import React from 'react';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Autocomplete extends React.Component{
	constructor(props){
		super(props);

		this.state= {search: "", filteredNames: this.props.names};
	}


	filterNames(event){
		let search = event.currentTarget.value; 

		let filteredNames = this.props.names.filter( name =>{
			name = name.toLowerCase();
				return (name.indexOf(search) === 0);
		});

		this.setState({search, filteredNames})
	}

	render(){

		return(
			<div className="widget col-1-4">
				<h1>Autocomplete</h1>
				<div className="auto-box col-1">
				<input type="text"
					className="search-bar"
					value={this.state.search}
					placeholder="Search languages..."
					onChange={this.filterNames.bind(this)} />
					
				<ul className="col-1 results">
				{
					this.state.filteredNames.map((name, i) => (
					<li key={i}>{name}</li>
						))
				}
				</ul>

				</div>
			</div>
			)
	}
}

export default Autocomplete;