// i'll eventually add something useful here
const changeBtn = document.querySelector("#change-button");

changeBtn.addEventListener('click', function() {
    const bgOptions = ["url('IMG_3641.jpg')", "url('IMG_4140.jpg')", "url('IMG_5630.jpg')", "url('IMG_5923.jpg')", "url('IMG_7649.jpg')"];
        document.body.style.background = bgOptions[Math.floor((Math.random() * bgOptions.length))];
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.height = "100vh";
});