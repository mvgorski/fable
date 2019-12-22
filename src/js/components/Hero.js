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
        <img
          class="lazyload"
          data-srcset="../src/img/hero.jpg"
          data-sizes="auto"
        />
      </div>
    );
  }
}

export default Hero;