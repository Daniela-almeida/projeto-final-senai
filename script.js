gsap.registerPlugin(ScrollTrigger);

gsap.from("#frase_motivacional" , {
    // duração da animação
    duration: 0.8,
    // opacidade que vai começar a animação
    opacity: 0,
    // posição do y que vai começar os elementos na animação
    y: -150,
    // tempo entre a animação dos elementos com a mesma classe
    stagger: 0.3
});

gsap.from(".título_sobre" ,{
    duration: 0.8,
    opacity: 0,
    x: 250,
});

gsap.from(".sobre" ,{
    duration: 0.8,
    opacity: 0,
    x: 250,
});

gsap.from(".about" ,{
    duration: 0.8,
    opacity: 0,
    x: 250,
});

gsap.from("#servicos", {
    duration: 0.8,
    opacity: 0,
    x: -150,
    stagger: 0.4,
    delay: 1.2
});

gsap.from(".card" , {
    ScrollTrigger: ".animate-final" , 
    duration: 0.8,
    opacity: 0,
    y: -200,
    stagger: 0.5,
    delay: 0.2,
});

gsap.from(".trabalhos" ,{
    duration: 0.7,
    opacity: 0,
    x: 250,
});

gsap.from(".inicio_secao_trabalhos" ,{
    duration: 0.7,
    opacity: 0,
    x: 100,
});

gsap.from(".rodape" ,{
    duration: 0.8,
    opacity: 0,
    y: 250,
});

gsap.from(".btn" ,{
    duration: 0.8,
    opacity: 0,
    y: 250,
});

gsap.from(".mensagem" ,{
    duration: 0.8,
    opacity: 0,
    x: 250,
});






