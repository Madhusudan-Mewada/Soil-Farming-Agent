// Post Soil Details
function postSoil(soilType, description) {
    db.collection("soils").add({
      soilType,
      description,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      logAction('Soil Posted', soilType);
      alert('Soil details added successfully');
    }).catch(error => {
      logAction('Post Soil Error', error.message);
      alert(error.message);
    });
  }
  
  // Post Distributor Details
  function postDistributor(name, contact) {
    db.collection("distributors").add({
      name,
      contact,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      logAction('Distributor Posted', name);
      alert('Distributor added successfully');
    }).catch(error => {
      logAction('Post Distributor Error', error.message);
      alert(error.message);
    });
  }
  