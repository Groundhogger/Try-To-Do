
// v52: permanent Moss growth and Always Work alongside Moss setting; retain contextual help.
(function(){
 const $=id=>document.getElementById(id);
 const help={
  'How is today feeling?':'Choose the energy level that fits today. You can change it whenever your circumstances change; there is no wrong answer.',
  'Need a nudge?':'Ask Moss for one manageable suggestion. You can choose where ideas come from and what kind of task to consider.',
  'Add a task':'Add your own task or choose a common idea. Set the energy and style to what the task feels like for you.',
  'Your woodland friend':'Moss grows through five permanent forms. After his final evolution, lifetime growth points unlock new parts of the Living Forest. His progress never resets. Turn on Always Work alongside Moss in Moss settings to keep his companion presence active.',
  'Your tasks':'Mark a task complete, adjust its progress, start it with Moss, or silence it temporarily. Use the filter to view active or completed tasks.',
  'Take a break':'Choose a break length and optional guided breathing. Visual only is the default; select the number timer when you want a countdown.',
  'Preferences':'Adjust movement and encouragement to suit you. Your choices are saved in this browser.',
  'Back up your work':'Export a backup before changing devices or clearing browser data. Import replaces the tasks saved in this browser.'
 };
 function attachHelp(container, text, label){
   if(!container||container.querySelector(':scope > .feature-info'))return;
   const btn=document.createElement('button');btn.type='button';btn.className='feature-info';btn.textContent='?';btn.setAttribute('aria-label','Information: '+label);btn.setAttribute('aria-expanded','false');btn.title=text;
   const tip=document.createElement('p');tip.className='feature-tip';tip.hidden=true;tip.textContent=text;tip.id='tip-'+Math.random().toString(36).slice(2,9);btn.setAttribute('aria-controls',tip.id);
   btn.addEventListener('click',function(){const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));tip.hidden=open;});
   btn.addEventListener('mouseenter',()=>{if(window.matchMedia('(hover: hover)').matches){tip.hidden=false;btn.setAttribute('aria-expanded','true')}});
   btn.addEventListener('mouseleave',()=>{if(window.matchMedia('(hover: hover)').matches){tip.hidden=true;btn.setAttribute('aria-expanded','false')}});
   btn.addEventListener('focus',()=>{tip.hidden=false;btn.setAttribute('aria-expanded','true')});
   btn.addEventListener('blur',()=>{tip.hidden=true;btn.setAttribute('aria-expanded','false')});
   container.appendChild(btn);container.appendChild(tip);
 }
 document.querySelectorAll('main section h2').forEach(h=>{
   const key=(h.textContent||'').trim();let text=help[key];
   if(!text && key==='Your woodland friend')text=help['Your woodland friend'];
   if(!text)return;
   const section=h.closest('section');h.classList.add('feature-title-wrap');attachHelp(h,text,key);
 });
 // Mood/energy choice buttons intentionally have no information buttons.
 // Important controls also get hover/focus descriptions, including mobile-friendly help buttons.
 const controls=[
  ['#random','Suggest a task','Ask for one task idea that fits your selected mood and suggestion filters.'],
  ['#addSuggestion','Add to my list','Save the displayed suggestion as one of your tasks.'],
  ['#reject','Not today','Reject this suggestion so it is not offered again as a random nudge.'],
  ['#start','Start','Begin the break timer. Guided breathing follows the selected breathing setting.'],
  ['#pause','Pause','Pause the break timer without losing the remaining time.'],
  ['#reset','Reset timer','Stop the timer and return it to the selected break length.'],
  ['#export','Export backup','Download a backup of your saved tasks and Moss progress.'],
  ['#import','Import backup','Restore a previous backup. Importing replaces the current saved tasks after confirmation.']
 ];
 controls.forEach(([sel,label,tip])=>{const el=document.querySelector(sel);if(el){el.title=tip;el.setAttribute('aria-label',label+'. '+tip)}});
})();
