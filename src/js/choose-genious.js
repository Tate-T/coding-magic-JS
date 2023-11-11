
function headerModal() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
  
  // header
  // main
  const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
  ];
  
  const filters = document.querySelectorAll(".sort-list-item");
  const boxes = document.querySelectorAll(".scientist");
  
  let currentFilterIndex = -1;
  let isFiltering = false;
  
  function clearBoxes() {
      boxes.forEach(box => box.innerHTML = "");
  }
  
  function addRotating() {
      boxes.forEach(box => box.style.transform = "scaleX(-1)");
  }
  
  function removeRotating() {
      boxes.forEach(box => box.style.transform = "scaleX(1)");
  }
  
  function applyFilter(filterFunction, index) {
      if (isFiltering) return;
  
      isFiltering = true;
      if (currentFilterIndex !== -1) {
          filters[currentFilterIndex].style.color = "white";
      }
  
      currentFilterIndex = index;
  
      addRotating();
      setTimeout(() => {
          clearBoxes();
          scientists.filter(filterFunction).forEach((scientist, boxIndex) => {
              boxes[boxIndex].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
          });
          removeRotating();
          isFiltering = false;
      }, 1250);
      
      filters[index].style.color = "red";
  }
  
  filters.forEach((filter, index) => {
      filter.addEventListener("click", () => {
          applyFilter(filterFunctions[index], index);
      });
  });
  
  
  
  const filterFunctions = [
      scientist => scientist.born >= 1801 && scientist.born <= 1900,
      (a, b) => a.name.localeCompare(b.name),
      (a, b) => (a.dead - a.born) - (b.dead - b.born),
      () => scientists.reduce((latest, current) => (latest.born > current.born) ? latest : current),
      scientist => scientist.name === "Albert" && scientist.surname === "Einstein",
      scientist => scientist.surname.charAt(0) === "C",
      scientist => scientist.name.charAt(0) !== "A",
      (a, b) => (a.dead - a.born) - (b.dead - b.born),
  ];
  
  