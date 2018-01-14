var path = window.location.pathname;
var page = path.split("/").pop();

(function() {
    if (page !== "index.html" && sessionStorage.getItem("userSessionEntity") === null) {
        window.location.href = "index.html";
        return;
        console.log("after redirect");
    }
});
console.log("after redirect check");

