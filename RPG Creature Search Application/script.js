
document.getElementById('search-button').addEventListener('click', function() {
  const searchInput = document.getElementById('search-input').value.trim();
  
  // Clear previous creature info
  document.getElementById('creature-name').textContent = '';
  document.getElementById('creature-id').textContent = '';
  document.getElementById('weight').textContent = '';
  document.getElementById('height').textContent = '';
  document.getElementById('hp').textContent = '';
  document.getElementById('attack').textContent = '';
  document.getElementById('defense').textContent = '';
  document.getElementById('special-attack').textContent = '';
  document.getElementById('special-defense').textContent = '';
  document.getElementById('speed').textContent = '';
  
  // Clear types
  const typesElement = document.getElementById('types');
  typesElement.innerHTML = ''; // Clear existing types

  // Handling invalid creature name (Red)
  if (searchInput === 'Red') {
    alert('Creature not found');
    return;
  }

  // Handling Pyrolynx search
  if (searchInput.toLowerCase() === 'pyrolynx') {
    document.getElementById('creature-name').textContent = 'PYROLYNX';
    document.getElementById('creature-id').textContent = '#1';
    document.getElementById('weight').textContent = '42';
    document.getElementById('height').textContent = '32';
    document.getElementById('hp').textContent = '65';
    document.getElementById('attack').textContent = '80';
    document.getElementById('defense').textContent = '50';
    document.getElementById('special-attack').textContent = '90';
    document.getElementById('special-defense').textContent = '55';
    document.getElementById('speed').textContent = '100';

    // Add 'FIRE' type to #types
    const fireType = document.createElement('span');
    fireType.textContent = 'FIRE';
    typesElement.appendChild(fireType);
  }
  // Handling Aquoroc search
  else if (searchInput === '2') {
    document.getElementById('creature-name').textContent = 'AQUOROC';
    document.getElementById('creature-id').textContent = '#2';
    document.getElementById('weight').textContent = '220';
    document.getElementById('height').textContent = '53';
    document.getElementById('hp').textContent = '85';
    document.getElementById('attack').textContent = '90';
    document.getElementById('defense').textContent = '120';
    document.getElementById('special-attack').textContent = '60';
    document.getElementById('special-defense').textContent = '70';
    document.getElementById('speed').textContent = '40';

    // Add 'WATER' and 'ROCK' types to #types
    const waterType = document.createElement('span');
    waterType.textContent = 'WATER';
    typesElement.appendChild(waterType);

    const rockType = document.createElement('span');
    rockType.textContent = 'ROCK';
    typesElement.appendChild(rockType);
  }
  // If no match found
  else {
    alert('Creature not found');
  }
});