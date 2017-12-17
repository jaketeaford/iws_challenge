from flask import jsonify, request
from database import app, db, FeatureRequest
from dateutil.parser import parse
import json

#mysql root pw is 07g1fM*DC834

@app.route("/index")
def index():
	return app.send_static_file("index.html")

@app.route("/requests", methods=['GET', 'POST'])
def requests():
	if request.method == 'POST':
		# create request
		data = request.get_json()

		mysql_date = parse(data['target_date'])

		featRequest = FeatureRequest(
			title = data['title'],
			description = data['description'],
			client_name = data['client_name'],
			client_priority = data['client_priority'],
			target_date = mysql_date,
			area_name = data['area_name']
		)

		db.session.add(featRequest)
		db.session.commit()

		return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
	else: 
		# retrieve feature requests
		feature_requests = FeatureRequest.query.all()
		result = []
		for feature_request in feature_requests:
			request_dict = dict(
				title=feature_request.title,
				description=feature_request.description,
				client_name=feature_request.client_name,
				client_priority=feature_request.client_priority,
				target_date=feature_request.target_date,
				area_name=feature_request.area_name,
			)
			result.append(request_dict)
		return jsonify(result)