
// small inline scripts (fallback if scripts.js is not used)
document.getElementById('year').textContent = new Date().getFullYear();

// demo buttons
document.querySelectorAll('[data-demo-url]').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.dataset.demoUrl;
    if (!url) return;
    if (url.includes('github.com')) return window.open(url, '_blank');
    const iframe = document.getElementById('demoIframe');
    try { iframe.src = url; } catch(e) {
      iframe.srcdoc = '<html><body style="font-family:Inter,Arial;display:flex;align-items:center;justify-content:center;height:100%;background:#fff"><div style="text-align:center;color:#6b7280"><h3>Unable to load demo</h3><p><a href="'+url+'" target="_blank">Open demo in a new tab</a></p></div></body></html>';
    }
  })
});

// view work scroll
document.getElementById('viewWork').addEventListener('click', () => document.getElementById('work').scrollIntoView({behavior:'smooth'}));
