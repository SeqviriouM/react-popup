import React, { PropTypes } from 'react';
import Button from 'components/Button';
import { browserHistory} from 'react-router';
import 'styles/main.scss';

export default class Application extends React.Component {
    openPopup = () => {
        browserHistory.push('/popup');
    }

    render() {
        return (
            <div>
                <div>
                    <Button onClick={this.openPopup} theme={'action'}>
                        Давай, не стесняйся
                    </Button>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
