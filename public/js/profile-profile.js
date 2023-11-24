if(getCookie("RefreshToken")){
    if(getCookie("AccessToken")){
        $.ajax({ //유저조회 api
            type: "GET",
            url: config.ServerURL + "/api/user",
            headers: {
                Authorization: "Bearer " + getCookie("AccessToken")
            },
            success: function (res) {

              //프로필 이미지 받아와서 넣기
              const profilePictureImg = $(".profile-picture-img");
                profilePictureImg.attr("src", res.imgUrl);

              //프로필 이름 받아와서 넣기
              const profileName = $(".name-text");
              profileName.html(res.name);
             
              //프로필 장르 받아와서 넣기
              const profileGenre = $(".profile-genre");
              profileGenre.html(res.interest);
              
            },
            error: function (err) {
                console.error(err);
            }
        })
      const role = getCookie("Role"); 

      //롤에 따라서 다른 화면 보여주기
      const videoContainer = $(".video-container");
      const followingArtist = $(".following-container");
      const profileDescription = $(".profile-description");
      const followButton = $(".follow-button");
      const nameTag = $(".name-tag");
      const fundindArtistCount = $(".funding-artist-count");

      if (role=="ARTIST") { 
        //아티스트일 경우 비디오 보여주고, 팔로잉 아티스트 숨기기, 네임태그 ARTIST로 바꾸기, 펀딩횟수 숨기기
        videoContainer.css("display", "block");
        followingArtist.css("display", "none");
        nameTag.html("ARTIST");
        fundindArtistCount.css("visibility", "hidden");   
      } else if (role=="USER"){
        //유저일 경우 비디오 숨기고, 팔로잉 아티스트 보여주기, 네임태그 USER로 바꾸기, 펀딩횟수 보여주기
        videoContainer.css("display", "none");
        followingArtist.css("display", "block");
        profileDescription.css("display", "none");
        followButton.css("display", "none");
      }
    }
  }