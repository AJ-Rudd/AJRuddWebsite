var info = JSON.parse('{"firstname":"AJ","lastname":"Rudd","school":"UMD","study":"HCIM"}'); 

var nameInput, yourName, newText, target; 
nameInput = document.getElementById('userName');
yourName = document.getElementById('yourName');


function writeLabelTwo(e) {                         // Declare function
    if (!e) {                                      // If event object not present
      e = window.event;                            // Use IE5-8 fallback
    }
    target = e.target || e.srcElement;             // Get target of event
    newText = target.value;                    // Value of that element
    nameInput.textContent = "Hello" + newText;            // Update note text
  }
  
  yourName.addEventListener('input', writeLabelTwo, false);
