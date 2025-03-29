document.addEventListener("DOMContentLoaded", function () {
    console.log("Chatbot đã tải!");

    fetch("https://cdn.botpress.cloud/api/v1/bots/918e9d6e-3532-4ca5-9655-ab99f8c2c90f/converse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: "Xin chào!", userId: "user_1234" })
    })
    .then(response => response.json())
    .then(data => console.log("Phản hồi từ chatbot:", data))
    .catch(error => console.error("Lỗi:", error));
});
