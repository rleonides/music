import React from "react";
class TopContent extends React.Component {
    componentDidMount() {
      this.props.store.subscribe(() => this.forceUpdate());
    }
    render() {
      return (
        <div className="top-content">
          <div className="atrInfo1">
            <div id="photo">
              {" "}
              <img src={ this.props.store.getState().artist.strArtistThumb} alt="" />
            </div>
  
            <div className="atrInfo2">
              <div>
                {" "}
                Name :{" "}
                { this.props.store.getState().artist.strArtistAlternate ||
                   this.props.store.getState().artist.strArtist}
              </div>
              <div> Stage name : { this.props.store.getState().artist.strArtist}</div>
              <div> Born Year : { this.props.store.getState().artist.intBornYear}</div>
              <div> Musical style : { this.props.store.getState().artist.strStyle}</div>
              <div> Musical gener : { this.props.store.getState().artist.strGenre}</div>
            </div>
          </div>
  
          <div className="artInfo3">
            <h2> Biography </h2>
            <div>{ this.props.store.getState().artist.strBiographyEN}</div>
          </div>
        </div>
      );
    }
  }
  export default TopContent;