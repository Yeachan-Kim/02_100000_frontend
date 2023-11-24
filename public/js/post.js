const postId = new URL(window.location).searchParams.get("id");

const tag = $(".badge");
const postTitle = $("#title");
const description = $("#description");
const moneyNum = $("#money-num");
const rateBar = $("#rate-percent");
const rateNum = $("#rate-num");
const postContent = $(".post-description-content");

const artistName = $("#artist-name");
const artistFollow = $("#artist-follow");
const artistDesc = $(".profile-desc");

if (!!postId) {
    $.ajax({
        url: config.ServerURL + "/api/concert/" + postId,
        type: "GET",
        success: function (res) {
            console.log(res);
            postTitle.html(res.title);
            description.html(res.intro);
            moneyNum.html(res.fundingPrice);
            rateNum.html((res.curFundingPrice / res.fundingPrice * 100) + "%");
            rateBar.css("width", (res.curFundingPrice / res.fundingPrice * 100) + "%");
            postContent.html(res.detail);
            tag.html()

            res.imgUrl.forEach((a) => {
                let template = `
                <div class="carousel-item active">
                                <img src="${a.imgUrl}" class="d-block w-100" alt="...">
                            </div>`;
                $(".carousel-inner").append(template);
            });

            artistName.html(res.artist.artistName);
            artistDesc.html(res.artist.intro);
            let coor = { lat : res.latitude , lng : res.longitude};
            map.setCenter(coor);
            if (res.url) {
                $("#player").attr("src", res.url);
                $(".video-container").css("display", "block");
            }
        },
        error: function (err) {
            console.error(err);
        }
    })

    $.ajax({
        url: config.ServerURL + "/api/review/concert/" + postId,
        type: "GET",
        success: function (res) {
            console.log(res)
            res.forEach((a) => {
                let template = `
                        <div class="review-item">
                            <div class="item-user">
                                <img class="user-img" src="${a.user.imgUrl}" alt="">
                                <span class="user-name">${a.user.name}</span>
                            </div>
                            <div class="item-context">
                                ${a.content}
                            </div>
                        </div>`;
                $(".review-items-container").append(template);
            })
        },
        error: function (err) {
            console.error(err);
        }
    })
} else {
    alert("잘못된 접근입니다.")
    window.location = "/";
}
