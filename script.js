(function(){
  const isPolish = document.documentElement.lang.toLowerCase().startsWith('pl');
  const locale = isPolish ? 'pl-PL' : 'nl-NL';
  const monthFormatter = new Intl.DateTimeFormat(locale,{month:'long',year:'numeric'});
  const longFormatter = new Intl.DateTimeFormat(locale,{day:'numeric',month:'long',year:'numeric'});
  const capitalize = (value)=>value.charAt(0).toUpperCase()+value.slice(1);

  function updateDates(){
    const now = new Date();
    const dateIso = now.toISOString().slice(0,10);
    const dateLong = longFormatter.format(now);
    const monthYear = monthFormatter.format(now);
    const monthYearLower = monthYear.toLowerCase();
    const title = isPolish ? `Kasyno USDT w Polsce: Tether w kasynach online – ${monthYearLower}` : `USDT Casino Nederland: Tether gebruiken bij online casino’s – ${capitalize(monthYear)}`;

    document.querySelectorAll('[data-date="now"]').forEach((node)=>{
      node.textContent = dateLong;
      node.setAttribute('datetime',dateIso);
    });
    document.querySelectorAll('[data-date="month-year"]').forEach((node)=>{
      node.textContent = monthYearLower;
      node.setAttribute('datetime',dateIso);
    });
    document.querySelectorAll('[data-date="year"]').forEach((node)=>{ node.textContent = String(now.getFullYear()); });
    const footerYear = document.getElementById('footer-year');
    if(footerYear) footerYear.textContent = String(now.getFullYear());
    document.querySelectorAll('meta[name="last-modified"]').forEach((node)=>node.setAttribute('content',dateIso));
    document.querySelectorAll('meta[property="og:updated_time"], meta[property="article:modified_time"]').forEach((node)=>node.setAttribute('content',now.toISOString()));
    document.title = title;
    document.querySelectorAll('meta[property="og:title"]').forEach((node)=>node.setAttribute('content',title));
    const pageTitle = document.getElementById('page-title');
    if(pageTitle) pageTitle.textContent = title;
  }

  updateDates();
  window.setInterval(updateDates,60000);
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
