$(document).ready(function() {
	// Initialize Firebase
	// TODO: Replace with your project's customized code snippet
	var config = {
		apiKey: "AIzaSyAk_LEtfgifY6FjOBaPoWY_zEgIUu0lx2U",
		authDomain: "employee-data-4f878.firebaseapp.com",
		databaseURL: "https://employee-data-4f878.firebaseio.com/",
		projectId: "employee-data-4f878",
		storageBucket: "employee-data-4f878.appspot.com",
		messagingSenderId: "518613691293",
	};
	firebase.initializeApp(config);
	var database = firebase.database();



	$("#employeeSubmit").on("click", function() {
		event.preventDefault();

		var name = $("#employeeName").val().trim();
		var role = $("#employeeRole").val().trim();
		var date = moment($("#startDate").val().trim(), "DD/MM/YY").format("X");
		var rate = $("#monthlyRate").val();

		var months = moment().diff(moment.unix(date, "X"), "months");
		console.log(months);
		var paid = rate*months;

		database.ref("/employees").push({
			name: name,
			role: role,
			startDate: moment.unix(date).format("DD/MM/YY"),
			monthsWorked: months,
			rate: rate,
			paid: paid
		});
		
	});

	database.ref("/employees").on("child_added", function(snapshot) {
		var sv = snapshot.val();
		var newRow = $("<tr>");
		var nameData = $("<td>").text(sv.name);
		var roleData = $("<td>").text(sv.role);
		var dateData = $("<td>").text(sv.startDate);
		var monthsData = $("<td>").text(sv.monthsWorked);
		var rateData = $("<td>").text(sv.rate);
		var paidData = $("<td>").text(sv.paid);
		newRow.append(nameData);
		newRow.append(roleData);
		newRow.append(dateData);
		newRow.append(monthsData);
		newRow.append(rateData);
		newRow.append(paidData);
		$("#employeeTable").append(newRow);
	});
});