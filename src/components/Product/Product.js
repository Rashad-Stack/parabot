import { useState } from 'react';
import ManageCart from './ManageCart';
import Checkout from './Checkout';
import { BsCartPlus } from 'react-icons/bs';
import { BsCartCheck } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';

// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

const Product = ({ products, getId, gotId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const cartRemover = (product, index) => {
    product.splice(index, 1);
    setCartItems([...product]);
  };
  const getTotalPrice = (product) => {
    let sum = 0;
    cartItems.forEach((item) => (sum += item.price));
    setTotalPrice(sum);
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
          <span className=" absolute flex justify-center items-center rounded-full h-7 w-7 bg-[#94634b] ring-1 ring-white text-base font-semibold">
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
        size={400}
      >
        <div className="p-5 pb-44 bg-neutral-200 space-y-2 h-full overflow-y-auto scrollbar-hide relative">
          <h1 className="text-2xl text-[#94634b] font-bold mb-3 drop-shadow-md">
            Cart
          </h1>
          {cartItems?.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center space-x-3 bg-white p-3 rounded-lg relative"
            >
              <button
                className="text-lg bg-[#94634b] rounded-md text-white p-1 absolute top-3 right-3"
                onClick={() => cartRemover(cartItems, index)}
              >
                <RiCloseFill />
              </button>
              <div className="w-2/5">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-16 aspect-[4/3] object-cover"
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-semibold capitalize ">
                  {item.name}
                </h3>
                <span className="text-gray-400 text-sm font-semibold">
                  ${item.price}
                </span>
                <div className="flex justify-between items-center mt-2">
                  <div className="">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold">Colors:</p>
                      {item?.colors?.map((color) => (
                        <span
                          key={color}
                          className={`w-3 h-3 rounded-full inline-block cursor-pointer`}
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}

                      {/* <span className=`w-3 h-3 bg-[${color}] rounded-full inline-block cursor-pointer`></span>
                      <span className="w-3 h-3 bg-green-900 rounded-full inline-block cursor-pointer"></span>
                      <span className="w-3 h-3 bg-blue-900 rounded-full inline-block cursor-pointer"></span> */}
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold">Brand: </p>
                      <span className="text-gray-400 text-sm font-semibold">
                        {item.company}
                      </span>
                    </div>
                  </div>
                  <ManageCart product={item} getTotalPrice={getTotalPrice} />
                </div>
              </div>
            </div>
          ))}
          <Checkout getTotalPrice={totalPrice} />
        </div>
      </Drawer>
    </>
  );
};

export default Product;
