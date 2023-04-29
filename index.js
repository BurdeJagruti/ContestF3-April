function getMenu() {
    fetch(`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`)
      .then(response => response.json())
      .then(data => {
        // display the menu to the user
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }
  
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = [
          'Cheeseburger',
          'Bacon Burger',
          'Veggie Burger',
          'Double Cheeseburger',
          'Mushroom Swiss Burger',
          'Spicy Chicken Sandwich',
          'Fish Sandwich',
          'Classic Hamburger'
        ];
  
        const burgerSelect = [];
        for (let i = 0; i < 3; i++) {
          const burgerTook = burgers[Math.floor(Math.random() * burgers.length)];
          burgerSelect.push(burgerTook );
        }
  
        const order = {
          burgers: burgerSelect,
        };
  
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  

  getMenu();
  
  takeOrder()
    .then(order => {
      console.log('Order placed:', order);
      return orderPrep();
    })
    .then(orderStatus => {
      console.log('Order status:', orderStatus);
      return payOrder();
    })
    .then(orderStatus => {
      console.log('Payment status:', orderStatus);
      thankyouFnc();
    })
    .catch(error => {
      console.error('Error:', error);
    });