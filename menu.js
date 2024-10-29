// JavaScript function for menu appear for small screen sizes.
function menu() {
    const content = document.getElementById('mobile-nav'); 
    if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    } else {
        console.error("Element with id 'content' not found");
    }
}

