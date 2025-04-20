// Change text dynamically
document.getElementById('changeTextBtn').addEventListener('click', () => {
    const paragraph = document.getElementById('dynamic-text');
    paragraph.textContent = 'The text has been changed!';
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('toggleStyleBtn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.classList.toggle('highlight');
  });
  
  // Add or remove an element
  document.getElementById('addElementBtn').addEventListener('click', () => {
    const container = document.getElementById('elementContainer');
    const newDiv = document.createElement('div');
    newDiv.textContent = 'I am a new element!';
    newDiv.className = 'highlight';
    newDiv.id = 'newElement';
    container.appendChild(newDiv);
  });
  
  document.getElementById('removeElementBtn').addEventListener('click', () => {
    const element = document.getElementById('newElement');
    if (element) {
      element.remove();
    }
  });  