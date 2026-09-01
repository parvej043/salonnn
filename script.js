/* =====================================================
   THE INVITE UNISEX SALON
   PREMIUM JAVASCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       VARIABLES
    ========================= */

    const WHATSAPP_NUMBER = "917860314702";


    /* =========================
       PRELOADER
    ========================= */

    const preloader =
        document.getElementById("preloader");


    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 700);

    });


    /* =========================
       HEADER SCROLL
    ========================= */

    const header =
        document.getElementById("header");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


    /* =========================
       SMOOTH ANCHOR
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header.offsetHeight;

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({

                top: position,

                behavior: "smooth"

            });

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =========================
       SERVICE FILTER
    ========================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const services =
        document.querySelectorAll(".service-item");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            const filter =
                button.dataset.filter;


            services.forEach(service => {

                const category =
                    service.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    service.classList.remove("hide");

                } else {

                    service.classList.add("hide");

                }

            });

        });

    });


    /* =========================
       WHATSAPP DIRECT BUTTONS
    ========================= */

    const whatsappButtons =
        document.querySelectorAll(".whatsapp-direct");


    whatsappButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const message =
                `Hello The Invite Unisex Salon 👋

I would like to know more about your salon services.

Please share the available services and appointment timings.

Thank you.`;

            openWhatsApp(message);

        });

    });


    /* =========================
       SERVICE BOOK BUTTON
    ========================= */

    const serviceButtons =
        document.querySelectorAll(".service-book");


    serviceButtons.forEach(button => {

        button.addEventListener("click", () => {

            const service =
                button.dataset.service;


            const serviceSelect =
                document.getElementById("service");


            serviceSelect.value =
                service;


            const booking =
                document.getElementById("booking");


            booking.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /* =========================
       BOOKING FORM
    ========================= */

    const bookingForm =
        document.getElementById("bookingForm");


    bookingForm.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const phone =
            document.getElementById("phone").value.trim();


        const service =
            document.getElementById("service").value;


        const date =
            document.getElementById("date").value;


        const time =
            document.getElementById("time").value;


        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone || !service) {

            alert(
                "Please enter your name, phone number and select a service."
            );

            return;

        }


        const formattedDate =
            date
                ? formatDate(date)
                : "Not specified";


        const formattedTime =
            time
                ? formatTime(time)
                : "Not specified";


        const whatsappMessage =

`Hello The Invite Unisex Salon 👋

I would like to book an appointment.

👤 Name: ${name}

📞 Phone: ${phone}

✂️ Service: ${service}

📅 Preferred Date: ${formattedDate}

⏰ Preferred Time: ${formattedTime}

📝 Message:
${message || "No additional message."}

Please confirm my appointment.

Thank you!`;


        openWhatsApp(whatsappMessage);

    });


    /* =========================
       WHATSAPP FUNCTION
    ========================= */

    function openWhatsApp(message) {

        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* =========================
       DATE FORMAT
    ========================= */

    function formatDate(date) {

        const dateObject =
            new Date(date + "T00:00:00");


        return dateObject.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

    }


    /* =========================
       TIME FORMAT
    ========================= */

    function formatTime(time) {

        const [hours, minutes] =
            time.split(":");


        const date =
            new Date();


        date.setHours(
            Number(hours),
            Number(minutes)
        );


        return date.toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    }


    /* =========================
       DATE MINIMUM
    ========================= */

    const dateInput =
        document.getElementById("date");


    if (dateInput) {

        const today =
            new Date();


        const year =
            today.getFullYear();


        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");


        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        dateInput.min =
            `${year}-${month}-${day}`;

    }


    /* =========================
       GALLERY LIGHTBOX
    ========================= */

    const galleryCards =
        document.querySelectorAll(".gallery-card");


    const lightbox =
        document.getElementById("lightbox");


    const lightboxImage =
        document.getElementById("lightboxImage");


    const lightboxClose =
        document.getElementById("lightboxClose");


    galleryCards.forEach(card => {

        card.addEventListener("click", () => {

            const image =
                card.dataset.image;


            lightboxImage.src =
                image;


            lightbox.classList.add("active");


            document.body.classList.add(
                "no-scroll"
            );

        });

    });


    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.classList.remove(
            "no-scroll"
        );

    }


    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );


    /* =========================
       TESTIMONIAL SLIDER
    ========================= */

    const reviews = [

        {
            text:
                `"The experience feels completely different. You come in for a haircut and leave feeling like the best version of yourself."`,

            name:
                "— THE INVITE GUEST"
        },

        {
            text:
                `"Beautiful atmosphere, professional service and attention to detail. Exactly the kind of salon experience I was looking for."`,

            name:
                "— THE INVITE GUEST"
        },

        {
            text:
                `"The team takes time to understand what you actually want. The final result feels personal rather than generic."`,

            name:
                "— THE INVITE GUEST"
        }

    ];


    let currentReview = 0;


    const reviewText =
        document.getElementById(
            "testimonialText"
        );


    const reviewName =
        document.getElementById(
            "testimonialName"
        );


    const dots =
        document.querySelectorAll(".dot");


    function showReview(index) {

        currentReview =
            (index + reviews.length) %
            reviews.length;


        reviewText.style.opacity = "0";


        setTimeout(() => {

            reviewText.textContent =
                reviews[currentReview].text;


            reviewName.textContent =
                reviews[currentReview].name;


            reviewText.style.opacity = "1";


        }, 200);


        dots.forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    "active",
                    dotIndex === currentReview
                );

            }
        );

    }


    document
        .getElementById("prevReview")
        .addEventListener(
            "click",
            () => {

                showReview(
                    currentReview - 1
                );

            }
        );


    document
        .getElementById("nextReview")
        .addEventListener(
            "click",
            () => {

                showReview(
                    currentReview + 1
                );

            }
        );


    /* =========================
       CURRENT YEAR
    ========================= */

    document.getElementById("year").textContent =
        new Date().getFullYear();


});