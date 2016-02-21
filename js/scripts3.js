function createBooth (form) {
	event.preventDefault();
	Parse.initialize("AT6kQiqLbamQbbLDGX6GQSJ97WzoMZlaoK7WUBFE", "fegB9aRyHm6NdazycJLdhoaAguQcheeyIyrQKLkb");

	var uOrgName = 	Parse.User.current().get("username");
	var uEvent = form.event1.value;
	var uLocation = form.event_location.value;
	var uDesc = form.description.value;
	//alert("Name:"+ uOrgName);


	var Booth = Parse.Object.extend("Booth");
	var booth = new Booth();

	var geocoder = new google.maps.Geocoder();
	var location;
	geocoder.geocode( { 'address': uLocation}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        //map.setCenter(results[0].geometry.location);
        //var marker = new google.maps.Marker({
            //map: map,
            
            //position: results[0].geometry.location
            location = results[0].geometry.location;
            var point = new Parse.GeoPoint(location.lat(), location.lng());
            //alert(point.latitude+"  "+point.longitude);
            booth.set("locations", point);
            //alert("YESSS"+ location.lat());
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });

    
	booth.set("org", uOrgName);
	booth.set("event", uEvent);
	booth.set("desc", uDesc);
	//alert(point);
	//booth.set("location", point);




	booth.save(null, {
	success: function(booth) {
	  // Execute any logic that should take place after the object is saved.
	  //alert('New object created with objectId: ' + booth.id);
	  window.location.assign("dashboard.html");
	},
	error: function(booth, error) {
	  // Execute any logic that should take place if the save fails.
	  // error is a Parse.Error with an error code and message.
	  alert('Failed to create new object, with error code: ' + error.message);
	}
	});
 }
 function loginResults(form) {
	//alert('Entered wrong username/password shit');
	event.preventDefault();
	Parse.initialize("AT6kQiqLbamQbbLDGX6GQSJ97WzoMZlaoK7WUBFE", "fegB9aRyHm6NdazycJLdhoaAguQcheeyIyrQKLkb");
	var uName = form.username.value;
	var uPassword = form.password.value;
	console.log('name:'+ uName);
	console.log('password:'+uPassword);
	Parse.User.logIn(uName, uPassword, {
		success: function(user) {
			//alert('success');

			var currentUser = Parse.User.current();
			if (currentUser) {
			    // do stuff with the user
			      window.location.assign("dashboard.html");
			} else {
			    // show the signup or login page
			    window.location.assign("index.html");
			}
		},
		error: function(user, error) {
		  alert('Invalid password');
		  // The login failed. Check error to see why.
		}
	});
	event.preventDefault();
}
function testResults (form) {
	event.preventDefault();
	var uOrgName = form.org_name.value;
	var uName = form.username.value;
	var uEmail = form.email.value;
	var uPassword = form.password.value;
	//alert("Name:"+ uName);

	Parse.initialize("AT6kQiqLbamQbbLDGX6GQSJ97WzoMZlaoK7WUBFE", "fegB9aRyHm6NdazycJLdhoaAguQcheeyIyrQKLkb");
	var user = new Parse.User();
	user.set("username", uName);
	user.set("password", uPassword);
	user.set("email", uEmail);
	user.set("org_name", uOrgName);
	user.set("org_name", uOrgName);
	user.set("org_name", uOrgName);
	user.set("org_name", uOrgName);
	user.set("org_name", uOrgName         )

	user.signUp(null, {
	success: function(user) {
	  //alert("hi");
	  window.location.assign("dashboard.html");
	},
	error: function(user, error) {
	  // Show the error message somewhere and let the user try again.
	  alert("Error: " + error.code + " " + error.message);
	}
	//event.preventDefault();
	});
}
$('#logout').click( function() { 
	Parse.User.logOut(); 
	window.location.assign("index.html");
	return false; 
} );



// jQuery(document).ready(function(){
//     createBooth();
// });