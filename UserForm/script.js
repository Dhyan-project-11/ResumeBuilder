
  function limitWords(element, maxWords) {
    let words = element.value.trim().split(/\s+/);
    if (words[0] === "") words = [];
    if (words.length > maxWords) {
      element.value = words.slice(0, maxWords).join(" ");
    }
    document.getElementById(element.id + "-count").innerText = words.length + " / " + maxWords + " words";
  }




    // Data object mapping states to major cities
    const cityData = {
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kakinada", "Rajahmundry"],
        "Karnataka": ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi", "Davangere", "Ballari"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahabubnagar"]
    };

    function updateCities() {
        const stateSelect = document.getElementById("state");
        const citySelect = document.getElementById("city");
        const selectedState = stateSelect.value;

        // Clear existing options
        citySelect.innerHTML = '<option value="" selected disabled>-- Select City --</option>';

        if (selectedState) {
            citySelect.disabled = false;
            // Add cities for the selected state
            cityData[selectedState].forEach(city => {
                let option = document.createElement("option");
                option.value = city.toLowerCase().replace(/\s+/g, '-');
                option.textContent = city;
                citySelect.appendChild(option);
            });
        } else {
            citySelect.disabled = true;
        }
    }





  function validatePin(input) {
    // 1. Remove any non-numeric characters instantly
    input.value = input.value.replace(/[^0-9]/g, '');

    // 2. Visual feedback: Change border color if it's 6 digits
    if (input.value.length === 6) {
      input.style.borderColor = "#28a745"; // Green for valid length
    } else {
      input.style.borderColor = "#ccc"; // Default
    }
  }



  
  

    // Close menu if clicking anywhere else on the screen
   

    function toggleAreaMenu() {
        const menu = document.getElementById('areaMenu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }

    function updateAreas() {
        const checkboxes = document.querySelectorAll('#areaMenu input[type="checkbox"]');
        const display = document.getElementById('areaDisplayText');
        let selected = [];

        checkboxes.forEach((cb) => {
            if (cb.checked) {
                selected.push(cb.value);
            }
        });

        if (selected.length > 0) {
           display.innerText = selected.join(', ');
            display.style.color = '#333';
        } else {
            display.innerText = "Select Areas...";
            display.style.color = '#666';
        }
    }

    // Close menu if clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = document.getElementById('areaSelectBox').contains(event.target) || 
                            document.getElementById('areaMenu').contains(event.target);
        if (!isClickInside) {
            document.getElementById('areaMenu').style.display = 'none';
        }
    });

 function name(){
  alert("name must be filled")
 }
 function phone(){
  alert("phone number must be submited")
 }
function address1(){
  alert("address must be given")
}
function gender(){
  alert("gender must be given")
}
function status(){
  alert("status must be given")
}
function user_type(){
  alert("user tpe must be given")
}


const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

let tasks = []; // Temporary data storage

// 1. ADD (Create)
app.post('/tasks', (req, res) => {
    const newTask = {
        id: Date.now(), // Generate a simple ID
        title: req.body.title
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// 2. DELETE
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.status(204).send(); 
});

app.listen(3000, () => console.log('API running on port 3000'));
var phone = document.getElementById('phone');
var phoneInput = document.getElementById('phone');
// Myform.addEventListener('handleSubmit', function(event) {   
//       alert("Submit Cicked!");

//   if (phoneInput.value.trim() === "") {
//     event.preventDefault();
//     alert("Please fill out the name field!");
//     nameInput.focus();
//   }
// });
function handleSubmit(event)
{

    event.preventDefault();

   var gender="";
   if(document.getElementById("rdmale").selected) 
    {gender = "Male"}
   if(document.getElementById("rdfemale").selected) 
    {gender = "female"}
   if(document.getElementById("rdother").selected) 
    {gender = "other"}
  //fetching of values from UI o Javascript variables
  var name=document.getElementById("name").value
  var phone=document.getElementById("phone").value
  var address1=document.getElementById("address1").value
  var address2=document.getElementById("address2").value
  var state=document.getElementById("state").value
  var city=document.getElementById("city").value
  var pcode=document.getElementById("pcode").value
  var birthday=document.getElementById("birthday").value
  var statevisit=document.getElementById("statevisit").value
  var areaMenu=document.getElementById("areaMenu").value  
  var pincode=document.getElementById("pincode").value
  var status=document.getElementById("status").value
  var doj=document.getElementById("doj").value
  var user_type=document.getElementById("user_type").value
  var genderval = gender;
  //type,onboard date,address1,2, language


 var obj = { 
    name: name, 
    phone:phone,
    address1:address1,
    address2:address2,
    state:state,
    city:city,
    pcode:pcode,
    birthday:birthday,
    gender:genderval,
    statevisit:statevisit,
    areaMenu:areaMenu,
    pincode:pincode,
    status:status,
    doj:doj,
    type:user_type
};

var jsonString = JSON.stringify(obj);
console.log(jsonString);
const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            const timestamp = new Date().toISOString().split('T')[0];
            link.download = "registration_data.json";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            alert('✅ Data downloaded successfully!');
          
}


