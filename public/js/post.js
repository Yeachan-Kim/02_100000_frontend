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
            postTitle.html(res.title);
            description.html(res.description);
            moneyNum.html(res.fundingPrice);
            rateNum.html((res.curFundingPrice / res.fundingPrice * 100) + "%");
            rateBar.css("width", (res.curFundingPrice / res.fundingPrice * 100) + "%");
            postContent.html()

            artistName.html(res.artist.artistName);
            artistDesc.html(res.artist.intro);


        },
        error: function (err) {
            console.error(err);
        }
    })
} else {
    alert("잘못된 접근입니다.")
    window.location = "/";
}
