if(getCookie("RefreshToken")){
  if(getCookie("AccessToken")){
    //USER인지 확인을 위해 유저의 롤 가져오기
    const role = getCookie("Role"); 

    const iLikeArtists = $("#i-like-artists");

    const peopleLikeArtists = $("#people-like-artists");

    if (role=="USER") { //만약 role이 존재한다면 회원이라는 뜻이므로 iLikeArtists(내가 좋아하는 아티스트)를 보여준다.
        iLikeArtists.css("display", "block");
        peopleLikeArtists.css("display", "none");

        //내가 팔로우한 아티스트 정보 가져오기
        
        $.ajax({
            type: "GET",
            url: config.ServerURL + "/api/choice/userId",
            headers: {
              Authorization: "Bearer " + getCookie("AccessToken")
            },
            success: function (res) {
                console.log("내가 팔로우한 아티스트 정보 가져오기")
                console.log(res);
                console.log(res.artists);
                console.log(res.artists[0]);
                DB= res.artists;
                

                for (index in DB) {
                  console.log("반복시작")
                  console.log(index);
                  const likeArtistsItem = `<div class="like-artists-item">
                  <a href="/post.html?id=${DB[index].id}"><img class="like-item-img" src="${DB[index].imgUrl}" alt=""></a>
                    <h6 class="like-item-name">${DB[index].artistName}</h6>
                    <span>${DB[index].follower}</span>명이 팔로우했어요.
                  </div>`
                
                  const likeArtistsItemContainer = $(".like-artists-item-container");
                
                  likeArtistsItemContainer.append(likeArtistsItem);
                }

            },
            error: function (err) {
                alert("내가 팔로우한 아티스트 정보를 가져올 수 없습니다.");
                console.error(err);
            }
        })
    }
  }
}
$.ajax({ //로그인 안했거나, ARTIST일때는 사람들이 팔로우하는 아티스트를 보여준다.
  type: "GET",
  url: config.ServerURL + "/api/choice/rank",
  success: function (res) {
      console.log("사람들이 팔로우하는 아티스트 정보 가져오기")
      console.log(res);
      DB= res;
      for (index in DB) {
        console.log("반복시작")
        console.log(index);
        const likeArtistsItem = `<div data-id=${DB[index].id} class="like-artists-item">
        <a href="/post.html?id=${DB[index].id}"><img class="like-item-img" src="${DB[index].imgUrl}" alt=""></a>
          <h6 class="like-item-name">${DB[index].name}</h6>
          <span>${DB[index].count}</span>명이 팔로우했어요.
        </div>`
      
        const likeArtistsItemContainer = $(".like-artists-item-container");
      
        likeArtistsItemContainer.append(likeArtistsItem);
      }
  },
  error: function (err) {
      alert("사람들이 팔로우한 아티스트 정보를 가져올 수 없습니다.");
      console.error(err);
  }
})

// 0
// : 
// {id: 2, name: 'OrangeCaramel', count: 3}
// 1
// : 
// {id: 1, name: 'Dean', count: 2}
// 2
// : 
// {id: 3, name: 'ㅎㅎㅌ', count: 1}

//사람들이 팔로우한 아티스트 정보 가져오기
// DUMMY = {
//   "name" : "test",
//   "src" : "https://image.bugsm.co.kr/album/images/500/3095/309515.jpg",
//   "followers" : "1000",
// }

//팔로우한 아티스트 DB에서 가져와서 넣어주기 (db값이 달라지므로 가져오는 코드는 하나로 가능)
// for (index in DB) {
//   console.log("반복시작")
//   console.log(index);
//   const likeArtistsItem = `<div class="like-artists-item">
//     <img class="like-item-img" src="${DB[index].user.imgUrl}" alt="">
//     <h6 class="like-item-name">${DB[index].artistName}</h6>
//     <span>${DB[index].genre}</span>명이 팔로우했어요.
//   </div>`

//   const likeArtistsItemContainer = $(".like-artists-item-container");

//   likeArtistsItemContainer.append(likeArtistsItem);
// }





