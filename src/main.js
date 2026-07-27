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

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const projectType = document.getElementById("projectType").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !projectType || !message) {
        showToast("Champ manquant", "Veuillez remplir tous les champs.", "error");
        return;
    }

    const whatsappMessage = `Bonjour Melvin,\n\nJe suis interesse par vos services.\n\n*Contact :*\nNom : ${name}\nEmail : ${email}\nType : ${projectType}\n\n*Message :*\n${message}`;
    const whatsappUrl = `https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    const btn = event.target.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Envoi en cours...";

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
                showToast("Email envoye !", "Votre message a ete recu par email.", "success");
            }).catch(() => { });
        }
    } catch (e) { }

    showToast("Message envoye !", "WhatsApp ouvert. Votre message sera traite rapidement.", "success");
    document.getElementById("contactForm").reset();
    btn.disabled = false;
    btn.textContent = original;
}
