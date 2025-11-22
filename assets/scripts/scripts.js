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
// Translations (EN / ES)
// ------------------------------
const translations = {
  en: {
    nav_brand_top: "REMOTE SENSING",
    nav_brand_bottom: "Precision Agriculture & Water Resources",

    nav_home: "Home",
    nav_services: "Services",
    nav_packages: "Packages",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_cases: "Case Studies",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_pill: "Precision agriculture · Remote sensing · ET & CWSI",
    hero_title: "Precision Agriculture & Remote Sensing Consulting",
    hero_subtitle:
      "I help agricultural projects and institutions use satellites, UAVs and evapotranspiration models to optimize water use, monitor crop water stress and increase productivity in rice, olive, avocado and other crops.",
    hero_cta_primary: "Request a consultation",
    hero_cta_secondary: "View services",
    hero_meta: "RENACYT – Level VII researcher · 4 Q1 publications",
    hero_badge_msc: "MSc Water Resources – UNALM",
    hero_badge_uav: "Certified UAV Pilot (DGAC – Peru)",
    hero_badge_models: "METRIC · TSEB · AquaCrop · GEE · Python",
    hero_card_location: "Rice, olive & avocado fields – Peru",
    hero_card_mode: "UAV + satellites",
    hero_floating_line1: "CWSI & ET monitoring",
    hero_floating_line2: "Lambayeque · Tacna · Coastal Peru",
    hero_chip1: "UAV & satellite thermal calibration",
    hero_chip2: "ETa/ETc from METRIC, AquaCrop & FAO-56",
    hero_chip3: "Yield modeling & water productivity",

    services_label: "Consulting Services",
    services_title: "What I can help you with",
    services_intro:
      "I provide technical support for research groups, agribusinesses and institutions seeking to implement data-driven water management and precision agriculture.",
    services_1_title: "ET & CWSI Modeling",
    services_1_desc:
      "Design and implementation of workflows for actual and crop evapotranspiration (ETa/ETc) and Crop Water Stress Index (CWSI) using METRIC, TSEB, AquaCrop and thermal imagery (UAV + satellites).",
    services_2_title: "Remote Sensing Pipelines",
    services_2_desc:
      "Development of Google Earth Engine scripts and Python workflows for multitemporal analysis with Sentinel-2 and Landsat 8/9: vegetation indices, texture metrics, land use and crop monitoring.",
    services_3_title: "UAV Campaigns & Calibration",
    services_3_desc:
      "Planning and execution of UAV thermal and multispectral campaigns, radiometric calibration (ThermiCAL), RTK workflows and integration with field data and weather stations for robust model calibration.",
    services_4_title: "Training & Workshops",
    services_4_desc:
      "Tailored courses on precision agriculture, remote sensing, GEE, Python and UAV-based monitoring for universities, research centers and companies in Latin America.",

    packages_label: "Consulting Packages",
    packages_title: "Ways we can work together",
    packages_intro:
      "I adapt each project to the client’s needs, but these packages provide a first reference of how I usually collaborate with organizations and research teams.",
    package_1_title: "Remote Diagnostic",
    package_1_tag: "Short-term support",
    package_1_li1: "1 online meeting (up to 2 hours)",
    package_1_li2: "Review of current data and workflows",
    package_1_li3: "High-level recommendations for ET/CWSI or UAV usage",
    package_1_li4: "Summary report (PDF) with clear next steps",
    package_1_button: "Request this package",

    package_2_title: "Implementation & Training",
    package_2_tag: "Most requested",
    package_2_li1: "Design of a custom ET/CWSI or monitoring pipeline",
    package_2_li2: "Production-ready scripts in GEE and/or Python",
    package_2_li3: "Online training session for your technical team",
    package_2_li4: "Technical report and documentation of all workflows",
    package_2_button: "Start a project",

    package_3_title: "Research Partnership",
    package_3_tag: "Long-term collaboration",
    package_3_li1: "Support for research proposals & peer-reviewed papers",
    package_3_li2: "Design of field campaigns (UAV + ground measurements)",
    package_3_li3: "Co-development of models and advanced analyses",
    package_3_li4: "Manuscript drafting, revision and response to reviewers",
    package_3_button: "Discuss collaboration",

    packages_footer:
      "Packages can be fully tailored for universities, research centers, NGOs and private companies working in irrigated agriculture and water resources.",

    research_label: "Peer-reviewed research",
    research_title: "Selected research works",
    research_intro:
      "My consulting and advisory work is supported by peer-reviewed research in Q1 international journals, focused on evapotranspiration, CWSI and precision agriculture in Peru.",
    research_1_title: "Rice Yield Prediction with UAV Spectral & Textural Indices",
    research_1_desc:
      "Machine learning models using multispectral and textural features derived from UAV imagery to predict rice yield in Lambayeque, Peru, integrating structural and radiometric information.",
    research_2_title: "Water Use Efficiency under AWD with UAV & AquaCrop",
    research_2_desc:
      "Evaluation of water use efficiency in rice using alternate wetting and drying (AWD), energy balance models, UAV thermal data and a calibrated AquaCrop model under Peruvian coastal conditions.",
    research_3_title: "CWSI & Stomatal Conductance with Thermal Sensors",
    research_3_desc:
      "Monitoring crop water stress under different irrigation regimes using thermal imagery, stomatal conductance measurements and CWSI in rice fields on the northern coast of Peru.",

    pubs_label: "Q1 Publications",
    pubs_title: "Peer-reviewed journal articles",
    pubs_intro:
      "A selection of recent papers published in Q1 journals, focused on evapotranspiration (ET), crop water stress (CWSI), UAV-based monitoring and precision agriculture in Peruvian irrigated systems.",
    pubs_1_title: "Rice Yield Prediction with UAV Spectral & Textural Indices",
    pubs_1_meta: "Remote Sensing (Q1, MDPI) · 2025 · DOI: 10.3390/rs17040632",
    pubs_1_desc:
      "Machine-learning models combining multispectral and textural metrics from UAV imagery to estimate rice yield in coastal Peru.",
    pubs_2_title: "Water Use Efficiency under AWD with UAV & AquaCrop",
    pubs_2_meta: "Remote Sensing (Q1, MDPI) · 2024 · DOI: 10.3390/rs16203882",
    pubs_2_desc:
      "Assessment of water use efficiency in rice using alternate wetting and drying (AWD), UAV thermal data and AquaCrop simulations.",
    pubs_3_title:
      "Crop Water Stress Index & Stomatal Conductance from Thermal Sensors",
    pubs_3_meta: "Remote Sensing (Q1, MDPI) · 2024 · DOI: 10.3390/rs16050796",
    pubs_3_desc:
      "Evaluation of CWSI and stomatal conductance under different irrigation regimes using fixed and UAV-mounted thermal sensors in rice.",
    pubs_footer:
      "Full publication list available on request (CV / Google Scholar / ORCID).",

    cases_label: "Case studies",
    cases_title: "Real applications in the field",
    cases_intro:
      "From experimental plots to commercial irrigation schemes, I work with farmers, researchers and institutions to translate remote sensing into concrete management decisions.",
    case_1_title: "Rice schemes in Lambayeque, Peru",
    case_1_desc:
      "Integration of Sentinel-2, UAV thermal imagery and AquaCrop to support irrigation scheduling, identify zones of water stress and quantify water productivity at field scale.",
    case_1_cta: "Discuss a similar project",

    timeline_label: "Professional path",
    timeline_title: "Professional timeline",
    timeline_intro:
      "A quick overview of how my work in remote sensing, water resources and UAVs has evolved in the last years.",
    timeline_1_title: "2024 – Present",
    timeline_1_desc:
      "MSc Thesis – Monitoring CWSI in rice fields in Lambayeque using satellite imagery in Google Earth Engine, calibrated with thermal UAV data and in-situ measurements.",
    timeline_2_title: "2023 – 2024",
    timeline_2_desc:
      "Research assistant in PROCIENCIA projects on precision agriculture, greenhouse gas (GHG) reduction and water productivity in irrigated rice systems.",
    timeline_3_title: "2021 – 2023",
    timeline_3_desc:
      "Implementation of smart irrigation and UAV-based monitoring for smallholder rice producers on the northern coast of Peru, combining field data, satellite imagery and agronomic knowledge.",

    map_label: "Where I work",
    map_title: "Field sites & collaborations",
    map_intro:
      "Most of my field work and consulting projects are located in Lambayeque, Tacna and other regions of Peru, with potential for remote collaboration across Latin America.",

    projects_label: "GitHub projects",
    projects_title: "Open-source tools & workflows",
    projects_intro:
      "A selection of open-source tools that I maintain and use in consulting and research for CWSI, ET modeling and UAV data processing.",
    project_1_title: "GEE & Python Workflows",
    project_1_desc:
      "Scripts for vegetation indices, CWSI, ET estimation and multitemporal analysis with Sentinel-2 and Landsat 8/9, focused on irrigated agriculture in Peru.",
    project_2_title: "UAV Thermal & Multispectral Processing",
    project_2_desc:
      "Notebooks and pipelines for thermal calibration, mosaicking and integration of UAV imagery with ground measurements and meteorological data.",

    testimonials_label: "Testimonials",
    testimonials_title: "What collaborators say",
    testimonial_1_text:
      "“José combines deep knowledge in water resources with practical experience in UAV and satellite applications. His support has been key to strengthening our research on precision agriculture.”",
    testimonial_1_author: "– Research collaborator",
    testimonial_2_text:
      "“His capacity to translate complex remote sensing workflows into concrete recommendations for irrigation management is outstanding. Clear, rigorous and highly applied.”",
    testimonial_2_author: "– Project coordinator",

    ghstats_label: "GitHub activity",
    ghstats_title: "Code behind the projects",
    ghstats_intro:
      "I maintain active repositories with examples, utilities and reproducible workflows for ET, CWSI and UAV-based agronomic monitoring.",

    contact_label: "Contact",
    contact_title: "Work with me",
    contact_intro:
      "If you need support for a project in remote sensing, CWSI, ET modeling, UAV campaigns or precision agriculture, feel free to reach out. I’ll get back to you with a brief proposal for next steps.",
    contact_form_title: "Tell me about your project",
    contact_form_intro:
      "Share a few details and I will reply with a short diagnosis and possible ways to collaborate.",
    contact_button: "Send inquiry",
    contact_direct_title: "Direct contact",
    contact_note:
      "For collaborations with universities or institutions, I can provide a formal CV, list of publications and a brief concept note adapted to your call or project.",

    footer_text: "Remote Sensing & Precision Agriculture Consulting",

    placeholder_name: "Name / Organization",
    placeholder_email: "Email",
    placeholder_topic: "Project topic (e.g. CWSI, ET, UAV, training)",
    placeholder_message:
      "Briefly describe your project, current data (UAV / satellite / field) and expected outcomes.",
    mail_subject_prefix: "[Website] Consulting inquiry – ",
    mail_subject_fallback: "Remote sensing / ET / CWSI"
  },

  es: {
    nav_brand_top: "TELEDTECCIÓN",
    nav_brand_bottom: "Agricultura de Precisión y Recursos Hídricos",

    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_packages: "Paquetes",
    nav_research: "Investigación",
    nav_publications: "Publicaciones",
    nav_cases: "Casos de estudio",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",

    hero_pill: "Agricultura de precisión · Teledetección · ET y CWSI",
    hero_title: "Consultoría en Agricultura de Precisión y Teledetección",
    hero_subtitle:
      "Apoyo a proyectos e instituciones agrícolas en el uso de satélites, UAVs y modelos de evapotranspiración para optimizar el uso del agua, monitorear el estrés hídrico del cultivo y aumentar la productividad en arroz, olivo, palto y otros cultivos.",
    hero_cta_primary: "Solicitar una consultoría",
    hero_cta_secondary: "Ver servicios",
    hero_meta: "Investigador RENACYT – Nivel VII · 4 publicaciones Q1",
    hero_badge_msc: "MSc Recursos Hídricos – UNALM",
    hero_badge_uav: "Piloto UAV certificado (DGAC – Perú)",
    hero_badge_models: "METRIC · TSEB · AquaCrop · GEE · Python",
    hero_card_location: "Campos de arroz, olivo y palto – Perú",
    hero_card_mode: "UAV + satélites",
    hero_floating_line1: "Monitoreo de CWSI y ET",
    hero_floating_line2: "Lambayeque · Tacna · Costa del Perú",
    hero_chip1: "Calibración térmica UAV y satélite",
    hero_chip2: "ETa/ETc con METRIC, AquaCrop y FAO-56",
    hero_chip3: "Modelado de rendimiento y productividad hídrica",

    services_label: "Servicios de consultoría",
    services_title: "En qué puedo ayudarte",
    services_intro:
      "Brindo soporte técnico a grupos de investigación, agroindustrias e instituciones que desean implementar gestión hídrica y agricultura de precisión basadas en datos.",
    services_1_title: "Modelado de ET y CWSI",
    services_1_desc:
      "Diseño e implementación de flujos de trabajo para evapotranspiración real y de cultivo (ETa/ETc) e Índice de Estrés Hídrico del Cultivo (CWSI) usando METRIC, TSEB, AquaCrop e imágenes térmicas (UAV + satélite).",
    services_2_title: "Pipelines de teledetección",
    services_2_desc:
      "Desarrollo de scripts en Google Earth Engine y flujos en Python para análisis multitemporal con Sentinel-2 y Landsat 8/9: índices de vegetación, métricas texturales, uso del suelo y monitoreo de cultivos.",
    services_3_title: "Campañas UAV y calibración",
    services_3_desc:
      "Planificación y ejecución de campañas térmicas y multiespectrales con UAV, calibración radiométrica (ThermiCAL), flujos RTK e integración con datos de campo y estaciones meteorológicas para una calibración robusta.",
    services_4_title: "Capacitación y talleres",
    services_4_desc:
      "Cursos a medida en agricultura de precisión, teledetección, GEE, Python y monitoreo con UAV para universidades, centros de investigación y empresas de Latinoamérica.",

    packages_label: "Paquetes de consultoría",
    packages_title: "Formas de trabajo",
    packages_intro:
      "Cada proyecto se adapta a las necesidades del cliente, pero estos paquetes dan una primera referencia de cómo suelo colaborar con organizaciones y equipos de investigación.",
    package_1_title: "Diagnóstico remoto",
    package_1_tag: "Soporte puntual",
    package_1_li1: "1 reunión en línea (hasta 2 horas)",
    package_1_li2: "Revisión de datos y flujos de trabajo actuales",
    package_1_li3:
      "Recomendaciones generales para ET/CWSI o uso de UAVs",
    package_1_li4:
      "Informe breve (PDF) con próximos pasos recomendados",
    package_1_button: "Solicitar este paquete",

    package_2_title: "Implementación y capacitación",
    package_2_tag: "Más solicitado",
    package_2_li1:
      "Diseño de un pipeline personalizado de ET/CWSI o monitoreo",
    package_2_li2:
      "Scripts listos para producción en GEE y/o Python",
    package_2_li3:
      "Sesión de capacitación en línea para tu equipo técnico",
    package_2_li4:
      "Informe técnico y documentación de todos los flujos",
    package_2_button: "Iniciar un proyecto",

    package_3_title: "Alianza de investigación",
    package_3_tag: "Colaboración de largo plazo",
    package_3_li1:
      "Apoyo en formulación de proyectos y artículos científicos",
    package_3_li2:
      "Diseño de campañas de campo (UAV + mediciones en sitio)",
    package_3_li3:
      "Co-desarrollo de modelos y análisis avanzados",
    package_3_li4:
      "Redacción, revisión y respuesta a revisores de revistas",
    package_3_button: "Explorar colaboración",

    packages_footer:
      "Los paquetes pueden adaptarse completamente a universidades, centros de investigación, ONG y empresas privadas que trabajen en agricultura de riego y recursos hídricos.",

    research_label: "Investigación científica",
    research_title: "Trabajos de investigación seleccionados",
    research_intro:
      "Mi trabajo de consultoría se sustenta en investigaciones publicadas en revistas internacionales Q1, enfocadas en evapotranspiración, CWSI y agricultura de precisión en el Perú.",
    research_1_title:
      "Predicción de rendimiento de arroz con índices espectrales y texturales UAV",
    research_1_desc:
      "Modelos de machine learning que usan características multiespectrales y texturales derivadas de imágenes UAV para estimar el rendimiento de arroz en Lambayeque, integrando información estructural y radiométrica.",
    research_2_title:
      "Eficiencia en el uso del agua bajo AWD con UAV y AquaCrop",
    research_2_desc:
      "Evaluación de la eficiencia en el uso del agua en arroz mediante riego intermitente (AWD), modelos de balance de energía, imágenes térmicas UAV y un modelo AquaCrop calibrado para la costa peruana.",
    research_3_title:
      "CWSI y conductancia estomática con sensores térmicos",
    research_3_desc:
      "Monitoreo del estrés hídrico del cultivo bajo distintos regímenes de riego usando imágenes térmicas, mediciones de conductancia estomática y CWSI en campos de arroz de la costa norte del Perú.",

    pubs_label: "Publicaciones Q1",
    pubs_title: "Artículos en revistas indexadas",
    pubs_intro:
      "Selección de artículos recientes publicados en revistas Q1, enfocados en evapotranspiración (ET), estrés hídrico del cultivo (CWSI), monitoreo con UAV y agricultura de precisión en sistemas de riego del Perú.",
    pubs_1_title:
      "Predicción de rendimiento de arroz con índices espectrales y texturales UAV",
    pubs_1_meta: "Remote Sensing (Q1, MDPI) · 2025 · DOI: 10.3390/rs17040632",
    pubs_1_desc:
      "Modelos de machine learning que combinan métricas multiespectrales y texturales de imágenes UAV para estimar el rendimiento de arroz en la costa peruana.",
    pubs_2_title:
      "Eficiencia en el uso del agua bajo riego AWD con UAV y AquaCrop",
    pubs_2_meta: "Remote Sensing (Q1, MDPI) · 2024 · DOI: 10.3390/rs16203882",
    pubs_2_desc:
      "Evaluación de la eficiencia en el uso del agua en arroz con riego intermitente (AWD), datos térmicos UAV y simulaciones con AquaCrop.",
    pubs_3_title:
      "Índice de estrés hídrico del cultivo y conductancia estomática con sensores térmicos",
    pubs_3_meta: "Remote Sensing (Q1, MDPI) · 2024 · DOI: 10.3390/rs16050796",
    pubs_3_desc:
      "Análisis de CWSI y conductancia estomática bajo diferentes láminas de riego usando sensores térmicos fijos y montados en UAV.",
    pubs_footer:
      "El listado completo de publicaciones está disponible a solicitud (CV / Google Scholar / ORCID).",

    cases_label: "Casos de estudio",
    cases_title: "Aplicaciones reales en campo",
    cases_intro:
      "Desde parcelas experimentales hasta esquemas de riego comerciales, trabajo con agricultores, investigadores e instituciones para traducir la teledetección en decisiones concretas de manejo.",
    case_1_title: "Sistemas arroceros en Lambayeque, Perú",
    case_1_desc:
      "Integración de Sentinel-2, imágenes térmicas UAV y AquaCrop para apoyar la programación del riego, identificar zonas de estrés hídrico y cuantificar la productividad del agua a escala de parcela.",
    case_1_cta: "Explorar un proyecto similar",

    timeline_label: "Trayectoria profesional",
    timeline_title: "Línea de tiempo profesional",
    timeline_intro:
      "Una vista rápida de cómo ha evolucionado mi trabajo en teledetección, recursos hídricos y UAVs en los últimos años.",
    timeline_1_title: "2024 – Actualidad",
    timeline_1_desc:
      "Tesis de maestría – Monitoreo del CWSI en arrozales de Lambayeque mediante imágenes satelitales en Google Earth Engine, calibradas con datos térmicos UAV y mediciones in situ.",
    timeline_2_title: "2023 – 2024",
    timeline_2_desc:
      "Asistente de investigación en proyectos PROCIENCIA sobre agricultura de precisión, reducción de GEI y productividad hídrica en sistemas de arroz bajo riego.",
    timeline_3_title: "2021 – 2023",
    timeline_3_desc:
      "Implementación de riego inteligente y monitoreo con UAV para pequeños productores arroceros de la costa norte del Perú, combinando datos de campo, imágenes satelitales y conocimiento agronómico.",

    map_label: "Dónde trabajo",
    map_title: "Sitios de campo y colaboraciones",
    map_intro:
      "La mayor parte de mis campañas de campo y consultorías se desarrollan en Lambayeque, Tacna y otras regiones del Perú, con posibilidad de colaboración remota en toda Latinoamérica.",

    projects_label: "Proyectos en GitHub",
    projects_title: "Herramientas y flujos de trabajo abiertos",
    projects_intro:
      "Selección de herramientas de código abierto que mantengo y utilizo en consultoría e investigación para CWSI, modelado de ET y procesamiento de datos UAV.",
    project_1_title: "Flujos GEE y Python",
    project_1_desc:
      "Scripts para índices de vegetación, CWSI, estimación de ET y análisis multitemporal con Sentinel-2 y Landsat 8/9, centrados en agricultura bajo riego en el Perú.",
    project_2_title: "Procesamiento térmico y multiespectral UAV",
    project_2_desc:
      "Notebooks y pipelines para calibración térmica, mosaico e integración de imágenes UAV con mediciones de campo y datos meteorológicos.",

    testimonials_label: "Testimonios",
    testimonials_title: "Lo que dicen los colaboradores",
    testimonial_1_text:
      "“José combina un conocimiento profundo en recursos hídricos con experiencia práctica en aplicaciones con UAV y satélites. Su apoyo ha sido clave para fortalecer nuestra investigación en agricultura de precisión.”",
    testimonial_1_author: "– Colaborador de investigación",
    testimonial_2_text:
      "“Su capacidad para traducir flujos complejos de teledetección en recomendaciones concretas de manejo de riego es sobresaliente. Trabajo claro, riguroso y altamente aplicado.”",
    testimonial_2_author: "– Coordinador de proyecto",

    ghstats_label: "Actividad en GitHub",
    ghstats_title: "Código detrás de los proyectos",
    ghstats_intro:
      "Mantengo repositorios activos con ejemplos, utilitarios y flujos reproducibles para ET, CWSI y monitoreo agronómico basado en UAV.",

    contact_label: "Contacto",
    contact_title: "Trabajemos juntos",
    contact_intro:
      "Si necesitas apoyo para un proyecto en teledetección, CWSI, modelado de ET, campañas con UAV o agricultura de precisión, no dudes en escribirme. Responderé con un diagnóstico breve y posibles rutas de trabajo.",
    contact_form_title: "Cuéntame sobre tu proyecto",
    contact_form_intro:
      "Comparte algunos detalles y te responderé con un diagnóstico rápido y formas de colaboración.",
    contact_button: "Enviar consulta",
    contact_direct_title: "Contacto directo",
    contact_note:
      "Para colaboraciones con universidades o instituciones puedo compartir CV, listado de publicaciones y una nota conceptual breve adaptada a tu convocatoria o proyecto.",

    footer_text: "Consultoría en Teledetección y Agricultura de Precisión",

    placeholder_name: "Nombre / Institución",
    placeholder_email: "Correo electrónico",
    placeholder_topic: "Tema del proyecto (p. ej. CWSI, ET, UAV, capacitación)",
    placeholder_message:
      "Describe brevemente tu proyecto, datos disponibles (UAV / satélite / campo) y resultados esperados.",
    mail_subject_prefix: "[Web] Consulta de consultoría – ",
    mail_subject_fallback: "Teledetección / ET / CWSI"
  }
};

