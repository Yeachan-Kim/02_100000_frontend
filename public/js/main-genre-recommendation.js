// genreArray=['HIPHOP','BALLAD','POP']

// for(index in genreArray){
//   genre = genreArray[index];
//   $.ajax({
//     type: "GET",
//     url: config.ServerURL + "/api/concert/genre",
//     data: {
//       genre,
//     },
    
//     success: function (res) {
//         console.log("장르별 추천 정보 가져오기")
//         console.log(res);
//         DB = res; 
//         for(index in DB){
//           const genreRecommendationItem = `<div class="list-item"><div>
//           <h6 class="category-item-title">${DB[index].title}</h6>
//           <span class="category-item-category">${DB[index].fundingPrice/DB[index].curFundingPrice*100}% ${DB[index].genre} </span>
//           </div>
//           <img class="category-item-img" src="${DB[index].imgUrl[0].imgUrl}" alt="">
//           </div></div>`
//           if(DB[index].genre == "HIPHOP"){
//             const hiphopRecommendationContainer = $("#category-hiphop");
//             hiphopRecommendationContainer.append(genreRecommendationItem);
//           }

//         }

        
//     },
//     error: function (err) {
//         alert("장르별 추천 정보를 가져올 수 없습니다.");
//         console.error(err);
//     }
//   })
// }

