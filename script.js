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

    });