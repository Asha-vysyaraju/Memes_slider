fetch(`https://api.imgflip.com/get_memes`)
    .then((res) => res.json())
    .then((item) => {
        console.log(item)

        let carouselIndicators = document.getElementById("carousel-indicators");
        let carouselinner = document.getElementById("carousel-inner");
        for (let i = 0; i < item.data.memes.length; i++) {
            carouselIndicators.innerHTML +=

                `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"></button>`


            carouselinner.innerHTML +=
                `<div class="carousel-item">
<img src="${item.data.memes[i].url}"
    class="d-block w-100" alt="${item.data.memes[i].name}" height="400px">
<div class="carousel-caption d-none d-md-block">
    <h3>${item.data.memes[i].name}</h3>
    
</div>
</div>`
        }
    })
    .catch((error) => {
        console.log(error)
    })