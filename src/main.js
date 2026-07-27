// Configuration
const CONFIG = {
    emailjs: {
        publicKey: "BGSgPmygqLJJc1_gt",
        serviceId: "service_kdyo5iz",
        templateId: "template_xi9qynx"
    },
    contact: {
        email: "melvinyetonde@gmail.com",
        whatsapp: "2290191680276"
    }
};

// ========== i18n ==========
const I18N = {
    fr: {
        nav_stack: "STACK",
        nav_projects: "PROJETS",
        nav_certs: "CERTIFS",
        nav_contact: "CONTACT",
        nav_hire: "Me Recruter",
        hero_badge: "Open to Work",
        hero_title_html: 'Full Stack <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Cloud &amp; DevOps</span> Engineer.',
        hero_desc_html: 'Je con\u00e7ois des infrastructures cloud scalables, automatise les deploiements et developpe des applications web performantes. Specialise en <strong class="text-gray-700 dark:text-gray-200">AWS, Docker, Kubernetes, Python, Next.js &amp; Laravel</strong>.',
        hero_btn_projects: "Voir les Projets",
        hero_btn_contact: "Me Contacter",
        stat_cloud: "Cloud & DevOps",
        stat_exp: "3+ Ans Full Stack",
        stat_certs: "6 Certifications",
        stack_title_accent: "maitrisees.",
        stack_desc: "Mon ecosysteme technique pour concevoir des architectures cloud, des applications full stack et des systemes intelligents.",
        stack_cloud_desc: "Infrastructure AWS, Docker, Kubernetes, Terraform, CI/CD automatises.",
        stack_fs_title: "Full Stack & Mobile",
        stack_fs_desc: "Applications web reactives et mobiles avec Next.js, Laravel et Node.js.",
        stack_lang_title: "Langages & Data",
        stack_lang_desc: "Python avance, TypeScript, SQL, Bash et bases de donnees.",
        stack_ai_title: "IA & Data",
        stack_ai_desc: "Deep Learning, agents autonomes, RAG et deploiement LLM.",
        stack_tools_title: "Outils & Design",
        stack_tools_desc: "Git, Figma, Postman, CI/CD et outils de productivite.",
        projects_title_accent: "selectionnes.",
        projects_desc: "Applications reelies demontrant mes competences en cloud, full stack et IA.",
        projects_github: "Voir GitHub",
        project_arena_desc: "Dashboard analytique d'IA sportive avec predictions tactiques en temps reel, FastAPI et PyTorch.",
        project_eva_title: "Eva - Assistant Vocal IA",
        project_eva_desc: "Assistant Android intelligent avec commandes vocales, appels et reponses conversationnelles.",
        project_blackcine_desc: "Plateforme d'administration pour le cinema africain. Gestion des medias, roles et videos.",
        project_ecom_desc: "Plateforme marchande reactive avec panier temps reel, paiements securises et Docker.",
        project_up_desc: "Plateforme de gestion d'entreprise et d'equipes avec outils analytiques et PostgreSQL.",
        certs_title_accent: "obtenues.",
        certs_desc: "Formations completees qui valident mes competences en Cloud, DevOps, developpement web et IA.",
        cert_aws_desc: "Fondamentaux AWS : EC2, S3, IAM, VPC, Lambda et services cloud essentiels.",
        cert_meta_desc: "React, JavaScript avance, UX/UI Design, responsive web et deploiement.",
        cert_google_desc: "Design thinking, wireframing, prototypage Figma et tests utilisateurs.",
        cert_ibm_desc: "Machine Learning, Deep Learning avec PyTorch & Keras, deploiement de modeles.",
        cert_langchain_desc: "Agents autonomes, RAG pipelines, orchestration multi-agents et OpenAI.",
        cert_fs_desc: "Architecture MERN, APIs REST, authentification JWT, Docker et CI/CD.",
        banner_title_accent: "validees.",
        banner_desc: "Chaque certification represente des centaines d'heures de pratique sur des projets reels.",
        stat_certs_label: "Certifs",
        stat_exp_label: "Ans Exp.",
        stat_projects_label: "Projets",
        contact_title_accent: "ensemble.",
        contact_desc: "Une idee de projet ? Une opportunite ? N'hesitez pas a me contacter.",
        contact_email_label: "Email",
        contact_loc_label: "Localisation",
        contact_loc: "Cotonou, Benin",
        contact_phone_label: "Telephone",
        form_name: "Nom",
        form_name_ph: "Votre nom",
        form_email: "Email",
        form_email_ph: "votre@email.com",
        form_type: "Type de Projet",
        form_type_placeholder: "Selectionnez un type",
        form_type_1: "Application Web Full Stack",
        form_type_2: "Developpement d'API",
        form_type_3: "Consultation Technique",
        form_type_4: "Architecture Cloud / DevOps",
        form_msg: "Message",
        form_msg_ph: "Decrivez votre projet...",
        form_submit: "Envoyer le Message",
        footer_built: "© 2026. Built with HTML & Tailwind CSS.",
        toast_missing_title: "Champ manquant",
        toast_missing_msg: "Veuillez remplir tous les champs.",
        toast_sending: "Envoi en cours...",
        toast_email_ok: "Email envoye !",
        toast_email_msg: "Votre message a ete recu par email.",
        toast_whatsapp_ok: "Message envoye !",
        toast_whatsapp_msg: "WhatsApp ouvert. Votre message sera traite rapidement.",
    },
    en: {
        nav_stack: "STACK",
        nav_projects: "PROJECTS",
        nav_certs: "CERTS",
        nav_contact: "CONTACT",
        nav_hire: "Hire Me",
        hero_badge: "Open to Work",
        hero_title_html: 'Full Stack <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Cloud &amp; DevOps</span> Engineer.',
        hero_desc_html: 'I design scalable cloud infrastructures, automate deployments and build high-performance web applications. Specialized in <strong class="text-gray-700 dark:text-gray-200">AWS, Docker, Kubernetes, Python, Next.js &amp; Laravel</strong>.',
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        stat_cloud: "Cloud & DevOps",
        stat_exp: "3+ Yrs Full Stack",
        stat_certs: "6 Certifications",
        stack_title_accent: "mastered.",
        stack_desc: "My technical ecosystem for building cloud architectures, full stack applications and intelligent systems.",
        stack_cloud_desc: "AWS infrastructure, Docker, Kubernetes, Terraform, automated CI/CD.",
        stack_fs_title: "Full Stack & Mobile",
        stack_fs_desc: "Reactive web and mobile applications with Next.js, Laravel and Node.js.",
        stack_lang_title: "Languages & Data",
        stack_lang_desc: "Advanced Python, TypeScript, SQL, Bash and databases.",
        stack_ai_title: "AI & Data",
        stack_ai_desc: "Deep Learning, autonomous agents, RAG and LLM deployment.",
        stack_tools_title: "Tools & Design",
        stack_tools_desc: "Git, Figma, Postman, CI/CD and productivity tools.",
        projects_title_accent: "selected.",
        projects_desc: "Real-world applications demonstrating my cloud, full stack and AI skills.",
        projects_github: "View GitHub",
        project_arena_desc: "Sports AI analytics dashboard with real-time tactical predictions, FastAPI and PyTorch.",
        project_eva_title: "Eva - AI Voice Assistant",
        project_eva_desc: "Intelligent Android assistant with voice commands, calls and conversational responses.",
        project_blackcine_desc: "Administration platform for African cinema. Media, roles and video management.",
        project_ecom_desc: "Reactive marketplace with real-time cart, secure payments and Docker.",
        project_up_desc: "Business and team management platform with analytics tools and PostgreSQL.",
        certs_title_accent: "earned.",
        certs_desc: "Completed courses validating my skills in Cloud, DevOps, web development and AI.",
        cert_aws_desc: "AWS fundamentals: EC2, S3, IAM, VPC, Lambda and essential cloud services.",
        cert_meta_desc: "React, advanced JavaScript, UX/UI Design, responsive web and deployment.",
        cert_google_desc: "Design thinking, wireframing, Figma prototyping and user testing.",
        cert_ibm_desc: "Machine Learning, Deep Learning with PyTorch & Keras, model deployment.",
        cert_langchain_desc: "Autonomous agents, RAG pipelines, multi-agent orchestration and OpenAI.",
        cert_fs_desc: "MERN architecture, REST APIs, JWT authentication, Docker and CI/CD.",
        banner_title_accent: "validated.",
        banner_desc: "Each certification represents hundreds of hours of hands-on practice on real projects.",
        stat_certs_label: "Certs",
        stat_exp_label: "Yrs Exp.",
        stat_projects_label: "Projects",
        contact_title_accent: "together.",
        contact_desc: "Have a project idea? An opportunity? Feel free to reach out.",
        contact_email_label: "Email",
        contact_loc_label: "Location",
        contact_loc: "Cotonou, Benin",
        contact_phone_label: "Phone",
        form_name: "Name",
        form_name_ph: "Your name",
        form_email: "Email",
        form_email_ph: "your@email.com",
        form_type: "Project Type",
        form_type_placeholder: "Select a type",
        form_type_1: "Full Stack Web Application",
        form_type_2: "API Development",
        form_type_3: "Technical Consulting",
        form_type_4: "Cloud / DevOps Architecture",
        form_msg: "Message",
        form_msg_ph: "Describe your project...",
        form_submit: "Send Message",
        footer_built: "© 2026. Built with HTML & Tailwind CSS.",
        toast_missing_title: "Missing field",
        toast_missing_msg: "Please fill in all fields.",
        toast_sending: "Sending...",
        toast_email_ok: "Email sent!",
        toast_email_msg: "Your message has been received by email.",
        toast_whatsapp_ok: "Message sent!",
        toast_whatsapp_msg: "WhatsApp opened. Your message will be processed shortly.",
    }
};

