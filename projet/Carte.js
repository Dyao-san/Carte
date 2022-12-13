
function formulaire()
  {
    var e = document.getElementById('entree').value;
    switch (e)
    {
      case 'salade': e = 7;
      break;
      case 'carotte' : e = 4;
      break;
      case 'tomate' : e = 5;
      break;
    }

    var p = document.getElementById('plat').value;
    switch (p)
    {
      case 'pizza': p = 7;
      break;
      case 'burger' : p = 4;
      break;
      case 'lasagne' : p = 5;
    }
    
    var d = document.getElementById('dessert').value;
    switch (d)
    {
      case 'glace': d = 7;
      break;
      case 'bubbel tea' : d = 4;
      break;
      case 'tiramisu' : d = 5;
    }

    t = e + p + d;
    
    const AFF = document.getElementById("AFF")
    AFF.textContent = document.getElementById('entree').value + " : " + e +" €";

    const AFF1 = document.getElementById("AFF1")
    AFF1.textContent = document.getElementById('plat').value + " : " + p +" €";

    const AFF2 = document.getElementById("AFF2")
    AFF2.textContent = document.getElementById('dessert').value + " : " + d +" €";

    const AFF3 = document.getElementById("AFF3")
    AFF3.textContent = "Total : " + t +" €";
  }
