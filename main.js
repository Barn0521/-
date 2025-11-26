const hotInput = document.getElementById("hotWater");
const coldInput = document.getElementById("coldWater");
const totalPriceText = document.getElementById("totalPrice");
const bankButtons = document.querySelectorAll(".bank-btn");

const HOT_PRICE = free;
const COLD_PRICE = free;

function calculateTotal() {
    const hot = Number(hotInput.value) || 0;
    const cold = Number(coldInput.value) || 0;

    const total = hot * HOT_PRICE + cold * COLD_PRICE;

    totalPriceText.innerText = total.toLocaleString("mn-MN") + " ₮";
}

hotInput.addEventListener("input", calculateTotal);
coldInput.addEventListener("input", calculateTotal);

bankButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const bank = btn.dataset.bank;
        const total = totalPriceText.innerText;

        if (total === "0 ₮") {
            alert("Эхлээд усны заалтаа оруулна уу!");
            return;
        }

        alert(bank + " банкаар " + total + " төлөх гэж байна!\n(Энд банкны холбоос нэмэх боломжтой)");
    });
});
