document.addEventListener("turbolinks:load", () => {
  const body = document.querySelector("body");
  const dropdown = document.querySelector(".js-dropdown-user-target");
  const dropdownList = document.querySelector(".dropdown-list");

  dropdown.addEventListener("click", e => e.preventDefault());

  body.addEventListener("click", e => {
    if (e.target.closest(".dropdown")) {
      dropdownList.classList.remove("hidden");
    } else {
      dropdownList.classList.add("hidden");
    }
  });
});
