// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item

let inventory = [];
function updateInventory(curInv, newInv) {
  curInv.forEach(([itemQty, itemName]) => {
    let item = isItemInInventory(itemName , newInv);
    if (item) {
      inventory.push([itemQty + item[0], itemName]);
    } else {
      inventory.push([itemQty, itemName]);
    }
  });

    for (let j = 0; j < newInv.length; j++) {
        let item = newInvItem(newInv[j][1]);
        if(!item) {
            inventory.push(newInv[j])
        }
    }



  console.log (inventory.sort((a,b) => {
    if(a[1] > b[1]) {
        return 1
    } else {
        return -1
    }
  }));
}

function newInvItem(name) {
    let item;
    for (let i = 0; i < inventory.length; i++) {
        if(inventory[i][1] === name) {
            item = inventory[i];
            break;
        }   
    }
    return item;
}

function isItemInInventory(name , inv) {
  let item;
  for (let i = 0; i < inv.length; i++) {
    const [itemQty, itemName] = inv[i];
    if (name === itemName) {
      item = [itemQty, itemName];
      break;
    }
  }
  return item;
}

// Example inventory lists


updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) ;
