import React, { Component } from 'react';
import Button from '../Button';
import { images } from '../Custom';
import heroImage from '../../image/MOLMD159WALSET1_zm.jpg';
import Image from './Image';

export class Index extends Component {
  state = {
    value: '',
    imgWidth: 'w-3/5',
  };

  widthChangeHandler = () => {
    this.setState({ imgWidth: 'w-1/5' });
  };
  widthRestoreHandler = () => {
    this.setState({ imgWidth: 'w-3/5' });
  };
  render() {
    const { value, imgWidth } = this.state;
    return (
      <section className="title-gradient md:pb-16">
        <div className="flex flex-col sm:flex-row md:flex-row gap-y-10 items-center h-[90vh]">
          <div className="w-full h-full md:w-2/5 relative z-[1] order-2 sm:order-1">
            <div className="static sm:absolute px-2 lg:pl-0 sm:pl-5 md:absolute sm:top-48 md:top-24 lg:top-48 lg:left-[28%] sm:left-0 w-full h-full space-y-5">
              <h1 className="text-2xl md:text-5xl md:leading-relaxed lg:text-7xl  font-extrabold lg:leading-normal md:mb-6">
                Future <br /> Of furniture
              </h1>
              <p className="text-gray-500 leading-normal text-sm md:text-base">
                Find an Elegant and luxurious interior <br /> designed by a
                professional interior designer.
              </p>
              <form action="" className="mt-12 flex w-full lg:w-[80%]">
                <input
                  type="text"
                  placeholder="Search your product here"
                  value={value}
                  onChange={(e) => {
                    this.setState({ value: e.target.value });
                  }}
                  className="w-full border border-gray-500 text-sm p-2 md:p-3 outline-none"
                />
                <Button
                  type="submit"
                  title="Search"
                  className="bg-black text-sm md:text-base text-white px-3 md:px-8"
                />
              </form>
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex gap-1 md:gap-2 lg:gap-8 order-1 sm:order-2">
            <div
              className={`h-full transition-all duration-500 ${imgWidth} relative`}
            >
              <img
                src={heroImage}
                alt=""
                loading="Sofa"
                className="h-full object-cover"
              />
              <span
                title="Sofa"
                className={`after:absolute after:w-4 after:h-4 after:bg-white after:block after:top-0 after:left-0 after:translate-x-1/2 after:translate-y-1/2 after:rounded-full absolute w-8 h-8 bg-[#ffffff57] block top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer after:cursor-pointer`}
              ></span>
            </div>
            <Image
              className="w-1/5 h-full"
              heroImage={images.hoverImg1st}
              title="couch"
              widthChange={this.widthChangeHandler}
              widthRestore={this.widthRestoreHandler}
            />
            <Image
              className="w-1/5 h-full"
              heroImage={images.hoverImg2nd}
              title="Table"
              widthChange={this.widthChangeHandler}
              widthRestore={this.widthRestoreHandler}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Index;
