(() => {
  'use strict';
  const host = document.querySelector('#as-entries');
  if (!host) return;
  const rows = Array.from(host.querySelectorAll('.as-entry'));
  const units = Array.from(host.children);
  const search = document.querySelector('#as-search');
  const topic = document.querySelector('#as-topic');
  const type = document.querySelector('#as-type');
  const order = document.querySelector('#as-sort');
  const reset = document.querySelector('#as-reset');
  const normalize = value => value.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  rows.forEach(row => { row.searchText = normalize(row.textContent); });
  const params = new URLSearchParams(location.search);
  search.value = params.get('q') || '';
  for (const [element, key] of [[topic, 'topic'], [type, 'type'], [order, 'sort']]) {
    const value = params.get(key);
    if (value && Array.from(element.options).some(option => option.value === value)) element.value = value;
  }
  function update() {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const sorted = [...units].sort((a, b) => order.value === 'title'
      ? a.dataset.title.localeCompare(b.dataset.title)
      : ((b.dataset.precision === 'day') - (a.dataset.precision === 'day')) || (order.value === 'old' ? 1 : -1) * a.dataset.date.localeCompare(b.dataset.date));
    let count = 0;
    rows.forEach(row => {
      row.hidden = !(words.every(word => row.searchText.includes(word)) && (!topic.value || row.dataset.tags.split('|').includes(topic.value)) && (!type.value || row.dataset.type === type.value));
      if (!row.hidden) count++;

    });
    sorted.forEach(unit => {
      if (unit.classList.contains('as-conversation')) unit.hidden = !Array.from(unit.querySelectorAll('.as-entry')).some(row => !row.hidden);
      host.append(unit);
    });
    document.querySelector('#as-count').textContent = `${count} of ${rows.length} resources`;
    document.querySelector('#as-empty').hidden = count !== 0;
    reset.hidden = !search.value && !topic.value && !type.value && order.value === 'new';
    const url = new URL(location.href);
    for (const [key, value] of [['q', search.value], ['topic', topic.value], ['type', type.value], ['sort', order.value === 'new' ? '' : order.value]]) value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
    history.replaceState(null, '', url);
  }
  search.addEventListener('input', update);
  [topic, type, order].forEach(element => element.addEventListener('change', update));
  reset.addEventListener('click', () => { search.value = ''; topic.value = ''; type.value = ''; order.value = 'new'; update(); search.focus(); });
  document.querySelector('.as-controls').hidden = false;
  update();
})();
