
(function(){
  var deferredPrompt=null, btn=document.getElementById('pwaInstallButton');
  var help=document.getElementById('pwaInstallHelp');
  if(!btn||!help) return;
  var ua=navigator.userAgent||'';
  var isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  var isAndroid=/Android/i.test(ua);
  var isStandalone=window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
  function closeHelp(){help.hidden=true;}
  function showHelp(){
    document.getElementById('pwaHelpIOS').hidden=!isIOS;
    document.getElementById('pwaHelpAndroid').hidden=!(isAndroid&&deferredPrompt);
    document.getElementById('pwaHelpOther').hidden=!( !isIOS && !(isAndroid&&deferredPrompt));
    help.hidden=false;
  }
  function hideIfInstalled(){if(isStandalone){btn.hidden=true;}}
  window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredPrompt=e;btn.hidden=false;});
  window.addEventListener('appinstalled',function(){deferredPrompt=null;btn.hidden=true;closeHelp();});
  btn.addEventListener('click',async function(){
    if(deferredPrompt){
      try{deferredPrompt.prompt();var choice=await deferredPrompt.userChoice;deferredPrompt=null;if(choice&&choice.outcome==='accepted'){btn.hidden=true;return;}}
      catch(e){}
    }
    showHelp();
  });
  document.getElementById('pwaHelpClose').addEventListener('click',closeHelp);
  document.getElementById('pwaHelpDone').addEventListener('click',closeHelp);
  help.addEventListener('click',function(e){if(e.target===help)closeHelp();});
  if(isIOS||isAndroid) btn.hidden=false;
  hideIfInstalled();
  if('serviceWorker' in navigator && location.protocol==='https:'){
    window.addEventListener('load',function(){navigator.serviceWorker.register('./service-worker.js').catch(function(){});});
  }
})();
