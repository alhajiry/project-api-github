function getFollowers() {
    // let div = document.createElement("div");
    fetch("https://api.github.com/users/alhajiry/followers")
        .then(res => res.json())
        .then(followers => {
            followers.map(data => {
                let divider = document.getElementById("container-images");
                let imagesDiv = document.createElement("div");
                imagesDiv.className = "col-sm-6 col-md-4";
                imagesDiv.innerHTML = `
                <a class="lightbox" href="${data.html_url}">
                    <img src=${data.avatar_url} alt="Profile">
                </a>`;
                divider.appendChild(imagesDiv);

                // const images = document.createElement("img");
                // const container = document.getElementsByClassName("lightbox");
                // // document.createElement("img");
                // images.setAttribute("src", data.avatar_url);
                // // images.className = "gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6";
                // container.appendChild(images);
            });
        });
}
