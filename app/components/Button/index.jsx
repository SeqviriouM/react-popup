import React, { PropTypes } from 'react';
import cx from 'classnames';

import './style.scss';


export default class Button extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        inProgress: PropTypes.bool,
        theme: PropTypes.string,
        size: PropTypes.string,
    }


    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
        };
    }


    render() {
        const classes = cx('button', 'button_theme_' + this.props.theme, 'button_size_' + this.props.size, this.props.className, {
            'button_type_in-progress': this.props.inProgress
        });

        let style = Object.assign({}, this.props.style);

        return (
            <button {...this.props} style={style} className={classes}>
                <span className="button__text">
                    {this.props.children}
                </span>
            </button>
        );
    }
}
