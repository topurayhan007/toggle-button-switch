const switch1 = document.getElementById("check");

const switch2 = document.getElementById("check2");

function checkUncheck(elem) {
  console.log(switch1.checked);
  console.log(switch2.checked);
  console.log(elem.id);

  if (elem.id === "check" && !switch1.checked && !switch2.checked) {
    switch1.checked = false;
    switch2.checked = true;
  } else if (elem.id === "check" && switch1.checked && switch2.checked) {
    switch1.checked = true;
    switch2.checked = false;
  } else if (elem.id === "check2" && !switch1.checked && !switch2.checked) {
    switch2.checked = false;
    switch1.checked = true;
  } else if (elem.id === "check2" && switch1.checked && switch2.checked) {
    switch2.checked = true;
    switch1.checked = false;
  }
}
