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
				url: "/requests",
				type: "POST",
				data: JSON.stringify(payload),
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(){

				}
			});
		}

		self.refreshExistingFeatureRequests = function(){}
 	}
	
	$('[data-toggle="datepicker"]').datepicker();

	ko.applyBindings(new AppViewModel());
});