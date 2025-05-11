// const roleSelect = document.getElementById("roleSelect");
   //   const guides = document.querySelectorAll(".guide");
 
//     roleSelect.addEventListener("change", () => {
  //      guides.forEach(g => g.classList.remove("visible"));
 //     const selected = roleSelect.value;
 //     if (selected) {
   //     document.getElementById(selected).classList.add("visible");
 //     }
 //   });

const roleButtons = document.querySelectorAll("#roleButtons .role-btn");
const guides = document.querySelectorAll(".guide");

roleButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove visible from all guides
    guides.forEach(g => g.classList.remove("visible"));

    // Get the selected value from data-value attribute
    const selected = button.getAttribute("data-value");

    // Highlight selected button (optional)
    roleButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    // Show the guide matching the selected value
    if (selected) {
      const target = document.getElementById(selected);
      if (target) target.classList.add("visible");
    }
  });
});





    document.querySelectorAll("input[type='checkbox']").forEach((checkbox, index) => {
      const saved = localStorage.getItem("check_" + index);
      if (saved === "true") {
        checkbox.checked = true;
        checkbox.closest("label").classList.add("checked");
      }

      checkbox.addEventListener("change", () => {
        localStorage.setItem("check_" + index, checkbox.checked);
        checkbox.closest("label").classList.toggle("checked", checkbox.checked);
      });
    });

    


     // Save all text input changes globally to localStorage
  document.querySelectorAll('input[type="text"]').forEach(input => {
    const key = `snefru_input_${input.id || input.name}`;
    
    // Load saved value on page load
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) input.value = savedValue;

    // Save on change
    input.addEventListener('input', () => {
      localStorage.setItem(key, input.value);
    });
  });


  const roleColors = {
    marketplace: "grey",
    strategic: "#c0392b",
    builders: "#e67e22",
    farmers: "#27ae60",
    workers: "rgb(88, 4, 4)",
    riddles: "#2980b9"
  };

  const buttons = document.querySelectorAll(".role-btn");
  const roleSections = document.querySelectorAll(".guide.section");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedRole = button.dataset.value;
      const selectedColor = roleColors[selectedRole];

      // Update global CSS variable
      document.documentElement.style.setProperty('--primary', selectedColor);

      // Set hidden field value
      document.getElementById("selectedRole").value = selectedRole;

      // Hide all sections
      roleSections.forEach(section => section.style.display = "none");
          // Remove the 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Add the 'selected' class to the clicked button
    button.classList.add('selected');

      // Show selected section and recolor its headers
      const selectedSection = document.getElementById(selectedRole);
      if (selectedSection) {
        selectedSection.style.display = "block";
        selectedSection.querySelectorAll("h2, h3").forEach(el => {
          el.style.color = selectedColor;
        });
      }
    });
  });

