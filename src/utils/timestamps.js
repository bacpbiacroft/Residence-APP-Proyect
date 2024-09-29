// Example using fetch in your frontend
const fetchTimestamp = async () => {
    try {
      const response = await fetch('http://localhost:8080/timestamp'); // Adjust the URL if needed
      const data = await response.json();
      console.log('Timestamp from backend:', data.timestamp);
  
      // If you need to display the timestamp
      document.getElementById('timestamp').innerText = new Date(data.timestamp).toLocaleString();
    } catch (error) {
      console.error('Error fetching timestamp:', error);
    }
  };
  
  // Call the function on page load or on a button click
  fetchTimestamp();