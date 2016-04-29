import * as React from 'react';
import * as ReactDOM from 'react-dom';

var App = React.createClass({
    render() {
        return (
            <div className="container">
            Hello React!
            </div>
        );
    }
});

ReactDOM.render(
   <App />,
   document.getElementById('mount') 
);