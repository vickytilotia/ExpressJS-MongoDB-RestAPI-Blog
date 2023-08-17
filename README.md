# Express.js MongoDB RestAPI Blog

This repository contains the backend code for a RESTful API built using Express.js and MongoDB to manage a blog. This API allows you to perform CRUD operations (Create, Read, Update, Delete) on blog posts, providing a simple way to interact with blog content.

Technology Used- ExpressJs, MongoDB, RestAPI

## Features
```
- Create new blog posts with titles, content, and other details.
- Retrieve a list of all blog posts or specific post details.
- Update blog post information.
- Delete blog posts from the database.
```
## Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed and running.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vickytilotia/ExpressJS-MongoDB-RestAPI-Blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ExpressJS-MongoDB-RestAPI-Blog
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file and set the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_uri
   ```

## Usage

1. Start the server:

   ```bash
   npm run server
   ```

2. The API will be accessible at `http://localhost:3000`.

## API Endpoints
```
- `GET /api/posts`: Get a list of all blog posts.
- `GET /api/posts/:id`: Get details of a specific blog post by ID.
- `POST /api/posts`: Create a new blog post.
- `PUT /api/posts/:id`: Update details of a specific blog post by ID.
- `DELETE /api/posts/:id`: Delete a blog post by ID.
```
## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
