angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Orders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var Orders = [
    { id: 0, name: 'cafe latte',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 1, name: 'cappucino',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg" },
    { id: 2, name: 'Iced tea',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg" },
    { id: 3, name: 'frappucino',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg" },
    { id: 4, name: 'Caramel latte',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 5, name: 'Vanilla latte',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 6, name: 'Irish Coffee',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 7, name: 'Cafe Mocha',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 8, name: ' Chocolate Milkshake',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 9, name: 'Chicken sandwich',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 10, name: 'Paneer sandwich',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 11, name: 'Caesar Salad',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 12, name: 'Rocca Salad',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 13, name: 'Russian Salad',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 14, name: 'Spicy Chicken Burger',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
    { id: 15, name: 'Fish Royale Burger',content:'coffee drink made with espresso and steamed milk.', featuredImage:"img/images.jpg"},
  ];

  return {
    all: function() {
      return Orders;
    },
    get: function(OrderId) {
      // Simple index lookup
      return Orders[OrderId];
    }
  }
});
