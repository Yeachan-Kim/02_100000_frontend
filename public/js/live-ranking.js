//서버에서 가져오는 데이터
DUMMY = {
  "projectTitle" : "[100명 한정 팬싸인 서비스!] 오렌지캬라멜 마법소녀 등장!",
  "percent" : "100",
  "genre" : "pop",
  "src" : "https://image.bugsm.co.kr/album/images/500/3095/309515.jpg",
}

for(let i = 1; i < 5; i++){
  const liveRankingItem = `<div class="rank-item">
  <span class="rank-num">${i}</span>
  <div>
    <h6 class="rank-item-title">${DUMMY.projectTitle}</h6>
    <span class="rank-item-category">${DUMMY.percent}% ${DUMMY.genre}</span>
  </div>
  <img class="rank-item-img" src="${DUMMY.src}" alt="">
</div>`
  const rankItemContainer = $(".rank-item-container");
  rankItemContainer.append(liveRankingItem);
}

