/**
 * 多语言支持模块 (i18n)
 * 支持中文 (zh) 和英文 (en) 切换
 */

// 翻译数据
const translations = {
    zh: {
        // 页面元信息
        'page.title': '严黎明 | 产品经理',
        'page.description': '严黎明（LeonYim）- 9年互联网产品与项目管理经验，专注ToB SaaS产品规划与用户运营系统搭建',

        // Hero 区域
        'hero.greeting': '你好，我是',
        'hero.name': '严黎明',
        'hero.title': '产品经理',
        'hero.desc': '9年互联网产品与项目管理经验<br>专注 ToB SaaS 产品规划与用户运营系统搭建',
        'hero.contact': '联系我',
        'hero.download': '下载简历',
        'hero.scroll': '向下滚动',

        // 右侧信息卡片
        'aside.label': '专注领域',
        'aside.line1': '扎根互联网行业',
        'aside.line2': '专注 <em>ToB SaaS</em>',
        'aside.line3': '产品设计与运营',
        'aside.desc': '擅长用户运营平台搭建、SCRM系统规划，<br>以数据驱动实现业务增长与效率提升。',

        // 关于我
        'about.title': '关于我',
        'about.intro': '从 <span class="highlight">UBER</span> 的市场运营起步，深入 <span class="highlight">TVCBOOK</span> 的影视广告项目与平台产品规划，再到 <span class="highlight">阿里巴巴·灵犀互娱</span> 聚焦 ToB 产品规划与运营系统搭建。',
        'about.detail': '我专注于产品全生命周期规划与设计，注重用户体验优化，擅长复杂系统搭建与跨部门协作资源整合。持有 <span class="badge">PMP认证 (5A)</span>，具备扎实的项目管理实战能力。',
        'about.stat1': '年产品经验',
        'about.stat2': '项软件著作权',
        'about.stat3': '业务线上化',
        'about.stat4': 'ROI提升',

        // 工作经历
        'exp.title': '工作经历',
        'exp.showcase': '产品展示',
        'exp.videoCredit': '视频剪辑 by 严黎明',

        // 阿里巴巴
        'exp.ali.name': '阿里巴巴·灵犀互娱',
        'exp.ali.role': '产品经理 (To B)',
        'exp.ali.date': '2022.02 - 至今',
        'exp.ali.location': '广州',
        'exp.ali.summary': '围绕VIP用户全生命周期，打造线上VIP用户运营系统',
        'exp.ali.ach1.title': 'VIP运营平台从0到1',
        'exp.ali.ach1.desc': '主导 ToB SaaS SCRM 系统规划与落地，实现核心业务流程线上化，策略优化周期从双周缩短至3天',
        'exp.ali.ach2.title': '服务效率与ROI显著提升',
        'exp.ali.ach2.desc': '用户维系ROI提升28%，消息处理ROI提升47%，5分钟回复率从85%提升至92%',
        'exp.ali.ach3.title': 'AI智能外呼系统',
        'exp.ali.ach3.desc': '触达能力提升百倍，成本降至0.23元/次(降幅98%)，周年庆触达460万用户',
        'exp.ali.ach4.title': '私域建联规模化',
        'exp.ali.ach4.desc': '建联用户量38万(增长196%)，服务成本降至0.19元/月(降幅89%)',

        // TVCBOOK
        'exp.tvc.name': 'TVCBOOK (优视云集)',
        'exp.tvc.role': '产品经理 (ToB & ToC)',
        'exp.tvc.location': '广州',
        'exp.tvc.summary': '负责TVCBOOK平台及相关SaaS产品的规划与设计，推动产品从0到1的建设与迭代。',
        'exp.tvc.ach1.title': '优视云集 SaaS 平台',
        'exp.tvc.ach1.desc': '主导 SaaS 平台改版，提升用户留存率 40%',
        'exp.tvc.ach2.title': '易推 APP',
        'exp.tvc.ach2.desc': '从0到1孵化短视频营销工具，累计用户突破 10万+',
        'exp.tvc.ach3.title': '商业化体系搭建',
        'exp.tvc.ach3.desc': '设计会员与增值服务体系，首年营收超 200万',
        'exp.tvc.ach4.title': '高新技术企业认证',
        'exp.tvc.ach4.desc': '主导申请15项软件著作权，获得政府补贴80万元',
        'exp.tvc.ach5.title': '"金狮奖"线上报奖系统',
        'exp.tvc.ach5.desc': '实现大型活动全流程线上化（上传、编辑、报名、付款、评奖）',
        'exp.tvc.video1.name': '优视云集 - 产品演示',
        'exp.tvc.video1.tag': 'SaaS平台',
        'exp.tvc.video2.name': '易推 - APP演示',
        'exp.tvc.video2.tag': '移动端产品',

        // UBER
        'exp.uber.name': 'UBER 优步',
        'exp.uber.role': '市场营销专员',
        'exp.uber.location': '广州',
        'exp.uber.summary': '策划并落地10+创新营销活动，累计拉新用户超10万+',
        'exp.uber.tag1': '一键呼叫复仇者联盟',
        'exp.uber.tag2': 'UBER PUPPIES萌宠专车',
        'exp.uber.tag3': 'UBER OFFER面试车',
        'exp.uber.tag4': '万达5折狂欢',
        'exp.uber.videoTitle': '活动视频',
        'exp.uber.video.name': 'UBER周年庆 - 活动回顾',
        'exp.uber.video.tag': '营销活动',

        // 技能
        'skills.title': '专业技能',
        'skills.product': '产品技能',
        'skills.product.s1': 'UI规范设计',
        'skills.product.s2.name': '产品RPD',
        'skills.product.s2.desc': '需求文档撰写',
        'skills.product.s3.name': '跨部门协作',
        'skills.product.s3.desc': '资源整合推动',
        'skills.product.s4.name': 'AI Agent搭建',
        'skills.product.s4.desc': '智能化工具',
        'skills.product.s5': 'AI辅助编程',
        'skills.tools': '工具技能',
        'skills.tools.s1.name': 'Office全系列',
        'skills.tools.s1.desc': '文档处理',
        'skills.tools.s2': '视频制作',
        'skills.tools.s3': '平面设计',
        'skills.certs': '专业证书',
        'skills.certs.pmp': 'PMP项目管理认证',
        'skills.certs.cpr': 'CPR+AED培训证书',
        'skills.certs.cpr.badge': '急救',

        // 教育背景
        'edu.title': '教育背景',
        'edu.hit.name': '哈尔滨工业大学',
        'edu.hit.degree': 'MBA - 硕士',
        'edu.hit.meta': '2025.09 - 2028.02 · 深圳',
        'edu.scnu.name': '华南师范大学',
        'edu.scnu.degree': '动漫设计与制作',
        'edu.scnu.meta': '2012.09 - 2015.05 · 广州',
        'edu.scnu.extra': 'Enactus创行 - 品牌宣传技术经理',

        // 联系方式
        'contact.title': '让我们一起创造价值',
        'contact.desc': '期待与您的交流与合作',
        'contact.email': '邮箱',
        'contact.phone': '电话',
        'contact.clickShow': '点击显示',
        'contact.copied': '已复制到剪贴板！',

        // 页脚
        'footer.copyright': '© 2025 严黎明 (LeonYim). All rights reserved.',
        'footer.note': 'Built with ❤️'
    },
    en: {
        // Page meta
        'page.title': 'Leon Yim | Product Manager',
        'page.description': 'Leon Yim - 9 years of product and project management experience, specializing in ToB SaaS product planning and user operations system construction',

        // Hero
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Leon Yim',
        'hero.title': 'Product Manager',
        'hero.desc': '9 years of product & project management experience<br>Specializing in ToB SaaS product planning & user operations',
        'hero.contact': 'Contact Me',
        'hero.download': 'Download CV',
        'hero.scroll': 'Scroll Down',

        // Aside card
        'aside.label': 'Focus Area',
        'aside.line1': 'Rooted in Internet Industry',
        'aside.line2': 'Focused on <em>ToB SaaS</em>',
        'aside.line3': 'Product Design & Operations',
        'aside.desc': 'Expertise in user operations platform, SCRM system planning,<br>driving business growth through data-driven approaches.',

        // About
        'about.title': 'About Me',
        'about.intro': 'Started with marketing operations at <span class="highlight">UBER</span>, then deepened into film & advertising projects at <span class="highlight">TVCBOOK</span>, and now at <span class="highlight">Alibaba · Lingxi Interactive</span> focusing on ToB product planning and operations system building.',
        'about.detail': 'I focus on full product lifecycle planning and design, emphasizing user experience optimization, and excel at complex system construction and cross-departmental collaboration. Certified <span class="badge">PMP (5A)</span> with solid project management expertise.',
        'about.stat1': 'Years Experience',
        'about.stat2': 'Software Copyrights',
        'about.stat3': 'Business Digitization',
        'about.stat4': 'ROI Improvement',

        // Experience
        'exp.title': 'Work Experience',
        'exp.showcase': 'Product Showcase',
        'exp.videoCredit': 'Edited by Leon Yim',

        // Alibaba
        'exp.ali.name': 'Alibaba · Lingxi Interactive',
        'exp.ali.role': 'Product Manager (To B)',
        'exp.ali.date': '2022.02 - Present',
        'exp.ali.location': 'Guangzhou',
        'exp.ali.summary': 'Building online VIP user operations system throughout the user lifecycle',
        'exp.ali.ach1.title': 'VIP Operations Platform 0→1',
        'exp.ali.ach1.desc': 'Led ToB SaaS SCRM system planning, digitized core business processes, reduced strategy optimization cycle from 2 weeks to 3 days',
        'exp.ali.ach2.title': 'Significant ROI Improvement',
        'exp.ali.ach2.desc': 'User retention ROI +28%, message handling ROI +47%, 5-min response rate increased from 85% to 92%',
        'exp.ali.ach3.title': 'AI Smart Calling System',
        'exp.ali.ach3.desc': 'Outreach capacity increased 100x, cost reduced to ¥0.23/call (-98%), reached 4.6M users during anniversary',
        'exp.ali.ach4.title': 'Private Domain Scale-up',
        'exp.ali.ach4.desc': 'Connected 380K users (+196%), service cost reduced to ¥0.19/month (-89%)',

        // TVCBOOK
        'exp.tvc.name': 'TVCBOOK',
        'exp.tvc.role': 'Product Manager (ToB & ToC)',
        'exp.tvc.location': 'Guangzhou',
        'exp.tvc.summary': 'Responsible for TVCBOOK platform and SaaS product planning, driving product development from 0 to 1.',
        'exp.tvc.ach1.title': 'TVCBOOK SaaS Platform',
        'exp.tvc.ach1.desc': 'Led SaaS platform redesign, improved user retention by 40%',
        'exp.tvc.ach2.title': 'YiTui APP',
        'exp.tvc.ach2.desc': 'Built short video marketing tool from 0 to 1, 100K+ users',
        'exp.tvc.ach3.title': 'Monetization System',
        'exp.tvc.ach3.desc': 'Designed membership & value-added services, ¥2M+ first-year revenue',
        'exp.tvc.ach4.title': 'High-Tech Enterprise Certification',
        'exp.tvc.ach4.desc': 'Led 15 software copyrights application, received ¥800K government subsidy',
        'exp.tvc.ach5.title': '"Golden Lion Award" Online System',
        'exp.tvc.ach5.desc': 'Digitized entire event process (upload, edit, register, pay, judge)',
        'exp.tvc.video1.name': 'TVCBOOK - Product Demo',
        'exp.tvc.video1.tag': 'SaaS Platform',
        'exp.tvc.video2.name': 'YiTui - APP Demo',
        'exp.tvc.video2.tag': 'Mobile Product',

        // UBER
        'exp.uber.name': 'UBER',
        'exp.uber.role': 'Marketing Specialist',
        'exp.uber.location': 'Guangzhou',
        'exp.uber.summary': 'Planned and executed 10+ innovative marketing campaigns, acquired 100K+ new users',
        'exp.uber.tag1': 'Call the Avengers',
        'exp.uber.tag2': 'UBER PUPPIES',
        'exp.uber.tag3': 'UBER OFFER Car',
        'exp.uber.tag4': 'Wanda 50% Off',
        'exp.uber.videoTitle': 'Event Video',
        'exp.uber.video.name': 'UBER Anniversary - Highlights',
        'exp.uber.video.tag': 'Marketing Event',

        // Skills
        'skills.title': 'Professional Skills',
        'skills.product': 'Product Skills',
        'skills.product.s1': 'UI Design Standards',
        'skills.product.s2.name': 'Product PRD',
        'skills.product.s2.desc': 'Requirements Docs',
        'skills.product.s3.name': 'Cross-team Collab',
        'skills.product.s3.desc': 'Resource Integration',
        'skills.product.s4.name': 'AI Agent Building',
        'skills.product.s4.desc': 'Intelligent Tools',
        'skills.product.s5': 'AI-assisted Coding',
        'skills.tools': 'Technical Skills',
        'skills.tools.s1.name': 'Microsoft Office',
        'skills.tools.s1.desc': 'Document Processing',
        'skills.tools.s2': 'Video Production',
        'skills.tools.s3': 'Graphic Design',
        'skills.certs': 'Certifications',
        'skills.certs.pmp': 'PMP Certification',
        'skills.certs.cpr': 'CPR+AED Certificate',
        'skills.certs.cpr.badge': 'First Aid',

        // Education
        'edu.title': 'Education',
        'edu.hit.name': 'Harbin Institute of Technology',
        'edu.hit.degree': 'MBA - Master',
        'edu.hit.meta': '2025.09 - 2028.02 · Shenzhen',
        'edu.scnu.name': 'South China Normal University',
        'edu.scnu.degree': 'Animation Design',
        'edu.scnu.meta': '2012.09 - 2015.05 · Guangzhou',
        'edu.scnu.extra': 'Enactus - Brand Tech Manager',

        // Contact
        'contact.title': "Let's Create Value Together",
        'contact.desc': 'Looking forward to connecting with you',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.clickShow': 'Click to show',
        'contact.copied': 'Copied to clipboard!',

        // Footer
        'footer.copyright': '© 2025 Leon Yim. All rights reserved.',
        'footer.note': 'Built with ❤️'
    }
};

