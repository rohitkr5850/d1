// Function to count words
function countWords() {
    const text = document.getElementById("inputText").value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    document.getElementById("result").innerText = Word count: ${words.length};
  }
  
  // Function to transform text to lowercase
  function toLowerCase() {
    const text = document.getElementById("inputText").value;
    document.getElementById("inputText").value = text.toLowerCase();
  }
  
  // Function to transform text to uppercase
  function toUpperCase() {
    const text = document.getElementById("inputText").value;
    document.getElementById("inputText").value = text.toUpperCase();
  }
  
  // Function to find a substring
  function findSubstring() {
    const text = document.getElementById("inputText").value;
    const substring = document.getElementById("substring").value;
    const found = text.includes(substring);
    document.getElementById("result").innerText = found
      ? "${substring}" found in the text.
      : "${substring}" not found in the text.;
  }