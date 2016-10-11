import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';
import './style.scss';


export default class PopUp extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
        motionConfig: PropTypes.array,
    }

    static defaultProps = {
        style: {},
        motionConfig: [120, 11],
    }


    render() {
        const getContent = interpolated => (
            <div className='popup-wrapper'>
                <div
                    {...this.props}
                    className={cx('popup', this.props.className)}
                    style={Object.assign({}, this.props.style, {transform: `scale(${interpolated.scale})`})}
                >
                    {this.props.children}
                </div>
            </div>
        );

        return (
            <Motion
                defaultStyle={{scale: spring(0)}}
                style={{scale: spring(1, this.props.motionConfig)}}
            >
                {interpolated => getContent(interpolated)}
            </Motion>
        );
    }
}