// ------------------------------
// Apply translations
// ------------------------------
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Text elements with data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Placeholders
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const topicInput = document.getElementById("topic");
  const messageInput = document.getElementById("message");

  if (nameInput && dict.placeholder_name) {
    nameInput.placeholder = dict.placeholder_name;
  }
  if (emailInput && dict.placeholder_email) {
    emailInput.placeholder = dict.placeholder_email;
  }
  if (topicInput && dict.placeholder_topic) {
    topicInput.placeholder = dict.placeholder_topic;
  }
  if (messageInput && dict.placeholder_message) {
    messageInput.placeholder = dict.placeholder_message;
  }

  // Update <html lang="...">
  document.documentElement.lang = lang;
}

// ------------------------------
// Language toggle
// ------------------------------
function initLanguageToggle() {
  const langButtons = document.querySelectorAll(".lang-option");
  if (!langButtons.length) return;

  // Load saved language or default to EN
  const storedLang = localStorage.getItem("site_lang") || "en";
  setLanguage(storedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  function setLanguage(lang) {
    const targetLang = translations[lang] ? lang : "en";
    localStorage.setItem("site_lang", targetLang);
    applyTranslations(targetLang);

    langButtons.forEach((b) => {
      const bLang = b.getAttribute("data-lang");
      b.classList.toggle("active", bLang === targetLang);
    });
  }
}

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
// Dark Mode Toggle
// ------------------------------
function initDarkModeToggle() {
  const toggleBtn = document.getElementById("toggleDark");
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector("i");

  // Load preference from localStorage if available
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

      // Close mobile menu on click
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
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

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

    const lang = localStorage.getItem("site_lang") || "en";
    const dict = translations[lang] || translations.en;

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const topic = document.getElementById("topic")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const subject = encodeURIComponent(
      `${dict.mail_subject_prefix || "[Website] Consulting inquiry – "}${
        topic || dict.mail_subject_fallback || "Remote sensing / ET / CWSI"
      }`
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
  initDarkModeToggle();
  initSmoothScroll();
  initActiveNavOnScroll();
  setCurrentYear();
  initScrollReveal();
  initNavScrollEffect();
  initMobileNav();
  initLanguageToggle();
  initContactForm();
});
