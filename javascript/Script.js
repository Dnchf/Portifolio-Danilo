document.addEventListener("DOMContentLoaded", () => {
    const sobreMim = document.querySelector("#sobre-mim");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                sobreMim.classList.add("show");
            } else {
                sobreMim.classList.remove("show");
            }
        },
        {
            threshold: 0.3
        }
    );

    observer.observe(sobreMim);
});
