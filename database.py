from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:07g1fM*DC834@localhost/iws_challenge'
db = SQLAlchemy(app)

class FeatureRequest(db.Model):
	__tablename__ = 'featurerequests'
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String(100), unique=True, nullable=False)
	description = db.Column(db.String(255), nullable=False)
	client_name = db.Column(db.String(20), nullable=False)
	client_priority = db.Column(db.Integer, nullable=False)
	target_date = db.Column(db.DateTime, nullable=False)
	area_name= db.Column(db.String(20), nullable=False)