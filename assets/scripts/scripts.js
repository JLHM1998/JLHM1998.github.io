// ------------------------------
// Basic location metadata
// ------------------------------
const geeLocation = {
  region: "Lambayeque",
  country: "Peru",
  description:
    "Most of the research and consulting work has been carried out in the Lambayeque region of Peru."
};

console.log(`Research Location: ${geeLocation.region}, ${geeLocation.country}`);
console.log(geeLocation.description);

// ------------------------------
// Translations EN / ES
// ------------------------------
const translations = {
  en: {
    nav_brand_tagline: "Remote sensing",
    nav_brand_title: "Precision Agriculture & Water Resources",
    nav_home: "Home",
    nav_services: "Services",
    nav_packages: "Packages",
    nav_research: "Research",
    nav_cases: "Case Studies",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_pill: "Precision agriculture · Remote sensing · ET & CWSI",
    hero_title: "Precision Agriculture & Remote Sensing Consulting",
    hero_subtitle:
      'I help agricultural projects and institutions use <strong>satellites, UAVs and evapotranspiration models</strong> to optimize water use, monitor crop water stress and increase productivity in rice, olive, avocado and other crops.',
    hero_cta_primary:
      '<i class="fas fa-calendar-check"></i> Request a consultation',
    hero_cta_secondary:
      '<i class="fas fa-layer-group"></i> View services',
    hero_meta:
      "RENACYT – Level VII researcher · 4 Q1 publications",
    badge_msc:
      '<i class="fas fa-graduation-cap"></i> MSc Water Resources – UNALM',
    badge_uav:
      '<i class="fas fa-drone"></i> Certified UAV Pilot (DGAC – Peru)',
    badge_models:
      '<i class="fas fa-circle-nodes"></i> METRIC · TSEB · AquaCrop · GEE · Python',
    hero_card_location:
      '<i class="fas fa-location-dot"></i> Rice, olive & avocado fields – Peru',
    hero_card_tag:
      '<i class="fas fa-satellite-dish"></i> UAV + satellites',
    hero_floating_line1: "CWSI & ET monitoring",
    hero_floating_line2: "Lambayeque · Tacna · Coastal Peru",
    chip_thermal:
      '<i class="fas fa-temperature-high"></i> UAV & satellite thermal calibration',
    chip_et:
      '<i class="fas fa-water"></i> ETa/ETc from METRIC, AquaCrop & FAO-56',
    chip_yield:
      '<i class="fas fa-chart-line"></i> Yield modeling & water productivity',

    services_label: "Consulting Services",
    services_title: "What I can help you with",
    services_intro:
      "I provide technical support for research groups, agribusinesses and institutions seeking to implement <strong>data-driven water management and precision agriculture</strong>.",
    services_card1_title: "ET & CWSI Modeling",
    services_card1_text:
      "Design and implementation of workflows for <strong>actual and crop evapotranspiration (ETa/ETc)</strong> and <strong>Crop Water Stress Index (CWSI)</strong> using METRIC, TSEB, AquaCrop and thermal imagery (UAV + satellites).",
    services_card2_title: "Remote Sensing Pipelines",
    services_card2_text:
      "Development of <strong>Google Earth Engine</strong> scripts and Python workflows for multitemporal analysis with Sentinel-2 and Landsat 8/9: vegetation indices, texture metrics, land use and crop monitoring.",
    services_card3_title: "UAV Campaigns & Calibration",
    services_card3_text:
      "Planning and execution of <strong>UAV thermal and multispectral campaigns</strong>, radiometric calibration (ThermiCAL), RTK workflows and integration with field data and weather stations for robust model calibration.",
    services_card4_title: "Training & Workshops",
    services_card4_text:
      "Tailored courses on <strong>precision agriculture, remote sensing, GEE, Python</strong> and UAV-based monitoring for universities, research centers and companies in Latin America.",

    packages_label: "Consulting Packages",
    packages_title: "Ways we can work together",
    packages_intro:
      "I adapt each project to the client’s needs, but these packages provide a first reference of how I usually collaborate with organizations and research teams.",
    package1_title: "Remote Diagnostic",
    package1_tag: "Short-term support",
    package1_item1: "1 online meeting (up to 2 hours)",
    package1_item2: "Review of current data and workflows",
    package1_item3: "High-level recommendations for ET/CWSI or UAV usage",
    package1_item4: "Summary report (PDF) with clear next steps",
    package1_cta:
      '<i class="fas fa-paper-plane"></i> Request this package',
    package2_title: "Implementation & Training",
    package2_tag: "Most requested",
    package2_item1: "Design of a custom ET/CWSI or monitoring pipeline",
    package2_item2: "Production-ready scripts in GEE and/or Python",
    package2_item3: "Online training session for your technical team",
    package2_item4: "Technical report and documentation of all workflows",
    package2_cta:
      '<i class="fas fa-rocket"></i> Start a project',
    package3_title: "Research Partnership",
    package3_tag: "Long-term collaboration",
    package3_item1: "Support for research proposals & peer-reviewed papers",
    package3_item2: "Design of field campaigns (UAV + ground measurements)",
    package3_item3: "Co-development of models and advanced analyses",
    package3_item4: "Manuscript drafting, revision and response to reviewers",
    package3_cta:
      '<i class="fas fa-handshake"></i> Discuss collaboration',
    packages_footer:
      "Packages can be fully tailored for universities, research centers, NGOs and private companies working in irrigated agriculture and water resources.",

    research_label: "Peer-reviewed research",
    research_title: "Selected research works",
    research_intro:
      "My consulting and advisory work is supported by peer-reviewed research in <strong>Q1 international journals</strong>, focused on evapotranspiration, CWSI and precision agriculture in Peru.",
    research_card1_title:
      "Rice Yield Prediction with UAV Spectral & Textural Indices",
    research_card1_text:
      "Machine learning models using multispectral and textural features derived from UAV imagery to predict rice yield in Lambayeque, Peru, integrating structural and radiometric information.",
    research_card2_title:
      "Water Use Efficiency under AWD with UAV & AquaCrop",
    research_card2_text:
      "Evaluation of water use efficiency in rice using alternate wetting and drying (AWD), energy balance models, UAV thermal data and a calibrated AquaCrop model under Peruvian coastal conditions.",
    research_card3_title:
      "CWSI & Stomatal Conductance with Thermal Sensors",
    research_card3_text:
      "Monitoring crop water stress under different irrigation regimes using thermal imagery, stomatal conductance measurements and CWSI in rice fields on the northern coast of Peru.",

    cases_label: "Case studies",
    cases_title: "Real applications in the field",
    cases_intro:
      "From experimental plots to commercial irrigation schemes, I work with farmers, researchers and institutions to translate <strong>remote sensing</strong> into concrete management decisions.",
    cases_card1_title: "Rice schemes in Lambayeque, Peru",
    cases_card1_text:
      "Integration of Sentinel-2, UAV thermal imagery and AquaCrop to support irrigation scheduling, identify zones of water stress and quantify water productivity at field scale.",
    cases_card1_cta: "Discuss a similar project",

    timeline_label: "Professional path",
    timeline_title: "Professional timeline",
    timeline_intro:
      "A quick overview of how my work in <strong>remote sensing</strong>, <strong>water resources</strong> and <strong>UAVs</strong> has evolved in the last years.",
    timeline_item1:
      "MSc Thesis – Monitoring CWSI in rice fields in Lambayeque using satellite imagery in Google Earth Engine, calibrated with thermal UAV data and in-situ measurements.",
    timeline_item2:
      "Research assistant in PROCIENCIA projects on precision agriculture, greenhouse gas (GHG) reduction and water productivity in irrigated rice systems.",
    timeline_item3:
      "Implementation of smart irrigation and UAV-based monitoring for smallholder rice producers on the northern coast of Peru, combining field data, satellite imagery and agronomic knowledge.",

    map_label: "Where I work",
    map_title: "Field sites & collaborations",
    map_intro:
      "Most of my field work and consulting projects are located in <strong>Lambayeque</strong>, <strong>Tacna</strong> and other regions of Peru, with potential for <strong>remote collaboration</strong> across Latin America.",

    projects_label: "GitHub projects",
    projects_title: "Open-source tools & workflows",
    projects_intro:
      "A selection of open-source tools that I maintain and use in consulting and research for <strong>CWSI</strong>, <strong>ET modeling</strong> and <strong>UAV data processing</strong>.",
    projects_card1_title: "GEE & Python Workflows",
    projects_card1_text:
      "Scripts for vegetation indices, CWSI, ET estimation and multitemporal analysis with Sentinel-2 and Landsat 8/9, focused on irrigated agriculture in Peru.",
    projects_card2_title: "UAV Thermal & Multispectral Processing",
    projects_card2_text:
      "Notebooks and pipelines for thermal calibration, mosaicking and integration of UAV imagery with ground measurements and meteorological data.",

    testimonials_label: "Testimonials",
    testimonials_title: "What collaborators say",
    testimonial1_text:
      '"José combines deep knowledge in water resources with practical experience in UAV and satellite applications. His support has been key to strengthening our research on precision agriculture."',
    testimonial1_author: "– Research collaborator",
    testimonial2_text:
      '"His capacity to translate complex remote sensing workflows into concrete recommendations for irrigation management is outstanding. Clear, rigorous and highly applied."',
    testimonial2_author: "– Project coordinator",

    github_label: "GitHub activity",
    github_title: "Code behind the projects",
    github_intro:
      "I maintain active repositories with examples, utilities and reproducible workflows for ET, CWSI and UAV-based agronomic monitoring.",

    contact_label: "Contact",
    contact_title: "Work with me",
    contact_intro:
      "If you need support for a project in <strong>remote sensing, CWSI, ET modeling, UAV campaigns or precision agriculture</strong>, feel free to reach out. I’ll get back to you with a brief proposal for next steps.",
    contact_form_title: "Tell me about your project",
    contact_form_subtitle:
      "Share a few details and I will reply with a short diagnosis and possible ways to collaborate.",
    contact_placeholder_name: "Name / Organization",
    contact_placeholder_email: "Email",
    contact_placeholder_topic:
      "Project topic (e.g. CWSI, ET, UAV, training)",
    contact_placeholder_message:
      "Briefly describe your project, current data (UAV / satellite / field) and expected outcomes.",
    contact_button:
      '<i class="fas fa-paper-plane"></i> Send inquiry',
    contact_direct_title: "Direct contact",
    contact_note:
      "For collaborations with universities or institutions, I can provide a formal CV, list of publications and a brief concept note adapted to your call or project.",

    githubStats_label: "GitHub activity",
    footer_text: "Remote Sensing & Precision Agriculture Consulting"
  },

  es: {
    nav_brand_tagline: "Teledetección",
    nav_brand_title: "Agricultura de Precisión y Recursos Hídricos",
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_packages: "Paquetes",
    nav_research: "Investigación",
    nav_cases: "Casos de estudio",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",

    hero_pill:
      "Agricultura de precisión · Teledetección · ET y CWSI",
    hero_title:
      "Consultoría en Agricultura de Precisión y Teledetección",
    hero_subtitle:
      'Apoyo a proyectos e instituciones agrícolas a usar <strong>satélites, UAVs y modelos de evapotranspiración</strong> para optimizar el uso del agua, monitorear el estrés hídrico del cultivo y aumentar la productividad en arroz, olivo, palto y otros cultivos.',
    hero_cta_primary:
      '<i class="fas fa-calendar-check"></i> Solicitar una consulta',
    hero_cta_secondary:
      '<i class="fas fa-layer-group"></i> Ver servicios',
    hero_meta:
      "Investigador RENACYT – Nivel VII · 4 publicaciones Q1",
    badge_msc:
      '<i class="fas fa-graduation-cap"></i> MSc Recursos Hídricos – UNALM',
    badge_uav:
      '<i class="fas fa-drone"></i> Piloto UAV certificado (DGAC – Perú)',
    badge_models:
      '<i class="fas fa-circle-nodes"></i> METRIC · TSEB · AquaCrop · GEE · Python',
    hero_card_location:
      '<i class="fas fa-location-dot"></i> Campos de arroz, olivo y palto – Perú',
    hero_card_tag:
      '<i class="fas fa-satellite-dish"></i> UAV + satélites',
    hero_floating_line1: "Monitoreo de CWSI y ET",
    hero_floating_line2: "Lambayeque · Tacna · Costa del Perú",
    chip_thermal:
      '<i class="fas fa-temperature-high"></i> Calibración térmica UAV y satélite',
    chip_et:
      '<i class="fas fa-water"></i> ETa/ETc con METRIC, AquaCrop y FAO-56',
    chip_yield:
      '<i class="fas fa-chart-line"></i> Modelado de rendimiento y productividad hídrica',

    services_label: "Servicios de consultoría",
    services_title: "En qué puedo ayudarte",
    services_intro:
      "Brindo soporte técnico a grupos de investigación, agroindustrias e instituciones que buscan implementar <strong>gestión hídrica y agricultura de precisión basada en datos</strong>.",
    services_card1_title: "Modelado de ET y CWSI",
    services_card1_text:
      "Diseño e implementación de flujos de trabajo para <strong>evapotranspiración real y de cultivo (ETa/ETc)</strong> y <strong>Índice de Estrés Hídrico del Cultivo (CWSI)</strong> usando METRIC, TSEB, AquaCrop e imágenes térmicas (UAV + satélites).",
    services_card2_title: "Pipelines de teledetección",
    services_card2_text:
      "Desarrollo de scripts en <strong>Google Earth Engine</strong> y flujos en Python para análisis multitemporal con Sentinel-2 y Landsat 8/9: índices de vegetación, métricas texturales, uso del suelo y monitoreo de cultivos.",
    services_card3_title: "Campañas UAV y calibración",
    services_card3_text:
      "Planificación y ejecución de <strong>campañas térmicas y multiespectrales con UAV</strong>, calibración radiométrica (ThermiCAL), flujos RTK e integración con datos de campo y estaciones meteorológicas.",
    services_card4_title: "Capacitación y talleres",
    services_card4_text:
      "Cursos a medida en <strong>agricultura de precisión, teledetección, GEE, Python</strong> y monitoreo con UAV para universidades, centros de investigación y empresas de Latinoamérica.",

    packages_label: "Paquetes de consultoría",
    packages_title: "Formas de trabajar juntos",
    packages_intro:
      "Adapto cada proyecto a las necesidades del cliente, pero estos paquetes dan una primera referencia de cómo suelo colaborar con instituciones y equipos de investigación.",
    package1_title: "Diagnóstico remoto",
    package1_tag: "Soporte de corta duración",
    package1_item1: "1 reunión en línea (hasta 2 horas)",
    package1_item2: "Revisión de datos y flujos actuales",
    package1_item3:
      "Recomendaciones generales para ET/CWSI o uso de UAV",
    package1_item4:
      "Informe resumen (PDF) con pasos siguientes claros",
    package1_cta:
      '<i class="fas fa-paper-plane"></i> Solicitar este paquete',
    package2_title: "Implementación y capacitación",
    package2_tag: "Más solicitado",
    package2_item1:
      "Diseño de un pipeline a medida para ET/CWSI o monitoreo",
    package2_item2:
      "Scripts listos para producción en GEE y/o Python",
    package2_item3:
      "Sesión de capacitación en línea para tu equipo técnico",
    package2_item4:
      "Informe técnico y documentación de todos los flujos",
    package2_cta:
      '<i class="fas fa-rocket"></i> Iniciar un proyecto',
    package3_title: "Alianza de investigación",
    package3_tag: "Colaboración de largo plazo",
    package3_item1:
      "Apoyo en formulación de proyectos y artículos científicos",
    package3_item2:
      "Diseño de campañas de campo (UAV + mediciones en sitio)",
    package3_item3:
      "Codesarrollo de modelos y análisis avanzados",
    package3_item4:
      "Redacción, revisión y respuesta a revisores",
    package3_cta:
      '<i class="fas fa-handshake"></i> Conversar colaboración',
    packages_footer:
      "Los paquetes pueden adaptarse completamente para universidades, centros de investigación, ONG y empresas privadas que trabajan en agricultura de riego y recursos hídricos.",

    research_label: "Investigación indexada",
    research_title: "Trabajos de investigación seleccionados",
    research_intro:
      "Mi trabajo de consultoría y asesoría se sustenta en artículos arbitrados en <strong>revistas internacionales Q1</strong>, enfocados en evapotranspiración, CWSI y agricultura de precisión en el Perú.",
    research_card1_title:
      "Predicción de rendimiento de arroz con índices espectrales y texturales UAV",
    research_card1_text:
      "Modelos de aprendizaje automático usando índices multiespectrales y texturales derivados de imágenes UAV para predecir el rendimiento de arroz en Lambayeque, integrando información estructural y radiométrica.",
    research_card2_title:
      "Eficiencia en el uso del agua bajo AWD con UAV y AquaCrop",
    research_card2_text:
      "Evaluación de la eficiencia en el uso del agua en arroz utilizando riego intermitente (AWD), modelos de balance de energía, imágenes térmicas UAV y un modelo AquaCrop calibrado en condiciones costeras del Perú.",
    research_card3_title:
      "CWSI y conductancia estomática con sensores térmicos",
    research_card3_text:
      "Monitoreo del estrés hídrico del cultivo bajo distintos manejos de riego usando imágenes térmicas, mediciones de conductancia estomática y CWSI en campos de arroz de la costa norte del Perú.",

    cases_label: "Casos de estudio",
    cases_title: "Aplicaciones reales en campo",
    cases_intro:
      "Desde parcelas experimentales hasta esquemas de riego comerciales, trabajo con productores, investigadores e instituciones para traducir la <strong>teledetección</strong> en decisiones de manejo concretas.",
    cases_card1_title: "Esquemas arroceros en Lambayeque, Perú",
    cases_card1_text:
      "Integración de Sentinel-2, imágenes térmicas UAV y AquaCrop para apoyar la programación de riego, identificar zonas de estrés hídrico y cuantificar la productividad hídrica a escala de parcela.",
    cases_card1_cta: "Conversar un proyecto similar",

    timeline_label: "Trayectoria profesional",
    timeline_title: "Línea de tiempo profesional",
    timeline_intro:
      "Una vista rápida de cómo ha evolucionado mi trabajo en <strong>teledetección</strong>, <strong>recursos hídricos</strong> y <strong>UAVs</strong> en los últimos años.",
    timeline_item1:
      "Tesis de Maestría – Monitoreo del CWSI en arrozales de Lambayeque mediante imágenes satelitales en Google Earth Engine, calibradas con datos térmicos UAV y mediciones in situ.",
    timeline_item2:
      "Asistente de investigación en proyectos PROCIENCIA sobre agricultura de precisión, reducción de GEI y productividad hídrica en sistemas de arroz bajo riego.",
    timeline_item3:
      "Implementación de riego inteligente y monitoreo con UAV para pequeños productores de arroz en la costa norte del Perú, combinando datos de campo, imágenes satelitales y conocimiento agronómico.",

    map_label: "Dónde trabajo",
    map_title: "Sitios de campo y colaboraciones",
    map_intro:
      "La mayor parte de mi trabajo de campo y consultorías se ubica en <strong>Lambayeque</strong>, <strong>Tacna</strong> y otras regiones del Perú, con posibilidad de <strong>colaboración remota</strong> en toda Latinoamérica.",

    projects_label: "Proyectos en GitHub",
    projects_title: "Herramientas y flujos abiertos",
    projects_intro:
      "Una selección de herramientas open-source que mantengo y utilizo en consultorías e investigación para <strong>CWSI</strong>, <strong>modelado de ET</strong> y <strong>procesamiento de datos UAV</strong>.",
    projects_card1_title:
      "Flujos GEE y Python",
    projects_card1_text:
      "Scripts para índices de vegetación, CWSI, estimación de ET y análisis multitemporal con Sentinel-2 y Landsat 8/9, enfocados en agricultura de riego en el Perú.",
    projects_card2_title:
      "Procesamiento térmico y multiespectral UAV",
    projects_card2_text:
      "Notebooks y pipelines para calibración térmica, generación de ortomosaicos e integración de imágenes UAV con mediciones de campo y datos meteorológicos.",

    testimonials_label: "Testimonios",
    testimonials_title: "Qué dicen los colaboradores",
    testimonial1_text:
      '"José combina un profundo dominio en recursos hídricos con experiencia práctica en aplicaciones con UAV y satélites. Su apoyo ha sido clave para fortalecer nuestra investigación en agricultura de precisión."',
    testimonial1_author: "– Colaborador de investigación",
    testimonial2_text:
      '"Su capacidad para traducir flujos complejos de teledetección en recomendaciones concretas para el manejo del riego es sobresaliente. Claro, riguroso y altamente aplicado."',
    testimonial2_author: "– Coordinador de proyecto",

    github_label: "Actividad en GitHub",
    github_title: "Código detrás de los proyectos",
    github_intro:
      "Mantengo repositorios activos con ejemplos, utilidades y flujos reproducibles para ET, CWSI y monitoreo agronómico basado en UAV.",

    contact_label: "Contacto",
    contact_title: "Trabajemos juntos",
    contact_intro:
      "Si necesitas soporte para un proyecto de <strong>teledetección, CWSI, modelado de ET, campañas UAV o agricultura de precisión</strong>, no dudes en escribirme. Te responderé con un breve diagnóstico y posibles pasos a seguir.",
    contact_form_title: "Cuéntame sobre tu proyecto",
    contact_form_subtitle:
      "Comparte algunos detalles y te responderé con un diagnóstico corto y alternativas de colaboración.",
    contact_placeholder_name: "Nombre / Institución",
    contact_placeholder_email: "Correo electrónico",
    contact_placeholder_topic:
      "Tema del proyecto (p.ej. CWSI, ET, UAV, capacitación)",
    contact_placeholder_message:
      "Describe brevemente tu proyecto, los datos disponibles (UAV / satélite / campo) y los resultados esperados.",
    contact_button:
      '<i class="fas fa-paper-plane"></i> Enviar consulta',
    contact_direct_title: "Contacto directo",
    contact_note:
      "Para colaboraciones con universidades o instituciones puedo enviar CV actualizado, lista de publicaciones y una nota conceptual breve adaptada a tu convocatoria.",

    footer_text:
      "Consultoría en Teledetección y Agricultura de Precisión"
  }
};

