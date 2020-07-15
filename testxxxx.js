async function football(team, year) {
  const https = require('https');
  let limit = 0
  let response = {}
  response.total_pages = 1
  let goals = 0
  function getGoals(t) {
    for (let i = 1; i <= response.total_pages; i++) {
      https.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team${t}=${team}&page=${i}`, (res) => {
          // console.log('statusCode:', res.statusCode);
          // console.log('headers:', res.headers);
          res.on('data', (data) => {
              response = JSON.parse(data);
              // console.log(response)
              
              if (response.total_pages === Number(response.page) && Number(response.page) === 1) {
                  limit = response.total
              } else {
                  if (Number(response.page) !== response.total_pages) {
                      limit = response.per_page
                  } else {
                      limit = response.total_pages*response.per_page - response.total
                  }
              }
              for (let j = 0; j < limit; j++) {
                if (t === 1) goals += Number(response.data[j].team1goals)
                else { goals += Number(response.data[j].team2goals)}
              }
          });
      });
    }
  } 
  getGoals(1)
  getGoals(2)
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(goals)
      console.log(goals)
    }, 2000)
  })
}
football("Barcelona", 2011)


    
