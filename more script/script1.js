async function fetchData(){

    const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1aed9dbf8emsh187219ea75d2d9dp15e0b7jsnadd59403062d',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        if(!result)return [];
        //console.log(result);
        var i=0,j=0;
        for( i=0;i<5;i++){
            if(i==1){
                continue;
            }
            for( j=0;j<5;j++){

                const relevantData = result.typeMatches[0].seriesMatches[i].seriesAdWrapper.matches[j];
            }

        }
        console.log({relevantData});
        

        //document.getElementById("matchs").innerHTML = result.data.map
    
     } catch (error) {
         console.error(error);
     }
}
fetchData();