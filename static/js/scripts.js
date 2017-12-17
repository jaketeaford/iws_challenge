$(document).ready(function(){
	function AppViewModel() {
	    var self = this;
	    self.title = ko.observable();
	    self.description = ko.observable();
	    self.selectedClient = ko.observable();
	    self.priority = ko.observable();
	    self.date = ko.observable();
	    self.selectedArea = ko.observable();
	    self.existingRequests = ko.observableArray([]);

	    self.clients = [
	    	{ clientName: "Client A" },
	    	{ clientName: "Client B" },
	    	{ clientName: "Client C" }
		];

		self.areas = [
	    	{ areaName: "Policies" },
	    	{ areaName: "Billing" },
	    	{ areaName: "Claims" },
	    	{ areaName: "Reports" }
		];

		self.submitFeatureRequest = function(){
			// check if priority is an integer, then check for blank inputs
			if (!isNaN(parseInt(this.priority()))){
				if (typeof this.title() != "undefined" &&
					typeof this.description() != "undefined" &&
					typeof this.priority() != "undefined" &&
					typeof this.date() != "undefined") {

					// proceed with creating request
					var payload = {
						title: this.title(),
						description: this.description(),
						client_name: this.selectedClient().clientName,
						client_priority: this.priority(),
						target_date: this.date(),
						area_name: this.selectedArea().areaName
					};

					$.ajax({
						url: "http://localhost:5000/requests",
						type: "POST",
						data: JSON.stringify(payload),
						contentType: "application/json; charset=utf-8",
						dataType: "json"
					});

					this.refreshExistingFeatureRequests();

				} else {
					alert("All fields are required.");
				}
			} else {
				alert("Client Priority should be a number.");
			}
		}

		self.refreshExistingFeatureRequests = function(){
			var appVM = this;
			$.ajax({
				url: "http://localhost:5000/requests",
				type: "GET",
				success: this.existingRequests
			});
		}

		self.refreshExistingFeatureRequests();
 	}
	
	$('[data-toggle="datepicker"]').datepicker();

	ko.applyBindings(new AppViewModel());
});