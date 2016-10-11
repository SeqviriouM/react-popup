import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes/routes';

export default class Root extends React.Component {
    render() {
        return (
            Routes
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('app'));