let currentLang = localStorage.getItem("lang") || "fr";

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    const t = I18N[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        if (t[key]) el.innerHTML = t[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (t[key]) el.placeholder = t[key];
    });

    document.querySelectorAll("#langLabel, #langLabelMobile").forEach(el => {
        el.textContent = lang === "fr" ? "EN" : "FR";
    });
}

function toggleLang() {
    applyLang(currentLang === "fr" ? "en" : "fr");
}

// Init language on load
applyLang(currentLang);

// Initialiser EmailJS
(function () {
    if (typeof emailjs !== "undefined") {
        emailjs.init(CONFIG.emailjs.publicKey);
    }
})();

// Dark mode toggle
function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    const icon = document.querySelector("#darkModeIcon");
    if (icon) {
        icon.textContent = document.documentElement.classList.contains("dark") ? "light_mode" : "dark_mode";
    }
}

// Toast notifications
function showToast(title, message, type = "success") {
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const icons = {
        success: '<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        error: '<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        info: '<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    };

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.info}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-close" onclick="removeToast(this.parentElement)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
    `;

    container.appendChild(toast);
    setTimeout(() => removeToast(toast), 5000);
}

function removeToast(toast) {
    if (toast && toast.parentElement) {
        toast.classList.add("hiding");
        setTimeout(() => {
            if (toast.parentElement) toast.parentElement.removeChild(toast);
        }, 300);
    }
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("menuIcon");
    menu.classList.toggle("hidden");
    icon.textContent = menu.classList.contains("hidden") ? "menu" : "close";
}

function closeMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("menuIcon");
    menu.classList.add("hidden");
    icon.textContent = "menu";
}

document.addEventListener("click", function (e) {
    const menu = document.getElementById("mobileMenu");
    const btn = document.getElementById("mobileMenuButton");
    if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
        if (!menu.classList.contains("hidden")) closeMobileMenu();
    }
});

// Contact form (WhatsApp + EmailJS)
function sendContactForm(event) {
    event.preventDefault();

    const t = I18N[currentLang];
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const projectType = document.getElementById("projectType").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !projectType || !message) {
        showToast(t.toast_missing_title, t.toast_missing_msg, "error");
        return;
    }

    const whatsappMessage = `Bonjour Melvin,\n\nJe suis interesse par vos services.\n\n*Contact :*\nNom : ${name}\nEmail : ${email}\nType : ${projectType}\n\n*Message :*\n${message}`;
    const whatsappUrl = `https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    const btn = event.target.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = t.toast_sending;

    window.open(whatsappUrl, "_blank");

    try {
        if (typeof emailjs !== "undefined") {
            emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, {
                from_name: name,
                from_email: email,
                project_type: projectType,
                message: message,
                to_email: CONFIG.contact.email
            }).then(() => {
                showToast(t.toast_email_ok, t.toast_email_msg, "success");
            }).catch(() => { });
        }
    } catch (e) { }

    showToast(t.toast_whatsapp_ok, t.toast_whatsapp_msg, "success");
    document.getElementById("contactForm").reset();
    btn.disabled = false;
    btn.textContent = original;
}
