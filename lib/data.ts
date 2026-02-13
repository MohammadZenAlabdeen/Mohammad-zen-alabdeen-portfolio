import { Experience, Project, Skill, ContactInfo, JobTitle } from '@/types';

export const JOB_TITLES: JobTitle[] = [
  { en: 'Fullstack Developer', ar: 'مطور فل ستاك' },
  { en: 'Frontend Developer', ar: 'مطور واجهات أمامية' },
  { en: 'Backend Developer', ar: 'مطور خلفية' },
  { en: 'Mobile App Developer', ar: 'مطور تطبيقات الجوال' },
  { en: 'Embedded Systems Engineer', ar: 'مهندس أنظمة مدمجة' }
] as const;

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    title: 'Automotive Locksmith',
    titleAr: 'فني أقفال سيارات',
    company: 'Zen Al-Abdeen Locksmith Shop',
    companyAr: 'محل زين العابدين للأقفال',
    period: 'Jan 2023 - Present',
    periodAr: 'يناير 2023 - الحاضر',
    description: 'Specialized in automotive electronics, EEPROM programming, and ECU systems. Performing precision chip soldering and advanced key programming.',
    descriptionAr: 'متخصص في إلكترونيات السيارات، برمجة EEPROM، وأنظمة ECU. إجراء لحام رقائق دقيقة وبرمجة مفاتيح متقدمة.',
    tech: ['EEPROM', 'ECU Systems', 'Automotive Electronics']
  },
  {
    id: 'exp-2',
    title: 'Backend Developer',
    titleAr: 'مطور خلفية',
    company: 'Damascus University',
    companyAr: 'جامعة دمشق',
    period: '2024',
    periodAr: '2024',
    description: 'Architected comprehensive library management system with real-time attendance tracking, role-based access control, and resource management.',
    descriptionAr: 'صممت نظام إدارة مكتبة شامل مع تتبع الحضور في الوقت الفعلي، والتحكم في الوصول القائم على الأدوار، وإدارة الموارد.',
    tech: ['Backend Architecture', 'Real-time Systems', 'Database Design']
  },
  {
    id: 'exp-3',
    title: 'Full-Stack Developer',
    titleAr: 'مطور فل ستاك',
    company: 'Pioneers',
    companyAr: 'رواد',
    period: '2025',
    periodAr: '2025',
    description: 'Developed T-Team car washing app with Next.js and MongoDB. Built admin control panel, mobile app with React Native, and HR-Trust enterprise dashboard.',
    descriptionAr: 'طورت تطبيق T-Team لغسيل السيارات باستخدام Next.js و MongoDB. بنيت لوحة تحكم إدارية، تطبيق جوال مع React Native، ولوحة معلومات مؤسسية HR-Trust.',
    tech: ['Next.js', 'MongoDB', 'React Native', 'Laravel']
  },
  {
    id: 'exp-4',
    title: 'Embedded Systems Engineer',
    titleAr: 'مهندس أنظمة مدمجة',
    company: 'Team Project',
    companyAr: 'مشروع جماعي',
    period: '2024',
    periodAr: '2024',
    description: 'Led development of semi-autonomous smart car with adaptive cruise control, autonomous parking, and blind spot detection using Arduino and ESP modules.',
    descriptionAr: 'قادت تطوير سيارة ذكية شبه ذاتية مع تحكم تكيفي في السرعة، ووقوف ذاتي، واكتشاف النقاط العمياء باستخدام Arduino و ESP.',
    tech: ['Arduino', 'ESP32', 'Python', 'IoT']
  }
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    name: 'Semi-Autonomous Smart Car',
    nameAr: 'سيارة ذكية شبه ذاتية القيادة',
    description: 'Adaptive cruise control with ultrasonic sensors, autonomous parking system, and React Native control interface.',
    descriptionAr: 'نظام تحكم تكيفي في السرعة مع مستشعرات فوق صوتية، نظام وقوف ذاتي، وواجهة تحكم React Native.',
    tech: 'Arduino, ESP32, Python, React Native'
  },
  {
    id: 'proj-2',
    name: 'T-Team Car Washing App',
    nameAr: 'تطبيق T-Team لغسيل السيارات',
    description: 'Scalable platform with admin panel, workforce scheduling, and cross-platform mobile application.',
    descriptionAr: 'منصة قابلة للتطوير مع لوحة إدارة، جدولة القوى العاملة، وتطبيق جوال متعدد المنصات.',
    tech: 'Next.js, MongoDB, React Native'
  },
  {
    id: 'proj-3',
    name: 'University Library System',
    nameAr: 'نظام مكتبة الجامعة',
    description: 'Real-time attendance tracking, resource management, and multi-tiered role-based access control.',
    descriptionAr: 'تتبع الحضور في الوقت الفعلي، إدارة الموارد، والتحكم في الوصول متعدد المستويات.',
    tech: 'Backend Architecture, MySQL'
  },
  {
    id: 'proj-4',
    name: 'E-Commerce Platform',
    nameAr: 'منصة التجارة الإلكترونية',
    description: 'Comprehensive management system with inventory, analytics dashboard, and advanced filtering algorithms.',
    descriptionAr: 'نظام إدارة شامل مع المخزون، لوحة التحليلات، وخوارزميات الفلترة المتقدمة.',
    tech: 'Laravel, PHP, MySQL'
  },
  {
    id: 'proj-5',
    name: 'Pharmacy Finder',
    nameAr: 'محدد موقع الصيدليات',
    description: 'Location-based service with geolocation algorithms matching users to nearest pharmacies in real-time.',
    descriptionAr: 'خدمة قائمة على الموقع مع خوارزميات تحديد الموقع الجغرافي لمطابقة المستخدمين بأقرب الصيدليات.',
    tech: 'RESTful API, Geolocation'
  },
  {
    id: 'proj-6',
    name: 'AI Genetic Algorithm',
    nameAr: 'خوارزمية جينية بالذكاء الاصطناعي',
    description: 'Experimental automation using evolutionary logic for game completion with multi-threaded execution.',
    descriptionAr: 'أتمتة تجريبية باستخدام المنطق التطوري لإكمال الألعاب مع تنفيذ متعدد الخيوط.',
    tech: 'Python, Genetic Algorithms, AutoHotkey'
  }
] as const;

