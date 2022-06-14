export const menuItems = {
  wingFlavors: [
    {name: "Garlic Parmesan (mild) - A classic favorite"},
    {name: "Lemon Pepper Dry Rub (mild) - Citrus twist meets black pepper"},
    {name: "Apple BBQ (mild) - Sweet & tangy"},
    {name: "Ranch Dry Rub (mild) - Coolest ranch seasoning"},
    {name: "Buffalo (medium) - Traditional medium spiced"},
    {name: "Honey Chipotle (medium) - Sweet, smoky, spicy"},
    {name: "Honey Sriracha (medium) - Addictively sweet & spicy"},
    {name: "Spicy Pineapple Teriyaki (medium) - Hawaii in a sauce"},
    {name: "Mango Habanero (hot) - Sweet and spicy with quite a kick"},
    {name: "Santa Fe (hot) - Jalapeño cilantro"},
    {name: "Southwest Cajun Dry Rub (hot) - Like Bobby Boucher's momma made it"},
    {name: "No Sauce - Downright naked"},
  ],
  beverages: [
    {name: "Coke", price: 2},
    {name: "Coke Zero", price: 2},
    {name: "Diet Coke", price: 2},
    {name: "Dr. Pepper", price: 2},
    {name: "Sprite", price: 2},
    {name: "Unsweetened Tea", price: 2},
  ],
  desserts: [
    {name: "HERSHEY'S Double Chocolate Hand Pie", price: 3},
    {name: "Blueberry Lemon Hand Pie", price: 3},
    {name: "Cinnamon Apple Hand Pie", price: 3}
  ],
  popularItems: [
    {
      name: "11 Boneless Wings Combo",
      description:
        "11 boneless wings, curly fries, a side of ranch, and a drink.",
      src: "/images/menu/popular_wingcombo.jpg",
      price: 11,
      type: "combo",
      numberOfSauceChoices: 1,
    },
    {
      name: "11 Boneless Wings",
      description: "11 boneless wings, curly fries, and a side of ranch.",
      src: "/images/menu/popular_wings.jpg",
      price: 9,
      type: "just-wings",
      numberOfSauceChoices: 1,
    },
    {
      name: "22 Boneless Wings",
      description: "22 boneless wings, curly fries, and a side of ranch.",
      src: "/images/menu/popular_22wings.jpg",
      price: 18,
      type: "just-wings",
      numberOfSauceChoices: 2,
    },
  ],
  comboMeals: [
    {
      name: "11 Boneless Wings Combo",
      description:
        "11 boneless wings, curly fries, a side of ranch, and a drink.",
      src: "/images/menu/combo1.jpg",
      price: 11,
      numberOfSauceChoices: 1,
      type: "combo"
    },
    {
      name: "8 Bone-In Wings Combo",
      description: "8 bone-in wings, curly fries, a side of ranch & a drink.",
      src: "/images/menu/combo2.jpg",
      price: 11,
      numberOfSauceChoices: 1,
      type: "combo"
    },
    {
      name: "8 Smoked Bone-In Wings Combo",
      description:
        "8 bone-in wings smoked in-house over pecan wood then tossed with your choice of flavor. Served with curly fries, a side of ranch, with a drink.",
      src: "/images/menu/combo3.jpg",
      price: 11,
      numberOfSauceChoices: 1,
      type: "combo"
    },
    {
      name: "22 Boneless Wings Combo",
      description:
        "22 boneless wings tossed with your choice of 2 flavors. Served with curly fries, a side of ranch & a drink.",
      src: "/images/menu/combo4.jpg",
      price: 20,
      numberOfSauceChoices: 2,
      type: "combo"
    },
    {
      name: "16 Bone-In Wings Combo",
      description:
        "16 bone-in wings tossed with your choice of 2 flavors. Served with curly fries, a side of ranch & a drink.",
      src: "/images/menu/combo5.jpg",
      price: 20,
      type: "combo"
    },
    {
      name: "16 Smoked Bone-In Wings Combo",
      description:
        "16 bone-in wings smoked in-house over pecan wood then tossed with your choice of 2 flavors. Served with curly fries, a side of ranch, with a drink.",
      src: "/images/menu/combo6.jpg",
      price: 20,
      numberOfSauceChoices: 2,
      type: "combo"
    },
  ],
  justWings: [
    {
      name: "11 Boneless Wings",
      description:
        "11 boneless wings, served with curly fries & a side of ranch.",
      src: "/images/menu/popular_wings.jpg",
      price: 9,
      numberOfSauceChoices: 1,
      type: "just-wings"
    },
    {
      name: "8 Bone-In Wings",
      description:
        "8 bone-in wings, served with curly fries & a side of ranch.",
      src: "/images/menu/bone-in.jpg",
      price: 9,
      numberOfSauceChoices: 1,
      type: "just-wings"
    },
    {
      name: "8 Smoked Bone-In Wings",
      description:
        "8 bone-in wings smoked in-house over pecan wood then tossed with your choice of flavor. Served with curly fries and a side of ranch.",
      src: "/images/menu/bone-in-smoked.jpg",
      price: 9,
      numberOfSauceChoices: 1,
      type: "just-wings"
    },
  ],
  partyStyle: [
    {
      name: "22 Boneless Wings",
      description:
        "22 boneless wings tossed in your choice of 2 flavors. Served with curly fries & a side of ranch.",
      src: "/images/menu/party1.jpg",
      price: 18,
      numberOfSauceChoices: 2,
      type: "just-wings"
    },
    {
      name: "16 Bone-In Wings",
      description:
        "16 bone-in wings tossed in your choice of 2 flavors. Served with curly fries & a side of ranch.",
      src: "/images/menu/party2.jpg",
      price: 18,
      numberOfSauceChoices: 2,
      type: "just-wings"
    },
    {
      name: "16 Smoked Bone-In Wings",
      description:
        "16 bone-in wings smoked in-house over pecan wood then tossed with your choice of 2 flavors. Served with curly fries & a side of ranch.",
      src: "/images/menu/party3.jpg",
      price: 18,
      numberOfSauceChoices: 2,
      type: "just-wings"
    },
    {
      name: "44 Boneless Wings",
      description:
        "44 boneless wings tossed in your choice of 4 flavors. Served with curly fries & a side of ranch.",
      src: "/images/menu/party4.jpg",
      price: 36,
      numberOfSauceChoices: 4,
      type: "just-wings"
    },
    {
      name: "32 Bone-In Wings",
      description:
        "32 bone-in wings tossed in your choice of 4 flavors. Served with curly fries & a side of ranch.",
      src: "/images/menu/party5.jpg",
      price: 36,
      numberOfSauceChoices: 4,
      type: "just-wings"
    },
    {
      name: "32 Smoked Bone-In Wings",
      description:
        "32 bone-in wings smoked in-house over pecan wood then tossed with your choice of 4 flavors. Served with curly fries and a side of ranch.",
      src: "/images/menu/party6.jpg",
      numberOfSauceChoices: 4,
      price: 36,
      type: "just-wings"
    },
  ],
  dips: [
    {
      name: "Garlic Parmesan (mild)",
      description:
        "Not a fan of hot? Don’t worry, we put on the kid gloves with this classic favorite.",
      src: "/images/menu/dips1.jpg",
      price: .5
    },
    {
      name: "Bleu Cheese Dip (mild)",
      motto: "A classic favorite",
      description:
        "Now available for everyone who judged us for only offering ranch at first.",
      src: "/images/menu/dips2.jpg",
      price: .5
    },
    {
      name: "Apple BBQ Sauce (mild)",
      description:
        "Not a fan of hot? Don’t worry, we put on the kid gloves with this classic favorite.",
      src: "/images/menu/dips3.jpg",
      price: .5
    },
    {
      name: "Ranch Dip (mild)",
      description:
        "The coolest ranch deserves to go on a wing, not a chip. Luckily you already know how good it will be.",
      src: "/images/menu/dips4.jpg",
      price: .5
    },
    {
      name: "Buffalo Sauce (medium)",
      description:
        "Put it up against the big-name wing places and see what you think. Nice and mild.",
      src: "/images/menu/dips5.jpg",
      price: .5
    },
    {
      name: "Honey Chipotle Sauce (medium)",
      description:
        "Sweet meets heat in this perfectly mouthwatering combination.",
      src: "/images/menu/dips6.jpg",
      price: .5
    },
    {
      name: "Honey Sriracha Sauce (medium)",
      description:
        "We didn't do this one because it was trendy: we did it because it came out delicious.",
      src: "/images/menu/dips7.jpg",
      price: .5
    },
    {
      name: "Spicy Pineapple Teriyaki Sauce (medium)",
      description:
        "It's like Hawaii in your mouth. Unless you're already in Hawaii, then it's like Tahiti in your mouth.",
      src: "/images/menu/dips8.jpg",
      price: .5
    },
    {
      name: "Mango Habanero Sauce (hot)",
      description:
        "Sweet and spicy with quite a kick. Maybe have some water nearby.",
      src: "/images/menu/dips9.jpg",
      price: .5
    },
    {
      name: "Santa Fe Sauce (hot)",
      description:
        "Creamy jalapeño cilantro sauce. Not quite as hot as New Mexico in the summer, but just right.",
      src: "/images/menu/dips10.jpg",
      price: .5
    },
  ],
};
