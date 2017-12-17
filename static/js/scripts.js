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