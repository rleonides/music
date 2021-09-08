import React from "react";
class Gallery extends React.Component {
    state = {
      artist: {},
    };
    render() {
      let artist_ = this.props.store.getState().artist;
      let img = [],
        cont = 0,
        arr = Object.keys(artist_);
      for (let i = arr.length - 6; ; i--) {
        let div = (
          <div className="pic" key={i}>
            <img src={artist_[arr[i]]} alt="" />
          </div>
        );
        if (artist_[arr[i]]) img.push(div);
        cont++;
        if (cont === 8) break;
      }
  
      return <div className="photo-galery">{img}</div>;
    }
  }
  export default Gallery;