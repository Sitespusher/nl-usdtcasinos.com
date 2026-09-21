(function(){
  const now = new Date();
  const dateLong = new Intl.DateTimeFormat('nl-NL',{day:'numeric',month:'long',year:'numeric'}).format(now);
  const dateIso = now.toISOString().slice(0,10);
  const monthYear = new Intl.DateTimeFormat('nl-NL',{month:'long',year:'numeric'}).format(now);
  document.querySelectorAll('[data-date="now"]').forEach((node)=>{ node.textContent=dateLong; node.setAttribute('datetime',dateIso); });
  document.querySelectorAll('meta[name="last-modified"]').forEach((node)=>node.setAttribute('content',dateIso));
  document.querySelectorAll('meta[property="og:updated_time"]').forEach((node)=>node.setAttribute('content',now.toISOString()));
  const title = `USDT Casino Nederland: Tether gebruiken bij online casino’s – ${monthYear.charAt(0).toUpperCase()+monthYear.slice(1)}`;
  document.title = title;
  document.querySelectorAll('meta[property="og:title"]').forEach((node)=>node.setAttribute('content',title));
  const year = document.getElementById('footer-year'); if(year) year.textContent=String(now.getFullYear());
  const catfish = document.getElementById('catfish');
  const closeCatfish = catfish && catfish.querySelector('.catfish-close');
  if(catfish){
    window.setTimeout(()=>{ catfish.classList.add('is-visible'); catfish.setAttribute('aria-hidden','false'); },5000);
    closeCatfish && closeCatfish.addEventListener('click',()=>{
      catfish.classList.add('is-closing');
      catfish.setAttribute('aria-hidden','true');
      window.setTimeout(()=>catfish.remove(),460);
    });
  }
})();
