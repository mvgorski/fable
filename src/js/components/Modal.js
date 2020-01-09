import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    console.log('modal props', props);
  }

  render() {
    const { album, close, fade, show } = this.props;
    const fadeClass = fade ? ' fade' : '';
    console.log(close);
    return (
      show ? [
      <div
        key="1"
          className={'modal-overlay' + (fadeClass)}
      />,
      <div
        key="2"
        className={'modal' + (fadeClass)}
      >
        <div className="modal__content">
          <button
            className="modal__close"
            type="button"
            onClick={close}
            >
          </button>
          <h2>{album.title}</h2>
        </div>
      </div>
      ]
      : null
    );
  }
}
export default Modal;
