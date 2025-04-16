document.getElementById('parcelForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const parcel = {
    sender: document.getElementById('sender').value,
    receiver: document.getElementById('receiver').value,
    senderEmail: document.getElementById('senderEmail').value,
    receiverEmail: document.getElementById('receiverEmail').value,
    senderContact: document.getElementById('senderContact').value,
    receiverContact: document.getElementById('receiverContact').value,
    address: document.getElementById('address').value,
    weight: document.getElementById('weight').value
  };

  try {
    const res = await fetch('http://13.60.6.90:5000/api/parcels');
, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parcel)
    });

    const data = await res.json();
    console.log('Parcel added:', data);
    alert('Parcel added successfully!');
    this.reset();
  } catch (err) {
    console.error('Error:', err);
    alert('Failed to add parcel');
  }
});
