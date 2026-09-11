// ===== Fleet Data =====
const cars = [
    { name:'Toyota Revo', image:'images/Hilux.jpeg', seats:7, fuel:'Diesel', type:'Pickup', page:'cars/toyota-revo.html', waText:'Hi%2C%20I%20need%20Toyota%20Revo' },
    { name:'Toyota Fortuner', image:'images/Fortuner.jpeg', seats:7, fuel:'Diesel', type:'SUV', page:'cars/toyota-fortuner.html', waText:'Hi%2C%20I%20need%20Toyota%20Fortuner' },
    { name:'Toyota Prado', image:'images/Land Crusier.jpeg', seats:7, fuel:'Diesel', type:'SUV', page:'cars/toyota-prado.html', waText:'Hi%2C%20I%20need%20Toyota%20Prado' },
    { name:'Toyota Land Cruiser Prado', image:'images/Land Cruiser.jpeg', seats:7, fuel:'Diesel', type:'SUV', page:'cars/toyota-land-cruiser-prado.html', waText:'Hi%2C%20I%20need%20Toyota%20Land%20Cruiser%20Prado' },
    { name:'Toyota V8 Land Cruiser LC300', image:'images/Landrover.jpeg', seats:7, fuel:'Petrol', type:'Premium SUV', premium:true, page:'cars/toyota-v8-land-cruiser.html', waText:'Hi%2C%20I%20need%20Toyota%20V8%20Land%20Cruiser%20LC300' },
    { name:'Toyota Corolla', image:'images/Corolla.jpeg', seats:5, fuel:'Petrol', type:'Sedan', page:'cars/toyota-corolla.html', waText:'Hi%2C%20I%20need%20Toyota%20Corolla' },
    { name:'Audi A5', image:'images/Audi A5.jpeg', seats:5, fuel:'Petrol', type:'Luxury', page:'cars/audi-a5.html', waText:'Hi%2C%20I%20need%20Audi%20A5' },
    { name:'Audi A6', image:'images/Audi A6.jpg', seats:5, fuel:'Petrol', type:'Luxury', page:'cars/audi-a6.html', waText:'Hi%2C%20I%20need%20Audi%20A6' }
];

// ===== Render Fleet =====
const fleetGrid = document.getElementById('fleetGrid');
if(fleetGrid) {
    fleetGrid.innerHTML = cars.map((car,i) => `
        <div class="premium-card rounded-2xl overflow-hidden transition-all duration-500 fade-up group" style="box-shadow:0 4px 20px rgba(0,0,0,0.05);transition-delay:${i*80}ms">
            <a href="${car.page}" class="block relative h-48 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                <img src="${car.image}" alt="${car.name}" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80'">
                ${car.premium ? '<span class="absolute top-3 right-3 text-[10px] font-bold px-3 py-1.5 rounded-full" style="background:linear-gradient(135deg,#D4A853,#E8C97A);color:#0A1219">Premium</span>' : ''}
                <span class="absolute top-3 left-3 bg-navy text-white text-[10px] font-bold px-3 py-1.5 rounded-full">${car.type}</span>
            </a>
            <div class="p-6">
                <h3 class="font-bold text-navy text-sm mb-3">${car.name}</h3>
                <div class="flex gap-3 mb-4">
                    <span class="flex items-center gap-1 text-gray-400 text-xs"><i class="fas fa-user"></i> ${car.seats} Seats</span>
                    <span class="flex items-center gap-1 text-gray-400 text-xs"><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span class="flex items-center gap-1 text-gray-400 text-xs"><i class="fas fa-cog"></i> Auto</span>
                </div>
                <ul class="space-y-2 mb-5"><li class="flex items-center gap-2 text-xs text-gray-400"><i class="fas fa-check text-brand text-[10px] w-3"></i> With Professional Driver</li><li class="flex items-center gap-2 text-xs text-gray-400"><i class="fas fa-check text-brand text-[10px] w-3"></i> Without Fuel</li><li class="flex items-center gap-2 text-xs text-gray-400"><i class="fas fa-check text-brand text-[10px] w-3"></i> 10 Hours Duty</li></ul>
                <div class="flex gap-2">
                    <a href="${car.page}" class="flex-1 text-center bg-navy text-white font-bold text-xs py-3 rounded-xl hover:bg-navy-dark transition-all"><i class="fas fa-eye mr-1"></i> View Details</a>
                    <a href="https://wa.me/923000000000?text=${car.waText}" target="_blank" class="flex-1 text-center ${car.premium ? 'premium-btn text-navy-dark' : 'bg-brand text-navy-dark hover:bg-brand-light'} font-bold text-xs py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-brand/20"><i class="fab fa-whatsapp mr-1"></i> Inquire</a>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Tabs =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('tab-active'); b.classList.add('tab-inactive'); });
        btn.classList.add('tab-active'); btn.classList.remove('tab-inactive');
        document.getElementById('tab-car').classList.toggle('hidden', btn.dataset.tab !== 'car');
        document.getElementById('tab-car').classList.toggle('grid', btn.dataset.tab === 'car');
        document.getElementById('tab-sec').classList.toggle('hidden', btn.dataset.tab !== 'sec');
        document.getElementById('tab-sec').classList.toggle('grid', btn.dataset.tab === 'sec');
    });
});

// ===== Mobile Menu =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); hamburger.innerHTML = mobileMenu.classList.contains('hidden') ? '<i class="fas fa-bars text-xl"></i>' : '<i class="fas fa-times text-xl"></i>'; });
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => { mobileMenu.classList.add('hidden'); hamburger.innerHTML = '<i class="fas fa-bars text-xl"></i>'; }));

// ===== Navbar Scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.style.background = window.pageYOffset > 50 ? 'rgba(36,52,71,0.98)' : 'rgba(36,52,71,0.8)'; });

// ===== Active Nav =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    const pos = window.pageYOffset + 150;
    sections.forEach(s => {
        if(pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
            navLinks.forEach(l => { const a = l.getAttribute('href') === `#${s.id}`; l.classList.toggle('text-white', a); l.classList.toggle('text-white/60', !a); l.classList.toggle('bg-white/5', a); });
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = { threshold:0.1, rootMargin:'0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry,i) => { 
        if(entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 150);
        }
    }); 
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach(el => observer.observe(el));

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach(el => {
        const scrolled = window.pageYOffset;
        el.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    });
});

// ===== Smooth Counter Animation =====
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target + '+';
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// ===== Stats Counter Observer =====
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ===== Date Min =====
document.querySelectorAll('input[type="date"]').forEach(d => d.setAttribute('min', new Date().toISOString().split('T')[0]));
