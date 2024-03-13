window.onclick = function (event) {
    if (!event.target.matches('.dropmenu-engine')) {
        var dropdowns = document.getElementsByClassName("listed-dropmenu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function openEngineMenu(event) {
    document.querySelectorAll('.listed-dropmenu').forEach(function (el) {
        el.classList.remove("show");
    });
    event.target.nextElementSibling.classList.toggle("show");
    event.stopPropagation();
}

function eventStopPagation(event) {
    event.stopPropagation();
}

function closeModalPopup(val) {
    document.getElementById(val).classList.remove('show');
}

function openListedTyoe(val, type) {
    document.getElementById("proplisttyp").innerHTML = val

  if(type === 'popup'){ 
    setTimeout(()=>{                   
        document.getElementById("CustomerInfo").classList.add('show');
    }, 500);
  }
}
