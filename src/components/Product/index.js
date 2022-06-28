import React, { Component } from 'react';
import { Container } from '../Custom';
import Product from './Product';
import Button from '../Button';
import { GiShoppingCart } from 'react-icons/gi';
// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
const axios = require('axios').default;
export class index extends Component {
  state = {
    isOpen: false,
    userData: [],
  };

  async getUser() {
    try {
      const response = await axios.get(
        'https://course-api.com/react-store-products',
      );
      this.setState({ userData: response.data });
    } catch (error) {
      console.error(error);
    }
  }
  componentDidMount() {
    this.getUser();
  }

  toggleDrawer = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isOpen, userData } = this.state;
    return (
      <section className="py-32">
        <Container>
          <h1 className="lg:text-5xl font-bold pb-16">Explore Product</h1>
          <div className="grid grid-cols-4 gap-4">
            <Product userData={userData} />
          </div>
          <div className="w-full text-center">
            <Button title="Show more" className="py-3 px-5 my-12" />
          </div>
        </Container>
        <button
          onClick={this.toggleDrawer}
          className="fixed right-12 bottom-12 bg-lime-500 py-3 px-3 text-4xl text-white"
        >
          <GiShoppingCart />
        </button>
        <Drawer
          open={isOpen}
          onClose={this.toggleDrawer}
          direction="right"
          className=""
        >
          <div>Hello World</div>
        </Drawer>
      </section>
    );
  }
}

export default index;
