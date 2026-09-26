/* =========================================================================
   FELIX · APP
   Rutas: #/  ·  #/work/<slug>  ·  #/archive  ·  #/archive/<categoría>  ·  #/about
   Idioma: ?lang=es|en  →  elección guardada  →  idioma del navegador.
   Abre con doble click en index.html (no necesita servidor).
   ========================================================================= */

(function () {
  const F = window.FELIX;
  const main = document.getElementById('main');
  const lbEl = document.querySelector('.lb');

  /* Monograma FELIX: trazo único, medido en s (ver manual, capítulo I) */
  const MONO = '<svg viewBox="0 0 800 800" fill="none" stroke="currentColor" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="400" cy="400" r="385"/><path d="M128 548A318 318 0 0 1 158 186M98 395h50M356 84c-66 8-118 26-140 66v482c14 48 74 68 142 84M226 398h112M414 80v622c26 10 54 12 80 12M535 100v580M598 140c32 120 70 260 104 382M706 280c-46 140-86 260-114 382"/></svg>';

  /* --- Idioma ------------------------------------------------------------- */
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const qLang = new URLSearchParams(location.search).get('lang');
  let lang = ['en', 'es'].includes(qLang) ? qLang
    : store.get('felix-lang') || ((navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en');

  const t = v => (v == null ? '' : typeof v === 'string' ? v : (v[lang] || v.en || ''));
  const ui = k => t(F.ui[k]) || k;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');

  /* --- Medios ------------------------------------------------------------- */
  let gallery = [];            // lo que recorre el visor en la página actual
  const isTall = m => m.h > m.w * 1.15;
  const isStrip = m => m.w / m.h > 3;

  function mediaHTML(m, gi, opts = {}) {
    const cap = m.cap ? `<figcaption>${esc(t(m.cap))}</figcaption>` : '';
    const tall = isTall(m) && !opts.crop && !opts.inRow ? ' media--tall' : (opts.single && m.w / m.h < 1.3 ? ' media--narrow' : '');
    const alt = esc(m.alt || '');
    if (m.type === 'video') {
      return `<figure class="media${tall}" style="--ar:${(m.w / m.h).toFixed(3)}"><video controls muted playsinline preload="none" poster="${m.poster}" width="${m.w}" height="${m.h}" aria-label="${alt}"><source src="${m.src}" type="video/mp4"></video>${cap}</figure>`;
    }
    const style = opts.crop ? ` style="aspect-ratio:${opts.crop};object-fit:cover;object-position:${opts.pos || '50% 50%'}"` : '';
    return `<figure class="media${tall}" style="--ar:${(m.w / m.h).toFixed(3)}"><button type="button" data-gi="${gi}" aria-label="${esc(ui('case.view'))}: ${alt}"><img src="${m.src}" width="${m.w}" height="${m.h}" alt="${alt}" loading="lazy" decoding="async"${style}></button>${cap}</figure>`;
  }

  /* Reparte las imágenes de una sección en filas según su formato */
  function layout(list) {
    const rows = [];
    const land = list.filter(m => !isTall(m) && !isStrip(m));
    const tall = list.filter(isTall);
    // fotos chicas (de archivo) y un vertical: todo en una fila a la misma altura
    if (tall.length && land.length && land.length + tall.length <= 4 && land.every(m => m.w < 1400)) return [land.concat(tall)].concat(list.filter(isStrip).map(m => [m]));
    if (land.length === 3 && land.every(m => m.w >= 1200)) rows.push([land[0]], land.slice(1));
    else if (land.length === 4) rows.push(land.slice(0, 2), land.slice(2));
    else for (let i = 0; i < land.length; i += 3) rows.push(land.slice(i, i + 3));
    list.filter(isStrip).forEach(m => rows.push([m]));
    if (tall.length) rows.push(tall);
    return rows;
  }
  function rowsHTML(list) {
    return layout(list).map(row => `<div class="mgrid mgrid--${Math.min(row.length, 3)}">${row.map(m => mediaHTML(m, addToGallery(m), { single: row.length === 1, inRow: row.length > 1 && row.some(x => !isTall(x)) })).join('')}</div>`).join('');
  }
  function addToGallery(m, meta) { gallery.push(Object.assign({}, m, meta || {})); return gallery.length - 1; }

  const folio = (a, b, c) => `<div class="folio"><span>${esc(a)}</span><span>${esc(b)}</span><span>${esc(c)}</span></div>`;

  /* --- Vistas ------------------------------------------------------------- */
  function viewHome() {
    const cards = F.cases.map((c, i) => `
      <a class="card" href="#/work/${c.slug}">
        <div class="card__img"><img src="${c.cover.src}" width="${c.cover.w}" height="${c.cover.h}" alt="${esc(c.cover.alt)}" loading="${i < 2 ? 'eager' : 'lazy'}" style="object-position:${c.coverPos || '50% 50%'}"></div>
        <div class="card__meta">
          <span class="card__num">${pad(i + 1)}</span>
          <span class="card__client">${esc(t(c.client))}</span>
          <h3 class="card__title">${esc(t(c.title))}</h3>
          <span class="card__tag">${esc(t(c.tags))}</span>
        </div>
      </a>`).join('');

    const picks = ['brugeoise', 'paul-laureano', 'imperio', 'felix-fua', 'duenos-ilusion', 'sol-negro'].map(id => F.archive.find(a => a.id === id)).filter(Boolean);
    const strip = picks.map(a => tileHTML(a, true)).join('');

    return `
      <div class="wrap">
        ${folio('FELIX', 'Portfolio', '2026')}
        <section class="hero">
          <div class="hero__top">
            <span class="label hero__kicker">${esc(ui('home.kicker'))}</span>
            <h1 tabindex="-1"><span class="t-long">${esc(ui('home.title'))}</span><span class="t-short">${esc(ui('home.title.short'))}</span></h1>
          </div>
          <div class="hero__bottom">
            <ul class="hero__facts">${F.ui['home.facts'].map(([b, s]) => `<li><b>${esc(t(b))}</b><span>${esc(t(s))}</span></li>`).join('')}</ul>
            <div class="hero__side">
              <p class="status">${esc(ui('home.status'))}</p>
              <div class="hero__actions">
                <a class="btn btn--solid" href="#work">${esc(ui('home.cta.work'))} <span class="arrow">↓</span></a>
                <a class="btn" href="${F.contact.cv}" download>${esc(ui('home.cta.cv'))}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="block" id="work" aria-labelledby="h-work" style="padding-top:0">
          <div class="block__head"><h2 id="h-work">${esc(ui('home.cases'))}</h2><p>${esc(ui('home.cases.note'))}</p></div>
          <div class="cases">${cards}</div>
        </section>

        <section class="block" aria-labelledby="h-arch">
          <div class="block__head"><h2 id="h-arch">${esc(ui('home.archive'))}</h2><a class="textlink" href="#/archive">${esc(ui('home.archive.all'))} <span class="arrow">→</span></a></div>
          <div class="strip">${strip}</div>
        </section>

        <section class="block">
          <div class="clients"><span class="label">${esc(ui('home.clients'))}</span>${F.clients.map(c => `<span>${esc(c)}</span>`).join('')}</div>
        </section>
      </div>`;
  }

  function viewCase(slug) {
    const i = F.cases.findIndex(c => c.slug === slug);
    if (i < 0) return viewNotFound();
    const c = F.cases[i];
    const n = i + 1;
    const next = F.cases[(i + 1) % F.cases.length];
    const heroGi = addToGallery(c.hero || c.cover);
    const facts = c.facts.map(([k, v]) => `<div><dt>${esc(t(k))}</dt><dd>${esc(t(v))}</dd></div>`).join('');
    const link = c.link ? `<a class="btn case-link" href="${c.link.href}" target="_blank" rel="noopener">${esc(t(c.link.label))} <span class="arrow">↗</span></a>` : '';

    const secs = c.sections.map((s, j) => `
      <section class="sec">
        <div><span class="sec__num">${n}.${j + 1}</span><h2>${esc(t(s.h))}</h2></div>
        <div class="sec__body">${s.p.map(p => `<p>${esc(t(p))}</p>`).join('')}${s.quote ? `<blockquote class="quote">${esc(t(s.quote))}</blockquote>` : ''}</div>
      </section>
      ${s.media && s.media.length ? rowsHTML(s.media) : ''}`).join('');

    const r = c.result;
    const result = r ? `
      <section class="result" aria-labelledby="h-res">
        <div class="wrap result__grid">
          <div><span class="label" id="h-res">${n}.${c.sections.length + 1} — ${esc(ui('case.result'))}</span></div>
          <div>
            <div class="stats">${r.stats.map(([b, s]) => `<div class="stat"><b>${esc(t(b))}</b><span>${esc(t(s))}</span></div>`).join('')}</div>
            <p>${esc(t(r.p))}</p>
          </div>
        </div>
      </section>` : '';

    return `
      <div class="wrap">
        ${folio('FELIX', `${ui('case.label')} ${pad(n)} / ${pad(F.cases.length)}`, t(c.client))}
        <header class="case-head">
          <span class="label">${esc(t(c.short))}</span>
          <h1 tabindex="-1">${esc(t(c.title))}</h1>
          <p class="case-head__lead">${esc(t(c.summary))}</p>
          <dl class="facts">${facts}</dl>
          ${link}
        </header>
        <div class="case-hero">${mediaHTML(c.hero || c.cover, heroGi, { crop: '16 / 9', pos: c.hero ? '50% 50%' : c.coverPos })}</div>
        ${secs}
        ${c.note ? `<p class="case-note">${esc(t(c.note))}</p>` : ''}
      </div>
      ${result}
      <div class="wrap">
        <a class="next" href="#/work/${next.slug}">
          <div><span class="label">${esc(ui('case.next'))} · ${pad(((i + 1) % F.cases.length) + 1)}</span><h2>${esc(t(next.short))}</h2></div>
          <div class="next__img"><img src="${next.cover.src}" alt="" loading="lazy" style="object-position:${next.coverPos || '50% 50%'}"></div>
        </a>
        <a class="textlink back" href="#/">← ${esc(ui('case.back'))}</a>
      </div>`;
  }

  function tileHTML(a, compact) {
    const first = a.media[0];
    const src = first.type === 'video' ? first.poster : first.src;
    const count = a.media.length > 1 ? `<span class="tile__count">${a.media.length}</span>` : '';
    const pdf = a.link && /\.pdf$/i.test(a.link.href) ? `<span class="tile__pdf">PDF</span>` : '';
    return `<button type="button" class="tile" data-item="${a.id}">
      <div class="tile__img"><img src="${src}" alt="" loading="lazy">${count}${pdf}</div>
      <div class="tile__title">${esc(t(a.title))}</div>
      ${compact ? '' : `<div class="tile__tag">${esc(t(a.tag))}</div>`}
    </button>`;
  }

  function viewArchive(cat) {
    const valid = F.categories.some(([k]) => k === cat);
    const list = valid ? F.archive.filter(a => a.cat === cat) : F.archive;
    const chips = [['', ui('archive.all'), F.archive.length]]
      .concat(F.categories.map(([k, l]) => [k, t(l), F.archive.filter(a => a.cat === k).length]))
      .map(([k, l, n]) => `<a class="chip" href="#/archive${k ? '/' + k : ''}" aria-current="${(valid ? cat : '') === k}">${esc(l)}<sup>${n}</sup></a>`).join('');
    return `
      <div class="wrap">
        ${folio('FELIX', ui('archive.title'), `${F.archive.length} ${ui('archive.items')}`)}
        <header class="page-head"><h1 tabindex="-1">${esc(ui('archive.title'))}</h1><p>${esc(ui('archive.lead'))}</p></header>
        <nav class="filters" aria-label="${esc(ui('archive.title'))}">${chips}</nav>
        <div class="grid">${list.map(a => tileHTML(a)).join('')}</div>
      </div>`;
  }

  function viewAbout() {
    const A = F.about;
    const rows = list => `<ul class="rows">${list.map(r => `<li><span class="when">${esc(t(r[0]))}</span><div>${r.length > 2 ? `<b>${esc(t(r[1]))}</b><span>${esc(t(r[2]))}</span>` : `<span>${esc(t(r[1]))}</span>`}</div></li>`).join('')}</ul>`;
    return `
      <div class="wrap">
        ${folio('FELIX', ui('about.title'), 'Buenos Aires')}
        <header class="page-head"><h1 tabindex="-1">${esc(ui('about.title'))}</h1></header>
        <div class="about">
          <div class="about__photo"><img src="${A.portrait.src}" alt="${esc(A.portrait.alt)}" width="${A.portrait.w}" height="${A.portrait.h}"></div>
          <div>
            <p class="about__intro">${esc(t(A.intro))}</p>
            <div class="about__bio">${A.bio.map(p => `<p>${esc(t(p))}</p>`).join('')}</div>
            <div class="about__actions">
              <a class="btn btn--solid" href="${F.contact.cv}" download>${esc(ui('home.cta.cv'))}</a>
              <a class="btn" href="${F.contact.linkedin}" target="_blank" rel="noopener">LinkedIn <span class="arrow">↗</span></a>
            </div>
            <h2>${esc(ui('about.experience'))}</h2>${rows(A.experience)}
            <h2>${esc(ui('about.skills'))}</h2>${rows(A.skills)}
            <h2>${esc(ui('about.education'))}</h2>${rows(A.education)}
            <h2>${esc(ui('about.languages'))}</h2><p>${esc(t(A.languages))}</p>
          </div>
        </div>
      </div>`;
  }

  function viewNotFound() {
    return `<div class="wrap"><header class="page-head"><h1 tabindex="-1">404</h1><p>${esc(ui('notfound'))}</p><p style="margin-top:24px"><a class="textlink" href="#/">← ${esc(ui('case.back'))}</a></p></header></div>`;
  }

  /* --- Rutas -------------------------------------------------------------- */
  function route(keepScroll) {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    const [page, arg] = parts;
    gallery = [];
    let html, nav = 'work', title = 'Félix Achucarro — ' + (lang === 'es' ? 'Diseñador multimedia' : 'Multimedia designer');
    if (!page) html = viewHome();
    else if (page === 'work') { html = viewCase(arg); const c = F.cases.find(x => x.slug === arg); if (c) title = `${t(c.short)} — Félix Achucarro`; }
    else if (page === 'archive') { html = viewArchive(arg); nav = 'archive'; title = `${ui('archive.title')} — Félix Achucarro`; }
    else if (page === 'about') { html = viewAbout(); nav = 'about'; title = `${ui('about.title')} — Félix Achucarro`; }
    else html = viewNotFound();

    const y = window.scrollY;
    main.innerHTML = html;
    document.title = title;
    document.querySelectorAll('[data-nav]').forEach(a => a.setAttribute('aria-current', a.dataset.nav === nav ? 'page' : 'false'));
    if (keepScroll) window.scrollTo(0, y);
    else {
      document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, 0); document.documentElement.style.scrollBehavior = "";
      const h = main.querySelector('h1');
      if (h && document.activeElement !== document.body) h.focus({ preventScroll: true });
    }
  }

  /* --- Textos fijos del HTML y cambio de idioma ---------------------------- */
  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = ui(el.dataset.i18n); });
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
    document.querySelectorAll('[data-mono]').forEach(el => { if (!el.innerHTML) el.innerHTML = MONO; });
    const mail = document.querySelector('[data-mail]');
    mail.href = `mailto:${F.contact.email}`; mail.textContent = F.contact.email;
    document.querySelector('[data-links]').innerHTML = [
      [ui('contact.cv'), F.contact.cv, true], ['LinkedIn ↗', F.contact.linkedin]
    ].map(([l, h, dl]) => `<li><a href="${h}"${dl ? ' download' : ' target="_blank" rel="noopener"'}>${esc(l)}</a></li>`).join('');
    lbEl.querySelector('[data-lb="prev"]').setAttribute('aria-label', ui('lb.prev'));
    lbEl.querySelector('[data-lb="next"]').setAttribute('aria-label', ui('lb.next'));
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l; store.set('felix-lang', l);
    applyStatic(); route(true);
  }

  /* --- Visor -------------------------------------------------------------- */
  let lbList = [], lbI = 0, lbReturn = null;
  function openLB(list, i) {
    lbList = list; lbI = i; lbReturn = document.activeElement;
    lbEl.hidden = false; document.documentElement.style.overflow = 'hidden';
    drawLB(); lbEl.querySelector('[data-lb="close"]').focus();
  }
  function drawLB() {
    const m = lbList[lbI];
    const box = lbEl.querySelector('.lb__media');
    box.innerHTML = m.type === 'video'
      ? `<video src="${m.src}" poster="${m.poster}" controls autoplay muted playsinline loop aria-label="${esc(m.alt || '')}"></video>`
      : `<img src="${m.src}" alt="${esc(m.alt || '')}">`;
    const head = m.itemTitle ? `<b>${esc(m.itemTitle)}</b>` : '';
    const body = m.itemText ? `<p>${esc(m.itemText)}</p>` : `<p>${esc(m.cap ? t(m.cap) : m.alt || '')}</p>`;
    const isPdf = m.itemLink && /\.pdf$/i.test(m.itemLink.href);
    const extra = m.itemLink ? `<p><a class="${isPdf ? 'lb__pdf' : 'textlink'}" style="${isPdf ? '' : 'color:var(--pearl)'}" href="${m.itemLink.href}" target="_blank" rel="noopener"${isPdf ? ' download' : ''}>${esc(t(m.itemLink.label))} ${isPdf ? '↓' : '↗'}</a></p>` : '';
    lbEl.querySelector('.lb__cap').innerHTML = head + body + extra;
    lbEl.querySelector('.lb__count').textContent = `${pad(lbI + 1)} / ${pad(lbList.length)}`;
    const multi = lbList.length > 1;
    lbEl.querySelector('[data-lb="prev"]').hidden = !multi;
    lbEl.querySelector('[data-lb="next"]').hidden = !multi;
  }
  function stepLB(d) { lbI = (lbI + d + lbList.length) % lbList.length; drawLB(); }
  function closeLB() {
    lbEl.hidden = true; lbEl.querySelector('.lb__media').innerHTML = '';
    document.documentElement.style.overflow = '';
    if (lbReturn) lbReturn.focus({ preventScroll: true });
  }
  function openItem(id) {
    const a = F.archive.find(x => x.id === id);
    if (!a) return;
    const list = a.media.map(m => Object.assign({}, m, { itemTitle: t(a.title), itemText: `${t(a.tag)} — ${t(a.text)}`, itemLink: a.link }));
    openLB(list, 0);
  }

  /* --- Eventos ------------------------------------------------------------ */
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-gi]');
    if (g) { openLB(gallery, +g.dataset.gi); return; }
    const it = e.target.closest('[data-item]');
    if (it) { openItem(it.dataset.item); return; }
    const lb = e.target.closest('[data-lb]');
    if (lb) { ({ close: closeLB, prev: () => stepLB(-1), next: () => stepLB(1) })[lb.dataset.lb](); return; }
    if (e.target === lbEl.querySelector('.lb__media')) { closeLB(); return; }
    const lg = e.target.closest('[data-lang]');
    if (lg) { setLang(lg.dataset.lang); return; }
    const a = e.target.closest('a[href^="#"]');
    if (a && !a.getAttribute('href').startsWith('#/')) {    // anclas internas: #work, #contact, #top
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
      else { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
    }
  });
  document.addEventListener('keydown', e => {
    if (lbEl.hidden) return;
    if (e.key === 'Escape') closeLB();
    else if (e.key === 'ArrowRight') stepLB(1);
    else if (e.key === 'ArrowLeft') stepLB(-1);
    else if (e.key === 'Tab') {                              // el foco no sale del visor
      const f = [...lbEl.querySelectorAll('button:not([hidden]), video, a')];
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  window.addEventListener('hashchange', () => { if (!lbEl.hidden) closeLB(); route(false); });

  applyStatic();
  route(true);
})();
