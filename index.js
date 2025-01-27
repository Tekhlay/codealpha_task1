const calculateAge = () => {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1;
  const year = parseInt(document.getElementById("year").value);

  if (isNaN(day) && isNaN(month) && isNaN(year)) {
    document.getElementById("error").innerHTML =
      "Please fill in all the fields";
    return;
  } else if (isNaN(day)) {
    document.getElementById("error").innerHTML = "Please enter a valid day";
  } else if (isNaN(month)) {
    document.getElementById("error").innerHTML = "Please enter a valid month";
  } else if (isNaN(year)) {
    document.getElementById("error").innerHTML = "Please enter a valid year";
  }

  const birthDate = new Date(year, month, day);
  const currentDate = new Date();

  if (birthDate > currentDate) {
    document.getElementById("showAge").innerHTML = "Invalid date of birth";
    return;
  }

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  document.getElementById("showAge").innerHTML = `Your age is ${age}`;
};
