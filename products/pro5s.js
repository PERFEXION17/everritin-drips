const payBtn = document.getElementById("pay-btn");
const quantityInput = document.getElementById("qty");
const totalDisplay = document.getElementById("total");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("customer_email");
const skuInput = document.getElementById("sku");
const sizeInput = document.getElementById("size");
const colorInput = document.getElementById("colour");

const unitPrice = 8000;

quantityInput.addEventListener("input", () => {
  let quantity = parseInt(quantityInput.value) || 1;
  if (quantity < 1) quantity = 1;
  let total = unitPrice * quantity;
  totalDisplay.textContent = total.toLocaleString();
});

payBtn.addEventListener("click", () => {
  let quantity = parseInt(quantityInput.value) || 1;
  if (quantity < 1) quantity = 1;

  let amount = unitPrice * quantity * 100;
  let email = emailInput.value.trim();
  let fullName = nameInput.value.trim();
  let phone = phoneInput.value.trim();
  let sku = skuInput ? skuInput.value : "N/A";
  let size = sizeInput ? sizeInput.value : "N/A";
  let color = colorInput ? colorInput.value : "N/A";

  if (!fullName) {
    alert("Please enter your Full Name before proceeding.");
    return;
  }
  if (!email) {
    alert("Please enter your Email Address before proceeding.");
    return;
  }
  if (!phone) {
    alert("Please enter your Phone Number before proceeding.");
    return;
  }

  let handler = PaystackPop.setup({
    key: "pk_live_e306b704744f3a734dcab878d7a19d674ac82f39",
    email: email,
    amount: amount,
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: fullName,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone,
        },
        {
          display_name: "SKU",
          variable_name: "sku",
          value: sku,
        },
        {
          display_name: "Size",
          variable_name: "size",
          value: size,
        },
        {
          display_name: "Color",
          variable_name: "color",
          value: color,
        },
        {
          display_name: "Quantity",
          variable_name: "quantity",
          value: quantity,
        },
      ],
    },
    callback: function (response) {
      window.location.href = "/thankyou.html?reference=" + response.reference;
    },
    onClose: function () {
      alert("Transaction was not completed.");
    },
  });
  handler.openIframe();
});
