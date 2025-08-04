$(function () {
    displayProducts();
    $("#delete-btn").click(deleteProducts);
});

function displayProducts() {
    let productList = JSON.parse(localStorage.getItem("productList") || "[]");
    const productHTML = productList
        .map(
            (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${Number(
                    product.price
                ).toLocaleString()}원</p>
            </div>
        </div>
        `
        )
        .join("");

    $("#product-grid").html(productHTML);
}

// 상품 삭제 함수
function deleteProducts(e) {
    e.preventDefault();

    if (confirm("정말 모든 제품을 삭제하시겠습니까?")) {
        localStorage.removeItem("productList");
        alert("모든 상품이 삭제되었습니다.");
        location.reload();
    }
}
