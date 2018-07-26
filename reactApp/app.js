import React from 'react';
import ReactDOM from 'react-dom';

const dummyData=["Come to SF","Master React","Sleep"];

class ToDoList extends React.Component{

	constructor(props){
		super(props)
	}
	render(){
		return(
			<ul>
			{this.props.data.map((item)=> <li>{item}</li>)}
			
			</ul>

		)
	}
}

ReactDOM.render(<ToDoList data={dummyData}/>,
   document.getElementById('root'));