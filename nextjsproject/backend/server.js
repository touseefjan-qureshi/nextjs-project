const express = require('express');
const cors = require('cors');

  const app = express();

const PORT = process.env.PORT || 5000;


   
app.use(cors());
app.use(express.json());


const products = [
  {
    id: 1,
    name: 'Classic Camera',
    price: 120,
    image: 'https://picturethisfilmlab.com/cdn/shop/files/IMG_5066.jpg?v=1752150862&width=3840',
  },
  {
    id: 2,
    name: 'Leather Backpack',
    price: 85,
    image: 'https://aodour.pk/cdn/shop/files/O1CN01iDi5gM2Fz9tUM7Kpx__3486538950-0-cib.jpg?v=1775862401&width=800',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 150,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkFh5m67SJvSgmEp9xCYITCv2JoUBWHJFe35CGJ9Ed9t1EGdjHzX3WUaD&s=10',
  },
  {
    id: 4,
    name: 'Ceramic Coffee Mug',
    price: 25,
    image: 'https://i.etsystatic.com/26016701/r/il/ed598e/5839253793/il_570xN.5839253793_t07w.jpg',
  },

    {
    id: 5,
    name: 'Wireless Headphones',
    price: 95,
    image: 'https://static.webx.pk/files/68529/Images/61kfsu-cykl.-ac-sl1500--68529-0-180124040712888.jpg',
  },
  {
    id: 6,
    name: 'Running Sneakers',
    price: 110,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDRvRsIzLBnNyoAi4PG9q7u9lUGvB8USosdmI7_RFy4ZRN7kxcJO_XyPh&s=10',
  },
  {
    id: 7,
    name: 'Mechanical Keyboard',
    price: 130,
    image: 'https://bloodygaming.pk/cdn/shop/files/s520n-mechanical-switch-rgb-gaming-keyboard-5725859.png?v=1761126344',
  },
  {
    id: 8,
    name: 'Sunglasses',
    price: 60,
    image: 'https://eyemax.pk/cdn/shop/files/C9947143-1E08-4003-BE67-5DA528C66EB1.png?v=1778494750',
  },
  {
    id: 9,
    name: 'Desk Lamp',
    price: 45,
    image: 'https://www.ikea.com/ca/en/images/products/roedflik-desk-lamp-light-beige__1327054_pe944348_s5.jpg?f=s',
  },
  {
    id: 10,
    name: 'Travel Notebook',
    price: 18,
    image: 'https://m.media-amazon.com/images/I/71flYRypd+L._AC_SX569_.jpg',
  },
  {
    id: 11,
    name: 'Portable Speaker',
    price: 75,
    image: 'https://www.dablew.pk/images/product_gallery/1769697514_7085_buy-hoco-hc1-trendy-sound-sports-wireles.png',
  },
  {
    id: 12,
    name: 'Denim Jacket',
    price: 140,
    image: 'https://www.permanentstyle.com/wp-content/uploads/2025/04/denim-jacket-style-500x688.jpg',
  },

];




         app.get('/api/products', (req, res) => {
     res.json(products);

});




app.post('/api/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});


app.put('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  Object.assign(product, req.body);
  res.json(product);
});






app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
