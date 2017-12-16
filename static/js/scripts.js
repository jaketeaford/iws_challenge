$(document).ready(function(){
	function AppViewModel() {
	    var self = this;
	    self.title = ko.observable();
	    self.description = ko.observable();
	    self.selectedClient = ko.observable();
	    self.priority = ko.observable();
	    self.date = ko.observable();
	    self.selectedArea = ko.observable();


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

		self.submitFeatureRequest = function(){};
	}
	 
	$('[data-toggle="datepicker"]').datepicker();

	ko.applyBindings(new AppViewModel());
});