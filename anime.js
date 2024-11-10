
    let logo1 = anime({
      targets: '.gif',
      keyframes: [
        50%{
          scale: 0.5,
          rotate: '2turn',
        },
        100%{
          scale: 1,
          rotate: '2turn',
        }
      ],
      duration: 2000,
      easing: "linear",
      autoplay: true, 
    })
    
    document.querySelector('.gif') .addEventListener('click', logo1.play)