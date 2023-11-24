//서버에서 가져오는 데이터
DUMMY = {
  "projectName" : "test",
  "src" : "https://image.bugsm.co.kr/album/images/500/3095/309515.jpg",
}

// if (getCookie("RefreshToken")) {
//   if (getCookie("AccessToken")) {
      
//   }
// }
  
// $.ajax({
//   type: "GET",
//   url: config.ServerURL + "/api/concert/recent",
//   success: function (res) {
//       console.log(res);
//   },
//   error: function (err) {
//       alert("최근 업로드 정보를 가져올 수 없습니다.");
//       console.error(err);
//   }
// })

//6번 돌면서 아이템 넣어주기
for (let i = 0; i < 5; i++) {
  const recentItem = `<div class="recent-item">
  <img class="recent-item-img" src="${DUMMY.src}" alt="">
  <h6 class="recent-item-title">${DUMMY.projectName}</h6>
</div>`

  const recentItemContainer = $(".recent-item-container");

  recentItemContainer.append(recentItem);
}