// 当前语言 - 默认中文
let currentLang = localStorage.getItem('lang') || 'zh';

/**
 * 获取翻译文本
 * @param {string} key 翻译键
 * @returns {string} 翻译后的文本
 */
function t(key) {
    return translations[currentLang][key] || translations['zh'][key] || key;
}

/**
 * 切换语言
 * @param {string} lang 目标语言 ('zh' 或 'en')
 */
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // 更新 HTML lang 属性
    document.getElementById('html-root').lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);

        // 检查是否需要更新属性而非 innerHTML
        const attrName = el.getAttribute('data-i18n-attr');
        if (attrName) {
            el.setAttribute(attrName, translation);
        } else {
            el.innerHTML = translation;
        }
    });

    // 更新语言切换按钮状态
    updateLangSwitchUI(lang);

    // 重新初始化联系方式（因为有特殊处理）
    if (typeof reinitContactInfo === 'function') {
        reinitContactInfo();
    }
}

/**
 * 更新语言切换按钮 UI 状态
 * @param {string} lang 当前语言
 */
function updateLangSwitchUI(lang) {
    const labels = document.querySelectorAll('.lang-label');
    labels.forEach(label => {
        const labelLang = label.getAttribute('data-lang');
        if (labelLang === lang) {
            label.classList.remove('active');
        } else {
            label.classList.add('active');
        }
    });
}

/**
 * 初始化多语言功能
 */
function initI18n() {
    // 应用当前语言
    switchLanguage(currentLang);

    // 绑定语言切换按钮事件
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            switchLanguage(newLang);
        });
    }
}

// 将函数暴露到全局
window.t = t;
window.switchLanguage = switchLanguage;
window.currentLang = currentLang;
window.initI18n = initI18n;
