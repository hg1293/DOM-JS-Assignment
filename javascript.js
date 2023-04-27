function changeDirection() {
    document.getElementById("boxes").style.flexDirection = "column";
  }
  
  const heading = document.getElementById("heading");
  heading.addEventListener("mouseover", function handleMouseOver() {
    heading.style.color = "red";
  });
  heading.addEventListener("mouseout", function handleMouseOut() {
    heading.style.color = "black";
  });
  
  const content = document.getElementById("content");
  function replaceText() {
    content.innerHTML = "Welcome to Elevation academy";
  }
  
  let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    let period = "AM";
    if (hours === 0) {
      hours = 12;
    } else if (hours >= 12) {
      hours -= 12;
      period = "PM";
    }
  
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
  
    let clockHours = `${hours}`;
    let clockMinutes = `${minutes}`;
    let clockSeconds = `${seconds}`;
    let clockPeriod = `${period}`;
  
    document.getElementById("clock-hours").innerHTML = clockHours;
    document.getElementById("clock-minutes").innerHTML = clockMinutes;
    document.getElementById("clock-seconds").innerHTML = clockSeconds;
    document.getElementById("clock-period").innerHTML = clockPeriod;
    setTimeout(clock, 1000);
  };
  
  clock();
  
  const displayYear = () => {
    let selectedYear = document.getElementById("year");
    let year = null;
    selectedYear.addEventListener("change", function handleChange(event) {
      year = selectedYear.options[selectedYear.selectedIndex].value;
    });
  
    let showYear = document.getElementById("showYear");
    showYear.addEventListener("click", function handleChange(event) {
      document.getElementById("displayYear").innerHTML = year;
    });
  };
  