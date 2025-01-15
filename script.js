
const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    image: "",
    dotsOptions: {
        color: "#000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff",
    }
});

const input = document.getElementById("userInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrCodeContainer = document.getElementById("qrcode");

generateBtn.addEventListener("click", () => {
    const userInput = input.value.trim();
    if (userInput) {
        qrCode.update({
            data: userInput,
        });
        qrCodeContainer.innerHTML = ''; 
        qrCode.append(qrCodeContainer);
        downloadBtn.style.display = "block"; 
    } else {
        alert("Please enter text or a link.");
    }
});

downloadBtn.addEventListener("click", () => {
    qrCode.download({ name: "qrcode", extension: "png" });
});
