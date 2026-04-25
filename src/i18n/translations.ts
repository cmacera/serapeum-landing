export const translations = {
  es: {
    nav: {
      features: "Funcionalidades",
      tryOracle: "Probar el Oráculo",
      architecture: "Arquitectura",
      download: "Descargar",
    },
    hero: {
      eyebrow: "Biblioteca de Conocimiento con IA",
      tagline:
        "Un cliente de IA híbrido que combina una biblioteca personal offline con descubrimiento en la nube. Busca libros, películas, series y videojuegos con lenguaje natural.",
      ctaOracle: "Probar el Oráculo",
      ctaDownload: "Descargar App",
    },
    features: {
      heading: "Características",
      sub: "Los tres pilares de la gestión del conocimiento",
      items: [
        {
          title: "El Oráculo",
          subtitle: "Descubrimiento con IA",
          description:
            "Describe lo que buscas con tus propias palabras. El Oráculo comprende la intención, busca en múltiples catálogos simultáneamente —libros, películas, series y videojuegos— y sintetiza una respuesta curada. Sin palabras clave, ni filtros: solo conversación.",
          dots: [
            "Consultas en lenguaje natural",
            "Búsqueda paralela en múltiples catálogos",
            "Respuestas curadas por IA",
          ],
        },
        {
          title: "Mi Bóveda",
          subtitle: "Biblioteca sin Conexión",
          description:
            "Tu colección personal vive en el dispositivo y funciona completamente sin internet. Añade lo que descubras, organízalo con estados y categorías, y navégalo al instante. La biblioteca es reactiva: los cambios aparecen en tiempo real en todas las vistas.",
          dots: [
            "Funciona 100% sin conexión",
            "Actualizaciones reactivas en tiempo real",
            "Estados, notas y categorías",
          ],
        },
        {
          title: "Copia en la Nube",
          subtitle: "Sincronización Segura",
          description:
            "Toda tu Bóveda puede copiarse en la nube con un toque y restaurarse en cualquier dispositivo. Las copias se almacenan de forma privada en tu cuenta —sin bases de datos compartidas, sin acceso de terceros. Todo lo que has catalogado te acompaña.",
          dots: [
            "Copia y restauración con un toque",
            "Almacenamiento privado por usuario",
            "Continuidad entre dispositivos",
          ],
        },
      ],
    },
    oracle: {
      heading: "Demo en Vivo",
      title: "Pregunta al Oráculo cualquier cosa",
      sub: "Busca libros, películas, series y juegos con lenguaje natural — sin necesidad de cuenta.",
      placeholder: "Pide recomendaciones…",
      error: "El Oráculo no está disponible temporalmente. Por favor, inténtalo de nuevo en breve.",
      resultsTitle: "Aquí tienes algunas sugerencias.",
      badges: { media: "Peli / TV", book: "Libro", game: "Juego" },
      suggestions: [
        "Tengo ganas de un thriller psicológico oscuro",
        "Las mejores novelas de ciencia ficción de la última década",
        "RPGs de mundo abierto con narrativa profunda",
        "Películas de los 90 que definieron el cine moderno",
        "Series animadas para adultos con buena escritura",
        "Libros similares a Dune pero más accesibles",
        "Juegos de terror que dependen de la atmósfera, no de los sustos",
        "Dramas criminales ambientados en Escandinavia",
        "RPGs infravalorados de principios de los 2000",
        "Novelas cortas que puedes leer en un fin de semana",
        "Juegos de estrategia con economías complejas",
        "Películas que desafían la mente con narradores poco fiables",
        "Juegos de acción y aventura con trasfondo rico",
        "Ficción literaria ambientada en América Latina",
        "Juegos cooperativos para jugar con un amigo online",
        "Películas clásicas que todos deberían ver una vez",
      ],
      loadingMessages: [
        "Consultando los pergaminos ancestrales…",
        "Invocando conocimiento desde las profundidades…",
        "Buscando entre catálogos interminables…",
        "Tejiendo a través de mundos y épocas…",
        "Tamizando siglos de historias…",
        "Despertando al Oráculo…",
        "Recorriendo la biblioteca…",
        "Leyendo entre líneas…",
      ],
    },
    architecture: {
      heading: "Arquitectura",
      sub: "Local-first con inteligencia en la nube",
      pipelineTitle: "Pipeline del Oráculo",
      layers: [
        {
          label: "Cliente",
          items: [
            "Flutter (macOS · Android · iOS)",
            "Riverpod state management",
            "GoRouter navigation",
            "Realm — offline-first local DB",
          ],
        },
        {
          label: "Orquestador API",
          items: [
            "Genkit Flows (Node.js/TS)",
            "JWT Auth Middleware",
            "Multi-step AI pipeline",
            "Zod schema validation",
          ],
        },
        {
          label: "IA y APIs Externas",
          items: [
            "Multi-provider LLM routing",
            "TMDB — Movies & TV",
            "Google Books",
            "IGDB — Video Games",
          ],
        },
        {
          label: "Infraestructura Cloud",
          items: [
            "Supabase Auth (JWT)",
            "Supabase Storage (Backup)",
            "Vercel (API Deployment)",
            "Sentry (Observability)",
          ],
        },
      ],
      flow: ["Consulta", "routerPrompt", "extractorPrompt", "Catalog Tools", "synthesizerPrompt", "Respuesta"],
    },
    techStack: {
      heading: "Stack Tecnológico",
      sub: "Construido con herramientas modernas de producción",
      categories: [
        {
          category: "Cliente",
          items: [
            { name: "Flutter", role: "Framework UI multiplataforma (macOS, Android, iOS)" },
            { name: "Riverpod", role: "Gestión de estado reactiva con generación de código" },
            { name: "Realm", role: "Base de datos embebida offline-first con consultas en vivo" },
            { name: "GoRouter", role: "Navegación declarativa basada en URLs" },
          ],
        },
        {
          category: "API e IA",
          items: [
            { name: "Genkit", role: "Orquestación de flujos de IA y pipelines multi-paso" },
            { name: "Node.js 22", role: "Runtime de API TypeScript-strict en Vercel serverless" },
            { name: "Zod", role: "Validación de esquemas en runtime — fuente única de verdad para tipos" },
            { name: "Langfuse", role: "Observabilidad de IA y seguimiento de calidad de respuestas" },
          ],
        },
        {
          category: "Nube",
          items: [
            { name: "Supabase", role: "Auth (tokens JWT) + Storage (copias de seguridad)" },
            { name: "Vercel", role: "Despliegue de API serverless con red de borde global" },
            { name: "Sentry", role: "Reporte de errores en Flutter y Node.js" },
          ],
        },
        {
          category: "APIs Externas",
          items: [
            { name: "TMDB", role: "Catálogo de películas y series" },
            { name: "Google Books", role: "Catálogo de libros y metadatos" },
            { name: "IGDB", role: "Catálogo de videojuegos (Twitch)" },
            { name: "Tavily", role: "Búsqueda web para extracción de entidades" },
          ],
        },
      ],
    },
    download: {
      heading: "Descargar",
      sub: "Ejecuta Serapeum en tu dispositivo",
      platforms: [
        {
          name: "Android",
          label: "APK",
          description:
            "Descarga el APK e instálalo directamente en cualquier dispositivo Android. Activa 'Instalar desde fuentes desconocidas' en Ajustes → Seguridad antes de instalar.",
        },
        {
          name: "macOS",
          label: "DMG",
          description:
            "Abre el DMG, arrastra Serapeum a tu carpeta de Aplicaciones. En el primer inicio, haz clic derecho → Abrir para evitar el bloqueo de Gatekeeper (build sin firmar).",
        },
        {
          name: "iOS",
          label: "Próximamente",
          description:
            "La distribución en iOS requiere una membresía de Apple Developer. Se planea una versión de TestFlight para una futura actualización.",
        },
      ],
      downloadBtn: "Descargar",
      notAvailable: "No disponible aún",
      flutterRepo: "Flutter App — GitHub",
      apiRepo: "Genkit API — GitHub",
    },
    footer: {
      tagline: "Proyecto Fin de Máster · Carlos Martín",
      appRepo: "Repo App",
      apiRepo: "Repo API",
      apiStatus: "Estado API",
    },
  },
  en: {
    nav: {
      features: "Features",
      tryOracle: "Try Oracle",
      architecture: "Architecture",
      download: "Download",
    },
    hero: {
      eyebrow: "AI-Powered Knowledge Library",
      tagline:
        "A hybrid AI client that combines an offline-first personal library with cloud-powered discovery. Search books, movies, TV shows, and video games through natural language.",
      ctaOracle: "Try The Oracle",
      ctaDownload: "Download App",
    },
    features: {
      heading: "Core Features",
      sub: "Three pillars of knowledge management",
      items: [
        {
          title: "The Oracle",
          subtitle: "AI Discovery",
          description:
            "Describe what you're looking for in your own words. The Oracle understands intent, searches multiple catalogues simultaneously — books, films, series, and video games — and synthesises a rich, curated response. No keywords, no filters: just a conversation.",
          dots: ["Natural language queries", "Parallel multi-catalogue search", "Curated AI responses"],
        },
        {
          title: "My Vault",
          subtitle: "Offline-First Library",
          description:
            "Your personal collection lives on-device and stays fully functional without internet. Add anything you discover, organise it with statuses and categories, and browse it instantly. The library is reactive: changes appear in real time across all views.",
          dots: ["Works 100% offline", "Real-time reactive updates", "Statuses, notes, categories"],
        },
        {
          title: "Cloud Backup",
          subtitle: "Secure Synchronisation",
          description:
            "Your entire Vault can be backed up to the cloud with a single tap and restored on any device. Backups are stored privately in your account — no shared databases, no third-party access. Everything you've catalogued travels with you.",
          dots: ["One-tap backup & restore", "Private per-user storage", "Cross-device continuity"],
        },
      ],
    },
    oracle: {
      heading: "Live Demo",
      title: "Ask The Oracle anything",
      sub: "Search books, films, series, and games with natural language — no login required.",
      placeholder: "Ask for recommendations…",
      error: "The Oracle is temporarily unavailable. Please try again shortly.",
      resultsTitle: "Here are some suggestions.",
      badges: { media: "Film / TV", book: "Book", game: "Game" },
      suggestions: [
        "I'm in the mood for a dark psychological thriller",
        "Best sci-fi novels of the last decade",
        "Open-world RPGs with deep storytelling",
        "90s films that shaped modern cinema",
        "Animated series for adults with great writing",
        "Books similar to Dune but more accessible",
        "Horror games that rely on atmosphere, not jump scares",
        "Crime dramas set in Scandinavia",
        "Underrated RPGs from the early 2000s",
        "Short novels you can read in a weekend",
        "Strategy games with complex economies",
        "Mind-bending films with unreliable narrators",
        "Action-adventure games with rich lore",
        "Literary fiction set in Latin America",
        "Co-op games to play with a friend online",
        "Classic films everyone should watch once",
      ],
      loadingMessages: [
        "Consulting the ancient scrolls…",
        "Summoning knowledge from the depths…",
        "Searching through endless catalogues…",
        "Weaving through worlds and timelines…",
        "Sifting through centuries of stories…",
        "Awakening the Oracle…",
        "Traversing the library…",
        "Reading between the lines…",
      ],
    },
    architecture: {
      heading: "Architecture",
      sub: "Local-first meets cloud intelligence",
      pipelineTitle: "Oracle Pipeline",
      layers: [
        {
          label: "Client",
          items: [
            "Flutter (macOS · Android · iOS)",
            "Riverpod state management",
            "GoRouter navigation",
            "Realm — offline-first local DB",
          ],
        },
        {
          label: "API Orchestrator",
          items: [
            "Genkit Flows (Node.js/TS)",
            "JWT Auth Middleware",
            "Multi-step AI pipeline",
            "Zod schema validation",
          ],
        },
        {
          label: "AI & External APIs",
          items: [
            "Multi-provider LLM routing",
            "TMDB — Movies & TV",
            "Google Books",
            "IGDB — Video Games",
          ],
        },
        {
          label: "Cloud Infrastructure",
          items: [
            "Supabase Auth (JWT)",
            "Supabase Storage (Backup)",
            "Vercel (API Deployment)",
            "Sentry (Observability)",
          ],
        },
      ],
      flow: ["User query", "routerPrompt", "extractorPrompt", "Catalog Tools", "synthesizerPrompt", "Response"],
    },
    techStack: {
      heading: "Tech Stack",
      sub: "Built on modern, production-grade tooling",
      categories: [
        {
          category: "Client",
          items: [
            { name: "Flutter", role: "Multi-platform UI framework (macOS, Android, iOS)" },
            { name: "Riverpod", role: "Reactive state management with code generation" },
            { name: "Realm", role: "Offline-first embedded database with live queries" },
            { name: "GoRouter", role: "Declarative URL-based navigation" },
          ],
        },
        {
          category: "API & AI",
          items: [
            { name: "Genkit", role: "AI flow orchestration and multi-step pipelines" },
            { name: "Node.js 22", role: "TypeScript-strict API runtime on Vercel serverless" },
            { name: "Zod", role: "Runtime schema validation — single source of truth for types" },
            { name: "Langfuse", role: "AI observability and response quality tracking" },
          ],
        },
        {
          category: "Cloud",
          items: [
            { name: "Supabase", role: "Auth (JWT tokens) + Storage (library backups)" },
            { name: "Vercel", role: "Serverless API deployment with edge network" },
            { name: "Sentry", role: "Crash reporting across Flutter and Node.js" },
          ],
        },
        {
          category: "External APIs",
          items: [
            { name: "TMDB", role: "Movies and TV shows catalogue" },
            { name: "Google Books", role: "Books catalogue and metadata" },
            { name: "IGDB", role: "Video games catalogue (Twitch)" },
            { name: "Tavily", role: "Web search for entity extraction" },
          ],
        },
      ],
    },
    download: {
      heading: "Download",
      sub: "Run Serapeum on your device",
      platforms: [
        {
          name: "Android",
          label: "APK",
          description:
            "Download the APK and install directly on any Android device. Enable 'Install from unknown sources' in Settings → Security before installing.",
        },
        {
          name: "macOS",
          label: "DMG",
          description:
            "Open the DMG, drag Serapeum to your Applications folder. On first launch, right-click → Open to bypass Gatekeeper (unsigned build).",
        },
        {
          name: "iOS",
          label: "Coming Soon",
          description:
            "iOS distribution requires an Apple Developer membership. A TestFlight build is planned for a future release.",
        },
      ],
      downloadBtn: "Download",
      notAvailable: "Not yet available",
      flutterRepo: "Flutter App — GitHub",
      apiRepo: "Genkit API — GitHub",
    },
    footer: {
      tagline: "Master's Final Project · Carlos Martín",
      appRepo: "App Repo",
      apiRepo: "API Repo",
      apiStatus: "API Status",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof translations["es"];
