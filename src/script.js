function geradordeCor () {
  const chars ='0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += chars.charAt(Math.floor(Math.random()* chars.length));
    console.log(color);

  }
  return color;
}

/* ==================================================== Gerador de cores + CapturarStorage ================================================================================= */


function geradorButton() {
  let corSalva = [];
  for (let i = 0; i < 4; i++) {
    let div_color = document.getElementById(`color-${i + 1}`);
    let cor = geradordeCor();
    div_color.style.backgroundColor = cor;
    corSalva.push(cor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(corSalva));
}

/* =========================================================================== Carregar Storage ================================================================================= */

window.addEventListener('load', () => {
  let corSalva = JSON.parse(localStorage.getItem('colorPalette'));
  if (corSalva) {

    for (let i = 0; i < 4; i++) {
      let div_color = document.getElementById(`color-${i + 1}`);
      div_color.style.backgroundColor = corSalva[i - 1];
    }
  }
});

/* ============================================================================= Gerar Divs ======================================================================================= */

            const viewerBoard = document.querySelector('#pixel-board');

            const generateBoard = () => {
              for (let row = 0; row < 5; row += 1) {
                const rowDiv = document.createElement('div');

                for (let index = 0; index < 5; index += 1) {
                  const div = document.createElement('div');
                  rowDiv.appendChild(div);
                  div.classList.add('pixel');
                }
                viewerBoard.style.backgroundColor = "";

                viewerBoard.appendChild(rowDiv);
              }
            }

            generateBoard();

/* ======================================================================== Add e Remove =========================================================================== */

          const colors = document.querySelectorAll('.color');

          function selectColor(event) {
            colors.forEach(color => {
              color.classList.remove('selected');
            });

            const selectedColor = event.target;
            selectedColor.classList.add('selected');
          }

          colors.forEach(color => {
            color.addEventListener('click', selectColor);
          });


/* ============================================================================================ Captura ======================================================================================================= */  


        function capturandoCor() {
          const selecionarCor = document.querySelector('.selected');
          const pcStyle = window.getComputedStyle(selecionarCor);
          const backgroundColor = pcStyle.getPropertyValue('background-color');
          return backgroundColor;
        }


/* ============================================================================================ Pintar ======================================================================================================= */ 

      function imprimindoCor(event) {
        const imprimirClick = event.target;
        if (imprimirClick.classList.contains('pixel')) {
          const selecionarCor = capturandoCor();
          imprimirClick.style.backgroundColor = selecionarCor;
        }
              let coletandoDesenho = [];
              const pixels = document.querySelectorAll('.pixel');
              for (let i = 0; i < pixels.length; i++) {
                coletandoDesenho.push(pixels[i].style.backgroundColor);
              }
              localStorage.setItem('pixelBoard', JSON.stringify(coletandoDesenho));

            }
            document.addEventListener('click', imprimindoCor);
      
/* ========================================================================================== reload Color ================================================================================================= */     
     
   

/* ================================================================================== remover selected =========================================================================================================*/

   

      function removeColor(event) {
        const element = document.querySelectorAll('.pixel');
        for (let i = 0; i < element.length; i++) {
          element[i].classList.remove('.pixel');
          element[i].style.backgroundColor = 'white';
        }
      }


    /* ================================================================================ Button VQV ======================================================================================================== */



    function criarDivs() {
      const tamanhoQuadro = parseInt(document.getElementById("board-size").value);
    
      if (tamanhoQuadro >= 5) {
        const container = document.getElementById("pixel-board");
        container.innerHTML = "";
        const limitedContador = Math.min(tamanhoQuadro, 50);
   
        for (let i = 0; i < limitedContador; i++) {
          const div = document.createElement("div");
          div.classList.add("pixel1");
    
          for (let j = 0; j < limitedContador; j++) {
            const div2 = document.createElement("div");
            div2.classList.add("pixel");
            div.appendChild(div2);
          }
          container.appendChild(div);

        }
        localStorage.setItem('boardDivs', container.innerHTML);
        localStorage.setItem('boardSize', JSON.stringify(limitedContador));
      } else {
        alert('Board inválido!');
      }
    }
    
    window.addEventListener('load', () => {
      let savedDivs = localStorage.getItem('boardDivs');
      let tamanhoSalvo = JSON.parse(localStorage.getItem('boardSize'));
      if (savedDivs && tamanhoSalvo) {
        const container = document.getElementById('pixel-board');
        container.innerHTML = savedDivs;
        document.getElementById('board-size').value = tamanhoSalvo;
      }
    });


    window.addEventListener('load', () => {
      let desenhoSalvo = JSON.parse(localStorage.getItem('pixelBoard'));
      if (desenhoSalvo) {
        const pixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixels.length; i++) {
          pixels[i].style.backgroundColor = desenhoSalvo[i];
        }
      }
    });
    
    
  

   
  
    
    
  

   
  