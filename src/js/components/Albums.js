import React from 'react';
import albums from '../data/albums-json';

class Albums extends React.Component {
  constructor() {
    super()
    this.albums = albums;
    this.testObj = [
      {
        title: 'what'
      },
      {
        title: 'huh'
      }
    ];
  }

  componentDidMount() {
    console.log(albums, this.albums);
    console.log(this.test());
  }

  test() {
    this.albums.forEach((album) => {
      console.log(album);
    });
  }

  testString() {
    const test = 'aaron-rodgers-handle-BIG-HANDLE'
    const numbers = 789456;
    const stringToAppend = 'holy super cali fragilistic';
    return `${test} but nonsense ${stringToAppend} ++ ${numbers}`;
  }

  render() {
    return (
      <div className="albums">
        {
          albums.map((album, i) => {
            return (
              <div key={i} className="albums__album">
                <h3>{ album.title }</h3>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Albums;