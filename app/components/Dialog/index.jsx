import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import PopUp from 'components/PopUp';
import cx from 'classnames';
import Button from 'components/Button';
import Input from 'components/Input';
import './style.scss';


export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContent: false,
            showError: false,
            errorLevel: 1,
        };
    }

    clickContent = () => {
        this.setState({
            showContent: !this.state.showContent,
        });
    }


    clickExtendedContent = (e) => {
        e.stopPropagation();
    }


    clickSave = (e) => {
        if (this.state.showContent) {
            this.setState({
                showError: !this.state.showError,
            });
        }
    };


    render() {
        const renderError = (level) => {
            let jsx = '';

            if (this.state.showError) {
                jsx = (
                    <div className="dialog-row__err-text">
                        Заголовок не заполнен
                    </div>
                );
            }

            return jsx;
        };

        const getDialogContent = () => {
            let jsx = '';

            if (this.state.showContent) {
                jsx = <span>Не контент диалога</span>;
                jsx = (
                    <div onClick={this.clickExtendedContent}>
                        <div className='dialog-row'>
                            <div className='dialog-row__title'>
                                <span>Заголовок:</span>
                            </div>
                            <div className='dialog-row__control'>
                                <Input className='dialog-row__control_input'/>
                            </div>
                            {renderError()}
                        </div>
                        <div className='dialog-row'>
                            <div className='dialog-row__title'>
                                Описание:
                            </div>
                            <div className='dialog-row__control'>
                                <Input className='dialog-row__control_input'/>
                            </div>
                        </div>
                        <div className='dialog-row'>
                            <div className='dialog-row__title'>
                                Подсказка:
                            </div>
                            <div className='dialog-row__control'>
                                <Input className='dialog-row__control_input'/>
                            </div>
                        </div>
                        <div className='dialog-row'>
                            <div className='dialog-row__title'>
                                Адрес:
                            </div>
                            <div className='dialog-row__control'>
                                <Input className='dialog-row__control_input'/>
                            </div>
                        </div>
                        <div className='dialog-row'>
                            <div className='dialog-row__title'>
                                Телефон:
                            </div>
                            <div className='dialog-row__control'>
                                <Input className='dialog-row__control_input'/>
                            </div>
                        </div>

                    </div>
                );
            } else {
                jsx = <span>Контент диалога</span>
            }

            return jsx;
        };


        return (
            <div>
                <PopUp className='dialog'>
                    <div className='dialog__title'>
                        Название диалога
                    </div>
                    <div
                        className={cx('dialog__content', {
                            'dialog__content_simple': !this.state.showContent
                        })}
                        onClick={this.clickContent}
                    >
                        {getDialogContent()}
                    </div>
                    <div className='dialog__actions'>
                        <div className='dialog__action dialog__action_save'>
                            <Button theme={'action'} size={'m'} onClick={this.clickSave}>
                                Сохранить
                            </Button>
                        </div>
                        <div className='dialog__action dialog__action_cancel'>
                            <Button theme={'normal'} size={'m'}>
                                Отменить
                            </Button>
                        </div>
                    </div>
                </PopUp>
                <Link to='/'>
                    <div className='dialog__overlay' />
                </Link>
            </div>
        );
    }
}
