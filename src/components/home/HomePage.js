import React from 'react';

//when a component is passed it has default props in it 
//inside props we have history object to keep track of url
const HomePage = ({history}) =>{
    return (
      <div onClick={()=>history.push('/events')} className="btn btn-primary huge white inverted button">
      Get Started
      <i className="right arrow icon" />
    </div>
    )
}

export default HomePage ;