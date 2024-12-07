document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://127.0.0.1:5000/get_player_id', {
      method: 'GET',
    });

    const data = await response.json();

    if (data.player_id) {
      const playerId = data.player_id
      console.log("Player_id got successfully!");

      const reindeerImages = document.querySelectorAll('.reindeer');
      reindeerImages.forEach(function(reindeer) {
        reindeer.addEventListener('click', async function() {
          const reindeerId = reindeer.id;

          try {
            const response = await fetch('http://127.0.0.1:5000/update_reindeer_to_player', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                player_id: playerId,
                reindeer_id: reindeerId
              })
            });

            const data = await response.json();

            if (data.status === 'success') {
              console.log("Reindeer id inserted for player successfully!");
              window.location.href = '../Main page/main-page.html';
            } else {
              console.log("Error inserting player:", data.message);
            }
          } catch (error) {
            console.log("Error updating reindeer:", error.message);
          }
        });
      });
    } else {
      console.log("Player id not found.");
    }

  } catch (error) {
    console.log("Error getting player id:", error.message);
  }
});