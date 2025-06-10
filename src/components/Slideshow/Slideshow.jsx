import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // You'll add styles here




const images = [
  {
    src: "https://i.ytimg.com/vi/0gMJTCuR60U/maxresdefault.jpg",
    title: "ISHQ",
    trailerUrl: 'https://www.youtube.com/embed/_eoiB7wq3Kg',
    posterImage: 'https://images.filmibeat.com/ph-big/2011/12/ishq_13250487818.jpg',
  },
  {
    src: "https://wallpaperaccess.com/full/2784972.jpg",
    title: "IDDARAMMAYILATHO",
    trailerUrl: 'https://www.youtube.com/embed/b3Ya6RdGZGc',
     posterImage: 'http://4.bp.blogspot.com/-YkUZtkU76UQ/UX5dOFSPfQI/AAAAAAAAZv8/lucxgVzoa8w/s1600/Iddarammayilatho+Movie+Audio+Released+Special+Wallpapers+12.jpg',
  },
  {
    src: "https://wallpapercave.com/wp/wp2929413.jpg",
    title: "PANDAGA CHESKO",
    trailerUrl: 'https://www.youtube.com/embed/WlhuYvrE3vA',
    posterImage: 'https://www.chitramala.in/wp-content/uploads/2015/05/Ram-Pandaga-Chesko-Movie-Censor.jpg',
  },
   {
    src: "https://static.moviecrow.com/gallery/20150728/68658-Anushka-Shetty-in-Rudhramadevi-Stills-Images-Photos-Telugu-Movie-2015-Onlookers-Media-12.jpg",
    title: "RUDGRAMADEVI",
    trailerUrl: 'https://www.youtube.com/embed/Fc0QmDnNy3U',
     posterImage: 'http://www.idlebrain.com/images5/still-rudramadevi3.jpg',
    
  },
   {
    src: "https://data1.ibtimes.co.in/en/full/723431/sye-raa-narasimha-reddy.jpg?h=450&l=50&t=40",
    title: "SYE RAA NARASIMHA REDDY",
    trailerUrl: 'https://www.youtube.com/embed/KyhrrdpA2YA',
    posterImage: 'https://www.filmibeat.com/fanimg/movie/16347/sye-raa-narasimha-reddy-photos-images-66127.jpeg',
  },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[index].src} alt={images[index].title} />
      <div className="caption">{images[index].title}</div>
    </div>
  );
};

export default Slideshow;



