import "./App.css";

function App() {
  const confettiAmount = 100;

  function throwConfetti(btn) {
    
    let df = document.createDocumentFragment();
    for (let i=0; i<confettiAmount; i++) {
      let c = document.createElement("i");
      c.style.cssText = `
        transform: translate3d(${(random(500) - 250)}px, ${(random(225) - 150)}px, 0)
        rotate(${ random(360) }deg); 
        background: hsla(${random(360)},100%,50%,1);
      `;
      df.appendChild(c);
      setTimeout(()=> {
        c.remove();
      }, 2000)  
    } 
    btn.appendChild(df);
  
  }
  
  function random(max){
    return Math.random() * (max - 0) + 0;
  }

  return (
    <>
      <h1>HAPPY BIRTHDAY</h1>
      <button className="clickBox" onClick={(e) => throwConfetti(e.currentTarget)}></button>
    </>
  );
}

export default App;
