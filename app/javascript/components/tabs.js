document.addEventListener("turbolinks:load", () => {
  const element = document.getElementById("nav-tab");
  const text = document.querySelector(".text");
  const imageVideo = document.querySelector(".image_video");
  const url = document.querySelector(".url");

  // user profile
  const submissions = document.getElementById("profile_submissions");
  const comments = document.getElementById("profile_comments");

  if (imageVideo) {
    imageVideo.classList.add("hidden");
  }
  if (url) {
    url.classList.add("hidden");
  }

  if (comments != null) {
    comments.classList.add("hidden");
  }

  function onTabClick(event) {
    const activeTabs = document.querySelectorAll(".active");

    activeTabs.forEach(at => {
      at.classList.toggle("active");
    });

    event.target.parentElement.classList.add("active");
    event.preventDefault();
  }

  function determineType(event) {
    const types = {
      text: "text",
      image_video: "image_video",
      url: "url",
      submissions: "profile_submissions",
      comments: "profile_comments"
    };

    // text
    if (event.target.parentElement.dataset.tab == types.text) {
      text.classList.remove("hidden");
      imageVideo.classList.add("hidden");
      url.classList.add("hidden");

      url.querySelector('input[type="text"]').value = "";
    }

    // image/video
    if (event.target.parentElement.dataset.tab == types.image_video) {
      imageVideo.classList.remove("hidden");
      text.classList.add("hidden");
      url.classList.add("hidden");

      text.querySelector("textarea").value = "";
      url.querySelector('input[type="text"]').value = "";
    }

    if (event.target.parentElement.dataset.tab == types.url) {
      url.classList.remove("hidden");
      imageVideo.classList.add("hidden");
      text.classList.add("hidden");

      text.querySelector("textarea").value = "";
    }

    // Profile Submissions
    if (event.target.parentElement.dataset.tab == types.submissions) {
      submissions.classList.remove("hidden");
      comments.classList.add("hidden");
    }

    // Profile Comments
    if (event.target.parentElement.dataset.tab == types.comments) {
      comments.classList.remove("hidden");
      submissions.classList.add("hidden");
    }
  }

  if (element) {
    element.addEventListener("click", e => {
      onTabClick(e);
      determineType(e);
    });
  }
});
