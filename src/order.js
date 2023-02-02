function takeOrder(order, deliveryArray) {
  if (deliveryArray.length < 3) {
    deliveryArray.push(order);
  }
}

function refundOrder(num, deliveryArray) {
  for (var i = 0; i < deliveryArray.length; i++) {
    if (deliveryArray[i].orderNumber === num) {
      deliveryArray.splice(i, 1);
    }
  }
}

function listItems(deliveryArray) {
  var items = [];
  for (var i = 0; i < deliveryArray.length; i++) {
    items.push(deliveryArray[i].item);
  }
  return items.join(", ");
}

function searchOrder(array, item) {
  var foundItem = array.find(order => order.item === item);
  if (foundItem) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}