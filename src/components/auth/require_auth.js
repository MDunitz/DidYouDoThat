import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
  class Authentication extends Component{
    //add router to this.context, context is similar to props but can skip levels in component heirarchy
    //static key word defines a class level property
    static contextTypes = {
      router: React.PropTypes.object
    }
    //check if they are authenticated before mounting component-if not send to '/'
    componentWillMount(){
      if(!this.props.authenticated)
      this.context.router.push('/')
    }
    //check if they are authenticated when updating component-if not send to '/'
    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.context.router.push('/');
      }
    }

    render(){
      //pass the component any props it was called with
      return <ComposedComponent {...this.props} />
    }

  }

  function mapStateToProps(state){
      return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}