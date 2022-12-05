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
      "Beatuiful shoe Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero nesciunt et repellat quas, porro nihil sequi maxime possimus error tenetur in excepturi odio debitis molestias doloremque perferendis, numquam natus!",
    color: ["orange", "gray", "black"],
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
      "Beatuiful shoe Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero nesciunt et repellat quas, porro nihil sequi maxime possimus error tenetur in excepturi odio debitis molestias doloremque perferendis, numquam natus!",
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
    description: "Beatuiful shoe",
  },
  {
    id: 4,
    name: "Fashion Front Lace Up Leisure Sneakers",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/F/111546_1639352428.jpg",
    price: 100,
    gender: "m",
    rating: 2,
    description: "Beatuiful shoe",
  },
  {
    id: 5,
    name: "Ladies Flat Shoes - Fashion Sneakers And Canvas",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/366169/3.jpg?4506",
    price: 500,
    gender: "f",
    rating: 5,
    description: "Beatuiful shoe",
  },
  {
    id: 6,
    name: "Nike 2021 tennis shoes",
    image:
      "https://i.pinimg.com/236x/b8/da/5f/b8da5f6b2f88e455c5f40fb95e04287d.jpg",
    price: 200,
    gender: "f",
    rating: 3,
    description: "Beatuiful shoe",
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
  },
  {
    id: 8,
    name: "Hello sport designed sneakers for ladies",
    image:
      "https://image.made-in-china.com/202f0j00pzwfNSRIfJkh/Hellosports-Design-Own-Unique-Sneakers-Lightweight-Plain-Fashion-Sneakers-Women-Wholesale-Casual-Flat-Shoes-for-Ladies-High-Heel-Sneakers.jpg",
    price: 500,
    gender: "f",
    rating: 5,
    description: "Beatuiful shoe",
  },
  {
    id: 9,
    name: "Ladies Classic Casual Fashion Sneakers",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/X/100388_1651513139.jpg",
    price: 200,
    gender: "f",
    rating: 5,
    description: "Beatuiful shoe",
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
  },
  {
    id: 11,
    name: "Tennis chunky sneaker",
    image:
      "https://images-americanas.b2w.io/produtos/01/00/img/1589607/2/1589607218_1GG.jpg",
    price: 400,
    gender: "f",
    rating: 5,
    description: "Beatuiful shoe",
  },
  {
    id: 12,
    name: "Zovim lighweigth sneakers for women",
    image: "https://m.media-amazon.com/images/I/71PrY5Nx-yL._UY625_.jpg",
    price: 300,
    gender: "f",
    rating: 4,
    description: "Beatuiful shoe",
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
  },
  {
    id: 15,
    name: "Sunshine men trendy sneakers",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/526223/1.jpg?1191",
    price: 400,
    gender: "m",
    rating: 5,
    description: "Beatuiful shoe",
  },
  {
    id: 16,
    name: "lightFemale sneaker",
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2021/02/1024x1024-Women-LowTop-Lavendar-1_1024x1024.jpeg?quality=90&strip=all&w=1024",
    price: 200,
    gender: "f",
    rating: 3,
    description: "Beatuiful shoe",
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
  },
  {
    id: 18,
    name: "High Top Leather Sneaker",
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/P/173643_1615148455.jpg",
    price: 400,
    gender: "m",
    rating: 5,
    description: "Beatuiful shoe",
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
