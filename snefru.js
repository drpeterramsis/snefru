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