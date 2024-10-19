import headphone from '../assets/headphone.jpg';
import camera from '../assets/camera.jpg';
import earbuds from '../assets/earbuds.jpg';
import drone from '../assets/drone.jpg';
import keyboard from '../assets/keyboard.jpg';
import monitor from '../assets/monitor.jpg';
import ssd from '../assets/ssd.jpg';
import powerbank from '../assets/powerbank.jpg';


let all_product = [
  {
    id:1,
    name:"Premium wireless headphones with crystal-clear sound and all-day comfort",
    image:headphone,
    new_price:3450.00,
    old_price:2380.00,
    brand: "Panasonic",
    keyword: "headphone",
    category: "Gadgets"
  },
  {id:2,
    name:"Capture every moment in stunning detail with our high-resolution digital camera",
    image:camera,
    new_price:2285.00,
    old_price:1420.00,
    brand: "Dell",
    keyword: "camera",
    category: "Gadgets"
  },
  {id:3,
    name:"Compact and powerful, our wireless earbuds deliver immersive sound on the go",
    image:earbuds,
    new_price:3260.00,
    old_price:1900.00,
    brand: "Apple",
    keyword: "earbuds",
    category: "Gadgets"
  },
  {id:4,
    name:"Explore the skies with our high-performance drone, perfect for capturing aerial shots.",
    image:drone,
    new_price:3100.00,
    old_price:2150.00,
    keyword: "drone",
    category: "Gadgets"
  },
  {
    id: 5,
    name: "Enhance your typing experience with our sleek and responsive keyboard.",
    image: keyboard,
    new_price: 3150.0,
    old_price: 2580.0,
    brand: "Panasonic",
    keyword: "keyboard",
    category: "Accessories"
  },
  {
    id: 6,
    name: "Ultra-slim monitor delivering vibrant visuals and exceptional clarity for any task",
    image: monitor,
    new_price: 2885.0,
    old_price: 1920.0,
    brand: "Apple",
    keyword: "monitor",
    category: "Accessories"
  },
  {
    id: 7,
    name: "Boost your system's performance with our lightning-fast SSD for rapid data access.",
    image: ssd,
    new_price: 3460.0,
    old_price: 3100.0,
    keyword: "ssd",
    category: "Accessories"
  },
  {
    id: 8,
    name: "Stay powered on the go with our portable power bank, designed for fast and reliable charging",
    image: powerbank,
    new_price: 3100.0,
    old_price: 2150.0,
    brand: "Dell",
    keyword: "powerbank",
    category: "Accessories"
  }
];

export default all_product;