export const SKILLS: Skill[] = [
  {
    id: 'skill-1',
    title: 'Web Development',
    titleAr: 'تطوير الويب',
    skills: ['React.js', 'Next.js', 'Laravel', 'React Native', 'Tailwind CSS', 'RESTful APIs']
  },
  {
    id: 'skill-2',
    title: 'Embedded Systems',
    titleAr: 'الأنظمة المدمجة',
    skills: ['Arduino', 'ESP32/ESP8266', 'C/C++', 'IoT Systems', 'Sensor Integration']
  },
  {
    id: 'skill-3',
    title: 'Automotive Tech',
    titleAr: 'تقنيات السيارات',
    skills: ['EEPROM Programming', 'ECU Systems', 'Key Programming', 'Vehicle Security']
  }
] as const;

export const CONTACT_INFO: ContactInfo[] = [
  {
    id: 'contact-1',
    icon: '📧',
    label: 'Email',
    labelAr: 'البريد الإلكتروني',
    value: 'mohamadze768@gmail.com',
    link: 'mailto:mohamadze768@gmail.com'
  },
  {
    id: 'contact-2',
    icon: '📱',
    label: 'Phone',
    labelAr: 'الهاتف',
    value: '+963-966618500',
    link: 'tel:+963966618500'
  },
  {
    id: 'contact-3',
    icon: '💼',
    label: 'LinkedIn',
    labelAr: 'لينكد إن',
    value: 'Connect with me',
    valueAr: 'تواصل معي',
    link: 'https://linkedin.com/in/mohammad-zen-al-abdeen-4a47b2308'
  },
  {
    id: 'contact-4',
    icon: '💻',
    label: 'GitHub',
    labelAr: 'جيت هاب',
    value: 'View my code',
    valueAr: 'اطلع على أكوادي',
    link: 'https://github.com/MohammadZenAlabdeen'
  }
] as const;
