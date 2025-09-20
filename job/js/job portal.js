document.getElementById("jobForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form data
  const job = {
    title: document.getElementById("title").value,
    company: document.getElementById("company").value,
    location: document.getElementById("location").value,
    type: document.getElementById("type").value,
    salary: document.getElementById("salary").value,
    description: document.getElementById("description").value,
  };

  console.log("Job Posted:", job);

  // Show success message
  document.getElementById("successMsg").style.display = "block";

  // Clear form
  document.getElementById("jobForm").reset();
});
