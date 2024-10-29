

function menu(){
    const content = document.getElementById('mobile-nav'); // Define 'content' properly
    if (content) {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    } else {
      console.error("Element with id 'content' not found");
    }
}
    
