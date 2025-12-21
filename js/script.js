function contactAlert() {
    alert("Message sent!");
}
function EMAlert() {
    alert("Welcome to EcoMarket!");
}

function EMValidate() {
    alert("Form sent!");
    return true;
}
function EMValidateForm() {
    const name = document.getElementById("EM-name").value;
    const email = document.getElementById("EM-email").value;
    const message = document.getElementById("EM-message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return false;
    }

    const modal = new bootstrap.Modal(document.getElementById("EM-successModal"));
    modal.show();

    return false; // mos e rifresko faqen
}
