import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./styles/App.css";
import api from "./js/api";

//action creators
function actionSearch(art_name) {
  return (dispatch) => {
    search(art_name).then(
      (art) => dispatch({ type: "SEARCH", art }),
      (err) => dispatch({ type: "ERROR", err })
    );
  };
}
/////
function reducer(state = { artist: {}, err: "", }, action) {
  if (action.type === "SEARCH")
    return { err: "", artist: action.art, };
  else if (action.type === "ERROR") return { ...state, err: action.err };
  else return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

async function search(art_name) {
  try {
    let art = await api(art_name);
    return art.artists[0];
  } catch (e) {
    throw e;
  }
}

const Head = () => {
  return (
    <div className={"head"}>
      <div className="container">
        <div className="about">
          <h4 className="text-white">About</h4>
          <p className="text-muted">
          Esta aplicación está dirigida a que usted conozca algo más de sus 
          cantantes favoritos, puede buscar por artista o grupo musical introduciendo
           su nombre correcto en el campo de búsqueda. La misma está desarrollada a partir
            de un examen técnico propuesto por Cura Deuda<a href="http://www.curadeuda.com" className="text-white">www.curadeuda.com</a>. Saludos !...
          </p>
        </div>

        <div className="contact">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li>
              <ion-icon name="logo-twitter"></ion-icon>
              <a href="https://twitter.com/" className="text-white">
                Follow on Twitter
              </a>
            </li>
            <li>
              <ion-icon name="logo-facebook"></ion-icon>

              <a
                href="https://www.facebook.com/rafaelleonides.perezgonzalez"
                className="text-white"
              >
                Like on Facebook
              </a>
            </li>
            <li>
              <ion-icon name="logo-instagram"></ion-icon>
              <a
                href="https://www.instagram.com/rafaleonides/"
                className="text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

class TextInput extends React.Component {
  state = {
    value: "",
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.value !== "") store.dispatch(actionSearch(this.state.value));
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="input">
        <input
          onChange={this.onChange}
          className="search"
          value={this.state.value}
          type="text"
          placeholder="Search..."
        />
        <span onClick={this.handleSubmit}>
          <ion-icon name="search-outline"></ion-icon>
        </span>
      </div>
    );
  }
}

class Bar extends React.Component {
  state = {
    display: false,
  };

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  click = () => {
    let head = document.querySelector(".head");
    let c = document.querySelector(".container");
    if (head.classList.toggle("display")) {
      head.style.height = c.offsetHeight + "px";
    } else {
      head.style.height = "0px";
    }

    this.setState((prevState) => ({
      display: !prevState.display,
    }));
  };

  render() {
    return (
      <div className="bar">
        <div className="bar-1">
          <span>
            <ion-icon name="musical-notes-outline"></ion-icon>
          </span>
          <span className="artName">
            {" "}
            {store.getState().artist.strArtist || ""}{" "}
          </span>
        </div>

        <div className="bar-3">
          <span onClick={this.click}>
            {this.state.display ? (
              <ion-icon name="close-outline"></ion-icon>
            ) : (
              <ion-icon name="reorder-three-outline"></ion-icon>
            )}
          </span>
        </div>
        <TextInput />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Head />
        <Bar />
      </div>
    );
  }
}

class Section extends React.Component {
  render() {
    return (
      <div className="section container-info">
        <TopContent />
        <Gallery />
      </div>
    );
  }
}

class TopContent extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  render() {
    return (
      <div className="top-content">
        <div className="atrInfo1">
          <div id="photo">
            {" "}
            <img src={store.getState().artist.strArtistThumb} alt="" />
          </div>

          <div className="atrInfo2">
            <div>
              {" "}
              Name :{" "}
              {store.getState().artist.strArtistAlternate ||
                store.getState().artist.strArtist}
            </div>
            <div> Stage name : {store.getState().artist.strArtist}</div>
            <div> Born Year : {store.getState().artist.intBornYear}</div>
            <div> Musical style : {store.getState().artist.strStyle}</div>
            <div> Musical gener : {store.getState().artist.strGenre}</div>
          </div>
        </div>

        <div className="artInfo3">
          <h2> Biography </h2>
          <div>{store.getState().artist.strBiographyEN}</div>
        </div>
      </div>
    );
  }
}

class Gallery extends React.Component {
  state = {
    artist: {},
  };
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    store.dispatch(actionSearch("bruno mars"));
  }

  render() {
    let artist_ = store.getState().artist;
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

function App() {
  return (
    <div>
      <Header />
      <Section />
    </div>
  );
}

export default App;