// ------------------------------
// Initialize Map (no API key required)
// ------------------------------
function initMapIframe() {
  const mapFrame = document.getElementById("mapFrame");
  if (!mapFrame) return;

  const query = `${geeLocation.region}, ${geeLocation.country}`;
  const url =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(query) +
    "&output=embed";

  mapFrame.src = url;
}

// ------------------------------
// Language toggle
// ------------------------------
function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

  // Placeholders
  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = dict[key];
      if (value !== undefined) {
        el.placeholder = value;
      }
    });

  // Active state in buttons
  document
    .querySelectorAll(".lang-option")
    .forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

  localStorage.setItem("lang", lang);
}

function initLanguageToggle() {
  const saved = localStorage.getItem("lang") || "en";
  applyTranslations(saved);

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang || "en";
      applyTranslations(lang);
    });
  });
}

// ------------------------------
// Dark Mode Toggle
// ------------------------------
function initDarkModeToggle() {
  const toggleBtn = document.getElementById("toggleDark");
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector("i");

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (isDark) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}

// ------------------------------
// Smooth Scroll for Nav Links + Active state
// ------------------------------
function initSmoothScroll() {
  const links = document.querySelectorAll(".nav-links a[href^='#']");
  const offset = 70;

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      const navLinks = document.getElementById("navLinks");

      if (target) {
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }

      if (navLinks && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });
  });
}

