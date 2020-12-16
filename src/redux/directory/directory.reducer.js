import Accessories from "../../assets/images/menuItems/accessories.jpg";
import Womens from "../../assets/images/menuItems/womens.jpeg";
import Mens from "../../assets/images/menuItems/mens.jpg";
import Hats from "../../assets/images/menuItems/hats.jpg";
import Jackets from "../../assets/images/menuItems/jackets.png";

const INITIAL_STATE = {
  sections: [
    {
      title: "mens",
      url: Mens,
      size: "large",
      id: 1,
      linkURL: "shop/mens",
    },
    {
      title: "womens",
      url: Womens,
      size: "large",
      id: 2,
      linkURL: "shop/womens",
    },
    {
      title: "hats",
      url: Hats,
      id: 3,
      linkURL: "shop/hats",
    },
    {
      title: "jackets",
      url: Jackets,
      id: 4,
      linkURL: "shop/jackets",
    },
    {
      title: "accessories",
      url: Accessories,
      id: 5,
      linkURL: "shop/sneakers",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
