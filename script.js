function reGeneratorEnabled(){
    document.querySelector(".re-generator").disabled = false;
    document.querySelector(".generator").disabled = true;
};

function reGeneratorDisabled(){
    document.querySelector(".re-generator").disabled = true;
    document.querySelector(".generator").disabled = false;
};



document.querySelector(".generator").addEventListener("click", function(){
    const text = document.getElementById("URL").value;
    const qrImage = document.getElementById('qrcode');

    QRCode.toDataURL(text, {
            width: 200,  
            margin: 2, 
            color: { dark: '#000000', light: '#ffffff' }
        }, function (error, url) {
            if (error) {
                console.error(error);
            } else {
                qrImage.src = url;
            }
        });
    
    reGeneratorEnabled();
    });

document.querySelector(".re-generator").addEventListener("click", function(){
    reGeneratorDisabled();

    document.getElementById('qrcode').src = "./blurred_qr_code.png";
    document.getElementById("URL").value = "";

});