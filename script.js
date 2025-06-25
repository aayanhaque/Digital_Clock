let is24Hour = true;

function updateClock() {
    const now = new Date();
    
    // Update time
    const timeFormat = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24Hour
    };
    
    const time = now.toLocaleTimeString('en-US', timeFormat);
    document.getElementById('time').textContent = time;
    
    // Update date with a more elegant format
    const dateFormat = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = now.toLocaleDateString('en-US', dateFormat);
    document.getElementById('date').textContent = date;
}

// Toggle time format
document.getElementById('formatToggle').addEventListener('click', () => {
    is24Hour = !is24Hour;
    updateClock(); // Update immediately after toggle
});

// Add smooth transition for updates
function addTransition() {
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    
    time.style.transition = 'opacity 0.3s ease';
    date.style.transition = 'opacity 0.3s ease';
}

// Initialize clock
addTransition();
updateClock();
setInterval(updateClock, 1000); 