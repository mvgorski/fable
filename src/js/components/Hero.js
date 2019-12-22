import React from 'react';

class Hero extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('DID MOUNT');
  }

  testString() {
    const test = 'aaron-rodgers-handle-BIG-HANDLE'
    const numbers = 789456;
    const stringToAppend = 'holy super cali fragilistic';
    return `${test} but nonsense ${stringToAppend} ++ ${numbers}`;
  }

  render() {

    return (
      <div className="hero">
        {/* <h3>{ this.testString() }</h3> */}
        <img src="../src/img/hero.jpg" alt="Fable" />
      </div>
    );
  }
}

export default Hero;