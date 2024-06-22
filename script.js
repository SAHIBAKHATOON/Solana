// document.addEventListener('DOMContentLoaded', (event) => {
//     const toggleButton = document.getElementById('darkModeToggle');
//     const body = document.body;

//     const setButtonText = () => {
//       if (body.classList.contains('dark-mode')) {
//         toggleButton.textContent = 'dark';
//       } else {
//         toggleButton.textContent = "light" ;
//       }
//     };

  
//     if (localStorage.getItem('mode') === 'dark') {
//       body.classList.add('dark-mode');
//     } else {
//       body.classList.add('light-mode');
//     }

    
//     setButtonText();

//     toggleButton.addEventListener('click', () => {
//       if (body.classList.contains('light-mode')) {
//         body.classList.remove('light-mode');
//         body.classList.add('dark-mode');
//         localStorage.setItem('mode', 'dark');
//       } else {
//         body.classList.remove('dark-mode');
//         body.classList.add('light-mode');
//         localStorage.setItem('mode', 'light');
//       }
//       setButtonText();
//     });
//   });

   const setTheme = theme => document.documentElement.className = theme;


 
