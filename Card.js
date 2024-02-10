var a = document.getElementsByClassName('btn-danger');
// for (i = 0; i < a.length; i++) {
// a[i].addEventListener('click', removebtns)

// }
function removebtns(event) {
    var e = event.target;
    var parents = e.parentElement.parentElement.remove()
    // console.log(parents)
    grandtotal()
}

var addToCart = document.getElementsByClassName('btn-primary');
for (i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', addTocarts)
}

function addTocarts(event) {
    var addToCart = event.target;
    var addTocartEl = addToCart.parentElement
    //  console.log(addToCartEl)

    var imgname = addTocartEl.children[0].src;
    var titlename = addTocartEl.children[1].innerText;
    var price = addTocartEl.children[2].innerText;
    addToCartupdate(imgname, titlename, price);

}
var tbody = document.getElementsByTagName('tbody')[0]
function addToCartupdate(imgname, titlename, price) {
    var createElement = document.createElement('tr');
    var titleNames = document.getElementsByClassName('Item-Title');
    for (i = 0; i < titleNames.length; i++) {
        if (titleNames[i].innerText == titlename) {
            alert('this item a ready added to your cart');
            return
        }

    }

    createElement.innerHTML = `<td> <img src="${imgname}" class="Item-img" alt=""/> </td>
        <td><h4 class="Item-Title">${titlename}</h4></td>
        <td><h4 class='item-price'> ${price} </h4></td>
        <td><input type="Number" class="item-qty" value="0"></td>
        <td><h4 class="sub-total"> AED 0</h4></td>
        <td><button class="btn btn-danger">Remove</button></td>`
    tbody.append(createElement);
    for (i = 0; i < a.length; i++) {
        a[i].addEventListener('click', removebtns)
    }

    for (i = 0; i < qtyupdate.length; i++) {
        qtyupdate[i].addEventListener('click', updateqty)
    }
    grandtotal()
}

var qtyupdate = document.getElementsByClassName('item-qty');


function updateqty(event) {
    var updateEl = event.target;
    var parentsEl = updateEl.parentElement.parentElement
    //  console.log(parentsEl)
    var itemPrice = parentsEl.getElementsByClassName('item-price')[0];
    var itemprices = itemPrice.innerText.replace('Taka', ' ');
    var subtotal = parentsEl.getElementsByClassName('sub-total')[0];
    subtotal.innerHTML = updateEl.value * itemprices;
    if (isNaN(updateEl.value) || updateEl.value <= 0) {
        updateEl.value = 1;
    }
    grandtotal()
}


function grandtotal() {
    var total = 0;
    var grands = document.getElementsByClassName('grand-total')[0];
    var updates = document.getElementsByClassName('sub-total')
    for (i = 0; i < updates.length; i++) {
        var updatesAmount = parseInt(updates[i].innerText.replace('Taka', ''));
        total += updatesAmount;

    }
    grands.innerHTML = 'Taka ' + total;
}

