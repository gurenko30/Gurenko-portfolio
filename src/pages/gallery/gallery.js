import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './gallery.css'

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Gallery = () => {
  const itemData = [
    {
      img: '1.png',
      title: 'Image 1',
      rows: 2,
      cols: 2,
    },
    {
      img: '2.png',
      title: 'Image 2',
      rows: 2,
      cols: 2,
    },
    {
      img: '3.png',
      title: 'Image 3',
      rows: 2,
      cols: 2,
    },
    {
      img: '4.png',
      title: 'Image 4',
      rows: 2,
      cols: 2,
    },
    {
      img: '5.png',
      title: 'Image 5',
      rows: 2,
      cols: 2,
    },
    {
      img: '6.png',
      title: 'Image 6',
      rows: 2,
      cols: 2,
    },
    {
      img: '7.png',
      title: 'Image 7',
      rows: 2,
      cols: 2,
    },
    {
      img: '8.png',
      title: 'Image 8',
      rows: 2,
      cols: 2,
    },
    {
      img: '9.png',
      title: 'Image 9',
      rows: 2,
      cols: 2,
    },
    {
      img: '10.png',
      title: 'Image 10',
      rows: 2,
      cols: 2,
    },
    {
      img: '11.png',
      title: 'Image 11',
      rows: 2,
      cols: 2,
    },
    {
      img: '12.png',
      title: 'Image 12',
      rows: 2,
      cols: 2,
    },
    {
      img: '13.png',
      title: 'Image 13',
      rows: 2,
      cols: 2,
    },
    {
      img: '14.png',
      title: 'Image 14',
      rows: 2,
      cols: 2,
    },
    {
      img: '15.png',
      title: 'Image 15',
      rows: 2,
      cols: 2,
    },
    {
      img: '16.png',
      title: 'Image 16',
      rows: 2,
      cols: 2,
    },
    {
      img: '17.png',
      title: 'Image 17',
      rows: 2,
      cols: 2,
    },
    {
      img: '18.png',
      title: 'Image 18',
      rows: 2,
      cols: 2,
    },
    {
      img: '19.png',
      title: 'Image 19',
      rows: 2,
      cols: 2,
    },
    {
      img: '20.png',
      title: 'Image 20',
      rows: 2,
      cols: 2,
    },
    {
      img: '21.png',
      title: 'Image 21',
      rows: 2,
      cols: 2,
    },
    {
      img: '22.png',
      title: 'Image 22',
      rows: 2,
      cols: 2,
    },
    {
      img: '23.png',
      title: 'Image 23',
      rows: 2,
      cols: 2,
    },
    {
      img: '24.png',
      title: 'Image 24',
      rows: 2,
      cols: 2,
    },


  ];


  return (
    <div className="gallery-container">
      <ImageList sx={{ width: 1900, height: 630 }} variant="quilted" cols={6} rowHeight={250}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;

