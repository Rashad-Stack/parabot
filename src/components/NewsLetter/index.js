import React, { Component } from 'react';
import { Container } from '../Custom';
import Button from '../Button';

export class index extends Component {
  state = {
    value: '',
  };
  render() {
    const { value } = this.state;
    return (
      <section className="py-16 md:py-32">
        <Container>
          <div className="w-full lg:w-3/5 m-auto text-center flex flex-col gap-y-3 md:gap-10 md:px-16">
            <p className="text-xl md:text-4xl font-normal">
              Join our newsletter for $10 off
            </p>
            <p className="text-gray-400 text-md md:text-lg leading-normal">
              We'll email you a voucher worth $10 off your first order over $50.
              By subscribing you agree to our terms & conditions and privacy or
              cookies policy.
            </p>
            <form
              action=""
              className="w-full flex flex-col space-y-3 sm:space-y-0 sm:flex-row"
            >
              <input
                type="text"
                placeholder="Enter Email"
                value={value}
                onChange={(e) => this.setState({ value: e.target.value })}
                className="w-full p-2 sm:p-4 border-2 border-black outline-none"
              />
              <Button
                title="Subscribe"
                className="py-2  px-3 sm:px-10 text-sm sm:text-lg"
              />
            </form>
          </div>
        </Container>
      </section>
    );
  }
}

export default index;
