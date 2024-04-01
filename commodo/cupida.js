// Assuming 'message' is a valid DOM element
message.classList.remove('hidden');
message.style.display = 'block'; // Ensures the element is visible

// Additional optimization could include checking if the class exists before removing
if (message.classList.contains('hidden')) {
  message.classList.remove('hidden');
}
