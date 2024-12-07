document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('player-name-form').addEventListener('submit', async function insertPlayerName(event){
   event.preventDefault();

  const playerName = document.getElementById('player-name').value;
  try {
      const response = await fetch('http://127.0.0.1:5000/insert_player', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player_name: playerName,
        }),
      });
      const data = await response.json();
      console.log(data)
      const playerId = data.player_id;
      console.log("Player inserted successfully!");
      sessionStorage.setItem('player_id', playerId);
      console.log(sessionStorage.getItem('player_id'))
      window.location.href = '../Pick reindeer page/pick-reindeer-page.html';
    }
    catch(error){
      console.log("Fetch error:", error.message)
    }
  });

});