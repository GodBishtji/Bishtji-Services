const INITIAL_STATE = {
  sections: [
    {
      title: 'insta services',
      imageUrl: 'images/hats.png',
      id: 1,
      linkUrl: 'shop/insta'
    },
    {
      title: 'fb services',
      imageUrl: 'images/jackets.png',
      id: 2,
      linkUrl: 'shop/fb'
    },
    {
      title: 'yt services',
      imageUrl: 'images/sneakers.png',
      id: 3,
      linkUrl: 'shop/yt'
    },
    {
      title: 'pubg services',
      imageUrl: 'images/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/pubg'
    },
    {
      title: 'coc accounts',
      imageUrl: 'images/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/coc'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
