window.onload = function(){
    getStats(); 
}

function getStats(){
    fetch("data/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      
      modifyStats(object);
    })
    .catch(function (error) {
      console.log("something went wrong");
      console.log(error);
    });
}

function modifyStats(stats){
    let statsTotal =0;

    for (let i=0; i<4 ;i++){
        const category = stats[i].category.toLowerCase();
        const statType = document.querySelector(".summary__stats__types--"+category);
        const stat = statType.querySelector(".my-score");
        stat.innerHTML = stats[i].score;
        statsTotal += stats[i].score;
    }
    
     const score = document.querySelector('.summary__results__score');
     score.innerHTML = Math.round(statsTotal/4);
}