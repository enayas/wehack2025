# [<img src="https://github.com/user-attachments/assets/3651220e-bac6-447f-ba09-9b5570a3aeff" height="35"/>]([image.png](https://github.com/user-attachments/assets/3651220e-bac6-447f-ba09-9b5570a3aeff)) MemoryLane 
MemoryLane is a location-based mobile app designed to connect users with local businesses that match their interests. With intelligent recommendations powered by Capital One's Nessie API, personalized profiles, and seamless search and geolocation functionality, users can always find something to do by discovering and supporting local small businesses.

## Features
- Chats (?)
- Search page: allows users to search for businesses of their choice
- Discover page: allows users to explore local businesses that best match their interests
- Geolocation page: (?)
- Profile page: allows users to edit and customize their profile by adding preferences

## Tech Stack
React Native, TypeScript, Figma, Nessie API, Google Places API, Expo

## Getting Started
### Prerequisites
- Node.js & npm
- Expo CLI or React Native CLI
- Nessie API Key from Capital One

### Setup & Installation
1. Get a free API key at (?)
2. Clone the repo
   ```bash
   git clone https://github.com/yourusername/memorylane.git
   cd memorylane
   ```
4. Install dependencies

   ```bash
   npm install
   ```
5. Create a .env file in your root directory and add your API key
   ```bash
   NESSIE_API_KEY=your_nessie_key
   ```

## Starting the App in Expo
- Start the app
   ```bash
   npm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
