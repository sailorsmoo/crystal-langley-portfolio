/* STANDARD. — shared case-study behavior: drawer, wordmark fit, reveal */
(function(){
  /* Mobile drawer */
  var toggle=document.getElementById('navToggle'), drawer=document.getElementById('drawer'), scrim=document.getElementById('scrim');
  if(toggle&&drawer&&scrim){
    var setMenu=function(open){ drawer.classList.toggle('is-open',open); toggle.classList.toggle('is-open',open); scrim.classList.toggle('is-open',open); toggle.setAttribute('aria-expanded',open?'true':'false'); };
    toggle.addEventListener('click',function(){ setMenu(!drawer.classList.contains('is-open')); });
    scrim.addEventListener('click',function(){ setMenu(false); });
    drawer.addEventListener('click',function(e){ if(e.target.tagName==='A') setMenu(false); });
  }

  /* Fit footer wordmark to its container */
  var mark=document.getElementById('bigmark');
  function fitMark(){ if(!mark)return; mark.style.fontSize='100px'; var natural=mark.scrollWidth, avail=mark.parentElement.clientWidth; if(natural>0) mark.style.fontSize=Math.floor(100*(avail/natural))+'px'; }
  fitMark(); window.addEventListener('resize',fitMark,{passive:true}); if(document.fonts&&document.fonts.ready){document.fonts.ready.then(fitMark);} setTimeout(fitMark,400);

  /* Reveal on scroll (arm only below the fold) */
  var vh=window.innerHeight||800;
  var armed=[].slice.call(document.querySelectorAll('.reveal')).filter(function(el){ if(el.getBoundingClientRect().top>vh*0.9){el.classList.add('pre-reveal');return true;} return false; });
  var show=function(el){ el.classList.remove('pre-reveal'); };
  if('IntersectionObserver' in window && armed.length){
    var io=new IntersectionObserver(function(entries){ entries.forEach(function(en){ if(en.isIntersecting){show(en.target);io.unobserve(en.target);} }); },{threshold:0.1,rootMargin:'0px 0px -8% 0px'});
    armed.forEach(function(el){io.observe(el);});
  } else { armed.forEach(show); }
  setTimeout(function(){ document.querySelectorAll('.pre-reveal').forEach(show); },2500);
})();
