var removeCartItems = document.querySelectorAll(".remove-Btn");
for (var i = 0; i < removeCartItems.length; i++) {
  var button = removeCartItems[i];
  button.addEventListener("click", function (e) {
    var buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updatecardTotal();
  });
  updatecardTotal();
}

var addtoCart = document.querySelectorAll(".Buybtn");
for (var i = 0; i < addtoCart.length; i++) {
  var addTocartButton = addtoCart[i];
  addTocartButton.addEventListener("click", function (e) {
    var addbuttonClicked = e.target;
    var addcartItems = addbuttonClicked.parentElement.parentElement;
    var contentTitle = addcartItems.querySelectorAll(".content")[0].innerHTML;
    var contPrice = addcartItems.querySelectorAll(".cardBottom")[0];
    var contentRsPrice = contPrice.querySelectorAll("p")[0].innerHTML;
    var contentPrice = contentRsPrice.replace("Rs", " ");
    addItemstoCart(contentTitle, contentPrice);
  });
}

function addItemstoCart(contentTitle, contentPrice) {
  var newCartRow = document.createElement("div");
  var cartItems = document.querySelectorAll(".carts")[0];
  var cartRowContents = `<div class="cartItem">
  <div class="itemColumn" id="itemContent">${contentTitle}</div>
  <div class="priceColumn priceContent" id="priceContentHtml">${contentPrice}rs</div>
  <div class="quantityColumn" id="quantityContent"><input class="quantityColumnItem" type="number"
          value="1"> <button class="btn btn-danger remove-Btn">Remove</button></div>
</div>`;
  newCartRow.innerHTML = cartRowContents;
  cartItems.append(newCartRow);
  var removeCartElement = document.querySelectorAll(".remove-Btn");
  for (var i = 0; i < removeCartElement.length; i++) {
    var cartButton = removeCartElement[i];
    cartButton.addEventListener("click", (e) => {
      var removeCart = e.target;
      console.log(removeCart);
      removeCart.parentElement.parentElement.remove();
    });
  }
  var updateCartTotal = document.querySelectorAll(".cartItem");
  let totalValue = 0;
  for (var i = 0; i < updateCartTotal.length; i++) {
    var cartRow = updateCartTotal[i];
    var priceElement = cartRow.querySelectorAll(".priceContent")[0];
    var price = parseFloat(priceElement.innerHTML.replace("rs", " "));
    var quantityElement = cartRow.querySelectorAll(".quantityColumn")[0];
    var quantity = quantityElement.querySelectorAll(".quantityColumnItem")[0]
      .value;
    var TotalItemValue = price * quantity;
    totalValue = TotalItemValue + totalValue;
  }
  document.querySelector(".inputTotal").value = "Rs " + totalValue;

  var updateQuantityItems = document.querySelectorAll(".quantityColumnItem");
  for (var i = 0; i < updateQuantityItems.length; i++) {
    var button = updateQuantityItems[i];
    button.addEventListener("change", function (e) {
      var quantityChanges = e.target;
      if (isNaN(quantityChanges.value) || quantityChanges.value <= 0) {
        quantityChanges.value = 1;
      }
      updatecardTotal();
    });
  }
}

var updateQuantityItems = document.querySelectorAll(".quantityColumnItem");
for (var i = 0; i < updateQuantityItems.length; i++) {
  var button = updateQuantityItems[i];
  button.addEventListener("change", function (e) {
    var quantityChanges = e.target;
    if (isNaN(quantityChanges.value) || quantityChanges.value <= 0) {
      quantityChanges.value = 1;
    }
    updatecardTotal();
  });
}

function updatecardTotal() {
  var updateCartTotal = document.querySelectorAll(".cartItem");
  let totalValue = 0;
  for (var i = 0; i < updateCartTotal.length; i++) {
    var cartRow = updateCartTotal[i];
    var priceElement = cartRow.querySelectorAll(".priceContent")[0];
    var price = parseFloat(priceElement.innerHTML.replace("rs", " "));
    var quantityElement = cartRow.querySelectorAll(".quantityColumn")[0];
    var quantity = quantityElement.querySelectorAll(".quantityColumnItem")[0]
      .value;

    var TotalItemValue = price * quantity;
    totalValue = TotalItemValue + totalValue;
  }
  document.querySelector(".inputTotal").value = "Rs " + totalValue;
}
