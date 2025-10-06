// Read query params and fill the fields.
// Example URL: https://your-site.netlify.app/?name=Ahmed%20Magdy&id=30502052100712&phone=01110707086&code=INV001
(function(){
  const params = new URLSearchParams(location.search);
  const get = k => decodeURIComponent((params.get(k)||'').replace(/\+/g,'%20')) || '—';
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };

  set('name',  get('name'));
  set('id',    get('id'));
  set('phone', get('phone'));
  set('code',  get('code'));

  document.getElementById('year').textContent = String(new Date().getFullYear());
})();