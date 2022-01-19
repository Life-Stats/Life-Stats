export async function getBreaths(y, m, d) {
    // const url = 'https://life-stats-app.herokuapp.com/api/v1/holiday'; // deployed Heroku URL
    const url = 'http://localhost:7890/api/v1/breaths';
    const response = await fetch(url, {
  
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(y, m, d) 
    });
    return response.json(); 
  };