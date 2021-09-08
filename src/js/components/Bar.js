import React from "react";
import TextInput from "./TextInput";
class Bar extends React.Component {
    state = {
      display: false,
    };
  
  
    click = () => {
      let head = document.querySelector(".head");
      let c = document.querySelector(".container");
      let bar = document.querySelector(".bar");
      let b = window.innerHeight - bar.offsetHeight;
      if (head.classList.toggle("display")) {
        head.style.height = Math.min(c.offsetHeight, b) + "px";
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
              {this.props.store.getState().artist.strArtist || ""}{" "}
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
          <TextInput submit = {this.props.submit}/>
        </div>
      );
    }
  }
  export default Bar;