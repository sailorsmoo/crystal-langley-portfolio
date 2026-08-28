const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
document.querySelectorAll('[data-ev]').forEach(n=>n.addEventListener('click',()=>{if(window.gtag)gtag('event',n.dataset.ev)}));

const CX = document.createElement('dialog');
CX.className = 'cx';
CX.innerHTML = `<div class="cx__box ticked"><div class="cx__top"><span class="lbl">Contact</span><button class="cx__x" type="button" data-cx-close>Close</button></div>
<h2>Let us build<br>something</h2><p class="sub">Tell me what you are building and what it needs.</p>
<div class="cx__f"><label><span>Name</span><input name="name" type="text" autocomplete="name" required></label><label><span>Email</span><input name="email" type="email" autocomplete="email" required></label><label><span>What you need</span><textarea name="msg" rows="2"></textarea></label></div>
<div class="cx__go"><button type="button" data-cx-send>Send it</button><div class="alt"><a href="https://calendly.com/yocrystallangley/30min" target="_blank" rel="noopener noreferrer" data-ev="book_click">Book 30 minutes</a><a href="mailto:yocrystallangley@gmail.com">yocrystallangley@gmail.com</a><a href="https://www.upwork.com/services/product/design-figma-file-cleanup-design-system-audit-2058014733987472897?ref=fl_profile" data-ev="upwork_click">Upwork</a></div></div></div>`;
document.body.appendChild(CX);
const cxOpen = () => { if (!CX.open) CX.showModal(); };
document.addEventListener('click', e => {
  const a = e.target.closest('a[href$="#contact"]');
  if (a) { e.preventDefault(); if (typeof GT !== 'undefined' && GT.open) GT.close(); if (window.gtag && a.dataset.ev) gtag('event', a.dataset.ev); cxOpen(); return; }
  if (e.target.closest('[data-cx-close]')) CX.close();
  if (e.target === CX) CX.close();
});
CX.querySelector('[data-cx-send]').addEventListener('click', () => {
  const v = n => CX.querySelector(`[name="${n}"]`).value.trim();
  if (!v('name') || !v('email')) { CX.querySelector('[name="name"]').focus(); return; }
  if (window.gtag) gtag('event', 'contact_submit');
  const body = encodeURIComponent(`${v('msg')}\n\n${v('name')}\n${v('email')}`);
  window.location.href = `mailto:yocrystallangley@gmail.com?subject=${encodeURIComponent('Project inquiry from ' + v('name'))}&body=${body}`;
  CX.close();
});

// Private projects (Sommsation, Strivers, Sequoia Benefits, Donblas, Telltale) are gated by
// the Netlify edge function at the server, not here. Gated links behave as normal navigation;
// the edge function intercepts the request and serves its own auth page.

// the whole work tile is the hit area, not just the title
document.addEventListener('click', e => {
  const tile = e.target.closest('.tile');
  if (!tile || e.target.closest('a')) return;
  const a = tile.querySelector('.cap a');
  if (a) a.click();
});

// in-page video player: campaign reels never leave the site
const VID = document.createElement('dialog');
VID.className = 'vid';
VID.innerHTML = '<div class="vid__box"><button class="vid__x" type="button" data-vid-close>Close</button><div data-vid-frame></div></div>';
document.body.appendChild(VID);
const vidFrame = VID.querySelector('[data-vid-frame]');
const closeVid = () => { vidFrame.innerHTML = ''; if (VID.open) VID.close(); };
document.addEventListener('click', e => {
  const reel = e.target.closest('.reel[data-yt],.reel[data-vy]');
  if (reel) {
    e.preventDefault();
    const src = reel.dataset.vy
      ? 'https://play.vidyard.com/' + reel.dataset.vy + '.html?autoplay=1'
      : 'https://www.youtube-nocookie.com/embed/' + reel.dataset.yt + '?autoplay=1&rel=0&modestbranding=1';
    vidFrame.innerHTML = '<iframe src="' + src + '" title="' + (reel.dataset.title || 'Campaign film') + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    if (!VID.open) VID.showModal();
    if (window.gtag) gtag('event', 'reel_play', {reel: reel.dataset.yt || reel.dataset.vy});
    return;
  }
  if (e.target.closest('[data-vid-close]') || e.target === VID) closeVid();
});
VID.addEventListener('close', () => { vidFrame.innerHTML = ''; });

// motion: enrich the page with staggered reveals, then observe once
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const groups = [
    ['.rule .ln', 'anim--line', 70],
    ['.tiles > .tile', 'anim--up', 90],
    ['.ds__stats > div', 'anim--up', 80],
    ['.meta > div', 'anim--up', 60],
    ['.collage > div', 'anim--img', 90],
    ['.cd__stack > div', 'anim--img', 80],
    ['.prod__reels .reel', 'anim--up', 110],
    ['.screens > figure', 'anim--img', 80],
    ['.partners__grid img', 'anim--up', 45],
    ['.chips .chip', 'anim--up', 60],
    ['.fontspec .fr', 'anim--up', 80],
    ['.beats .beat', 'anim--up', 90]
  ];
  const targets = [];
  groups.forEach(([sel, variant, step]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (el.classList.contains('anim')) return;
      el.classList.add('anim', variant);
      el.style.transitionDelay = Math.min(i * step, 460) + 'ms';
      targets.push(el);
    });
  });
  if (!targets.length) return;
  // the stagger delay is for the entrance only: clear it once the element has arrived,
  // otherwise the inline delay also throttles every later transition (hover included)
  const release = el => {
    let done = false;
    const clear = () => { if (done) return; done = true; el.style.transitionDelay = ''; };
    el.addEventListener('transitionend', clear, {once: true});
    setTimeout(clear, 1600);
  };
  const io2 = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); release(e.target); io2.unobserve(e.target); }
  }), {rootMargin: '0px 0px -6% 0px'});
  targets.forEach(t => io2.observe(t));
})();
