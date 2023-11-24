const submitBtn = $("#fund-btn");
let deleteArr = [];
let addArr = [];

let idx = 0;
submitBtn.click(function (e) {
    const title = $("#postTitle").val();
    const description = $("#postDescription").val();
    const fundGoal = $("#goalNum").val();
    const content = $(".text-input-box").html();
    const category = $("input[name = category]:checked").val();
    const date = $("#concert-date").val();
    const date1 = new Date(date).toISOString();
    const files = addArr;
    const youtube = $("#video-url").val();

    if (title.length <= 0) {
        alert("제목을 넣어주세요.");
    } else if (description.length <= 0) {
        alert("설명을 넣어주세요.");
    } else if (!fundGoal) {
        alert("금액을 넣어주새요.");
    } else if (!lat || !long) {
        alert("위치 정보를 넣어주세요.")
    } else if (!category) {
        alert("장르를 골라주세요.")
    } else if (!date1) {
        alert("콘서트 날짜를 입력해주세요.")
    } else {
        console.log(`title: ${title}, description: ${description}, fundGoal: ${fundGoal}, lat: ${lat}, long: ${long}, 
        category: ${category}, date: ${date1}`);
        console.log(content);

        let concertPostReq = {
            "concertDate": date1,
            "region": "INCHEON",
            "fundingDate": date1,
            "genre": category,
            "fundingPrice": fundGoal,
            "latitude": lat,
            "longitude": long,
            "multipartFileList": files,
            "intro": description,
            "title": title,
            "detail": content,
            "url": youtube
        }

        console.log(concertPostReq);

        $.ajax({
            url: config.ServerURL + "/api/concert",
            type: "POST",
            body: JSON.stringify(concertPostReq),
            headers: {
                Authorization: "Bearer " + getCookie("AccessToken")
            },
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.error(err);
            }
        })
    }
})

$(".img-item-del").click(function (e) {
    let target = $(e.target);
    let targetId= e.target.dataset.id;
    console.log(targetId);
    if (!!targetId) {
        target.parent().remove();
        deleteArr.push(targetId);
        console.log(targetId);
    } else {
        targetId = e.target.dataset.new;
        target.parent().remove();
        deleteArr.push(targetId);
        console.log(targetId);
    }
})

$("#profile-img-upload").change(function (e) {
    const file = e.target.files[0];
    let template;

    let reader = new FileReader();
    reader.onload = function(e) {
        template = `<div class="img-item" data-new="${idx}">
                    <div class="img-item-del" data-new="${idx}">삭제하기</div>
                    <img src="${e.target.result}" alt="" data-new="${idx}">
                </div>`;
        idx += 1;
        $(".post-img-modify-inner").append(template);

        $(".img-item-del").click(function (e) {
            let target = $(e.target);
            let targetId= e.target.dataset.id;
            if (!!targetId) {
                target.parent().remove();
                deleteArr.push(targetId);
                console.log(targetId);
            } else {
                targetId = e.target.dataset.new;
                target.parent().remove();
                addArr.pop(targetId);
                console.log(addArr);
            }
        })
    }
    reader.readAsDataURL(file);

    addArr.push(file);
    console.log(addArr);
})