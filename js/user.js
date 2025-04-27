// View Soil Details
function fetchSoilDetails() {
    db.collection("soils").orderBy("timestamp", "desc").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          document.getElementById('soil-list').innerHTML += `
            <div class="card">
              <h3>${data.soilType}</h3>
              <p>${data.description}</p>
            </div>
          `;
        });
        logAction('Fetched Soil Details');
      });
  }
  
  // View Distributor Details
  function fetchDistributorDetails() {
    db.collection("distributors").orderBy("timestamp", "desc").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          document.getElementById('distributor-list').innerHTML += `
            <div class="card">
              <h3>${data.name}</h3>
              <p>Contact: ${data.contact}</p>
            </div>
          `;
        });
        logAction('Fetched Distributor Details');
      });
  }
  