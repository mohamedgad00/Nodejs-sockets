# Node.js Socket.IO Chat Application

A real-time chat application built with Node.js, Express, and Socket.IO that allows multiple users to communicate instantly with typing indicators.

## Features

- 🚀 Real-time messaging between multiple users
- 💬 Live chat with instant message delivery
- ⌨️ Typing indicators to show when someone is typing
- 🔌 WebSocket connection using Socket.IO
- 📱 Responsive design that works on desktop and mobile
- 🎨 Clean and modern UI

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO
  - HTTP module

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Socket.IO Client

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedgad00/Nodejs-sockets.git
   cd Nodejs-sockets
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Open multiple browser tabs or windows to test the real-time chat functionality

4. Start typing in one window and see the typing indicator appear in other windows

## Project Structure

```
nodejs-sockets/
├── index.js          # Main server file
├── index.html        # Frontend HTML file
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## How It Works

### Server Side (index.js)
- Creates an Express server with Socket.IO integration
- Handles WebSocket connections and disconnections
- Listens for chat messages and broadcasts them to all connected users
- Manages typing indicators by broadcasting typing events

### Client Side (index.html)
- Connects to the Socket.IO server
- Sends messages through a form submission
- Displays incoming messages in real-time
- Shows typing indicators when users are typing
- Handles connection and disconnection events

## Socket Events

### Client to Server Events:
- `chat message` - Sends a chat message
- `typing ...` - Indicates user is typing
- `stop_typing` - Indicates user stopped typing

### Server to Client Events:
- `send_messages_to_all_users` - Broadcasts chat message to all users
- `show_typing_status` - Shows typing indicator
- `clear_typing_status` - Hides typing indicator

## API Endpoints

- `GET /` - Serves the main chat interface

## Scripts

- `npm start` - Starts the server with nodemon for development
- `node index.js` - Starts the server in production mode

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Troubleshooting

### Common Issues:

1. **Port 3000 already in use:**
   ```bash
   # Find process using port 3000
   netstat -ano | findstr :3000
   # Kill the process (replace PID with actual process ID)
   taskkill /PID <PID> /F
   ```

2. **Socket connection issues:**
   - Make sure the server is running
   - Check browser console for error messages
   - Verify Socket.IO client script is loading correctly

3. **Typing indicators not working:**
   - Ensure event names match between client and server
   - Check browser console for JavaScript errors

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Mohamed Gad - [GitHub Profile](https://github.com/mohamedgad00)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mohamedgad00/Nodejs-sockets/issues).

## Show Your Support

Give a ⭐️ if this project helped you!
