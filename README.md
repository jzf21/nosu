### Setup Instructions  

### 1. Clone the Repository  
```bash
git clone https://github.com/jzf21/nosu.git
```

### 2. Install Dependencies:
```bash
npm install
```

### 3. Configure Environment Variables:

Create a .env file in the root directory of the project.

Copy the contents of .env.example into the .env file.

Replace the placeholders in the .env file with your actual credentials:

GITHUB_TOKEN: Your GitHub personal access token with the necessary scopes.

EMAILJS_USER_ID, EMAILJS_TEMPLATE_ID, EMAILJS_SERVICE_ID: Your EmailJS credentials.

### 4. Start the Application:

```bash
npm start
```

### Backend Setup Instructions

### 1. Clone the Repository  
```bash
git clone https://github.com/jzf21/nosu-backend.git
```
cd nosu-backend

### 2. Create and Activate Virtual Environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### 3. Install Dependencies:
```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables:

Create a .env file in the root directory of the project.

Copy the contents of .env.example into the .env file.

Replace the placeholders in the .env file with your actual credentials.

### 5. Start the Application:

```bash
uvicorn main:app --reload
```
