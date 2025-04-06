from flask import Flask
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('memory-lane-db.json')
app = firebase_admin.initialize_app(cred)

db = firestore.client()


app = Flask(__name__)
@app.route('/')
def index():
    return "Hello world!"

if __name__ == "__main__":
    app.run(debug=True)