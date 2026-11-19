export type AppCategory = 'all' | 'ai' | 'health' | 'productivity' | 'lifestyle';

export interface PortfolioApp {
  id: string;
  name: string;
  shortName: string;
  bundleId: string;
  category: Exclude<AppCategory, 'all'>;
  primaryGenre: string;
  secondaryGenre?: string;
  iconUrl: string;
  appStoreUrl: string;
  featured?: boolean;
  heroDock?: boolean;
  accentColor: string;
  devices: ('iPhone' | 'iPad')[];
  techStack: string[];
  screenshots?: string[];
  tagline: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  highlights: {
    tr: string[];
    en: string[];
  };
}

export const DEVELOPER_PROFILE = {
  name: 'Muhammed Buğra Çiftçi',
  shortName: 'Buğra Çiftçi',
  roleTitle: 'iOS Software Engineer — Swift, SwiftUI & Apple Ecosystem',
  email: 'bugraciftci7@gmail.com',
  university: 'Bahçeşehir Üniversitesi · Bilgisayar Mühendisliği (B.S.)',
  location: 'İstanbul, Türkiye',
  cvUrl: '/Bugra_Ciftci_iOS_CV.pdf',
  github: 'https://github.com/Bugraciftci',
  linkedin: 'https://www.linkedin.com/in/muhammed-bu%C4%9Fra-%C3%A7ift%C3%A7i-07b22b244/',
  appStoreDeveloperUrl: 'https://apps.apple.com/tr/developer/muhammed-bugra-ciftci/id1726010593',
  appStoreDeveloperName: 'Muhammed Bugra Ciftci',
  stats: {
    publishedApps: '20+',
    crashFree: '>99.5%',
    nativeSwift: 'Swift 6',
    fpsPerformance: '60/120 FPS',
  },
};

export const CV_DATA = {
  summary: {
    tr: 'Bahçeşehir Üniversitesi Bilgisayar Mühendisliği (%100 İngilizce) mezunu ve ticari üretim deneyimine sahip iOS Yazılım Mühendisi. App Store’da yayında olan 20+ native iOS/iPadOS uygulaması (>%99.5 crash-free oturum oranı). Swift 6, SwiftUI, UIKit, Apple CarPlay (CPTemplate), ScreenTime API (FamilyControls), WidgetKit, Keychain güvenliği, StoreKit 2 / RevenueCat ve yapılandırılmış eşzamanlılık (async/await, Actors) konularında uzmanlaşmıştır.',
    en: 'Computer Engineering graduate (Bahçeşehir University) and iOS Software Engineer with commercial production experience and 20+ published native apps on the App Store (>99.5% crash-free sessions). Specialized in Swift 6, SwiftUI, UIKit, Apple CarPlay (CPTemplate), ScreenTime API (FamilyControls), WidgetKit, Keychain security, StoreKit 2 / RevenueCat, and structured concurrency.',
  },
  experience: [
    {
      role: { tr: 'iOS Developer', en: 'iOS Developer' },
      company: 'Bosphorus Digital',
      period: { tr: 'Eyl 2025 – Tem 2026', en: 'Sep 2025 – Jul 2026' },
      location: 'İstanbul, Türkiye',
      bullets: {
        tr: [
          'Swift 6, SwiftUI ve MVVM kullanarak 60/120 FPS render performansı ve Apple Human Interface Guidelines uyumluluğuna sahip prodüksiyon iOS uygulamaları geliştirdim.',
          'Ürün ekipleri arasında paylaşılan modüler ve yeniden kullanılabilir SwiftUI bileşen kütüphaneleri tasarlayarak yeni ekran geliştirme süresini ~%30 kısalttım.',
          'Özel URLSession politikaları, tip güvenli Codable modelleri ve temiz UI/State/Domain ayrımı ile hata toleranslı asenkron REST ağ katmanları inşa ettim.',
          'Agile sprintlerde ürün yöneticileri, UI/UX tasarımcıları ve backend mühendisleriyle teknik kapsam belirleme, PR kod incelemeleri (Code Review) ve App Store sürümlerinde çalıştım.',
        ],
        en: [
          'Engineered production iOS applications using Swift 6, SwiftUI, and MVVM, sustaining 60/120 FPS rendering performance and strict Apple Human Interface Guidelines compliance.',
          'Architected reusable, modular SwiftUI component libraries shared across product squads, cutting new feature screen implementation time by ~30%.',
          'Built fault-tolerant asynchronous REST networking layers with custom URLSession policies, typed Codable contracts, and clean UI/state/domain separation.',
          'Collaborated across Agile sprints with product managers, UI/UX designers, and backend engineers on technical scoping, peer PR code reviews, and App Store releases.',
        ],
      },
    },
    {
      role: { tr: 'iOS Developer Intern', en: 'iOS Developer Intern' },
      company: 'United Yazılım',
      period: { tr: 'Haz 2025 – Ağu 2025', en: 'Jun 2025 – Aug 2025' },
      location: 'İstanbul, Türkiye',
      bullets: {
        tr: [
          'Navigasyon ve araç içi iş akışları için sürücü güvenliği ve düşük dikkat dağınıklığı standartlarına uyumlu Apple CarPlay uzantısı (CPTemplate) geliştirdim.',
          'Ana iPhone uygulaması ile CarPlay araç ekranı arasında gerçek zamanlı çift yönlü durum senkronizasyonu (bidirectional state sync) ve reaktif veri kanalları kurdum.',
          'Eski UIKit ViewController yapılarını SwiftUI mimarisine taşırken oturum kimlik doğrulamasını Apple Keychain şifreli token saklama yapısıyla güçlendirdim.',
        ],
        en: [
          'Developed an Apple CarPlay extension (CPTemplate) for navigation and in-vehicle workflows, adapting core features to strict driver-safety and low-distraction constraints.',
          'Engineered real-time bidirectional state synchronization and reactive data pipelines between the primary iPhone application and the CarPlay head-unit display.',
          'Accelerated legacy UIKit ViewController migration to SwiftUI while hardening session authentication with Apple Keychain encrypted token persistence.',
        ],
      },
    },
    {
      role: { tr: 'iOS Developer', en: 'iOS Developer' },
      company: 'Independent (App Store Portfolio)',
      period: { tr: 'Oca 2024 – Günümüz', en: 'Jan 2024 – Present' },
      location: 'İstanbul, Türkiye',
      bullets: {
        tr: [
          'AI ses/görüntü, bilgisayarlı görü (Vision), üretkenlik ve yardımcı araçlar kategorilerinde 20+ yayınlanmış native iOS uygulamasını uçtan uca tasarladım, geliştirdim ve ölçeklendirdim.',
          'StoreKit 2 & RevenueCat abonelik doğrulama, AVFoundation akış (streaming) medya oynatıcıları ve sistem seviyesinde ScreenTime / WidgetKit uygulama uzantıları geliştirdim.',
          'Uçtan uca sürüm mühendisliği, TestFlight beta dağıtımı, Firebase Crashlytics/Analytics telemetrisi ve ASO süreçlerini yöneterek >%99.5 crash-free oturum oranını korudum.',
        ],
        en: [
          'Designed, built, and scaled a commercial portfolio of 20+ published native iOS apps across AI audio/vision, productivity, health, and utilities.',
          'Implemented StoreKit 2 & RevenueCat entitlement verification, AVFoundation streaming media players, and system-level ScreenTime / WidgetKit app extensions.',
          'Owned end-to-end release engineering, TestFlight beta distribution, Firebase crash/funnel telemetry, and ASO, sustaining >99.5% crash-free sessions.',
        ],
      },
    },
  ],
  education: {
    degree: {
      tr: 'Bilgisayar Mühendisliği Lisans (B.S. in Computer Engineering)',
      en: 'B.S. in Computer Engineering',
    },
    school: 'Bahçeşehir Üniversitesi (BAU)',
    period: '2022 – Jul 2026',
    coursework: {
      tr: 'Veri Yapıları ve Algoritmalar, Nesne Yönelimli Programlama (OOP), Veritabanı Yönetim Sistemleri, İşletim Sistemleri, Yazılım Mühendisliği, Bilgisayar Ağları',
      en: 'Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems, Operating Systems, Software Engineering, Computer Networks',
    },
    languages: {
      tr: 'İngilizce (Profesyonel Çalışma Yetkinliği — %100 İngilizce Lisans) · Türkçe (Anadil)',
      en: 'English (Professional Working Proficiency — B.S. taught 100% in English) · Turkish (Native)',
    },
  },
  skillCategories: [
    {
      category: { tr: 'iOS & Apple Frameworks', en: 'iOS & Apple Frameworks' },
      skills: [
        'Swift 6',
        'SwiftUI',
        'UIKit',
        'Combine',
        'Structured Concurrency (async/await, Actors)',
        'CarPlay (CPTemplate)',
        'FamilyControls / DeviceActivity (ScreenTime API)',
        'WidgetKit',
        'AVFoundation',
      ],
    },
    {
      category: { tr: 'Mimari & Veri Katmanı', en: 'Architecture & Persistence' },
      skills: [
        'MVVM & Clean Architecture',
        'Protocol-Oriented Programming',
        'Dependency Injection',
        'Core Data & SwiftData',
        'Keychain Encrypted Storage',
        'Modular UI Libraries',
      ],
    },
    {
      category: { tr: 'Gelir Modeli, API & Kalite', en: 'Monetization, APIs & Quality' },
      skills: [
        'StoreKit 2 & RevenueCat',
        'RESTful APIs & URLSession',
        'Codable & Offline Caching',
        'XCTest Unit Testing',
        'Xcode Instruments (Time Profiler & Leaks)',
      ],
    },
    {
      category: { tr: 'Sürüm & Geliştirici Araçları', en: 'Release & Developer Tooling' },
      skills: [
        'Xcode & Swift Package Manager (SPM)',
        'Git & GitHub',
        'TestFlight & App Store Connect',
        'CI/CD Workflows',
        'Firebase Analytics & Crashlytics',
        'Figma & Jira',
      ],
    },
  ],
};

