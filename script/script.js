document.addEventListener("DOMContentLoaded", function(){

    const menu = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if(menu){

        menu.addEventListener("click", function(){

            const aberto = nav.classList.toggle("open");

            menu.setAttribute(
                "aria-expanded",
                aberto
            );

        });

    }

    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".carousel-dot");
    const prev = document.querySelector(".carousel-prev");
    const next = document.querySelector(".carousel-next");

    let current = 0;
    let timer;

    function showSlide(index){

        if(!track || !slides.length){
            return;
        }

        current = (index + slides.length) % slides.length;

        track.style.transform =
            "translateX(-" + (current * 100) + "%)";

        dots.forEach(function(dot, i){

            dot.classList.toggle(
                "active",
                i === current
            );

        });

    }

    function restartCarousel(){

        clearInterval(timer);

        if(slides.length > 1){

            timer = setInterval(function(){

                showSlide(current + 1);

            }, 7000);

        }

    }

    if(track){

        if(prev){

            prev.addEventListener("click", function(){

                showSlide(current - 1);
                restartCarousel();

            });

        }

        if(next){

            next.addEventListener("click", function(){

                showSlide(current + 1);
                restartCarousel();

            });

        }

        dots.forEach(function(dot, i){

            dot.addEventListener("click", function(){

                showSlide(i);
                restartCarousel();

            });

        });

        showSlide(0);
        restartCarousel();

    }

    const form = document.querySelector(".contact-form");
    const message = document.querySelector(".form-message");

    if(form && message){

        form.addEventListener("submit", function(event){

            event.preventDefault();

            const nome =
                form.querySelector("[name=nome]").value.trim();

            const email =
                form.querySelector("[name=email]").value.trim();

            const texto =
                form.querySelector("[name=mensagem]").value.trim();

            if(!nome || !email || !texto){

                message.textContent =
                    "Preencha todos os campos.";

                message.className =
                    "form-message error";

                return;
            }

            const emailValido =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailValido.test(email)){

                message.textContent =
                    "Introduza um email válido.";

                message.className =
                    "form-message error";

                return;
            }

            message.textContent =
                "Mensagem validada. Obrigado pelo contacto!";

            message.className =
                "form-message success";

            form.reset();

        });

    }

    const progress =
        document.querySelector(".progress-fill");

    if(progress){

        setTimeout(function(){

            progress.style.width =
                progress.dataset.progress + "%";

        }, 250);

    }

    const reveals =
        document.querySelectorAll(".reveal");

    if("IntersectionObserver" in window){

        const observer =
            new IntersectionObserver(
                function(entries){

                    entries.forEach(function(entry){

                        if(entry.isIntersecting){

                            entry.target.classList.add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold:.12
                }
            );

        reveals.forEach(function(item){

            observer.observe(item);

        });

    }else{

        reveals.forEach(function(item){

            item.classList.add("visible");

        });

    }

});