from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:07g1fM*DC834@localhost/iws_challenge'
db = SQLAlchemy(app)


class ProductArea(db.Model):
	__tablename__ = 'areas'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(40), unique=True, nullable=False)

	def __repr__(self):
        return '<Product Area %r>' % self.name

class Client(db.Model):
	__tablename__ = 'clients'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(40), unique=True, nullable=False)

	def __repr__(self):
        return '<Client %r>' % self.name

class FeatureRequest(db.Model):
	__tablename__ = 'featurerequests'
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String(100), unique=True, nullable=False)
	description = db.Column(db.String(255), nullable=False)
	client_id = db.Column(db.Integer, db.ForeignKey('clients.id'), nullable=False)
	client_priority = db.Column(db.Integer, nullable=False)
	target_date = db.Column(db.DateTime, nullable=False)
	area_id = db.Column(db.Integer, db.ForeignKey('areas.id'), nullable=False)

# prodArea1 = ProductArea(name="Policies")
# prodArea2 = ProductArea(name="Billing")
# prodArea3 = ProductArea(name="Claims")
# prodArea4 = ProductArea(name="Reports")