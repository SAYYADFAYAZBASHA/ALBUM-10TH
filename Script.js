document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const downloadBtn = document.getElementById("downloadBtn");

    const images = document.querySelectorAll(".album-grid .photo-item img");

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block"; 
            modalImg.src = this.src; 
            captionText.innerHTML = this.alt; 
            downloadBtn.href = this.src; 
        });
    });

    const span = document.getElementsByClassName("close")[0];

    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});