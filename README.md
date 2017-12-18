# IWS Code Challenge 

Implementation of the mid-level engineering test given by IWS/BrightCore.

### Setup

1. Clone project
2. [Install MySQL Server if you haven't already](https://support.rackspace.com/how-to/installing-mysql-server-on-ubuntu/)
3. Install python-mysqldb: 

   `sudo apt-get install python-mysqldb`

4. Install sqlalchemy: 
   
   `sudo pip install sqlalchemy`

5. Install requirements using requirements.txt in project root: 

   `sudo pip install -r requirements.txt`

6. Modify line 6 in `database.py` to match your MySQL configuration:

   `app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://[USERNAME]:[PASSWORD]@[HOSTNAME]/[DBNAME]'`

7. Open a python console at project root and run these two commands:

   `from database import db`
   `db.create_all()`

8. Tell Flask where the main application file is with this command:

   `export FLASK_APP=app.py`

9. Run it!
   `flask run --host=0.0.0.0`

The app can now be found at `localhost:5000/index`

### Notes

* The frontend and backend are as loosely coupled as possible. For the sake of time and convenience, I decided to add a Flask route for `/index` to avoid having to launch two separate listeners (i.e. SimpleHTTPServer to serve index.html and Flask to run the backend). This also skips having to deal with CORS rules since it doesn't communicate across different ports.