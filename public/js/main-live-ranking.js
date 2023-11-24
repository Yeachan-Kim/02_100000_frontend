//서버에서 가져오는 데이터
DUMMY = {
  "projectTitle" : "[100명 한정 팬싸인 서비스!] 오렌지캬라멜 마법소녀 등장!",
  "percent" : "100",
  "genre" : "pop",
  "src" : "https://image.bugsm.co.kr/album/images/500/3095/309515.jpg",
}

$.ajax({
  type: "GET",
  url: config.ServerURL + "/api/concert/funding",
  success: function (res) {
      console.log("랭킹 가져오기");
      console.log(res);
      console.log(DB[0].imgUrl[0].imgUrl);
      DB= res;
      for(index in DB){
        const liveRankingItem = `<div id=${DB[index].id} class="rank-item">
        <span class="rank-num">${Number(index)+1}</span>
        <div class="rank-item-description">
          <h6 class="rank-item-title">${DB[index].title}</h6>
          <span class="rank-item-category">${DB[index].curFundingPrice/DB[index].fundingPrice*100}% ${DB[index].genre}</span>
        </div>
        <a href="/post.html?id=${DB[index].id}"><img class="rank-item-img" src="${DB[index].imgUrl[0].imgUrl}" alt=""></a>
      </div>`
        const rankItemContainer = $(".rank-item-container");
        rankItemContainer.append(liveRankingItem);
      }
  },
  error: function (err) {
      alert("가장 펀딩 높은 5개를 못가져옵니다.");
      console.error(err);
  }
})




