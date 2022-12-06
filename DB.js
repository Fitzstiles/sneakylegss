const products = [
  {
    id: 1,
    name: "Men's Sports Running Shoes -Multi Color",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/006249/2.jpg?0364",
    price: 600,
    gender: "m",
    rating: 5,
    description:
      "The Nike Men's Sports Running Shoes continues to help keep you running.A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it.Higher foam provides soft responsiveness and long-lasting comfort.It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.",
    color: ["orange", "gray", "black", "pink"],
  },
  {
    id: 2,
    name: "Ankle Sneakers",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/O/178303_1609157845.jpg",
    price: 400,
    gender: "m",
    rating: 5,
    description:
      "Your kid works hard and plays even harder, so get him a sneaker like the Luca that can easily keep up. Athletic features and plenty of styles mean they’ll never want to take them off!",
    color: ["#7b1a2b", "#f0aeba", "#53494b", "lightcoral"],
  },
  {
    id: 3,
    name: "Air Unisex Quality Sneakers",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/B/176667_1627986843.jpg",
    price: 200,
    gender: "m",
    rating: 3,
    description:
      "This Nike Air unisex sneaker prepares your leg, mind and soul for a great day ahead. This product is from a trusted brand that scores well on several reviews from customers. Available in different sizes",
    color: ["#7b1a2b", "#f1b7c2", "#4d4647", "#bb1ae4", "pink"],
  },
  {
    id: 4,
    name: "Fashion Front Lace Up Leisure Sneakers",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/F/111546_1639352428.jpg",
    price: 100,
    gender: "m",
    rating: 2,
    description:
      "Fashion Front Lace Up Leisure Sneakers continues to help keep you running.A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it.Higher foam provides soft responsiveness and long-lasting comfort.It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.",
    color: ["black", "green", "purple"],
  },
  {
    id: 5,
    name: "Ladies Flat Shoes - Fashion Sneakers And Canvas",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/366169/3.jpg?4506",
    price: 500,
    gender: "f",
    rating: 5,
    description:
      "Stand out from the crowd in this amazing and attractive high quality shoe. It is made with the buyer's comfort and elegance in mind. This is the shoe to go for whenever u are thinking of getting that perfect finishing touch for your outfit. It comes in different sizes. It is designed for comfort and uniqueness.",
    color: ["black", "orange", "purple"],
  },
  {
    id: 6,
    name: "Nike Air Force 1",
    image:
      "https://ph-live-05.slatic.net/p/79de3112198af66fee170f596910fbb7.jpg_720x720q80.jpg_.webp",
    price: 200,
    gender: "f",
    rating: 3,
    description:
      "Socviis cares deeply about providing you with comfort, fit and style that will stand up to countless daily activities. That's why the brand continues to develop footwear that provides stability and support. The company's innovative designs are engineered with top-quality, The uppers are carefully constructed to fit, perform and look great, and the overall result is well-thought-out footwear that contributes to happy.",
    color: ["#bb1ae4", "#1ae4b1", "#313534", "#c3d618"],
  },
  {
    id: 7,
    name: "Sports Mesh Casual Shoes",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/0121221/2.jpg?3185",
    price: 200,
    gender: "m",
    rating: 5,
    description: "Beatuiful shoe",
    color: ["green", "purple", "blue", "maroon"],
  },
  {
    id: 8,
    name: "Hello sport designed sneakers for ladies",
    image:
      "https://image.made-in-china.com/202f0j00pzwfNSRIfJkh/Hellosports-Design-Own-Unique-Sneakers-Lightweight-Plain-Fashion-Sneakers-Women-Wholesale-Casual-Flat-Shoes-for-Ladies-High-Heel-Sneakers.jpg",
    price: 500,
    gender: "f",
    rating: 5,
    description:
      "Stand out from the crowd in this amazing and attractive high quality shoe. It is made with the buyer's comfort and elegance in mind. This is the shoe to go for whenever u are thinking of getting that perfect finishing touch for your outfit. It comes in different sizes. It is designed for comfort and uniqueness.",
    color: ["magenta", "purple", "blue", "maroon"],
  },
  {
    id: 9,
    name: "Ladies Classic Casual Fashion Sneakers",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/X/100388_1651513139.jpg",
    price: 200,
    gender: "f",
    rating: 5,
    description:
      "Stand out from the crowd in this amazing and attractive high quality shoe. It is made with the buyer's comfort and elegance in mind. This is the shoe to go for whenever u are thinking of getting that perfect finishing touch for your outfit. It comes in different sizes. It is designed for comfort and uniqueness.",
    color: ["black", "orange", "purple"],
  },
  {
    id: 10,
    name: "Luxury Women high sneakers",
    image:
      "https://image.made-in-china.com/202f0j00czdYpKoMQmqJ/Popular-Women-s-Latest-Sneakers-Custom-Fashion-Luxury-High-Sneakers-Women-Sneakers-Wholesale-China-Chunky-Heels-Women-Shoes.jpg",
    price: 600,
    gender: "f",
    rating: 3,
    description: "Beatuiful shoe",
    color: ["green", "purple", "blue", "maroon"],
  },
  {
    id: 11,
    name: "Tennis chunky sneaker",
    image:
      "https://images-americanas.b2w.io/produtos/01/00/img/1589607/2/1589607218_1GG.jpg",
    price: 400,
    gender: "f",
    rating: 5,
    description:
      ".The Chunky sneakers can dress with every outfits,such as tight jeans party suits, shorts, or dress, fashionable and unique looking, popular trendy, great for party dating travel seas nightclub school day movie office shopping walking motorcycle riding or any outdoor activities in fall and winter season.The upper and sole of chunky sneakers is using lightweight material ,make the shoes more comfortable to walking",
    color: ["black", "green", "purple"],
  },
  {
    id: 12,
    name: "Zovim lighweigth sneakers for women",
    image: "https://m.media-amazon.com/images/I/71PrY5Nx-yL._UY625_.jpg",
    price: 300,
    gender: "f",
    rating: 4,
    description:
      "ZOVIM introduce a Stylish and dapper pair of sneakers. These sports sneakers are made from the best on the outside. It features a comfortable sole. These pair of sneakers have been designed as per the latest trends in footwear fashion",
    color: ["#970f97", "#858ee4", "#e48595", "green", "yellow"],
  },
  {
    id: 13,
    name: "spring men fashion shoe",
    image:
      "https://canary.contestimg.wish.com/api/webimage/5d761861bf8f6d21c111e579-large.jpg?cache_buster=8389f1782957631a7a2fc798183fb391",
    price: 400,
    gender: "m",
    rating: 5,
    description: "Beatuiful shoe",
    color: ["red", "blue", "green", "maroon"],
  },
  {
    id: 14,
    name: "PU Leather Lace Up Red White Black Color",
    image:
      "https://ae01.alicdn.com/kf/HTB13mLZMXXXXXbHXXXXq6xXFXXXV/2018-Fashion-High-Top-Casual-Shoes-PU-Leather-Lace-Up-Red-White-Black-Color-Mens-Casual.jpg_Q90.jpg_.webp",
    price: 600,
    gender: "m",
    rating: 4,
    description: "Beatuiful shoe",
    color: ["#970f97", "#858ee4", "#e48595"],
  },
  {
    id: 15,
    name: "Sunshine men trendy sneakers",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/526223/1.jpg?1191",
    price: 400,
    gender: "m",
    rating: 5,
    description:
      "Take your workout to the next level with these lightweight and supremely comfortable sneakers, which feature the label's typical commitment to top-quality design and engineering",
    color: ["#e48595", "#c71836", "red", "purple"],
  },
  {
    id: 16,
    name: "lightFemale sneaker",
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2021/02/1024x1024-Women-LowTop-Lavendar-1_1024x1024.jpeg?quality=90&strip=all&w=1024",
    price: 200,
    gender: "f",
    rating: 3,
    description:
      "White solid canvas shoes are all classics styles and good choice for back to school gift,that can be easily paired with any casual clothes,and suitable for all year round.",
    color: ["#e48595", "#c71836", "red", "purple"],
  },
  {
    id: 17,
    name: "Female sneaker",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/H/193145_1634210833.jpg",
    price: 400,
    gender: "f",
    rating: 5,
    description: "Beatuiful shoe",
    color: ["black", "green", "purple"],
  },
  {
    id: 18,
    name: "High Top Leather Sneaker",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/P/173643_1615148455.jpg",
    price: 400,
    gender: "m",
    rating: 5,
    description:
      "Removable leather-covered inlay sole offers extra width when removed. Lightweight sole provides cushioning and flexibility, using innovative ECCO FLUIDFORM Direct Comfort Technology",
    color: ["#970f97", "#858ee4", "#e48595"],
  },
];
export default products;

export const featuredItems = {
  season: "New season",
  name: "Adidas YEEZY",
  image:
    "https://cdn-images.farfetch-contents.com/16/65/80/89/16658089_32552931_480.jpg",
  price: 451.0,
};
