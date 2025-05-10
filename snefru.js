const roleSelect = document.getElementById("roleSelect");
    const guides = document.querySelectorAll(".guide");

    roleSelect.addEventListener("change", () => {
      guides.forEach(g => g.classList.remove("visible"));
      const selected = roleSelect.value;
      if (selected) {
        document.getElementById(selected).classList.add("visible");
      }
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