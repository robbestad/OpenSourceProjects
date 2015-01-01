// Require libraries
var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  NotFoundRoute = Router.NotFoundRoute,
  RouteHandler = Router.RouteHandler,
  Link = Router.Link,

  ReactBootstrap = require('react-bootstrap'),
  Nav = ReactBootstrap.Nav,

  ReactRouterBootstrap = require('react-router-bootstrap'),
  NavItemLink = ReactRouterBootstrap.NavItemLink,
  ButtonLink = ReactRouterBootstrap.ButtonLink,

  $ = require('jquery');

// Build the root applicatino React view-controller
var Application = React.createClass({
  render: function(){
    return (
      <div className="container main-container">
        <header>
          <h1 className="text-muted">React StickyDiv</h1>
        </header>
        <RouteHandler />
      </div>
    );
  }
});

// Require individual app components
var StickyDemo = require('./react-example'),
  RefluxExample = require('./reflux-example'),
  MongooseExample = require('./mongoose-example');

// Define react-router routes
var routes = (
  <Route name="app" path="/" handler={Application}>
    <Route name="react" handler={StickyDemo} />
    <DefaultRoute handler={StickyDemo} />
  </Route>
);

// Run the router
Router.run(routes, function(Handler){
  // Render the root app view-controller
  React.render(<Handler />, $('#app-root')[0]);
});
