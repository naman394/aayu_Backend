Aayu Backend Project
This is the backend API for the Aayu platform, built with Node.js, Express, Prisma ORM, and PostgreSQL. The backend serves as the foundation for managing users, medical histories, hospitals, and doctors.

Features
User Management (CRUD operations)
Medical History Management (CRUD operations)
Hospital and Doctor Management (CRUD operations)
Relationship management for hospitals, doctors, and medical history.
Tech Stack
Node.js: JavaScript runtime for server-side operations
Express.js: Web framework for building the API
Prisma ORM: Database toolkit to interact with PostgreSQL
PostgreSQL: Relational database used for storing data
Prerequisites
Before you start, ensure you have the following installed:

Node.js (v14 or later)
npm (v6 or later)
PostgreSQL (you can use a hosted PostgreSQL instance like Neon, Heroku, or set up PostgreSQL locally)
Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/yourusername/aayu-backend.git
cd aayu-backend
2. Install dependencies
Run the following command to install required dependencies:

bash
Copy code
npm install
3. Set up environment variables
Create a .env file in the root of the project and add the following variables:

env
Copy code
DATABASE_URL=postgresql://yourusername:yourpassword@localhost:5432/aayu_db
Replace yourusername, yourpassword, and aayu_db with your actual PostgreSQL credentials and database name.
4. Set up the database
To set up the database and migrations, run the following commands:

Generate Prisma client
bash
Copy code
npx prisma generate
Run migrations
To apply the initial migrations and set up the database schema:

bash
Copy code
npx prisma migrate dev --name init
5. Start the server
Run the following command to start the backend server:

bash
Copy code
npm start
This will start the API server on http://localhost:3000.

6. Test the API
You can now test the API endpoints via Postman or any other HTTP client.

API Endpoints
User API
1. Create a new user
POST /api/users
Request body:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
2. Get all users
GET /api/users
Response:
json
Copy code
[
  {
    "id": "user-uuid",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
]
Medical History API
1. Get medical history for a user
GET /api/medical-history/:userId
Response:
json
Copy code
[
  {
    "id": 1,
    "userId": "user-uuid",
    "diagnosis": "Flu",
    "treatment": "Rest and fluids",
    "date": "2024-11-10T12:00:00Z",
    "doctor": "Dr. Smith"
  }
]
2. Add a new medical history entry
POST /api/medical-history
Request body:
json
Copy code
{
  "userId": "user-uuid",
  "diagnosis": "COVID-19",
  "treatment": "Quarantine and Rest",
  "date": "2024-11-12",
  "doctor": "Dr. Jane"
}
Hospital API
1. Get all hospitals
GET /api/hospitals
Response:
json
Copy code
[
  {
    "id": 1,
    "name": "City Hospital",
    "address": "123 Main St, Cityville",
    "phoneNumber": "+123456789",
    "email": "contact@cityhospital.com",
    "availableBeds": 10
  }
]
2. Create a new hospital
POST /api/hospitals
Request body:
json
Copy code
{
  "name": "City Hospital",
  "address": "123 Main St, Cityville",
  "phoneNumber": "+123456789",
  "email": "contact@cityhospital.com",
  "availableBeds": 10
}
Doctor API
1. Get all doctors
GET /api/doctors
Response:
json
Copy code
[
  {
    "id": 1,
    "name": "Dr. John",
    "specialty": "Cardiology",
    "rating": 4.5
  }
]
2. Create a new doctor
POST /api/doctors
Request body:
json
Copy code
{
  "name": "Dr. John",
  "specialty": "Cardiology",
  "rating": 4.5
}
Development
Running the development server
Use the following command to run the development server:

bash
Copy code
npm run dev
This will start the server on http://localhost:3000 and automatically restart it when code changes are detected.

Prisma Studio (Database GUI)
To interact with the database via a GUI, you can use Prisma Studio:

bash
Copy code
npx prisma studio
This will open a web interface where you can view and modify your database.

Testing
You can write tests for the API using tools like Jest or Mocha. To install Jest:

bash
Copy code
npm install --save-dev jest
Running Tests
bash
Copy code
npm test
Contributing
Feel free to fork this repository, make changes, and submit pull requests. Please follow the guidelines for submitting PRs.

License
This project is licensed under the MIT License.
