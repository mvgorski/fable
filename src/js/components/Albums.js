import React from 'react';

class Albums extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    const { albums, setCurrentAlbum } = this.props;
    console.log('setcurrentalbum', setCurrentAlbum);

    return (
      <ul className="albums">
        {
          albums.map((album, i) => {
            const albumArt = `../src/img/${ album.art }`;

            return (
              <li
                key={i}
                className="album"
                onClick={() => setCurrentAlbum(album) }
              >
                <div className="album__content">
                  <h2>{ album.title }</h2>
                  <div className="album__art-wrap">
                    <img
                      className="lazyload"
                      data-srcset={ albumArt }
                      data-sizes="auto"
                    />
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Albums;