function initActiveNavOnScroll() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    const scrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + window.pageYOffset;
      const offsetBottom = offsetTop + section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos + 90 >= offsetTop && scrollPos + 90 < offsetBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("is-active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("is-active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
}

// ------------------------------
// Footer Year
// ------------------------------
function setCurrentYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ------------------------------
// Scroll Reveal for .reveal elements
// ------------------------------
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ------------------------------
// Nav scroll shadow
// ------------------------------
function initNavScrollEffect() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  function handleScroll() {
    if (window.scrollY > 10) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

// ------------------------------
// Mobile nav toggle
// ------------------------------
function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ------------------------------
// Contact form handler (simple mailto)
// ------------------------------
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const topic = document.getElementById("topic")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const subject = encodeURIComponent(
      `[Website] Consulting inquiry – ${topic || "Remote sensing / ET / CWSI"}`
    );
    const body = encodeURIComponent(
      `Name / Organization: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:joluhumu98@gmail.com?subject=${subject}&body=${body}`;
  });
}

// ------------------------------
// DOMContentLoaded
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initMapIframe();
  initLanguageToggle();
  initDarkModeToggle();
  initSmoothScroll();
  initActiveNavOnScroll();
  setCurrentYear();
  initScrollReveal();
  initNavScrollEffect();
  initMobileNav();
  initContactForm();
});
