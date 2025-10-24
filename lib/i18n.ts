import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        Features: "Features",
        Solution: "Solution",
        Pricing: "Pricing",
        About: "About",
        Login: "Login",
        SignUp: "Sign Up",
        New: "New",
        IntroTailark: "start of new life ",
        MessageWelcome: "Share What You Don’t Need. Change Someone’s Day.",
        HeroDescription:
          "Post your spare food, clothes, or essentials and help someone in need instantly. Every small contribution makes a real difference in someone’s day.",
        HeroDescriptionMobile:
          "Reusable, beautiful components to quickly build modern web apps.",
        StartBuilding: "Start Building",
        LearnMore: "Learn More",
        AppScreen: "App screen illustration",
        FAQ_Title_Line1: "Frequently Asked Questions",
        FAQ_Title_Line2: "About Sharing and Helping",
        FAQ_Title_Line3: "on Our Platform",
        FAQ_Subtitle: "Find answers to common questions about donating, receiving, and how our community works.",

        // Q1
        FAQ_Q1: "How can I donate food or clothes?",
        FAQ_A1_Intro: "Donating is simple! Just follow these steps to share what you don’t need:",
        FAQ_A1_Step1: "Sign up or log in to your account.",
        FAQ_A1_Step2: "Click the 'Add Donation' button and upload details with a photo.",
        FAQ_A1_Step3: "Set your location so people nearby can find your post.",

        // Q2
        FAQ_Q2: "Is it free to use this platform?",
        FAQ_A2: "Yes! Our platform is completely free to use for both donors and receivers. It’s built to support communities without any fees.",

        // Q3
        FAQ_Q3: "How do I ensure food safety before donating?",
        FAQ_A3_Intro: "We encourage you to share only safe and clean food. Please make sure to:",
        FAQ_A3_Point1: "Avoid sharing expired or spoiled food.",
        FAQ_A3_Point2: "Pack your donation neatly and mention any allergens if known.",

        // Q4
        FAQ_Q4: "Can I donate other essentials besides food and clothes?",
        FAQ_A4: "Absolutely! You can donate books, shoes, blankets, and even small household items — as long as they’re clean and usable.",
        "Footer_Features": "Features",
        "Footer_Solution": "Solution",
        "Footer_About": "About",
        "Footer_FAQ": "FAQ",
        "Footer_HomeLabel": "Go Home",
        "Footer_Rights": "All rights reserved"
      },
    },
    ar: {
      translation: {
        Features: "المميزات",
        Solution: "الحلول",
        Pricing: "الأسعار",
        About: "حول",
        Login: "تسجيل الدخول",
        SignUp: "إنشاء حساب",
        New: "جديد",
        IntroTailark: "بداية حياة جديدة",
        MessageWelcome: "شارك ما لا تحتاجه. غيّر يوم شخص ما.",
        HeroDescription:
          "أرسل فائضك من الطعام أو الملابس أو الضروريات، وساعد شخصًا محتاجًا فورًا. كل مساهمة صغيرة تُحدث فرقًا حقيقيًا في يوم شخص ما.",
        HeroDescriptionMobile:
          "مكونات قابلة لإعادة الاستخدام لبناء تطبيقات ويب حديثة بسرعة.",
        StartBuilding: "ابدأ البناء",
        LearnMore: "تعرف على المزيد",
        AppScreen: "صورة توضيحية للتطبيق",
        FAQ_Title_Line1: "الأسئلة الشائعة",
        FAQ_Title_Line2: "حول المشاركة والمساعدة",
        FAQ_Title_Line3: "على منصتنا",
        FAQ_Subtitle: "اعثر على إجابات لأكثر الأسئلة شيوعًا حول التبرع، والاستلام، وكيفية عمل مجتمعنا.",

        FAQ_Q1: "كيف يمكنني التبرع بالطعام أو الملابس؟",
        FAQ_A1_Intro: "التبرع سهل للغاية! فقط اتبع هذه الخطوات لمشاركة ما لا تحتاجه:",
        FAQ_A1_Step1: "قم بتسجيل الدخول أو إنشاء حساب جديد.",
        FAQ_A1_Step2: "اضغط على زر 'إضافة تبرع' وأضف التفاصيل مع صورة.",
        FAQ_A1_Step3: "حدّد موقعك حتى يتمكن الأشخاص القريبون منك من العثور على منشورك.",

        FAQ_Q2: "هل استخدام المنصة مجاني؟",
        FAQ_A2: "نعم! منصتنا مجانية تمامًا لكل من المتبرعين والمستلمين. تم إنشاؤها لدعم المجتمع دون أي رسوم.",

        FAQ_Q3: "كيف أضمن سلامة الطعام قبل التبرع؟",
        FAQ_A3_Intro: "نشجعك على مشاركة الطعام الآمن والنظيف فقط. تأكد من:",
        FAQ_A3_Point1: "تجنب مشاركة الطعام الفاسد أو منتهي الصلاحية.",
        FAQ_A3_Point2: "تغليف الطعام بشكل جيد وذكر أي مسببات حساسية إن وجدت.",

        FAQ_Q4: "هل يمكنني التبرع بأشياء أخرى غير الطعام والملابس؟",
        FAQ_A4: "بالتأكيد! يمكنك التبرع بالكتب، والأحذية، والبطانيات، وحتى الأدوات المنزلية الصغيرة طالما كانت نظيفة وصالحة للاستخدام.",
        "Footer_Features": "الميزات",
        "Footer_Solution": "الحلول",
        "Footer_About": "حول",
        "Footer_FAQ": "الأسئلة الشائعة",
        "Footer_HomeLabel": "العودة إلى الصفحة الرئيسية",
        "Footer_Rights": "جميع الحقوق محفوظة"
      },
    },
    fr: {
      translation: {
        Features: "Fonctionnalités",
        Solution: "Solution",
        Pricing: "Tarification",
        About: "À propos",
        Login: "Connexion",
        SignUp: "Inscription",
        New: "Nouveau",
        IntroTailark: "Introduction Tailark Html",
        MessageWelcome:
          "Partagez ce dont vous n’avez pas besoin. Changez la journée de quelqu’un.",
        HeroDescription:
          "Créez et personnalisez des applications web modernes plus rapidement avec des composants réutilisables et élégants.",
        HeroDescriptionMobile:
          "Composants réutilisables pour créer rapidement des applications web modernes.",
        StartBuilding: "Commencer",
        LearnMore: "En savoir plus",
        AppScreen: "Illustration de l’application",
        FAQ_Title_Line1: "Questions Fréquemment Posées",
        FAQ_Title_Line2: "À propos du partage et de l’entraide",
        FAQ_Title_Line3: "sur notre plateforme",
        FAQ_Subtitle: "Trouvez des réponses aux questions les plus courantes sur les dons, la réception et le fonctionnement de notre communauté.",

        FAQ_Q1: "Comment puis-je faire un don de nourriture ou de vêtements ?",
        FAQ_A1_Intro: "Faire un don est simple ! Suivez ces étapes pour partager ce dont vous n’avez plus besoin :",
        FAQ_A1_Step1: "Connectez-vous ou créez un compte.",
        FAQ_A1_Step2: "Cliquez sur le bouton 'Ajouter un don' et téléchargez les détails avec une photo.",
        FAQ_A1_Step3: "Indiquez votre position afin que les personnes proches puissent voir votre publication.",

        FAQ_Q2: "L’utilisation de la plateforme est-elle gratuite ?",
        FAQ_A2: "Oui ! Notre plateforme est entièrement gratuite pour les donateurs et les bénéficiaires. Elle a été conçue pour soutenir les communautés sans frais.",

        FAQ_Q3: "Comment assurer la sécurité alimentaire avant de faire un don ?",
        FAQ_A3_Intro: "Nous vous encourageons à ne partager que des aliments sûrs et propres. Veuillez :",
        FAQ_A3_Point1: "Éviter les aliments périmés ou avariés.",
        FAQ_A3_Point2: "Emballer soigneusement et mentionner tout allergène connu.",

        FAQ_Q4: "Puis-je donner d’autres objets que de la nourriture et des vêtements ?",
        FAQ_A4: "Bien sûr ! Vous pouvez donner des livres, des chaussures, des couvertures ou de petits objets ménagers tant qu’ils sont propres et en bon état.",
        "Footer_Features": "Fonctionnalités",
        "Footer_Solution": "Solution",
        "Footer_About": "À propos",
        "Footer_FAQ": "FAQ",
        "Footer_HomeLabel": "Page d’accueil",
        "Footer_Rights": "Tous droits réservés"

      },
    },
    zh: {
      translation: {
        Features: "功能",
        Solution: "解决方案",
        Pricing: "定价",
        About: "关于",
        Login: "登录",
        SignUp: "注册",
        New: "新",
        IntroTailark: "Tailark Html 介绍",
        MessageWelcome: "分享你不需要的东西。改变他人的一天。",
        HeroDescription:
          "使用可重用且美观的组件，更快地构建和自定义现代 Web 应用程序。",
        HeroDescriptionMobile: "可重用的组件，用于快速构建现代 Web 应用程序。",
        StartBuilding: "开始构建",
        LearnMore: "了解更多",
        AppScreen: "应用程序屏幕示意图",
        FAQ_Title_Line1: "常见问题",
        FAQ_Title_Line2: "关于分享与帮助",
        FAQ_Title_Line3: "在我们的平台上",
        FAQ_Subtitle: "了解有关捐赠、接收以及我们社区运作的常见问题。",

        FAQ_Q1: "我如何捐赠食物或衣物？",
        FAQ_A1_Intro: "捐赠很简单！请按照以下步骤操作：",
        FAQ_A1_Step1: "登录或注册您的账户。",
        FAQ_A1_Step2: "点击“添加捐赠”按钮，并上传详细信息和照片。",
        FAQ_A1_Step3: "设置您的位置，让附近的人可以看到您的帖子。",

        FAQ_Q2: "这个平台是免费的吗？",
        FAQ_A2: "是的！我们的平台对捐赠者和接收者都是完全免费的，旨在支持社区而不收取任何费用。",

        FAQ_Q3: "捐赠前如何确保食物安全？",
        FAQ_A3_Intro: "我们鼓励您只分享安全、干净的食物，请务必：",
        FAQ_A3_Point1: "避免分享过期或变质的食物。",
        FAQ_A3_Point2: "将食物包装好，并注明任何已知的过敏原。",

        FAQ_Q4: "除了食物和衣物，我还能捐赠其他物品吗？",
        FAQ_A4: "当然可以！您可以捐赠书籍、鞋子、毯子或小型家居用品，只要它们干净且可用即可。",
        "Footer_Features": "功能",
        "Footer_Solution": "解决方案",
        "Footer_About": "关于",
        "Footer_FAQ": "常见问题",
        "Footer_HomeLabel": "返回首页",
        "Footer_Rights": "版权所有"
      },
    },
  },
});

export default i18n;
