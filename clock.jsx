import React from 'react';

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {time: new Date()}
		this.timer = undefined;
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState({time: new Date()})
		}, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	render(){
		let {time} = this.state;

    return (
    	<div className='widget col-1-2'>

	      <h1>Clock</h1>
	    	<div className='cf clock-box'>
		      <div className='clock-row col-1'>
		      	<span>Time:{time.toLocaleTimeString()}</span>
		      </div>

		      <div className="clock-row col-1">
		      	<span>Date:{time.toLocaleDateString()}</span>
	      	</div>	
     		 </div>

      </div>
    );
  }
}
export default Clock;