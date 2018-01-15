var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);
(function() {
    if (page !== "index.html" && sessionStorage.getItem("userSessionEntity") === null) {
        console.log("redirecting");
        window.location.href = "index.html";
        return;

    }
});
