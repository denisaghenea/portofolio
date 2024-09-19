window.addEventListener('resize', function() {
    checkOrientation();
});

document.addEventListener('DOMContentLoaded', function() {
    checkOrientation(); // Run on page load as well
});

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // Portrait mode
        document.querySelector('.blur-background').style.display = 'block';
        document.querySelector('.message-container').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        // Landscape mode or desktop
        document.querySelector('.blur-background').style.display = 'none';
        document.querySelector('.message-container').style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}


// Parallax Effect for Planets
document.addEventListener("mousemove", function(e) {
    document.querySelectorAll(".planet").forEach(function(planet) {
        const speed = planet.getAttribute("data-value");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        planet.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Autotype Settings
var typed = new Typed(".auto-type", {
    strings : ["CAD Designer/Technician", "Manager", "Developer"],
    typeSpeed : 150,
    backSpeed: 150,
    loop: true,
    loopCount: Infinity,
})

var typed = new Typed(".auto-typing", {
    strings: ["This is My Portofolio", "Welcome..."],
    typeSpeed: 150,
    backSpeed: 50,
    looped: true,
})

// Gallery
var images = document.querySelectorAll("#gallery .tile img");

images.forEach(function(img) {
    img.addEventListener('click', function() {
        // Check if the image is already clicked (full-screen)
        if (this.classList.contains('clicked')) {
            // Remove full-screen view on second click
            this.classList.remove('clicked');
        } else {
            // Remove 'clicked' from all images (in case another image is already in full-screen)
            images.forEach(function(img) { img.classList.remove('clicked'); });

            // Add 'clicked' class to the clicked image to make it full-screen
            this.classList.add('clicked');
        }
    });

    // Mouseleave event to remove the 'clicked' class when mouse leaves the image area
    img.addEventListener('mouseleave', function() {
        this.classList.remove('clicked');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form input values
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    // Construct the mailto link
    const mailtoLink = `mailto:gheneadenisa2016@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
});

