// deigne rules and access types
let userRole = "employee";
let accessLevel;
if (userRole === "employee") {
  accessLevel = "Access to Dietary Services";
} else if (userRole === "Enrolled Member") {
  accessLevel ="Access to Dietary Services & one-on-one interaction with a dietician";
} else if (userRole === "Subscriber") {
  accessLevel = "Partial access to facilitate Dietary Services";
} else {
  accessLevel = "No acces granted";
}

// Generate message for loggend-in users
let isLogged = true
let userMessage;
if (isLogged) {
   if (userRole === "employee")
    {userMessage = "As an employee, you have access to Dietary Services.";
  } else if (userRole === "Enrolled Member") 
    {userMessage = "As an enrolled Member, you have access to Dietary Services & one-on-one interaction with a dietician.";
  } else if (userRole === "Subscriber")
    {userMessage = "As a Subscriber, you have partial access to facilitate Dietary Services"};
} else {userMessage = "Please log in to identify your Userstatus. If you are new, please enroll our subscribe forst to avail the facilities.";
}

// Classify user by type using switch
let userType = userRole;
let userCategory;

switch (userType) {
  case "employee":
    userCategory = "Employee";
    break;
  case "Enrolled Member":
    userCategory = "Enrolled Member"
    break;
  case "Subscriber":
    userCategory = "Subscriber"
    break;
  default :
    userCategory = "Unknown";
    break;
}

// Output everything
console.log("User Role:", userRole);
console.log("User Category:", userCategory);
console.log("Access Level:", accessLevel);
console.log("Message:", userMessage);
