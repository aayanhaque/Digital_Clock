* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(45deg, #1a1a1a, #2c3e50);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.clock {
    text-align: center;
}

.time {
    font-size: 4rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;
}

.date {
    font-size: 1.2rem;
    color: #ecf0f1;
    letter-spacing: 2px;
}