export const PORTFOLIO_APPS: PortfolioApp[] = [
  {
    id: '6772788067',
    name: 'Sunio: AI Music & Song Creator',
    shortName: 'Sunio AI',
    bundleId: 'com.bugraciftci.SunioAi',
    category: 'ai',
    primaryGenre: 'Music',
    secondaryGenre: 'Generative AI',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/d7/81/86/d7818635-2b07-3662-1c4d-fe21a89fe619/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6772788067',
    featured: true,
    heroDock: true,
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'AVFoundation', 'Generative Audio AI', 'Combine', 'StoreKit 2'],
    screenshots: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a5/62/75/a5627598-3686-9585-268e-e5937c79e5b9/image_343.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b3/ef/9a/b3ef9a18-6ccb-ef38-a7aa-8eaf0277b84f/image_344.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/87/93/be/8793be8c-0a03-9661-de3b-2ee2349a85bb/image_345.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f7/15/81/f7158131-cc8d-708c-0544-41846b7ba3cf/image_346.png/900x0w.jpg',
    ],
    tagline: {
      tr: 'Metin komutlarından ve şarkı sözlerinden tam prodüksiyonlu müzik ve vokal üretimi.',
      en: 'AI song, vocal, and instrumental generation with custom AVFoundation player.',
    },
    description: {
      tr: 'Metin komutlarından veya şarkı sözlerinden müzik parçaları üreten, özel AVFoundation mini/tam ekran ses oynatıcı durum makinesine (state machine), asenkron üretim kuyruğuna ve StoreKit 2 abonelik mimarisine sahip native iOS uygulaması.',
      en: 'Live App Store multimedia AI app featuring asynchronous generation polling, a custom AVFoundation mini/full-screen audio player state machine, and StoreKit 2 paywalls.',
    },
    highlights: {
      tr: [
        'Özel AVFoundation tabanlı kesintisiz arka plan ses motoru ve mini-player durum makinesi',
        'Şarkı sözü, müzik türü (Pop, Phonk, R&B, Lo-Fi) ve vokal stili özelleştirme',
        'Asenkron AI üretim kuyruğu ve gerçek zamanlı durum senkronizasyonu',
      ],
      en: [
        'Custom AVFoundation background audio engine and persistent mini-player state machine',
        'Multi-genre prompt builder with custom lyrics, vocal style, and mood controls',
        'Asynchronous AI generation polling with real-time state synchronization',
      ],
    },
  },
  {
    id: '6476151861',
    name: 'CS2 & CS:GO Smoke Nade Trainer',
    shortName: 'CS2 Smoke',
    bundleId: 'com.bugraciftci.Cs2Smoke',
    category: 'lifestyle',
    primaryGenre: 'Reference',
    secondaryGenre: 'Esports & Gaming',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/17/e2/5f17e2f6-6765-59df-775a-e072553e6e43/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6476151861',
    featured: true,
    heroDock: true,
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'MVVM', 'Firebase Analytics', 'RevenueCat', 'Multi-Locale'],
    tagline: {
      tr: 'Counter-Strike 2 oyuncuları için interaktif bomba taktikleri, harita lineup rehberi ve konsol komutları.',
      en: 'Interactive grenade lineups, tactical map radar, and console commands for CS2 players.',
    },
    description: {
      tr: 'App Store’da 10.000+ indirme ve haftalık 50.000+ gösterime ulaşan; Mirage, Inferno, Dust2, Nuke ve Anubis dahil tüm aktif CS2 haritaları için adım adım Smoke, Molotov ve Flash lineup görselleri ile kopyalanabilir konsol komutları sunan taktik rehberi.',
      en: 'Published on the App Store with 10,000+ downloads and 50,000+ weekly impressions. Features step-by-step smoke, molotov, and flashbang lineups across competitive maps, crosshair alignment guides, and pro console commands.',
    },
    highlights: {
      tr: [
        '10.000+ organik indirme ve haftalık 50.000+ App Store gösterimi',
        'Zorluk seviyesine ve harita bölgelerine (A/B Site, Mid) göre anlık lineup filtreleme',
        'HUD, Radar, Bot ve antrenman sunucusu için kategorize konsol komut kütüphanesi',
      ],
      en: [
        '10,000+ organic downloads and 50,000+ weekly App Store impressions',
        'Instant filtering by map callouts, grenade type, and throw difficulty',
        'Categorized pro console command library for HUD, radar, and practice servers',
      ],
    },
  },
  {
    id: '6769322001',
    name: 'Skincare AI: Face & Acne Scan',
    shortName: 'Skincare AI',
    bundleId: 'com.bugraciftci.SkincareAi',
    category: 'ai',
    primaryGenre: 'Health & Fitness',
    secondaryGenre: 'Vision AI',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/43/94/6e/43946e8d-e8a9-7d86-bbb5-e05f5a507a2a/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6769322001',
    featured: true,
    heroDock: true,
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['Swift 6', 'SwiftUI', 'Vision Framework', 'AVCaptureSession', 'Charts'],
    screenshots: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3c/48/7d/3c487d3d-7962-f60f-a4c4-39189f9f6d30/1.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/31/ff/f3/31fff34f-abf8-5868-578e-6412d4314b08/2.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fb/12/8f/fb128f37-ca24-204a-f0fd-62285beeada8/3.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d5/d8/1b/d5d81b8c-7be7-5da0-e51b-88dcedd4f6df/4.png/900x0w.jpg',
    ],
    tagline: {
      tr: '60 FPS canlı kamera yüz taraması, cilt analizi ve kişiselleştirilmiş sabah/akşam bakım rutini.',
      en: '60 FPS live camera facial skin analysis, diagnostics, and personalized AM/PM routines.',
    },
    description: {
      tr: 'Kamera ve Vision API kullanarak 60 FPS canlı kare işlemeyle cilt nem oranı, gözenek, akne eğilimi ve doku pürüzsüzlüğünü analiz eden; kullanıcının cilt tipine özel sabah ve akşam rutinleri oluşturan yapay zeka sağlık asistanı.',
      en: 'Real-time facial skin scanning app delivering 60 FPS live camera frame processing, multi-metric skin health scorecards, and tailored AM/PM routines.',
    },
    highlights: {
      tr: [
        'Özel kamera çerçeveleme rehberi ile 60 FPS canlı yüz ve cilt taraması',
        'Çok boyutlu cilt skoru kartları ve haftalık iyileşme grafikleri',
        'İçerik (ingredient) uyumluluk kontrolü ve akıllı sabah/akşam rutin hatırlatıcıları',
      ],
      en: [
        'Guided camera framing with 60 FPS live Vision face landmark detection',
        'Multi-metric skin health scorecards and historical progress charts',
        'Active ingredient compatibility checks and daily AM/PM routine reminders',
      ],
    },
  },
  {
    id: '6753896579',
    name: 'PomoBlock: Pomodoro & Blocker',
    shortName: 'PomoBlock',
    bundleId: 'com.bugraciftci.screentimeblocker',
    category: 'productivity',
    primaryGenre: 'Productivity',
    secondaryGenre: 'Screen Time API',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/40/e9/6d/40e96d2c-2f61-18f0-61f5-4fa291e5c6d0/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6753896579',
    featured: true,
    heroDock: true,
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'FamilyControls', 'ManagedSettings', 'DeviceActivity', 'WidgetKit'],
    screenshots: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d9/d1/b9/d9d1b911-489c-de23-323c-b18d428cca6b/1__U00281_U0029.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/98/6d/03/986d035f-e3a5-6070-93b8-309855013171/2__U00281_U0029.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/57/3b/ec/573bec84-77c3-5ebd-c7c7-f6313b4ff119/3__U00281_U0029.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/02/92/6b/02926bae-1ec8-1841-0db9-2837d6c86ca3/2.png/900x0w.jpg',
    ],
    tagline: {
      tr: 'Apple Screen Time API entegrasyonlu derin odaklanma sayacı ve sistem düzeyinde uygulama engelleyici.',
      en: 'System-level app blocker and Pomodoro focus timer powered by Apple ScreenTime APIs.',
    },
    description: {
      tr: 'Apple FamilyControls, ManagedSettings ve DeviceActivity framework’lerini kullanarak odaklanma seansları sırasında dikkat dağıtıcı uygulamaları işletim sistemi seviyesinde kilitleyen (shielding) üretkenlik aracı.',
      en: 'Harnesses Apple’s FamilyControls, ManagedSettings, and DeviceActivity frameworks to enforce system-level app blocking shields during deep-work Pomodoro sessions.',
    },
    highlights: {
      tr: [
        'FamilyControls & ManagedSettings ile sistem seviyesinde gerçek uygulama kilitleme (Shielding)',
        'Dynamic Island ve Kilit Ekranı (Live Activities & WidgetKit) üzerinden canlı Pomodoro takibi',
        'Derin odak istatistikleri ve katı mod (Strict Mode) koruması',
      ],
      en: [
        'System-level app shielding via Apple FamilyControls & ManagedSettings',
        'Dynamic Island and Lock Screen Live Activities for active Pomodoro timers',
        'Deep focus analytics with optional Strict Mode enforcement',
      ],
    },
  },
  {
    id: '6759802124',
    name: 'Currency Converter: FX Rates',
    shortName: 'FX Converter',
    bundleId: 'com.bugraciftci.DolarConverter',
    category: 'productivity',
    primaryGenre: 'Finance',
    secondaryGenre: 'Utilities',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/92/97/11/929711dc-ce41-9106-30bc-f5b7fa76a8dc/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6759802124',
    featured: true,
    heroDock: true,
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'async/await Networking', 'Swift Charts', 'Offline Cache'],
    screenshots: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f9/68/00/f96800ea-37f5-b62f-c821-a7df1cd889a2/1.jpg/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b2/da/f5/b2daf566-b0e8-9e60-7eec-251d47ac423c/2.jpg/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ac/c2/50/acc25076-c702-752d-aa2f-bf79d1b5a8dd/3.jpg/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e2/4e/a8/e24ea88c-b59b-4dc2-2ba1-1e69c1cf318c/4.jpg/900x0w.jpg',
    ],
    tagline: {
      tr: '160+ para birimi ve altın/kripto pariteleri için çevrimdışı destekli anlık döviz çevirici.',
      en: 'Real-time multi-currency FX calculator with historical charts and offline mode.',
    },
    description: {
      tr: 'Hem iPhone hem iPad için responsive olarak tasarlanmış; aynı anda birden fazla döviz kurunu hesaplayan, geçmiş trend grafiklerine ve uçak modunda çalışan yerel önbelleğe sahip finans uygulaması.',
      en: 'Converts multiple currencies simultaneously with interactive historical trend charts, built-in calculator keypad, and airplane-mode offline caching.',
    },
    highlights: {
      tr: [
        'Çoklu para birimi aynı anda dönüştürme ve yerleşik matematiksel klavye',
        'Çevrimdışı (Offline-First) önbellekleme ve tarihsel kur grafikleri',
      ],
      en: [
        'Simultaneous multi-currency conversion list with integrated calculator pad',
        'Offline-first rate caching for travel and interactive historical FX charts',
      ],
    },
  },
  {
    id: '6736629240',
    name: 'Habit Tracker: YinYang',
    shortName: 'YinYang Habits',
    bundleId: 'com.bugraciftci.yinyang',
    category: 'productivity',
    primaryGenre: 'Productivity',
    secondaryGenre: 'Health & Fitness',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/2f/82/1c/2f821c51-0eaa-24b3-ac80-6879eda855bb/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6736629240',
    featured: true,
    heroDock: true,
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'WidgetKit', 'CoreData', 'CloudKit'],
    screenshots: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b7/26/47/b7264748-f349-dc77-32ce-e0e5c12e1c7d/1.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1a/71/71/1a717112-725a-9ee5-e954-d45967ffbde7/2.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/da/ad/06/daad068a-48a7-0099-72d8-35fa7446b299/3.png/900x0w.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d3/bd/df/d3bddfb6-e6c7-c9a4-7c7f-f5b70d94fd37/4.png/900x0w.jpg',
    ],
    tagline: {
      tr: 'Isı haritası (heatmap) ve görsel denge odaklı minimalist alışkanlık takibi ve widget’lar.',
      en: 'Minimalist habit consistency heatmaps and balanced daily routines with WidgetKit.',
    },
    description: {
      tr: 'Günlük rutinleri görsel ısı haritaları (streak grid) ve interaktif ana ekran widget’larıyla takip etmeyi sağlayan, iPhone ve iPad uyumlu alışkanlık uygulaması.',
      en: 'Habit builder featuring annual consistency heatmaps, flexible weekly targets, and interactive Home Screen grid widgets for iPhone & iPad.',
    },
    highlights: {
      tr: [
        'Yıllık tutarlılık ısı haritası (Consistency Grid) ve seri koruma',
        'iPhone ve iPad için yüksek kontrastlı minimal WidgetKit bileşenleri',
      ],
      en: [
        'Annual consistency heatmaps and streak analytics',
        'High-contrast minimalist WidgetKit components for iPhone & iPad',
      ],
    },
  },
  {
    id: '6738446609',
    name: 'Quittr: Sober & Habit Tracker',
    shortName: 'Quittr',
    bundleId: 'com.bugraciftci.addiction',
    category: 'health',
    primaryGenre: 'Health & Fitness',
    secondaryGenre: 'Behavioral Wellness',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/78/77/df/7877df14-30cb-e5b5-1c3d-4fa48c40c4f3/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6738446609',
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'WidgetKit', 'CoreData', 'Swift Charts', 'Haptics'],
    tagline: {
      tr: 'Alışkanlık bırakma yolculuğunda saniyesi saniyesine seri takibi ve nefes egzersizleri.',
      en: 'Precision sobriety counter, milestone tracker, and guided breathing coach.',
    },
    description: {
      tr: 'Kullanıcıların zararlı alışkanlıklarından kurtulma sürecini saniye hassasiyetinde takip eden, nefes egzersizleri, tasarruf hesaplayıcısı ve ana ekran widget’ları sunan takip uygulaması.',
      en: 'Empowers users to overcome bad habits with real-time timers, recovery milestones, money/time saved analytics, and interactive Home Screen widgets.',
    },
    highlights: {
      tr: [
        'Saniye bazlı canlı seri (streak) sayacı ve iyileşme aşamaları',
        'WidgetKit ile Ana Ekran ve Kilit Ekranı üzerinden anlık takip',
      ],
      en: [
        'Real-time second-by-second streak counter and recovery timeline',
        'Home Screen & Lock Screen widgets built with WidgetKit',
      ],
    },
  },
  {
    id: '6762444594',
    name: 'Colour Analysis & Outfit Aura',
    shortName: 'Outfit Aura',
    bundleId: 'com.bugraciftci.aiaura',
    category: 'ai',
    primaryGenre: 'Lifestyle',
    secondaryGenre: 'Photo & Video',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/c8/7c/33/c87c33f5-3416-5afd-4bf5-7f22005097ff/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6762444594',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'Color Vision AI', 'CoreImage', 'StoreKit 2'],
    tagline: {
      tr: '12 mevsimsel renk teorisi ve yapay zeka ile kişisel renk paleti ve kombin analizi.',
      en: '12-season personal color analysis and AI wardrobe styling engine.',
    },
    description: {
      tr: 'Cilt alt tonu, göz ve saç rengini analiz ederek kullanıcının 12 mevsimsel renk tipini belirleyen ve gardırop uyumu öneren yapay zeka stil uygulaması.',
      en: 'Determines your seasonal color palette using skin undertone, eye, and hair contrast detection, offering curated outfit harmony palettes.',
    },
    highlights: {
      tr: [
        'Cilt alt tonu ve kontrast tespiti ile 12 mevsim renk analizi',
        'Kişisel kapsül gardırop renk kartelası',
      ],
      en: [
        '12-season color theory classification via undertone & contrast analysis',
        'Interactive digital swatch book for outfit coordination',
      ],
    },
  },
  {
    id: '6761284153',
    name: 'Umax AI: Looksmax Face Rating',
    shortName: 'Umax AI',
    bundleId: 'com.bugraciftci.umaxapp',
    category: 'ai',
    primaryGenre: 'Lifestyle',
    secondaryGenre: 'Health & Fitness',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/61/37/18/6137182d-cc46-484e-5746-5e5a899c1e51/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6761284153',
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'Vision Landmarks', 'AI Scoring', 'RevenueCat'],
    tagline: {
      tr: 'Vision tabanlı yüz simetrisi analizi ve kişisel bakım önerileri.',
      en: 'Facial symmetry landmarks analysis and personal grooming recommendations.',
    },
    description: {
      tr: 'Yüz hatlarını geometrik oranlar ve simetri metrikleriyle inceleyerek kişisel bakım önerileri sunan AI analiz uygulaması.',
      en: 'Analyzes facial proportions and symmetry landmarks to deliver personalized skincare and grooming recommendations.',
    },
    highlights: {
      tr: [
        'Vision tabanlı yüz simetri noktaları ve oran analizi',
        'Kişiselleştirilmiş bakım aksiyon planı',
      ],
      en: [
        'Geometric facial landmark detection and symmetry scoring',
        'Actionable grooming and personal care roadmap',
      ],
    },
  },
  {
    id: '6771922225',
    name: 'AI Profile Picture Maker: Pozy',
    shortName: 'Pozy AI',
    bundleId: 'com.bugraciftci.pozeApp',
    category: 'ai',
    primaryGenre: 'Photo & Video',
    secondaryGenre: 'Graphics & Design',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/98/3c/7c/983c7c82-6430-8d2b-e982-cab2b9421a6d/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6771922225',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'Generative Image AI', 'PhotosUI', 'AsyncImage'],
    tagline: {
      tr: 'Profesyonel portreler ve sosyal medya için yapay zeka profil fotoğrafı üretici.',
      en: 'AI headshots and aesthetic profile picture generator for social media.',
    },
    description: {
      tr: 'Fotoğrafları kurumsal portrelere ve sosyal medya avatarlarına dönüştüren üretken yapay zeka fotoğraf uygulaması.',
      en: 'Transforms casual selfies into executive headshots and stylized social avatars using generative image pipelines.',
    },
    highlights: {
      tr: [
        '40+ hazır portre şablonu ve hızlı bulut işleme',
        'Yüksek çözünürlüklü dışa aktarma galerisi',
      ],
      en: [
        '40+ curated portrait presets',
        'High-resolution export pipeline with instant before/after comparison',
      ],
    },
  },
  {
    id: '6749149898',
    name: 'AI Photo Generator: Filters',
    shortName: 'Aimage',
    bundleId: 'com.bugraciftci.Aimage',
    category: 'ai',
    primaryGenre: 'Entertainment',
    secondaryGenre: 'Photo & Video',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/69/d4/1f/69d41f0a-80c2-9bd7-139c-7345a9ff926b/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6749149898',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'CoreML', 'OpenAI API', 'Combine', 'SDWebImage'],
    tagline: {
      tr: 'Fotoğrafları anime, 3D karakter ve sinematik sanat eserlerine dönüştüren AI filtreler.',
      en: 'Transform photos into anime, 3D art, and cinematic styles with CoreML.',
    },
    description: {
      tr: 'Image-to-Image yapay zeka modelleri ve Core ML görüntü işleme teknikleriyle fotoğrafları sanatsal stillere dönüştüren filtre uygulaması.',
      en: 'Image-to-Image AI app integrating Core ML and neural style transfer while preserving composition.',
    },
    highlights: {
      tr: [
        'Tek dokunuşla stil transferi, Core ML entegrasyonu ve SDWebImage önbellekleme',
        'Paylaşıma hazır dikey hikaye (Story) ve kare format çıktıları',
      ],
      en: [
        'One-tap neural style transfer with Core ML & Combine reactive pipeline',
        'Share-ready vertical story and high-DPI export formats',
      ],
    },
  },
  {
    id: '6751143567',
    name: 'AI Dream Interpretation & Diary',
    shortName: 'Dream AI',
    bundleId: 'com.bugraciftci.DreamAi',
    category: 'ai',
    primaryGenre: 'Health & Fitness',
    secondaryGenre: 'Reference',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/74/93/51/7493515f-f090-985d-a9d8-c4119c8e7933/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6751143567',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'LLM Streaming', 'CoreData', 'Biometric Lock'],
    tagline: {
      tr: 'Yapay zeka destekli rüya analizi, sembol sözlüğü ve şifreli rüya günlüğü.',
      en: 'AI dream analysis, symbol dictionary, and encrypted dream journal.',
    },
    description: {
      tr: 'Rüyaları temalar çerçevesinde analiz eden ve tekrarlayan sembolleri grafikleştiren kişisel rüya günlüğü.',
      en: 'Analyzes dream narratives, tracks recurring symbols and emotional patterns, and keeps entries safe locally.',
    },
    highlights: {
      tr: [
        'Rüya metinlerinden otomatik sembol ve tema çıkarımı',
        'Aylık rüya örüntüsü istatistikleri ve yerel veri gizliliği',
      ],
      en: [
        'Automated extraction of dream symbols and emotional themes',
        'Monthly dream pattern insights with local persistence',
      ],
    },
  },
  {
    id: '6626923724',
    name: 'Breathe Mind: Nature Calm Sound',
    shortName: 'Breathe Mind',
    bundleId: 'com.bugraciftci.BreatheMind',
    category: 'health',
    primaryGenre: 'Lifestyle',
    secondaryGenre: 'Health & Fitness',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/59/5a/99/595a9981-68d9-e8f6-8b11-a30322919f80/AppIcon-1x_U007epad-0-85-220-0.jpeg/1024x1024.jpg',
    appStoreUrl: 'https://apps.apple.com/app/id6626923724',
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'AVAudioEngine', 'CoreHaptics', 'HealthKit'],
    tagline: {
      tr: 'Doğa ambiyansları, çok kanallı ses mikseri ve haptik geri bildirimli nefes egzersizleri.',
      en: 'Multi-layered nature soundscapes, sleep timer, and haptic guided breathing.',
    },
    description: {
      tr: 'Yağmur, orman ve beyaz gürültü katmanlarını gerçek zamanlı karıştırmaya olanak tanıyan ve nefes egzersizleri sunan farkındalık uygulaması.',
      en: 'Features a multi-track ambient sound mixer for sleep and focus alongside rhythmic haptic breathing exercises.',
    },
    highlights: {
      tr: [
        'Çok kanallı ambiyans ses mikseri ve uyku zamanlayıcısı',
        'CoreHaptics destekli nefes ritmi rehberi',
      ],
      en: [
        'Multi-channel ambient audio mixer with gradual fade-out sleep timer',
        'CoreHaptics-driven tactile breathing cues',
      ],
    },
  },
  {
    id: '6695755530',
    name: 'Pill Reminder & Vitamin Tracker',
    shortName: 'Pill Reminder',
    bundleId: 'com.bugraciftci.PillReminder',
    category: 'health',
    primaryGenre: 'Health & Fitness',
    secondaryGenre: 'Utilities',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/f5/88/98/f5889822-6a94-7012-b5c7-682d191eb395/AppIcon-0-0-1x_U007epad-0-1-85-220.jpeg/1024x1024.jpg',
    appStoreUrl: 'https://apps.apple.com/app/id6695755530',
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'UserNotifications', 'WidgetKit', 'CoreData'],
    tagline: {
      tr: 'İlaç, vitamin ve takviye saatlerini takip etmeyi sağlayan akıllı doz hatırlatıcısı.',
      en: 'Smart medication schedules, refill alerts, and interactive dose tracking widgets.',
    },
    description: {
      tr: 'Esnek doz periyotları, stok azalma uyarıları ve bildirim üzerinden hızlı onay sunan ilaç ve vitamin hatırlatıcısı.',
      en: 'Medication & supplement companion with flexible dosing intervals, inventory refill alerts, and actionable notifications.',
    },
    highlights: {
      tr: [
        'Hassas yerel bildirim zamanlaması ve interaktif bildirim aksiyonları',
        'Aylık doz uyum takvimi ve stok yenileme hatırlatmaları',
      ],
      en: [
        'Precision local notification engine with interactive quick-log actions',
        'Monthly adherence calendar and smart refill alerts',
      ],
    },
  },
  {
    id: '6771417579',
    name: 'Calorie Counter & Water Tracker',
    shortName: 'Calorie & Water',
    bundleId: 'com.bugraciftci.calorietracker',
    category: 'health',
    primaryGenre: 'Food & Drink',
    secondaryGenre: 'Health & Fitness',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/07/ee/10/07ee100f-8c02-c5fa-f3b6-e3482e42f2b1/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6771417579',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'Swift Charts', 'HealthKit', 'WidgetKit'],
    tagline: {
      tr: 'Günlük makro besin (Protein, Karbonhidrat, Yağ) ve su tüketimi takip asistanı.',
      en: 'Streamlined daily macro nutrition calculator and hydration goal tracker.',
    },
    description: {
      tr: 'Hızlı öğün kaydı, makro halkaları ve su tüketim takibiyle sağlıklı beslenme hedeflerini kolaylaştıran beslenme uygulaması.',
      en: 'Combines fast meal logging, macro progress rings, and hydration tracking into a clean daily dashboard.',
    },
    highlights: {
      tr: [
        'Kişisel BMR/TDEE hesaplama ve dinamik makro besin halkaları',
        'Ana ekran widget’ları üzerinden tek dokunuşla su ekleme',
      ],
      en: [
        'Personalized BMR/TDEE macro targets with animated progress rings',
        'Interactive Home Screen widgets for one-tap hydration logging',
      ],
    },
  },
  {
    id: '6757722256',
    name: 'STOPPR: Quit & Stay Sober',
    shortName: 'STOPPR',
    bundleId: 'com.bugraciftci.stopcorn.app',
    category: 'health',
    primaryGenre: 'Productivity',
    secondaryGenre: 'Health & Fitness',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/01/c7/73/01c773ee-240b-cdac-dade-529a98a48bd2/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6757722256',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'CoreData', 'Swift Charts', 'Local Auth'],
    tagline: {
      tr: 'Öz disiplin ve alışkanlık kontrolü için 90 günlük takip programı.',
      en: '90-day self-discipline tracker and daily mindset check-ins.',
    },
    description: {
      tr: '90 günlük kilometre taşları, nefes egzersizi modülü ve günlük duygu durumu analizi sunan alışkanlık takip uygulaması.',
      en: 'Structured 90-day habit recovery program featuring daily check-ins and trigger analytics.',
    },
    highlights: {
      tr: [
        '90 günlük ilerleme motoru ve günlük kontrol sistemi',
        'Face ID gizlilik kilidi ve tetikleyici analiz grafikleri',
      ],
      en: [
        '90-day milestone tracking and daily check-in system',
        'Face ID privacy protection and trigger correlation charts',
      ],
    },
  },
  {
    id: '6755064064',
    name: 'Fitness To-Do Planner & Tracker',
    shortName: 'Fitness Planner',
    bundleId: 'com.bugraciftci.fitness',
    category: 'health',
    primaryGenre: 'Health & Fitness',
    secondaryGenre: 'Productivity',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/46/bf/cc/46bfccde-a6bb-6a89-2bb8-70e57fffad9e/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6755064064',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'CoreData', 'Swift Charts', 'Haptics'],
    tagline: {
      tr: 'Antrenman setlerini, ağırlık artışlarını ve haftalık spor rutinini planlama aracı.',
      en: 'Workout split planner, set/rep logger, and progressive overload tracker.',
    },
    description: {
      tr: 'Set, tekrar, dinlenme süresi ve kişisel rekorları (PR) takip eden minimalist antrenman günlüğü.',
      en: 'Ultra-fast set, rep, and personal record (PR) logger tailored for progressive overload.',
    },
    highlights: {
      tr: [
        'Bölgesel antrenman şablonları ve otomatik dinlenme sayacı',
        'Haftalık hacim (volume) ve kişisel rekor ilerleme grafikleri',
      ],
      en: [
        'Custom split templates with integrated between-set rest timers',
        'Weekly training volume and personal record progression charts',
      ],
    },
  },
  {
    id: '6754226867',
    name: 'Day Planner & Limit App Blocker',
    shortName: 'Day Planner',
    bundleId: 'com.bugraciftci.DayPlannerApp',
    category: 'productivity',
    primaryGenre: 'Productivity',
    secondaryGenre: 'Utilities',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/ed/5e/f2/ed5ef287-8f06-6a70-fad1-75368762a5e5/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6754226867',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'ScreenTime API', 'CalendarKit', 'WidgetKit'],
    tagline: {
      tr: 'Zaman bloklama (Time-Blocking) takvimi ile ekran süresi kısıtlamasını birleştiren planlayıcı.',
      en: 'Visual time-blocking schedule integrated with automated app usage limits.',
    },
    description: {
      tr: 'Günü zaman bloklarına ayırırken çalışma saatlerinde dikkat dağıtan uygulamaları otomatik olarak sınırlandıran zaman yönetimi uygulaması.',
      en: 'Bridges visual daily time-blocking with automated Screen Time shielding.',
    },
    highlights: {
      tr: [
        'Görsel zaman çizelgesi (Timeline) ve görev planlama',
        'Çalışma bloklarında otomatik devreye giren uygulama kısıtlamaları',
      ],
      en: [
        'Visual daily timeline with intuitive time-block scheduling',
        'Automated app usage restrictions tied directly to scheduled work blocks',
      ],
    },
  },
  {
    id: '6514273025',
    name: 'Sticky Notes Widget++',
    shortName: 'Sticky Notes++',
    bundleId: 'com.bugraciftci.StickyNotes',
    category: 'productivity',
    primaryGenre: 'Productivity',
    secondaryGenre: 'Utilities',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/3b/7d/ad/3b7dad2d-20f6-f9d3-a213-5fa5aadb8c50/AppIcon-0-1x_U007epad-0-1-85-220-0.jpeg/1024x1024.jpg',
    appStoreUrl: 'https://apps.apple.com/app/id6514273025',
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'WidgetKit', 'AppGroups', 'Custom Fonts'],
    tagline: {
      tr: 'iOS Ana Ekran ve Kilit Ekranı için özelleştirilebilir hızlı not widget’ları.',
      en: 'Customizable sticky notes for iOS Home Screen, Lock Screen, and StandBy mode.',
    },
    description: {
      tr: 'AppGroup paylaşımlı konteyner mimarisiyle ana ekrana anında güncellenen notlar yerleştirmeyi sağlayan WidgetKit uygulaması.',
      en: 'Brings customizable notes directly to your iPhone & iPad Home Screen via AppGroup shared containers.',
    },
    highlights: {
      tr: [
        'AppGroups mimarisiyle uygulama ve widget arasında anlık senkronizasyon',
        'Küçük, orta, büyük ve Kilit Ekranı (Lock Screen) widget boyutları',
      ],
      en: [
        'Instant AppGroups synchronization between main app and WidgetKit extensions',
        'Full support for Home Screen, Lock Screen, and iOS StandBy sizes',
      ],
    },
  },
  {
    id: '6480454244',
    name: 'Countdown: Big Day Counter',
    shortName: 'Countdown',
    bundleId: 'com.bugraciftci.Countdown',
    category: 'productivity',
    primaryGenre: 'Utilities',
    secondaryGenre: 'Lifestyle',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple221/v4/7f/7a/f5/7f7af588-51ef-9b7b-6d90-265516cb67df/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6480454244',
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'WidgetKit', 'UserNotifications', 'CoreData'],
    tagline: {
      tr: 'Önemli günler, sınavlar ve etkinlikler için geri sayım kartları ve ana ekran widget’ları.',
      en: 'Countdown cards and Home Screen widgets for upcoming events and milestones.',
    },
    description: {
      tr: 'Önemli tarihlere kalan süreyi gün, saat ve dakika olarak gösteren, ana ekran widget’larıyla donatılmış geri sayım uygulaması.',
      en: 'Tracks upcoming events and milestones with live WidgetKit counters and local notifications.',
    },
    highlights: {
      tr: [
        'Tekrarlayan etkinlikler ve esnek zaman birimi gösterimi',
        'WidgetKit galerisi ve yaklaşan etkinlik bildirimleri',
      ],
      en: [
        'Recurring events with customizable time unit displays',
        'WidgetKit gallery and milestone countdown notifications',
      ],
    },
  },
  {
    id: '6749812107',
    name: 'LED Scroller & Text Banner',
    shortName: 'LED Scroller',
    bundleId: 'com.bugraciftci.LedBanner',
    category: 'lifestyle',
    primaryGenre: 'Utilities',
    secondaryGenre: 'Entertainment',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/9d/66/32/9d6632dc-b1c4-5ba3-31ff-cb233527b3ae/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6749812107',
    accentColor: '#E4E4E7',
    devices: ['iPhone'],
    techStack: ['SwiftUI', 'Canvas API', '60/120Hz ProMotion'],
    tagline: {
      tr: 'SwiftUI Canvas API ile 120Hz ProMotion akıcılığında dot-matrix LED kayan yazı.',
      en: '120Hz ProMotion dot-matrix LED banner rendered with SwiftUI Canvas.',
    },
    description: {
      tr: 'SwiftUI Canvas API kullanılarak piksel-piksel (dot-matrix) çizilen, hız ve yön kontrolüne sahip dijital LED tabela uygulaması.',
      en: 'Hardware-accelerated dot-matrix LED renderer built with SwiftUI Canvas.',
    },
    highlights: {
      tr: [
        'SwiftUI Canvas ile 120Hz ProMotion destekli dot-matrix render',
        'Özelleştirilebilir piksel yoğunluğu ve kaydırma hızı',
      ],
      en: [
        '120Hz ProMotion hardware-accelerated dot-matrix Canvas renderer',
        'Customizable pixel density and scroll speed controls',
      ],
    },
  },
  {
    id: '6751011808',
    name: 'Pixel Art Editor: PixelCraft',
    shortName: 'PixelCraft',
    bundleId: 'com.bugraciftci.GifPixel',
    category: 'lifestyle',
    primaryGenre: 'Entertainment',
    secondaryGenre: 'Graphics & Design',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple211/v4/fb/f9/12/fbf91210-09e0-6db8-f9f4-79ff5bf1afc0/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1024x1024.png',
    appStoreUrl: 'https://apps.apple.com/app/id6751011808',
    accentColor: '#E4E4E7',
    devices: ['iPhone', 'iPad'],
    techStack: ['SwiftUI', 'CoreGraphics', 'GIF Encoder', 'PencilKit Support'],
    tagline: {
      tr: 'iPhone ve iPad için katman destekli 8-bit piksel çizim ve kare-kare GIF animasyon editörü.',
      en: '8-bit sprite editor and frame-by-frame GIF animation tool for iPhone & iPad.',
    },
    description: {
      tr: 'Katman (layer) yönetimi, soğan zarı (onion skinning) animasyon önizlemesi ve kayıpsız sprite/GIF dışa aktarma sunan piksel çizim uygulaması.',
      en: 'Equipped with multi-layer canvas editing, onion-skinning frame animation, and crisp PNG/GIF sprite export.',
    },
    highlights: {
      tr: [
        'Kare-kare (frame-by-frame) animasyon zaman çizelgesi ve Onion Skinning',
        'Özel piksel fırçaları, simetri modu ve net PNG/GIF çıktısı',
      ],
      en: [
        'Frame-by-frame animation timeline with live onion-skinning preview',
        'Symmetry drawing tools and crisp nearest-neighbor export',
      ],
    },
  },
];

