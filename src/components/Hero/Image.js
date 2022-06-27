import React, { Component } from 'react';

export class Image extends Component {
  state = {
    className: this.props.className,
  };

  onMouseOverHandler = () => {
    this.props.widthChange();
    this.setState({ className: 'w-3/5' });
  };
  onMouseOutHandler = () => {
    this.props.widthRestore();
    this.setState({ className: this.props.className });
  };

  render() {
    const { heroImage, title } = this.props;
    const { className } = this.state;
    return (
      <div
        className={`transition-all duration-500 ${className} relative `}
        onMouseOver={this.onMouseOverHandler}
        onMouseOut={this.onMouseOutHandler}
      >
        <img
          src={heroImage}
          alt={title}
          loading="lazy"
          className="h-full object-cover transition duration-500"
        />
        <span
          title={title}
          className={`after:absolute after:w-4 after:h-4 after:bg-white after:block after:top-0 after:left-0 after:translate-x-1/2 after:translate-y-1/2 after:rounded-full absolute w-8 h-8 bg-[#ffffff57] block top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer after:cursor-pointer`}
        ></span>
      </div>
    );
  }
}

export default Image;
