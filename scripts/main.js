let total = 0;
let couponCheck = false;
const totalPrice = document.getElementById("totalPrice");
const listParent = document.getElementById("list");
const discount = document.getElementById("discount");
const totalAll = document.getElementById("mainTotal");
const couponBtn = document.getElementById("couponBtn");
const couponInput = document.getElementById("couponInput");

function updateCouponButtonState() {
    if (couponCheck === true && total >= 200) {
        couponBtn.removeAttribute("disabled");
        couponBtn.classList.remove("bg-gray-300");
        couponBtn.classList.add("bg-[#E527B2]");
    }
}

couponInput.addEventListener("keyup", function (event) {
    const couponCode = event.target.value;
    console.log(couponCode);
    if (couponCode === "SELL200") {
        couponCheck = true;
    }
    updateCouponButtonState();
});

function handleClick(event, price) {
    console.log(event.childNodes[3].childNodes[3].innerText);
    total += price;
    totalPrice.innerText = `Total Price: ${total}TK`;
    const list = document.createElement("li");
    list.innerText = event.childNodes[3].childNodes[3].innerText;
    listParent.appendChild(list);
    totalAll.innerText = `Total: ${total}TK`;
    updateCouponButtonState();
}

function handleCoupon(event) {
    if (couponCheck === true && total >= 200) {
        discount.innerText = `Discount: ${total * 0.2}TK`;
        total -= total * 0.2;
        totalAll.innerText = `Total: ${total}TK`;
    }
}

function resetPage() {
    while (listParent.firstChild) {
        listParent.removeChild(listParent.firstChild);
    }
    couponInput.value = "";
    totalPrice.innerText = "Total Price: 0TK";
    discount.innerText = "Discount: 0TK";
    totalAll.innerText = "Total: 0TK";
    total = 0;
    couponCheck = false;
}
