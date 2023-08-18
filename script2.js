async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e950c12b-25e4-4b49-beb5-6f8bb14d3431&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;
            
            if(!matchesList)return []; 
                
            for (let i = 0; i < 5; i++) {
                document.getElementById(`name${i}`).textContent = matchesList[i].name;
                document.getElementById(`status${i}`).textContent = matchesList[i].status;
                document.getElementById(`venue${i}`).textContent = matchesList[i].venue;
                document.getElementById(`date${i}`).textContent = matchesList[i].date;

                if (matchesList[i].score.length > 1) {

                    
                    document.getElementById(`inn1name${i}`).textContent = matchesList[i].score[0].inning;
                    document.getElementById(`run1${i}`).textContent = matchesList[i].score[0].r;
                    document.getElementById(`wicket1${i}`).textContent = matchesList[i].score[0].w;
                    document.getElementById(`over1${i}`).textContent = matchesList[i].score[0].o ;
                }
                
                if (matchesList[i].score.length >= 2) {

                    
                    document.getElementById(`inn2name${i}`).textContent = matchesList[i].score[1].inning;
                    document.getElementById(`run2${i}`).textContent = matchesList[i].score[1].r;
                    document.getElementById(`wicket2${i}`).textContent = matchesList[i].score[1].w;
                    document.getElementById(`over2${i}`).textContent = matchesList[i].score[1].o;
                }
            }
               

        })
        .catch(e => console.log(e));
   
}

getMatchData();

