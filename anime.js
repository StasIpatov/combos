
  
    let logo1 = anime({
      targets: '.gif',
      keyframes: [
        {
          scale: 1.2,
        },
        {
          scale: 1,
        }
      ],
      duration: 2000,
      // easing: "linear",
      autoplay: false, 
    })
    
    document.querySelector('.gif') .addEventListener('click', logo1.play)