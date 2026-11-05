
/* Keep welcome dismissal independent from the main app initialization. */
(function(){
  function dismissWelcome(){
    var screen=document.getElementById('welcomeScreen');
    if(!screen || screen.hidden) return;
    var skip=document.getElementById('welcomeSkip');
    if(skip && skip.checked){try{localStorage.setItem('tryToDoSkipWelcome','yes')}catch(e){}}
    screen.classList.add('is-hidden');
    screen.style.pointerEvents='none';
    window.setTimeout(function(){screen.hidden=true;screen.style.display='none';},450);
  }
  document.addEventListener('click',function(e){
    if(e.target && (e.target.id==='welcomeStart' || e.target.closest && e.target.closest('#welcomeStart'))){e.preventDefault();dismissWelcome();}
    else if(e.target && e.target.id==='welcomeScreen'){dismissWelcome();}
  },true);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')dismissWelcome();},true);
  var skip=false;
  try{skip=localStorage.getItem('tryToDoSkipWelcome')==='yes';if(skip){var screen=document.getElementById('welcomeScreen');if(screen){screen.hidden=true;screen.style.display='none';}}}catch(e){}
  if(!skip){window.setTimeout(function(){dismissWelcome();},5000);}
})();
