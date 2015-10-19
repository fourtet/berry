(function(){
  var app =  angular.module('store', []);

  app.controller('StoreController', function($scope){
    $scope.beers = 'beeeers!';
    this.products = gems;
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      console.log(product.reviews);
      console.log(this.review);
      this.review = {};
    };
  });

  app.controller('ProductController', function(){
    this.item = {};

    this.notes = notes;

    this.addProduct = function(products){
      this.notes.push(this.item);
      this.item = {};
      console.log(this.notes);
      console.log(this.item);
    }
  });

  app.controller('SearchController', function(){
    this.searchFilter;

    this.search = function(){

    };

    this.chosenProduct = {};

    this.pickProduct = function(product){
      //this.chosenProduct = product;
      console.log(this.product);
    };

  });

  var notes = [];

  var gems = [
    {
      quantity: 0,
      sku: 'ard-001',
      name: 'Arduino Uno',
      description: 'The arduino uno description',
      price: 199.00,
      canPurchase: true,
      images: [
        {
          full: 'doda.gif'
        },
      ],
      reviews: [
        {
          stars: 5,
          body: 'i love this gem',
          author: 'shala@email.com'
        },
        {
          stars: 3,
          body: 'cool gem',
          author: 'al@email.com'
        }
      ]
    },
    {
      quantity: 0,
      sku: 'ard-002',
      name: 'Arduino Nano',
      description: 'The arduino nano description',
      price: 149.00,
      canPurchase: true,
      images: [
        {
          full: 'doda.gif'
        },
      ]
    }
  ]

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(newTab){
      this.tab = newTab;
    }
    this.whichTab = function(checkTab){
      return checkTab === this.tab
    }
  });



  $('total-product').text();

})();
