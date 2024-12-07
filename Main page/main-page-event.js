document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://127.0.0.1:5000/get_player_id', {
      method: 'GET',
    });

    const data = await response.json();

    if (data.player_id) {
      console.log("Player ID received:", data.player_id);
      const playerId = data.player_id
      console.log("Player_id got successfully!");
      return playerId

    } else {
      console.log("Player id not found.");
    }
  } catch (error) {
    console.log("Error getting player id:", error.message);
  }

  async function updateLetterCount(playerId) {
    try {
      const response = await fetch(`/get_letter_count?player_id=${playerId}`, { method: 'GET' });
      const responseJson = await response.json();

      if (responseJson.letter_count !== undefined) {
        document.getElementById('letter-count-number').textContent = responseJson.letter_count;
        console.log("Letter count updated:", responseJson.letter_count);
      } else {
        console.error("Error: Letter count not found.");
      }
    } catch (error) {
      console.error("Error fetching letter count:", error.message);
    }
  }
})

