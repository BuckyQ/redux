import React from 'react';
import { connect } from 'react-redux';
import AssignOne from './AssignOne';
import Assigntwo from './AssignTwo';





const HOC = (Component) => {
    const WithVisible = ({ visible, ...rest }) => {
      if (!visible) return null;
      return <Component {...rest} />;
    };
    return WithVisible;
  };
  

  const AssignThree = () => {
    const ShowOne = HOC(AssignOne);
    const ShowTwo = HOC(Assigntwo);

    return (
      <div>
        <ShowOne visible/>
        <ShowTwo visible/>
      </div> 
    )
  }


  const mapStateToProps = (state) => {

  }


  const mapDispathToProps = () => ({

  })

  const AssignThreeConnect = connect(mapStateToProps, mapDispathToProps)(AssignThree)

  export { AssignThreeConnect as default, AssignThree}