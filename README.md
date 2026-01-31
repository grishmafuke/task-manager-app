A modern full-stack Task Management web application built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
It supports full CRUD functionality and displays tasks in a Kanban-style board with Pending and Completed columns.

:-Features

Add, view, update, and delete tasks

REST API backend

MongoDB database integration

Kanban board UI

Status-based task separation

Responsive modern dashboard

Glassmorphism styling

:- Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB Atlas

:- Project Structure
task-manager-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js

:- Setup Instructions

Follow these steps to run the project locally.

1. Clone the Repository
git clone <your-repo-link>
cd task-manager-app

2. Backend Setup

Go into backend folder:

cd backend


Install dependencies:

npm install

3. Configure Environment Variables

Create a .env file inside the backend folder:

MONGO_URI=mongodb+srv://grishmafuke26_db_user:grishu2526@cluster0.zoa23ya.mongodb.net/?appName=Cluster0

4. Start Backend Server
node server.js


You should see:

MongoDB Connected
Server running on port 5050

5. Run Frontend

Open the project in VS Code.

Use Live Server extension to run:

frontend/index.html


Make sure the URL shows:

http://localhost:5500/frontend/index.html

:- API Endpoints
Method	Route	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Add new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
:- Future Enhancements

Drag and drop Kanban cards

Authentication

Search & filters

Deployment

Analytics dashboard
