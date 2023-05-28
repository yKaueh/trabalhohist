function smoothScroll(){
    document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.navegacao li a');
    
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) =>{
            e.preventDefault();
        
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
}