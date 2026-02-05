/**
 * 个人简历网站 JavaScript
 * 负责滚动动画、交互效果等
 */

document.addEventListener('DOMContentLoaded', function () {
    // 初始化所有功能
    initScrollAnimations();
    initNavbarScroll();
    initSmoothScroll();
    initCounterAnimation();
    initContactProtection(); // 联系方式保护

    // 初始化多语言功能（需要在其他模块之后）
    if (typeof initI18n === 'function') {
        initI18n();
    }
});

/**
 * 联系方式保护 - 动态拼接敏感信息防止爬虫抓取
 * NOTE: 信息被拆分存储，在用户交互后才组装显示
 */
// 存储联系方式数据供多语言模块访问
let contactData = null;

function initContactProtection() {
    // 拆分存储 - 爬虫无法直接识别
    const e = ['liming', '.', 'yank'];
    const d = 'gmail.com';
    const p = ['+86', '155', '2137', '0308'];

    const email = e.join('') + '@' + d;
    const phone = p.join(' ');
    const phoneRaw = p.join('').replace('+86', '+86');

    // 保存联系方式数据
    contactData = { email, phone, phoneRaw };

    // Hero 区域的社交链接
    const socialEmail = document.getElementById('social-email');
    const socialPhone = document.getElementById('social-phone');

    if (socialEmail) {
        socialEmail.href = 'mailto:' + email;
    }
    if (socialPhone) {
        socialPhone.href = 'tel:' + phoneRaw;
    }

    // 联系方式区域
    setupContactDisplay();
}

/**
 * 设置联系方式显示（支持多语言切换时重新调用）
 */
function setupContactDisplay() {
    if (!contactData) return;

    const { email, phone, phoneRaw } = contactData;
    const contactEmail = document.getElementById('contact-email');
    const contactPhone = document.getElementById('contact-phone');
    const emailDisplay = document.getElementById('email-display');
    const phoneDisplay = document.getElementById('phone-display');

    if (contactEmail && emailDisplay) {
        contactEmail.href = 'javascript:void(0)'; // 防止页面跳转
        emailDisplay.textContent = email;

        // 移除之前的事件监听器（防止重复绑定）
        const newContactEmail = contactEmail.cloneNode(true);
        contactEmail.parentNode.replaceChild(newContactEmail, contactEmail);

        const newEmailDisplay = newContactEmail.querySelector('#email-display') || document.getElementById('email-display');
        if (newEmailDisplay) {
            newEmailDisplay.textContent = email;
        }

        // 点击复制功能
        newContactEmail.addEventListener('click', function (e) {
            e.preventDefault();
            const displayEl = this.querySelector('.contact-value');
            if (!displayEl) return;

            navigator.clipboard.writeText(email).then(() => {
                const originalText = displayEl.textContent;
                // 使用多语言翻译（如果可用）
                const copiedText = typeof t === 'function' ? t('contact.copied') : '已复制到剪贴板！';
                displayEl.textContent = copiedText;
                displayEl.style.color = 'var(--primary)';

                setTimeout(() => {
                    displayEl.textContent = originalText;
                    displayEl.style.color = '';
                }, 2000);
            });
        });
    }
    if (contactPhone && phoneDisplay) {
        contactPhone.href = 'tel:' + phoneRaw;
        phoneDisplay.textContent = phone;
    }
}

/**
 * 供多语言模块调用的联系方式重新初始化函数
 */
function reinitContactInfo() {
    setupContactDisplay();
}

// 暴露给全局
window.reinitContactInfo = reinitContactInfo;

/**
 * 滚动动画 - 元素进入视口时触发动画
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // 如果是时间线项目，添加延迟动画
                if (entry.target.classList.contains('timeline-item')) {
                    const index = Array.from(document.querySelectorAll('.timeline-item')).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.15}s`;
                }
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.section-header, .timeline-item, .highlight-card, .skill-category, .education-card, .contact-wrapper'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

/**
 * 导航栏滚动效果
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const scrollY = window.scrollY;

        // 添加背景模糊效果
        if (scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        // 隐藏/显示导航栏
        if (scrollY > lastScrollY && scrollY > 100) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

/**
 * 平滑滚动
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 数字计数动画
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.highlight-number');

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

/**
 * 执行计数动画
 */
function animateCounter(element) {
    const text = element.textContent;
    const match = text.match(/(\d+)/);

    if (!match) return;

    const target = parseInt(match[0]);
    const suffix = text.replace(/\d+/, '');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

/**
 * 添加样式 - 滚动动画的CSS
 */
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .navbar-scrolled {
        background: rgba(10, 10, 11, 0.95) !important;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    }
    
    .navbar-hidden {
        transform: translateY(-100%);
    }
    
    .navbar {
        transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    }
`;
document.head.appendChild(style);

// 添加页面加载完成动画
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

/**
 * 视频弹窗功能
 */
function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const source = document.getElementById('modalVideoSource');

    source.src = videoSrc;
    video.load();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal(event) {
    // 如果点击的是视频内容区域则不关闭
    if (event.target.closest('.video-modal-content') && !event.target.classList.contains('video-modal-close')) {
        return;
    }

    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');

    video.pause();
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ESC 键关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('videoModal');
        if (modal && modal.classList.contains('active')) {
            closeVideoModal(e);
        }
    }
});
