import Truck from '../../image/delivery-truck.png';
import Logistic from '../../image/logistic.png';
import Wood from '../../image/wood.png';
import wardrobe from '../../image/imgbin_furniture-wood-wardrobe-garderob-png.png';
import wall from '../../image/pexels-atbo-245208.jpg';
import blueWall from '../../image/pexels-huseyn-kamaladdin-667838.jpg';
import sofa from '../../image/pexels-pixabay-276528.jpg';
import chair from '../../image/pexels-steve-johnson-923192.jpg';
import couch from '../../image/pexels-vecislavas-popa-1571460.jpg';
import self from '../../image/pexels-ingo-joseph-609768.jpg';

export const Container = ({ children, className }) => {
  return (
    <div
      className={`container max-w-screen-xl mx-auto lg:px-0 md:px-10 px-6 h-full ${className}`}
    >
      {children}
    </div>
  );
};
export const sliderImg = [
  { img: blueWall, title: 'Blue Wall' },
  { img: sofa, title: 'Sofa' },
  { img: chair, title: 'Chair' },
  { img: couch, title: 'Couch' },
  { img: self, title: 'Self' },
  { img: wall, title: 'Wall' },
];
export const images = {
  hoverImg1st:
    'https://images.unsplash.com/photo-1614461059234-a26df6cb9ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  hoverImg2nd:
    'https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
  diningTable1:
    'https://cdn.pixabay.com/photo/2020/02/22/09/22/table-4869993_960_720.png',
  dreamBed:
    'https://cdn.pixabay.com/photo/2018/05/02/09/01/childrens-for-girls-3368014_960_720.jpg',
  mother:
    'https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  wardrobe,
};

export const vector = {
  Truck,
  Logistic,
  Wood,
};
export const reviews = [
  {
    name: 'Nessi',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'I have always suspected that too much knowledge is a dangerous thing.t have deep feelings',
    emoji: '😊',
    address: 'Broklyne, NY',
  },
  {
    name: 'Devid',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'I have always suspected that too much knowledge is a dangerous thing.t have deep feelings',
    emoji: '😍',
    address: 'Los Angeles, CA',
  },
  {
    name: 'Jenny',
    avatar:
      'https://images.unsplash.com/photo-1496081081095-d32308dd6206?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=dd302358c7e18c27c4086e97caf85781',
    emoji: '😘',
    quote:
      'To see and to be seen, in heaps they run; Some to undo, and some to be undone.',
    address: 'New Yourk',
  },
  {
    name: 'Lora',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    emoji: '😁',
    quote:
      'Death is a very dull, dreary affair, and my advice to you is to have nothing whatsoever to do with it.',
    address: 'Vatican City, VC',
  },
  {
    name: 'Khalid',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'The greatest difficulties lie where we are not looking for them.',
    emoji: '🥰',
    address: 'Berlin HO, BH',
  },
  {
    name: 'Rashad',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    quote:
      'There never was a man who said one word for woman but he said two for man and three for the whole human race.',
    emoji: '🤩',
    address: 'Dhaka City, DC',
  },
];
