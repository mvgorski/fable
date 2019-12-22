import React from 'react';

export default class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__copyright">
            &copy; Fable { year }
          </div>
          <div className="footer__social">
            social
          </div>
        </div>
      </footer>
    )
  }
};