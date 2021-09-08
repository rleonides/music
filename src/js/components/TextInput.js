import React from "react";

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
    if (this.state.value !== "") this.props.submit(this.state.value);
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
export default TextInput;