import React, { Component } from 'react';
import { Container } from '../Custom';
import Product from './Product';
import Button from '../Button';

const axios = require('axios').default;

export class index extends Component {
  state = {
    isOpen: false,
    products: [],
    loadedProducts: [],
  };

  async getData() {
    try {
      const response = await axios.get(
        'https://course-api.com/react-store-products',
      );

      this.setState({
        loadedProducts: this.createPagination(response.data),
        products: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }
  componentDidMount() {
    this.getData();
  }

  createPagination(items, limit = 8, offset = 0) {
    let array = [];
    items.forEach((item, index) => {
      if (index >= offset && index < offset + limit) {
        array.push(item);
      }
    });
    return array;
  }

  leadMore = () => {
    if (this.state.products.length === this.state.loadedProducts.length) return;
    const moreProduct = this.createPagination(
      this.state.products,
      8,
      this.state.loadedProducts.length,
    );
    this.setState({
      loadedProducts: [...this.state.loadedProducts, ...moreProduct],
    });
  };

  render() {
    const { loadedProducts, products } = this.state;
    return (
      <section className="py-32">
        <Container>
          <h1 className="lg:text-5xl font-bold pb-16">Explore Product</h1>
          <div className="grid grid-cols-4 gap-4">
            <Product products={loadedProducts} />
          </div>
          <div className="w-full text-center">
            {loadedProducts.length !== products.length && (
              <Button
                title="Show more"
                className="py-3 px-5 my-12"
                onClick={this.leadMore}
              />
            )}
          </div>
        </Container>
      </section>
    );
  }
}

export default index;
