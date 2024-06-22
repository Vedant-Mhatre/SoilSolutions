<img width="200" src="https://github.com/Vedant-Mhatre/SoilSolutions/assets/52707230/994eb9dc-ad7c-45a9-9646-fe026a2fb825" />

Soil Solutions is an e-commerce website with advanced features including search functionality, Stripe payment integration, and more, built using Vue.js, Django REST Framework, and PostgreSQL.

## Project Setup

This guide provides detailed instructions on how to set up the SoilSolutions project locally, including both the backend (Django) and frontend (Vue.js) components.

### Clone the Repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/Vedant-Mhatre/SoilSolutions.git
cd SoilSolutions
```

## Backend Setup (Django)

1. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```

2. **Create a virtual environment:**

   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**

   On macOS and Linux:

   ```bash
   source venv/bin/activate
   ```

   On Windows:

   ```bash
   venv\Scripts\activate
   ```

4. **Install the required dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

5. **Apply database migrations:**

   ```bash
   python manage.py migrate
   ```

6. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

The backend server should now be running at `http://127.0.0.1:8000`.

## Frontend Setup (Vue.js)

1. **Navigate to the frontend folder:**

   ```bash
   cd ../frontend
   ```

2. **Install npm dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run serve
   ```

The frontend server should now be running at `http://localhost:8080`.

## Additional Notes

- Ensure you have Python 3.8 or higher installed for the backend.
- Ensure you have Node.js and npm installed for the frontend.
- If you encounter any issues with dependencies, check the project's `requirements.txt` and `package.json` for specific version requirements.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

---

By following these steps, you should be able to set up the SoilSolutions project locally for development. If you encounter any issues, please check the documentation or open an issue on the GitHub repository.