export interface CodeSnippetTab {
  id: string;
  label: string;
  fileName: string;
  badge: string;
  code: string;
}

export const SWIFT_ARCHITECTURE_SNIPPETS: CodeSnippetTab[] = [
  {
    id: 'mvvm',
    label: 'Protocol MVVM & Concurrency',
    fileName: 'SongGenerationViewModel.swift',
    badge: 'Swift 6 · async/await',
    code: `import SwiftUI
import Combine

protocol AudioGeneratingService: Sendable {
    func synthesizeTrack(prompt: TrackPrompt) async throws -> GeneratedTrack
}

@MainActor
final class SongGenerationViewModel: ObservableObject {
    @Published private(set) var state: GenerationState = .idle
    @Published private(set) var activeTrack: GeneratedTrack?
    
    private let service: AudioGeneratingService
    private let hapticEngine: HapticFeedbackProviding
    
    init(service: AudioGeneratingService, hapticEngine: HapticFeedbackProviding) {
        self.service = service
        self.hapticEngine = hapticEngine
    }
    
    func generate(from prompt: TrackPrompt) async {
        guard !prompt.lyrics.isEmpty else { return }
        state = .synthesizing(progress: 0.15)
        hapticEngine.trigger(.selection)
        
        do {
            let track = try await service.synthesizeTrack(prompt: prompt)
            withAnimation(.spring(response: 0.42, dampingFraction: 0.8)) {
                self.activeTrack = track
                self.state = .completed(track)
            }
            hapticEngine.trigger(.success)
        } catch {
            self.state = .failed(AppError.from(error))
        }
    }
}`,
  },
  {
    id: 'screentime',
    label: 'ScreenTime & Shielding',
    fileName: 'FocusShieldManager.swift',
    badge: 'FamilyControls · ManagedSettings',
    code: `import FamilyControls
import ManagedSettings
import DeviceActivity

struct FocusShieldConfiguration {
    let selection: FamilyActivitySelection
    let strictModeEnabled: Bool
}

final class FocusShieldManager {
    private let store = ManagedSettingsStore()
    private let center = AuthorizationCenter.shared
    
    func requestAuthorization() async throws {
        try await center.requestAuthorization(for: .individual)
    }
    
    func activateDeepFocus(config: FocusShieldConfiguration) {
        store.shield.applications = config.selection.applicationTokens.isEmpty
            ? nil
            : config.selection.applicationTokens
            
        store.shield.applicationCategories = .specific(
            config.selection.categoryTokens
        )
        store.application.denyAppRemoval = config.strictModeEnabled
    }
    
    func releaseShield() {
        store.clearAllSettings()
    }
}`,
  },
  {
    id: 'carplay',
    label: 'CarPlay CPTemplate Sync',
    fileName: 'CarPlaySceneDelegate.swift',
    badge: 'CarPlay · Bidirectional Sync',
    code: `import CarPlay
import Combine

@MainActor
final class CarPlaySceneDelegate: UIResponder, CPTemplateApplicationSceneDelegate {
    private var interfaceController: CPInterfaceController?
    private var cancellables = Set<AnyCancellable>()
    private let navigationState: NavigationStateStore = .shared

    func templateApplicationScene(
        _ templateApplicationScene: CPTemplateApplicationScene,
        didConnect interfaceController: CPInterfaceController
    ) {
        self.interfaceController = interfaceController
        bindRealtimeState()
    }

    private func bindRealtimeState() {
        navigationState.$activeRouteItems
            .receive(on: DispatchQueue.main)
            .sink { [weak self] items in
                let section = CPListSection(items: items.map { $0.toCarPlayItem() })
                let template = CPListTemplate(title: "Active Route", sections: [section])
                self?.interfaceController?.setRootTemplate(template, animated: true, completion: nil)
            }
            .store(in: &cancellables)
    }
}`,
  },
];

export const TECH_STACK_GROUPS = [
  {
    title: { tr: 'iOS & Apple Frameworks', en: 'iOS & Apple Frameworks' },
    items: [
      'Swift 6 & SwiftUI',
      'UIKit & Combine',
      'Structured Concurrency (async/await)',
      'Apple CarPlay (CPTemplate)',
      'FamilyControls (ScreenTime API)',
      'WidgetKit & AVFoundation',
    ],
  },
  {
    title: { tr: 'Mimari & Veri Katmanı', en: 'Architecture & Persistence' },
    items: [
      'MVVM & Clean Architecture',
      'Protocol-Oriented Programming',
      'Dependency Injection',
      'Core Data & SwiftData',
      'Keychain Encrypted Storage',
      'Modular UI Libraries',
    ],
  },
  {
    title: { tr: 'Gelir, Kalite & Araçlar', en: 'Monetization, Quality & Tooling' },
    items: [
      'StoreKit 2 & RevenueCat',
      'RESTful APIs & URLSession / Codable',
      'XCTest & Xcode Instruments',
      'TestFlight & App Store Connect',
      'Firebase Analytics & Crashlytics',
      'Git, GitHub, SPM & CI/CD',
    ],
  },
];
