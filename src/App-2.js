import React from "react";
import store from "./js/store";
import "./styles/App.css";
import api from "./js/api";
import Head from "./js/components/head";
import  Bar from "./js/components/Bar";
import  TopContent from "./js/components/TopContent";
import  Gallery from "./js/components/Gallery";

//Primera refactorizacion App-2

function actionSearch(art_name) {
  return (dispatch) => {
    search(art_name).then(
      (art) => dispatch({ type: "SEARCH", art }),
      (err) => dispatch({ type: "ERROR", err })
    );
  };
}
async function search(art_name) {
  try {
    let art = await api(art_name);
    return art.artists[0];
  } catch (e) {
    throw e;
  }
}
/////

class Header extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
      }

  render() {
    return (
      <div className="header">
        <Head/>
        <Bar
         submit = {(value) => {store.dispatch(actionSearch(value))}}
         store = {store}
         />
      </div>
    );
  }
}

class Section extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        store.dispatch(actionSearch("bruno mars"));
      }
  render() {
    return (
      <div className="section container-info">
        <TopContent store = {store}/>
        <Gallery 
        store = {store}/>
      </div>
    );
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
