
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");


tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.dataset.tab;
    tabContents.forEach(content => {
      content.classList.remove("active");
      if (content.id === target) content.classList.add("active");
    });
  });
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("interview")) {
    const card = e.target.closest(".job-card");
    document.getElementById("interview").appendChild(card);
    updateCounts();
    updateEmptyStates();
  }
  if (e.target.classList.contains("rejected")) {
    const card = e.target.closest(".job-card");
    document.getElementById("rejected").appendChild(card);
    updateCounts();
    updateEmptyStates();
  }
});


function updateCounts() {
  totalCount.textContent = document.querySelectorAll("#all .job-card").length;
  interviewCount.textContent = document.querySelectorAll("#interview .job-card").length;
  rejectedCount.textContent = document.querySelectorAll("#rejected .job-card").length;
}


function updateEmptyStates() {
  ["interview","rejected"].forEach(id => {
    const tab = document.getElementById(id);
    const empty = tab.querySelector(".empty-state");
    const cards = tab.querySelectorAll(".job-card");
    empty.style.display = cards.length === 0 ? "block" : "none";
  });
}
