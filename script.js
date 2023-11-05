const imageUpload = document.getElementById("imageUpload");
const uploadedImage = document.getElementById("uploadedImage");

imageUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        uploadedImage.src = ""; // Clear the image if no file is selected
    }
});

//make div an image
const myDiv = document.getElementById("myDiv");
const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", function() {
    html2canvas(myDiv).then(function(canvas) {
        const imgData = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = imgData;
        a.download = "div_image.png";
        a.click();
    });
});


