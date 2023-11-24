const navbar = $("nav");

$("document").ready(function () {
    navbar.load("../../pages/include/navbar.html", function () {
        const singInBtn = $("#sign-in-btn");
        const navUserProfile = $("#nav-user-profile");
        const navUserImg = $("#nav-user-img");
        const navUserName = $("#nav-user-name");

        if (getCookie("RefreshToken")) {
            if (getCookie("AccessToken")) {
                $.ajax({
                    type: "GET",
                    url: config.ServerURL + "/api/user",
                    headers: {
                        Authorization: "Bearer " + getCookie("AccessToken")
                    },
                    success: function (res) {
                        
                        navUserImg.attr("src", res.imgUrl);
                        navUserName.html(res.name);
                        singInBtn.css("display", "none");
                        navUserProfile.css("display", "flex");
                        setCookie("Role", res.role, 60);
                    },
                    error: function (err) {
                        alert("유저 정보를 가져올 수 없습니다.");
                        console.error(err);
                    }
                })
            } else {
                $.ajax({
                    type: "PATCH",
                    url: config.ServerURL + "/api/auth/login",
                    headers: {
                        Authorization: "Bearer " + getCookie("RefreshToken")
                    },
                    success: function (res) {
                        setCookie("AccessToken", res.AccessToken, accessTime);
                        setCookie("RefreshToken", res.RefreshToken, refreshTime);
                        location.reload();
                    },
                    error: function (err) {
                        console.error(err);
                    }
                })
            }
        }
    })
})