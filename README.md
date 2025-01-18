
## ⚡NestJS Bot with Scene-Based Boilerplate⚡🤖

This NestJS app integrates a Telegram bot with a PostgreSQL database to manage user interactions and bot data. The project is modular, separating database, bot logic, and user management into distinct sections for easy scaling and maintenance. 🚀

With [Prisma ORM](https://www.prisma.io/docs) for database handling and structured bot conversations using **Scenes**, this app provides a clean and efficient foundation for bot development and user management.
## 📁 Project Structure


```
+---prisma
|   |   schema.prisma              # Prisma schema definition
|
+---src
|   |   app.controller.ts          # Main controller for app functionality
|   |   app.module.ts              # Main module for the app setup
|   |   app.service.ts             # Main service for app functionality
|   |   main.ts                    # Entry point of the app
|   |
|   +---bot
|   |   |   bot.module.ts          # Bot-related module for integrating bot logic
|   |   |   bot.update.ts          # Bot update handler (receiving updates from the bot)
|   |   |
|   |   +---interfaces
|   |   |       context.interface.ts  # Interface for the bot's context
|   |   |
|   |   \---scenes
|   |           first.scene.ts     # Scene definition for the first step in bot interaction
|   |           greeting.scene.ts  # Scene for greeting in bot interaction
|   |           main.scene.ts      # Main scene for the bot interaction
|   |           second.scene.ts    # Second scene in the bot interaction
|   |           third.scene.ts     # Third scene in the bot interaction
|   |
|   +---prisma
|   |       prisma.module.ts       # Prisma module for interacting with the database
|   |       prisma.service.ts      # Prisma service to handle database queries
|   |
|   \---users
|           users.controller.ts    # Controller for user-related endpoints
|           users.module.ts        # Module for user-related functionality
|           users.service.ts       # Service to handle user logic
```
### Directories and Files

- **prisma**: Contains files related to the database schema and Prisma ORM configuration.
    - `schema.prisma`: Defines the database models and relationships.
- **src**: This is the main source directory, containing all application logic.
    - `app.controller.ts`, `app.module.ts`, `app.service.ts`, `main.ts`: The core files that initialize and configure the NestJS application.
        
    - **bot**: Contains the bot logic and user interaction logic.
        
        - **bot.module.ts**: The module that organizes bot-related services and controllers.
        - **bot.update.ts**: Handles incoming updates from the bot (e.g., messages or commands).
        - **interfaces/context.interface.ts**: Defines the interface for the bot's context, representing the current state of the interaction.
        - **scenes**: Contains different scenes for the bot's conversational flow.
            - `first.scene.ts`, `greeting.scene.ts`, `main.scene.ts`, `second.scene.ts`, `third.scene.ts`: Files that define various steps in the interaction flow. Each scene corresponds to a stage of the conversation the bot has with users.
    - **prisma**: Includes Prisma service and module for connecting the application with the PostgreSQL database.
        
        - `prisma.module.ts`: Integrates Prisma with NestJS by providing database access and query functionality.
        - `prisma.service.ts`: Contains the logic for performing database operations via Prisma.
    - **users**: Handles user-related functionality, including CRUD operations.
        
        - `users.controller.ts`: The controller that defines HTTP routes for interacting with user data.
        - `users.module.ts`: Organizes the user-related services and controllers.
        - `users.service.ts`: Provides the business logic for managing users.

## 🔑 Features

### 🤖 Bot Interactions

The bot is the central component of this application, with different scenes representing distinct stages in the user’s interaction with the bot. These scenes define how the bot interacts with users, prompts them for responses, and processes their input.

- The bot uses **Scenes** to create structured conversations. Each scene is defined in its own file and manages a specific step in the interaction.
- The **Context** interface is used to manage and track the bot's state across different scenes, allowing for seamless transitions between stages.

For more on Telegram Bot API, check out the official documentation.

### 🗃 Database Integration

The application uses **Prisma ORM** to interact with a PostgreSQL database. The Prisma schema defines the database models, which are automatically reflected in the database.

- Prisma services abstract database queries and ensure that data manipulation is easy and efficient.
- Users can be managed through the `users` module, which interacts with the database to store and retrieve user data.

### 👤 User Management

The application includes user management features, where you can:

- Create and update user data.
- Store essential information about users interacting with the bot.

The `users` module and its corresponding controller and service handle all user-related interactions and data persistence.

## 🛠 Setting Up the Application

For detailed setup instructions, refer to the [NestJS documentation.](https://nestjs.com/docs/)

### 1. Clone the repository:

`git clone https://github.com/timkmit/nest-boilerplate.git cd nest-boilerplate`

### 2. Install dependencies:

`yarn install`

### 3. Set up environment variables:

Create a `.env` file based on `.env.example` and update the environment variables with your credentials.

### 4. Run the application with Docker:
`docker-compose up --build`
This command will:
1. Build the Docker containers.
2. Start the PostgreSQL container and initialize the database.
3. Run the NestJS application.

### 5. Access the application:

- The API will be available at `http://localhost:3000`.
- The bot will be running and accessible for Telegram interactions.

### Welcome to contribute!