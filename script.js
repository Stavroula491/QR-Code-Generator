let qrCodeURL = "";

function reGeneratorEnabled(){
    document.querySelector(".re-generator").disabled = false;
    document.querySelector(".generator").disabled = true;
    document.querySelector(".download").disabled = false;
};

function reGeneratorDisabled(){
    document.querySelector(".re-generator").disabled = true;
    document.querySelector(".generator").disabled = false;
    document.querySelector(".download").disabled = true;

};



document.querySelector(".generator").addEventListener("click", function(){
    const text = document.getElementById("URL").value;
    const qrImage = document.getElementById('qrcode');

    let img = QRCode.toDataURL(text, {
            width: 200,  
            margin: 2, 
            color: { dark: '#000000', light: '#ffffff' }
        }, function (error, url) {
            if (error) {
                console.error(error);
            } else {
                qrImage.src = url;
                qrCodeURL = url;

                // let link = document.createElement("a");
                // link.href = url;
                // link.download = "qrcode.png"
                // document.body.appendChild(link);
                // link.click();
                // document.body.removeChild(link);
            }
        });
    
    
    
    reGeneratorEnabled();
    });

document.querySelector(".download").addEventListener("click", function () {
        if (!qrCodeURL) {
            alert("Generate a QR code first!");
            return;
        }
    
        let link = document.createElement("a");
        link.href = qrCodeURL;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });


document.querySelector(".re-generator").addEventListener("click", function(){
    reGeneratorDisabled();

    document.getElementById('qrcode').src = "./blurred_qr_code.png";
    document.getElementById("URL").value = "";
    qrCodeURL = "";

});