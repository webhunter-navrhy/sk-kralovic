const nav = document.querySelector('.links'), bg = document.querySelector('.burger');
bg.addEventListener('click', () => bg.setAttribute('aria-expanded', nav.classList.toggle('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); bg.setAttribute('aria-expanded', 'false'); }));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll('.cards article, .row, .press li').forEach(el => { el.classList.add('rv'); io.observe(el); });
const lb = document.createElement('div'); lb.className = 'lb'; lb.innerHTML = '<img alt="">';
document.body.appendChild(lb);
lb.addEventListener('click', () => lb.classList.remove('open'));
document.querySelectorAll('.gal figure').forEach(f => f.addEventListener('click', () => { lb.firstChild.src = f.dataset.full; lb.classList.add('open'); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

const gm=document.getElementById('galmore');document.querySelectorAll('#gal figure').forEach((f,i)=>{if(i>=(innerWidth<=860?6:8))f.classList.add('hid')});gm&&gm.addEventListener('click',()=>{document.querySelectorAll('#gal figure.hid').forEach(f=>f.classList.remove('hid'));gm.parentNode.remove()});
