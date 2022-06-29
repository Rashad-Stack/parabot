import { useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { BsCartCheck } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';

// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

const Product = ({ products, getId, gotId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartButtonHandler = (product) => {
    if (!checkExists(product)) return setCartItems([...cartItems, product]);
    let yoo = cartItems.filter((item) => item.id !== product.id);
    setCartItems(yoo);
  };

  const checkExists = (product) => {
    const find = cartItems.filter((x) => x.id === product.id);
    return !!find.length ? true : false;
  };
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {!!products?.length &&
        products?.map((product) => (
          <div
            key={product.id}
            className=" bg-gray-100 rounded-xl overflow-hidden"
          >
            <div className="w-full mb-5">
              <img
                src={product.image}
                alt=""
                className="w-full object-cover h-[230px]"
              />
            </div>
            <div className="flex p-5">
              <div className="w-full flex flex-col">
                <span className="text-sm text-gray-400 mb-1">
                  {product.company}
                </span>
                <span className="text-md font-bold mb-3">{product.name}</span>
                <span className="text-sm text-gray-700 font-semibold">
                  ${product.price}
                </span>
              </div>
              <div className="w-full flex justify-end items-end">
                <button
                  className="bg-[#94634b] p-3 rounded-md text-white text-xl"
                  onClick={() => cartButtonHandler(product)}
                >
                  {checkExists(product) ? <BsCartCheck /> : <BsCartPlus />}
                </button>
              </div>
            </div>
          </div>
        ))}

      <button
        onClick={toggleDrawer}
        className="fixed right-12 bottom-12 bg-[#94634b] py-3 px-3 text-4xl text-white rounded-md"
      >
        <span className="flex h-3 w-3 absolute top-0 right-0 translate-x-0 -translate-y-3">
          <span className=" absolute flex justify-center items-center rounded-full h-10 w-10 bg-[#94634b] ring-1 ring-white text-base font-semibold">
            {cartItems.length}
          </span>
        </span>
        <GiShoppingCart />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
      >
        <div>Hello World</div>
      </Drawer>
    </>
  );
};

export default Product;
