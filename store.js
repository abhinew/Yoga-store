var products = [
    { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
    { referenceNumber: 1232, name: "Power Mat", price: 20 },
    { referenceNumber: 1233, name: "Block", price: 30 },
    { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
    { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
    { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
    { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
    { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
  ];
  
  function displayProducts() {
    var table = document.getElementById("products");
    
    for (var key in products) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var button = document.createElement('input');
        button.type = "button";
        button.className = "btn";
        button.value = "Add to cart";
       // btn.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
    
        cell1.innerHTML = products[key].referenceNumber;
        cell2.innerHTML = products[key].name;
        cell3.innerHTML = products[key].price;
        cell4.appendChild(button);
    }
  }

  displayProducts();

  function manageCheckout() {
    let checkoutButton = document.getElementById("checkout-button");
    checkoutButton.onclick(function() {
      
    });
  }