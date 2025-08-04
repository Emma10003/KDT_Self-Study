$(function () {
    $(".register-btn").click(addProduct);
});

function addProduct(e) {
    e.preventDefault();

    const productName = $("#productName").val();
    const productPrice = $("#productPrice").val();
    const productImage = $("#productImage").val();

    let productList = JSON.parse(localStorage.getItem("productList") || "[]");

    const newProduct = {
        name: productName,
        price: productPrice,
        image: productImage,
    };

    productList.push(newProduct);
    // localStorage에 저장할 때는 문자열 형태로 stringify 해서 저장
    localStorage.setItem("productList", JSON.stringify(productList));

    // 결과 페이지로 이동
    window.location.href = "23_제품목록.html";
}
