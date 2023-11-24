
$.ajax({
  type: "GET",
  url: config.ServerURL + "/api/concert/recent",
  success: function (res) {
      DB = res;
      console.log("최근 업로드 정보 가져오기")
      console.log(DB);
      //6개 db에서 보내기 때문에 루프 돌면서 내보내기
      for (index in DB) {
        const recentItem = `<div data-id =${DB[index].id} class="recent-item">
        <a href="/post.html?id=${DB[index].id}"><img class="recent-item-img" src="${DB[index].imgUrl}" alt=""></a>
        <h6 class="recent-item-title">${DB[index].title}</h6>
      </div>`
      
        const recentItemContainer = $(".recent-item-container");
      
        recentItemContainer.append(recentItem);
      }
  },
  error: function (err) {
      alert("최근 업로드 정보를 가져올 수 없습니다.");
      console.error(err);
  }
})

