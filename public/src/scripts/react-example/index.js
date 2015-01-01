var React = require('react');

var Sticky = require('react-stickydiv');

var ReactBootstrap = require('react-bootstrap'),
  Input = ReactBootstrap.Input,
  Well = ReactBootstrap.Well;

var _ = require('lodash');

// Simple unrecommended way to save state between route changes.
// A Reflux store should be used instead for the sake of expandability
// and convention but this is just a simple demo for React.
var name = 'friend';

// Create a react view-controller
var ReactExample = React.createClass({
  // Called whenever the route is changed to the one associated with this
  // view-controller. We'll load the variable-stored name into the state.
  getInitialState: function(){
    return {
      name: name
    };
  },
  componentDidMount: function() {
    $.get('assets/STICKY.html', _.bind(function(data) {
      this.setState({md: data});
    }, this));
  },
  // Updates the state and the variable to the value of the nested input
  updateName: function(){
    name = this.refs.name.getValue().trim();
    this.setState({
      name: name
    });
  },
  // Render a title, the output portion, and the input portion.
  // This is a very simple demo and akin to the one on the React homepage
  render: function(){
    return (
      <div>
        <Sticky><h2>Sticky, Sticky Div</h2></Sticky>
        <div dangerouslySetInnerHTML={{__html: (this.state.md)}} />
        <Well>
          <p>     
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
          </p>
          <p>     
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
          </p>
          <p>     
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
          </p>
        </Well>
      </div>
    );
  }
});

// Export it
module.exports = ReactExample;
