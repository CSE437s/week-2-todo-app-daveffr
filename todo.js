// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the first form (user name)
    document.getElementById('name').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting
      const userName = document.getElementById('fname').value;
      document.getElementById('todo-list-title').innerHTML = '<h2>' + userName + "'s To-Do List</h2>";
    });
  
    // Add event listener to the second form (activity)
    document.getElementById('todo-list-activities').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting
      let activity = document.getElementById('activities').value;
      document.getElementById('items').innerHTML += '<li>' + activity + '</li>';
    });
  });
  