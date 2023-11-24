if(getCookie("RefreshToken")){
  if(getCookie("AccessToken")){
    //get cookie data name 'ROLE'
    const role = getCookie("Role"); 

    //get component id ="i-like-artists"
    const iLikeArtists = $("#i-like-artists");

    // get component id ="people-like-artists"
    const peopleLikeArtists = $("#people-like-artists");

    if (role=="USER") { //만약 role이 존재한다면 회원이라는 뜻이므로 iLikeArtists를 보여준다.
        iLikeArtists.css("display", "block");
        peopleLikeArtists.css("display", "none");

        //내가 팔로우한 아티스트 정보 가져오기
        DUMMY = {
          "name" : "test",
          "src" : "https://image.bugsm.co.kr/album/images/500/3095/309515.jpg",
          "followers" : "1000",
        }
    }
  }
} else{
  //사람들이 팔로우한 아티스트 정보 가져오기
  DUMMY = {
    "name" : "test",
    "src" : "https://image.bugsm.co.kr/album/images/500/3095/309515.jpg",
    "followers" : "1000",
  }
}



//팔로우한 아티스트 DB에서 가져와서 넣어주기 (db값이 달라지므로 가져오는 코드는 하나로 가능)
for (let i = 0; i < 4; i++) {
  const likeArtistsItem = `<div class="like-artists-item">
    <img class="like-item-img" src="${DUMMY.src}" alt="">
    <h6 class="like-item-name">${DUMMY.name}</h6>
    <span>${DUMMY.followers}</span>명이 팔로우했어요.
  </div>`

  const likeArtistsItemContainer = $(".like-artists-item-container");

  likeArtistsItemContainer.append(likeArtistsItem);
}







