// Fetching HTML Elements in Variable by Element ID.
var x = document.getElementById("formElement");
var createform = document.createElement('form'); // Create New HTML Element Form
createform.setAttribute("action", ""); // Set Action Attribute on the Form Element
createform.setAttribute("method", "post"); // Set Method Attribute on the Form Element
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of the Form
heading.innerHTML = "Inquiry Form";
createform.appendChild(heading);

var line = document.createElement('hr'); // Making Horizontal Line After Heading
createform.appendChild(line);

var wrap = document.createElement('div');
wrap.setAttribute("class", "form-group");

var namelbl = document.createElement('label'); // Create Label for Name Field
namelbl.innerHTML = "Full Name: "; // Set Field Labels
wrap.appendChild(namelbl);          // Append Name Label in main Element


var inputetxt = document.createElement('input'); // Create Input Field for Name
inputetxt.setAttribute("type", "text");
inputetxt.setAttribute("name", "fullname");
wrap.appendChild(inputetxt);                     

createform.appendChild(wrap);                    // Append Name Input in main Element 



var wrapemail = document.createElement('div');
wrapemail.setAttribute("class", "form-group");

var emaillabel = document.createElement('label'); // Create Label for Email Field
emaillabel.innerHTML = "Your Email: ";
wrapemail.appendChild(emaillabel);             // Append Email Label in main Element

var emailelement = document.createElement('input'); // Create Input Field for Email
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "email");
wrapemail.appendChild(emailelement);              
createform.appendChild(wrapemail);                     // Append Email Input in main Element


var wrapmsg = document.createElement('div');
wrapmsg.setAttribute("class", "form-group");

var messagelabel = document.createElement('label'); 
messagelabel.innerHTML = "Your Message: ";
wrapmsg.appendChild(messagelabel);                // Append Textarea Label in main Element

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "message");
wrapmsg.appendChild(texareaelement);
createform.appendChild(wrapmsg);                // Append Textarea in main Element



var submitbtn = document.createElement('input'); // Create Submit Button
submitbtn.setAttribute("type", "submit");
submitbtn.setAttribute("name", "btn");
submitbtn.setAttribute("value", "Submit");
createform.appendChild(submitbtn);             // Append Button in main Element