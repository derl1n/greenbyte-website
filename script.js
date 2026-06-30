(function () {

  (function applyStoredTheme() {
    if (localStorage.getItem('gb-theme') === 'light') {
      document.documentElement.classList.add('light');
    }
  })();

  const T = {
    en: {
      title: 'GreenByte', tagline: 'Every byte counts. Make yours green.',
      nav_home: 'Home', nav_features: 'Features', nav_achievements: 'Achievements', nav_team: 'Team', nav_contact: 'Contact', nav_download: 'Download', nav_faq: 'FAQ', nav_privacy: 'Privacy', error_404_text: "This page doesn't exist. It may have been moved or deleted.", error_404_btn: 'Back to Home', confirmed_title: 'Email confirmed!', confirmed_sub: 'Your account is verified. You can close this page and go back to the GreenByte extension.', confirmed_btn: 'Back to Home',
      hero_title: 'Make your digital life <br><span class="highlight">climate-smart</span>',
      hero_lead: 'GreenByte shows the CO₂ behind your browsing, streaming and AI use, then helps you reduce it with challenges, school leaderboards and AI tips.',
      problem_title: 'The problem',
      problem_body: 'Modern internet use (streaming, cloud AI and large models) has a measurable carbon cost. Individuals rarely see this cost and therefore cannot change behaviour effectively.',
      solution_title: 'Our solution',
      solution_body: 'GreenByte estimates your digital CO₂ locally, translates it into relatable equivalents, gives AI-driven recommendations, and motivates behaviour change through achievements and leaderboards.',
      cta_download: 'Download App', cta_features: 'See features',
      stat_users: 'Active users', stat_co2: 'kg CO₂ saved', stat_sessions: 'Sessions tracked',
      features_title: 'Features',
      features_sub: 'Everything you need to understand and reduce your digital carbon footprint.',
      f_realtime: 'Real‑time tracking',
      f_realtime_desc: 'See grams of CO₂ for browsing, streaming, cloud storage and AI calls, updated live on your dashboard.',
      f_ai: 'AI assistant',
      f_ai_desc: 'Contextual tips: switch to audio-only, download playlists, or schedule heavy jobs at low-carbon hours.',
      f_achieve: 'Achievements & leaderboards',
      f_achieve_desc: 'Earn badges, GreenTokens and compete locally or globally on leaderboards.',
      f_privacy: 'Privacy & control',
      f_privacy_desc: 'Local-first design. You control uploads. Only aggregated anonymized metrics are shared when enabled.',
      ach_title: 'Achievements & Leaderboards',
      ach_sub: 'Gamify your green habits and compete with the world.',
      ach_badges_title: 'Badges',
      ach_badges_desc: 'Earn themed badges for behaviour: "Low Streamer", "Night Scheduler", "Cloud Minimalist". Badges show on your profile and leaderboard.',
      ach_leaderboards_title: 'Leaderboards',
      ach_leaderboards_desc: 'Compare weekly and all-time scores with classmates, schools, or globally. Privacy safeguards ensure only aggregated ranks are visible.',
      ach_tokens_title: 'GreenTokens',
      ach_tokens_desc: 'Convert saved CO₂ into GreenTokens redeemable for partner actions like tree planting or school projects.',
      download_title: 'Download GreenByte',
      download_lead: 'Choose how to try GreenByte: a Windows desktop app or a lightweight Chrome/Edge extension.',
      d_desktop: 'Desktop app (Windows)',
      d_desktop_desc: 'Full dashboard, personal stats, AI assistant and leaderboards. Data stays local unless you opt in.',
      d_extension: 'Browser extension',
      d_extension_desc: 'Lightweight helper that surfaces CO₂ while you browse. Pairs with the desktop app for full features.',
      faq_title: 'Frequently Asked Questions',
      faq_sub: 'Answers to quickly understand features, privacy and installation.',
      q_measure: 'What does GreenByte measure?',
      a_measure: 'GreenByte estimates CO₂ from network activity, streaming, storage and AI calls using public emission factors and local heuristics. Calculations run on your device unless you enable sharing.',
      q_data: 'Is my data shared?',
      a_data: 'No. By default no page content or raw history leaves your device. Leaderboards only receive anonymized aggregates if you opt in.',
      q_school_use: 'Can schools or teams use GreenByte?',
      a_school_use: 'Yes. GreenByte can be used by classes, clubs, schools, or city teams. Shared dashboards show only aggregated progress, so students can compare impact without exposing private browsing details.',
      privacy_title: 'Privacy Policy & Security',
      privacy_intro: 'GreenByte is designed to maximise user control and transparency. Below we explain what we collect, what stays on device, and what you can opt into sharing.',
      privacy_collect_title: 'What we collect',
      privacy_collect_desc: 'Minimal telemetry: timestamps of sessions, anonymized request counts, and high-level content types (video vs audio). We do <strong>not</strong> collect raw page HTML, typed content, passwords, or detailed browsing history.',
      privacy_local_title: 'Local-first processing',
      privacy_local_desc: 'All CO₂ calculations are performed locally on your device by default. Detailed browsing behavior never leaves your machine. Sharing for leaderboards or research is opt-in only.',
      privacy_leaderboards_title: 'Leaderboards & GreenTokens',
      privacy_leaderboards_desc: 'Leaderboard uploads only contain anonymized aggregates (grams avoided per week, badge count). GreenToken redemptions use minimal identifiers. You can revoke sharing anytime.',
      privacy_retention_title: 'Data retention & deletion',
      privacy_retention_desc: 'Local logs are kept for 30 days and purged automatically. Server-side aggregates are retained up to 2 years for leaderboard integrity. Contact us for immediate deletion or data export.',
      privacy_security_title: 'Security practices',
      privacy_security_desc: 'HTTPS for all network calls, encrypted storage at rest, regular updates and security hardening. We do not sell personal data. Incident response procedures are documented and available on request.',
      privacy_programs_title: 'School programs & teams',
      privacy_programs_desc: 'For school programs, clubs, or competitions, GreenByte can provide grouped dashboards, class challenges, and exportable summary reports. Individual browsing details stay private.',
      privacy_questions_title: 'Have questions?',
      privacy_questions_desc: 'For school rollout, team dashboards, partnership ideas, or any privacy questions, reach out to the GreenByte team. We respond within 24 hours.',
      contact_title: 'Get in touch',
      contact_sub: 'Questions about school rollout, team dashboards, or partnerships? We reply within 24 hours.',
      contact_name: 'Your name',
      contact_email: 'Email address',
      contact_subject: 'Subject',
      contact_message: 'Message',
      contact_send: 'Send message',
      contact_success_title: 'Message sent!',
      contact_success: 'We will get back to you within 24 hours.',
      contact_error: 'Could not send the message. Please try again or email us directly.',
      contact_info_email: 'Email',
      contact_info_response: 'Response Time',
      contact_info_response_desc: 'Within 24 hours<br>Monday to Friday',
      contact_info_support: 'Support',
      contact_info_support_desc: 'Technical support &<br>partnerships available',
      contact_mailto_opened: 'Email draft opened. Press send in your mail app to deliver it.',
      contact_not_robot: "I'm not a robot",
      contact_captcha_hint: 'Fill in the form to unlock verification.',
      contact_captcha_locked: 'Complete all fields first, then verify.',
      contact_subject_opt1: 'General question',
      contact_subject_opt2: 'School deployment',
      contact_subject_opt3: 'School analytics',
      contact_subject_opt4: 'Bug report',
      contact_subject_opt5: 'Partnership',
      contact_meta_reply: 'reply',
      contact_meta_ai: 'smart routing',
      contact_meta_safe: 'privacy ready',
      contact_captcha_brand: 'reCAPTCHA<br>Privacy · Terms',
      team_title: 'Our Team',
      team_sub: 'The people behind GreenByte who make your digital life greener.',
      team_name1: 'Dmytro Fil',
      team_role1: 'Full-Stack Developer & Architect',
      team_bio1: 'Develops GreenByte\'s backend, API and web platform. Manages the database, server logic, notification system and coordinates overall project architecture and deployment.',
      team_name2: 'Nikita Lytvyn',
      team_role2: 'Software Developer',
      team_bio2: 'Developer of GreenByte\'s technical components. Builds the browser extension, contributes to the Windows app, web platform and works on testing and UX improvements.',
      team_name3: 'Daniil Hantsura',
      team_role3: 'UI/UX & Media Specialist',
      team_bio3: 'Responsible for GreenByte\'s visual identity and public presentation. Creates media, presentations, video demos and contributes to website design and UI improvements.',
      d_button_exe: 'Download .exe',
      d_button_zip: '.zip portable',
      d_in_dev: '🚧 In development — coming soon',
      d_note_os: 'Need macOS or Linux? Contact the team for a build.',
      d_step1: 'Go to the <strong>Chrome Web Store</strong> <span class="nowrap-inline">(or <strong>Edge Add-ons</strong>)</span>',
      d_step2: 'Search for <strong>GreenByte</strong> and click <strong>Add to browser</strong>',
      d_step3: 'Pin the extension and start tracking your <strong>digital CO₂</strong>',
      d_button_ext: 'Chrome Web Store',
      d_preview_co2: 'CO₂ this week',
      d_preview_tag1: 'Browsing',
      d_preview_tag2: 'Streaming',
      d_preview_tag3: 'AI calls',
      q_accuracy: 'How accurate are the estimates?',
      a_accuracy: 'Estimates use best-available emission factors and are intended for behavioural change (relative comparisons), not formal accounting.',
      q_tokens: 'What are GreenTokens and achievements?',
      a_tokens: 'GreenTokens reward verified reductions and can be used with partner projects (tree planting, school initiatives). Achievements recognise consistent behaviour change.',
      q_platforms: 'Which platforms are supported?',
      a_platforms: 'GreenByte offers a Windows desktop installer and a browser extension (Chrome/Edge). macOS and Linux builds are available on request or via the ZIP packages.',
      q_content: 'Does the app aggregate my browsing content?',
      a_content: 'No. We collect counts and content-type labels (video/audio/image) for estimation, not page text or user inputs.',
      q_leaderboards: 'How do leaderboards protect privacy?',
      a_leaderboards: 'Leaderboards use anonymized aggregates and display ranks only after data is binned; you can opt out or limit visibility to school-only groups.',
      q_export: 'Can I export or delete my data?',
      a_export: 'You can export local logs and request deletion of server-side aggregates. Contact the team for immediate assistance.',
      q_contact: 'Who do I contact for school deployment?',
      a_contact: 'Contact the team at <a href="mailto:greenbyte.ukr@gmail.com" style="color:var(--accent)">greenbyte.ukr@gmail.com</a> for school rollout, dashboards, or partnership ideas.',
    },
    uk: {
      title: 'GreenByte', tagline: 'Кожен байт має значення. Зроби свій зеленим.',
      nav_home: 'Головна', nav_features: 'Функції', nav_achievements: 'Досягнення', nav_team: 'Команда', nav_contact: 'Контакти', nav_download: 'Завантажити', nav_faq: 'FAQ', nav_privacy: 'Конфіденційність', error_404_text: 'Ця сторінка не існує. Можливо, її було переміщено або видалено.', error_404_btn: 'На головну', confirmed_title: 'Email підтверджено!', confirmed_sub: 'Ваш акаунт верифіковано. Можете закрити цю сторінку та повернутися до розширення GreenByte.', confirmed_btn: 'На головну',
      hero_title: 'Цифрове життя, <br><span class="highlight">розумне для клімату</span>',
      hero_lead: 'GreenByte показує CO₂ за вашим переглядом, стрімами та AI і допомагає зменшувати це через челенджі, рейтинги шкіл та AI-поради.',
      problem_title: 'Проблема',
      problem_body: 'Сучасне використання інтернету (стрімінг, хмарний AI і великі моделі) має вимірювану вуглецеву вартість. Люди рідко бачать цю вартість і не можуть ефективно змінити поведінку.',
      solution_title: 'Наше рішення',
      solution_body: 'GreenByte оцінює ваш цифровий CO₂ локально, перетворює його на зрозумілі еквіваленти, дає AI‑рекомендації та мотивує зміни через досягнення і рейтинги.',
      cta_download: 'Завантажити', cta_features: 'Переглянути функції',
      stat_users: 'Користувачів', stat_co2: 'кг CO₂ збережено', stat_sessions: 'Сесій',
      features_title: 'Функції',
      features_sub: 'Усе, що вам потрібно знати для розуміння та зменшення цифрового вуглецевого сліду.',
      f_realtime: 'Відстеження в реальному часі',
      f_realtime_desc: 'Дивіться грами CO₂ для перегляду, стрімінгу, хмарного зберігання та AI-викликів. Оновлюється наживо.',
      f_ai: 'AI-помічник',
      f_ai_desc: 'Контекстні поради: перейди на аудіо, завантажуй плейлисти або плануй важкі задачі у години низьких викидів.',
      f_achieve: 'Досягнення та рейтинги',
      f_achieve_desc: 'Заробляйте бейджі, GreenTokens та змагайтеся локально і глобально в рейтингах.',
      f_privacy: 'Конфіденційність',
      f_privacy_desc: 'Локальна обробка. Ви контролюєте завантаження. Лише агреговані анонімні метрики передаються, коли ви це вмикаєте.',
      ach_title: 'Досягнення та рейтинги',
      ach_sub: 'Перетворюйте екозвички на гру та змагайтеся з іншими.',
      ach_badges_title: 'Бейджі',
      ach_badges_desc: 'Отримуйте тематичні бейджі за поведінку: "Економний стрімер", "Нічний планувальник", "Хмарний мінімаліст". Бейджі видно у профілі та рейтингу.',
      ach_leaderboards_title: 'Рейтинги',
      ach_leaderboards_desc: 'Порівнюйте тижневі та загальні результати з однокласниками, школами або глобально. Захист приватності показує лише агреговані місця.',
      ach_tokens_title: 'GreenTokens',
      ach_tokens_desc: 'Конвертуйте збережений CO₂ у GreenTokens, які можна спрямувати на партнерські дії: висадку дерев або шкільні проєкти.',
      download_title: 'Завантажити GreenByte',
      download_lead: 'Виберіть спосіб: десктопний додаток для Windows або легке розширення для Chrome/Edge.',
      d_desktop: 'Десктопний додаток (Windows)',
      d_desktop_desc: 'Повна панель, персональна статистика, AI-помічник та рейтинги. Дані зберігаються локально.',
      d_extension: 'Розширення для браузера',
      d_extension_desc: 'Легкий помічник, який показує CO₂ під час перегляду. Поєднується з десктопним додатком.',
      faq_title: 'Часті запитання',
      faq_sub: 'Відповіді, щоб швидко зрозуміти функції, конфіденційність та встановлення.',
      q_measure: 'Що вимірює GreenByte?',
      a_measure: 'GreenByte оцінює CO₂ від мережевої активності, стрімінгу, зберігання та AI-викликів за публічними коефіцієнтами. Розрахунки виконуються на пристрої.',
      q_data: 'Чи діляться мої дані?',
      a_data: 'Ні. За замовчуванням жодний вміст сторінок чи історія не залишає ваш пристрій. Рейтинги отримують лише анонімні агрегати, коли ви це вмикаєте.',
      q_school_use: 'Чи можуть школи або команди використовувати GreenByte?',
      a_school_use: 'Так. GreenByte підходить для класів, гуртків, шкіл або міських команд. Спільні панелі показують лише агрегований прогрес, щоб учні могли порівнювати вплив без розкриття приватних деталей перегляду.',
      privacy_title: 'Політика конфіденційності та безпека',
      privacy_intro: 'GreenByte розроблено з метою максимального контролю користувача та прозорості. Нижче пояснюємо, що ми збираємо, що залишається на пристрої та які функції можна ввімкнути.',
      privacy_collect_title: 'Що ми збираємо',
      privacy_collect_desc: 'Мінімальна телеметрія: час сесій, анонімізовані лічильники запитів і загальні типи контенту (відео чи аудіо). Ми <strong>не</strong> збираємо HTML сторінок, введений текст, паролі або детальну історію перегляду.',
      privacy_local_title: 'Локальна обробка',
      privacy_local_desc: 'Усі розрахунки CO₂ за замовчуванням виконуються локально на вашому пристрої. Детальна поведінка в браузері не залишає ваш комп’ютер. Передача даних для рейтингів або досліджень працює лише коли ви це вмикаєте.',
      privacy_leaderboards_title: 'Рейтинги та GreenTokens',
      privacy_leaderboards_desc: 'У рейтинги надходять лише анонімізовані агрегати: збережені грами за тиждень і кількість бейджів. Погашення GreenToken використовує мінімальні ідентифікатори. Ви можете відкликати доступ будь-коли.',
      privacy_retention_title: 'Зберігання та видалення даних',
      privacy_retention_desc: 'Локальні журнали зберігаються 30 днів і видаляються автоматично. Серверні агрегати зберігаються до 2 років для цілісності рейтингів. Зверніться до нас для негайного видалення або експорту даних.',
      privacy_security_title: 'Практики безпеки',
      privacy_security_desc: 'HTTPS для всіх мережевих запитів, зашифроване зберігання, регулярні оновлення та посилення безпеки. Ми не продаємо персональні дані. Процедури реагування на інциденти задокументовані та доступні за запитом.',
      privacy_programs_title: 'Шкільні програми та команди',
      privacy_programs_desc: 'Для шкільних програм, гуртків або конкурсів GreenByte може надати групові панелі, класні челенджі та підсумкові звіти для експорту. Деталі індивідуального перегляду залишаються приватними.',
      privacy_questions_title: 'Є питання?',
      privacy_questions_desc: 'Щодо впровадження у школі, командних панелей, партнерств або будь-яких питань приватності напишіть команді GreenByte. Ми відповідаємо протягом 24 годин.',
      contact_title: "Зв'яжіться з нами",
      contact_sub: 'Питання щодо впровадження у школі, командних панелей або партнерств? Відповідаємо протягом 24 годин.',
      contact_name: "Ваше ім'я",
      contact_email: 'Електронна пошта',
      contact_subject: 'Тема',
      contact_message: 'Повідомлення',
      contact_send: 'Надіслати',
      contact_success_title: 'Повідомлення надіслано!',
      contact_success: 'Ми відповімо протягом 24 годин.',
      contact_error: 'Не вдалося надіслати повідомлення. Спробуйте ще раз або напишіть нам напряму.',
      contact_info_email: 'Електронна пошта',
      contact_info_response: 'Час відповіді',
      contact_info_response_desc: 'Протягом 24 годин<br>Понеділок–П\'ятниця',
      contact_info_support: 'Підтримка',
      contact_info_support_desc: 'Технічна підтримка та<br>партнерські програми',
      contact_mailto_opened: 'Чернетку листа відкрито. Натисніть “Надіслати” у поштовому застосунку, щоб доставити повідомлення.',
      contact_not_robot: 'Я не робот',
      contact_captcha_hint: 'Заповніть форму, щоб розблокувати перевірку.',
      contact_captcha_locked: 'Спочатку заповніть усі поля, потім пройдіть перевірку.',
      contact_subject_opt1: 'Загальне питання',
      contact_subject_opt2: 'Розгортання у школі',
      contact_subject_opt3: 'Шкільна аналітика',
      contact_subject_opt4: 'Повідомлення про помилку',
      contact_subject_opt5: 'Партнерство',
      contact_meta_reply: 'відповідь',
      contact_meta_ai: 'розумна маршрутизація',
      contact_meta_safe: 'готово до приватності',
      contact_captcha_brand: 'reCAPTCHA<br>Приватність · Умови',
      team_title: 'Наша команда',
      team_sub: 'Люди, які стоять за GreenByte і роблять ваше цифрове життя зеленішим.',
      team_name1: 'Дмитро Філь',
      team_role1: 'Full-Stack Developer & Architect',
      team_bio1: 'Розробляє бекенд, API та вебплатформу GreenByte. Керує базою даних, серверною логікою, системою сповіщень та координує загальну архітектуру проєкту.',
      team_name2: 'Нікіта Литвин',
      team_role2: 'Software Developer',
      team_bio2: 'Розробник технічних компонентів GreenByte. Створює браузерне розширення, бере участь у розробці Windows-застосунку, вебплатформи, тестуванні та покращенні UX.',
      team_name3: 'Даніїл Ганцура',
      team_role3: 'UI/UX & Media Specialist',
      team_bio3: 'Відповідає за візуальну складову та публічне представлення GreenByte. Створює медіаматеріали, презентації, відеодемо та допомагає з дизайном сайту і UI.',
      d_button_exe: 'Завантажити .exe',
      d_button_zip: 'портативний .zip',
      d_in_dev: '🚧 У розробці — незабаром',
      d_note_os: 'Потрібна macOS або Linux? Напишіть команді, і ми підготуємо збірку.',
      d_step1: 'Перейдіть у <strong>Chrome Web Store</strong> <span class="nowrap-inline">(або <strong>Edge Add-ons</strong>)</span>',
      d_step2: 'Знайдіть <strong>GreenByte</strong> та натисніть <strong>Додати в браузер</strong>',
      d_step3: 'Закріпіть розширення і почніть відстежувати свій <strong>цифровий CO₂</strong>',
      d_button_ext: 'Chrome Web Store',
      d_preview_co2: 'CO₂ за тиждень',
      d_preview_tag1: 'Перегляд',
      d_preview_tag2: 'Стрімінг',
      d_preview_tag3: 'AI-виклики',
      q_accuracy: 'Наскільки точні оцінки?',
      a_accuracy: 'Оцінки використовують найкращі доступні коефіцієнти викидів і потрібні для зміни звичок та порівнянь, а не для офіційної звітності.',
      q_tokens: 'Що таке GreenTokens і досягнення?',
      a_tokens: 'GreenTokens винагороджують підтверджені скорочення та можуть використовуватися з партнерськими проєктами, наприклад висадкою дерев або шкільними ініціативами. Досягнення відзначають сталі зміни поведінки.',
      q_platforms: 'Які платформи підтримуються?',
      a_platforms: 'GreenByte має інсталятор для Windows і розширення для браузера Chrome/Edge. Збірки для macOS і Linux доступні за запитом або через ZIP-пакети.',
      q_content: 'Чи збирає застосунок вміст мого браузера?',
      a_content: 'Ні. Ми збираємо лічильники та типи контенту (відео/аудіо/зображення) для оцінки, а не текст сторінок чи введені користувачем дані.',
      q_leaderboards: 'Як рейтинги захищають приватність?',
      a_leaderboards: 'Рейтинги використовують анонімізовані агрегати й показують місця лише після групування даних. Ви можете вимкнути участь або обмежити видимість шкільними групами.',
      q_export: 'Чи можу я експортувати або видалити дані?',
      a_export: 'Ви можете експортувати локальні журнали та запросити видалення серверних агрегатів. Для швидкої допомоги зверніться до команди.',
      q_contact: 'До кого звернутися щодо впровадження у школі?',
      a_contact: 'Напишіть команді на <a href="mailto:greenbyte.ukr@gmail.com" style="color:var(--accent)">greenbyte.ukr@gmail.com</a> щодо шкільного впровадження, панелей або партнерських ідей.',
    }
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (T[lang] && T[lang][key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = T[lang][key];
        } else if (el.tagName === 'BUTTON' || el.tagName === 'A') {
          el.textContent = T[lang][key];
        } else {
          el.textContent = T[lang][key];
        }
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (T[lang] && T[lang][key] !== undefined) {
        el.innerHTML = T[lang][key];
      }
    });
    const sel = document.getElementById('contactSubject');
    if (sel) {
      const opts = ['opt1','opt2','opt3','opt4','opt5'];
      sel.innerHTML = opts.map((o,i) =>
        `<option value="${i+1}">${T[lang]['contact_subject_'+o] || ''}</option>`
      ).join('');
    }
    document.documentElement.lang = lang;
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const page = location.pathname.split('/').pop().replace('.html','') || 'index';
    const seoData = {
      index: {
        en: { title: 'GreenByte | Digital Carbon Tracker', desc: 'GreenByte tracks your digital carbon footprint in real time – monitor CO₂ from browsing, streaming, AI hours, earn badges and compete on leaderboards.' },
        uk: { title: 'GreenByte | Цифровий трекер вуглецю', desc: 'GreenByte відстежує ваш цифровий вуглецевий слід у реальному часі – CO₂ від перегляду, стрімів та AI, бейджі й рейтинги.' }
      },
      download: {
        en: { title: 'GreenByte | Download Digital Carbon Tracker', desc: 'Download GreenByte for Windows or install the Chrome/Edge browser extension to start tracking your digital carbon footprint today.' },
        uk: { title: 'GreenByte | Завантажити трекер вуглецевого сліду', desc: 'Завантажте GreenByte для Windows або встановіть розширення для Chrome/Edge, щоб почати відстежувати свій цифровий вуглецевий слід.' }
      },
      faq: {
        en: { title: 'GreenByte FAQ | Digital Carbon Tracker', desc: 'Frequently asked questions about GreenByte – learn how CO₂ tracking works, what data stays local, school programs, GreenTokens and supported platforms.' },
        uk: { title: 'GreenByte FAQ | Цифровий трекер вуглецю', desc: 'Часті запитання про GreenByte – як працює відстеження CO₂, які дані залишаються локально, шкільні програми, GreenTokens та підтримувані платформи.' }
      },
      privacy: {
        en: { title: 'GreenByte | Privacy Policy & Security', desc: 'GreenByte privacy policy and security practices. Local-first CO₂ tracking, anonymized leaderboards, transparent data retention. Your data stays on your device.' },
        uk: { title: 'GreenByte | Політика конфіденційності та безпека', desc: 'Політика конфіденційності GreenByte. Локальне відстеження CO₂, анонімізовані рейтинги, прозоре зберігання даних. Ваші дані залишаються на пристрої.' }
      }
    };
    const seo = (seoData[page] || seoData.index)[lang] || (seoData[page] || seoData.index).en;
    if (metaDesc) metaDesc.content = seo.desc;
    if (ogDesc) ogDesc.content = seo.desc;
    if (twDesc) twDesc.content = seo.desc;
    if (ogTitle) ogTitle.content = seo.title;
    if (twTitle) twTitle.content = seo.title;
    document.title = seo.title;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const base = canonical.href.split('?')[0];
      canonical.href = lang === 'uk' ? base + '?lang=uk' : base;
    }
  }

  const sunSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  const moonSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function setThemeIcons(isLight) {
    document.querySelectorAll('.theme-toggle').forEach(b => b.innerHTML = isLight ? sunSVG : moonSVG);
  }
  function toggleTheme() {
    document.querySelectorAll('.theme-toggle').forEach(btn => btn.blur());
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('gb-theme', isLight ? 'light' : 'dark');
    setThemeIcons(isLight);
  }
  document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', toggleTheme));

  function setLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  }
  function getLangFromURL() {
    const params = new URLSearchParams(location.search);
    return params.get('lang');
  }

  function setLangURL(lang) {
    const url = new URL(location.href);
    if (lang === 'uk') {
      url.searchParams.set('lang', 'uk');
    } else {
      url.searchParams.delete('lang');
    }
    history.replaceState(null, '', url.toString());
    document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
  }

  function initLang() {
    const urlLang = getLangFromURL();
    const saved = urlLang || localStorage.getItem('gb-lang') || 'en';
    applyLang(saved);
    setLangButtons(saved);
    setLangURL(saved);
    if (urlLang) localStorage.setItem('gb-lang', urlLang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        localStorage.setItem('gb-lang', lang);
        applyLang(lang);
        setLangButtons(lang);
        setLangURL(lang);
      });
    });
  }

  function initBurger() {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    const backdrop = document.getElementById('mobileNavBackdrop');
    const closeBtn = document.getElementById('mobileNavClose');
    if (!burger || !mobileNav) return;

    let closing = false;

    function openMobileNav() {
      closing = false;
      mobileNav.classList.remove('closing');
      mobileNav.classList.add('open');
      backdrop?.classList.add('open');
      burger.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
      if (closing || !mobileNav.classList.contains('open')) return;
      closing = true;
      mobileNav.classList.add('closing');
      mobileNav.classList.remove('open');
      backdrop?.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(() => {
        mobileNav.classList.remove('closing');
        closing = false;
      }, 300);
    }

    burger.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) closeMobileNav();
      else openMobileNav();
    });
    closeBtn?.addEventListener('click', closeMobileNav);
    backdrop?.addEventListener('click', closeMobileNav);
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
  }

  function animateStats() {
    document.querySelectorAll('.stat-value').forEach(el => {
      const raw = el.textContent.replace(/[^0-9]/g, '');
      const to = parseInt(raw, 10) || 0;
      const comma = el.textContent.includes(',');
      let v = 0;
      const duration = 900;
      const step = 16;
      const increments = duration / step;
      const inc = to / increments;
      const id = setInterval(() => {
        v += inc;
        if (v >= to) {
          v = to;
          clearInterval(id);
        }
        el.textContent = comma ? Math.floor(v).toLocaleString() : Math.floor(v).toString();
      }, step);
    });
  }

  function initAccordion() {
    document.querySelectorAll('.accordion-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        if (!panel) return;
        const isOpen = btn.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : null;
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const formWrap = document.getElementById('contactFormWrap');
    const successPanel = document.getElementById('formSuccessPanel');
    const contactHeader = document.getElementById('contactBoxHeader');
    const contactBox = form.closest('.contact-box');
    const contactWrapper = form.closest('.contact-wrapper');
    const check = document.getElementById('captchaCheck');
    const captchaRow = document.getElementById('captchaRow');
    const captchaHint = document.getElementById('captchaHint');
    const submitBtn = form.querySelector('[type="submit"]');
    let captchaDone = false;

    function formReadyForCaptcha() {
      return Array.from(form.querySelectorAll('input[required], textarea[required], select[required]'))
        .every(el => el.checkValidity() && String(el.value || '').trim().length > 0);
    }

    function setCaptchaState() {
      const ready = formReadyForCaptcha();
      captchaRow?.classList.toggle('locked', !ready);
      check?.setAttribute('aria-disabled', String(!ready));
      if (!ready && captchaDone) {
        captchaDone = false;
        check?.classList.remove('checked');
        check?.setAttribute('aria-checked', 'false');
      }
      return ready;
    }

    form.querySelectorAll('input, textarea, select').forEach(el => {
      el.addEventListener('input', setCaptchaState);
      el.addEventListener('change', setCaptchaState);
    });

    check?.addEventListener('click', () => {
      if (!setCaptchaState()) {
        captchaRow?.classList.add('shake');
        setTimeout(() => captchaRow?.classList.remove('shake'), 380);
        return;
      }
      captchaDone = !captchaDone;
      check.classList.toggle('checked', captchaDone);
      check.setAttribute('aria-checked', String(captchaDone));
    });
    setCaptchaState();

    function showSuccessPanel() {
      const isWide = window.matchMedia('(min-width: 769px)').matches;
      if (isWide && contactWrapper) {
        contactWrapper.style.minHeight = `${contactWrapper.offsetHeight}px`;
        contactWrapper.classList.add('is-success-locked');
      }
      contactHeader?.classList.add('hidden');
      contactBox?.classList.add('is-success');
      formWrap?.classList.add('hiding');
      successPanel?.removeAttribute('hidden');
      successPanel?.classList.remove('hiding');
      successPanel?.classList.add('show');
    }

    function hideSuccessPanel() {
      successPanel?.classList.add('hiding');
      successPanel?.classList.remove('show');
      setTimeout(() => {
        successPanel?.setAttribute('hidden', '');
        successPanel?.classList.remove('hiding');
        formWrap?.classList.remove('hiding');
        contactHeader?.classList.remove('hidden');
        contactBox?.classList.remove('is-success');
        contactWrapper?.style.removeProperty('min-height');
        contactWrapper?.classList.remove('is-success-locked');
        form.reset();
        captchaDone = false;
        check?.classList.remove('checked');
        check?.setAttribute('aria-checked', 'false');
        setCaptchaState();
        if (submitBtn) submitBtn.disabled = false;
      }, 360);
    }

    const RATE_LIMIT_MS = 3 * 60 * 1000;

    form.addEventListener('submit', async e => {
      e.preventDefault();

      const lastSent = parseInt(localStorage.getItem('gb-form-ts') || '0', 10);
      const remaining = RATE_LIMIT_MS - (Date.now() - lastSent);
      if (remaining > 0) {
        const mins = Math.ceil(remaining / 60000);
        const lang = localStorage.getItem('gb-lang') || 'en';
        captchaHint.textContent = lang === 'uk'
          ? `Зачекайте ${mins} хв перед повторним надсиланням`
          : `Please wait ${mins} min before sending again`;
        captchaHint?.classList.add('warn');
        setTimeout(() => {
          captchaHint?.classList.remove('warn');
          captchaHint.textContent = T[lang].contact_captcha_hint;
        }, 3000);
        return;
      }

      if (!setCaptchaState()) {
        captchaHint?.classList.add('warn');
        setTimeout(() => captchaHint?.classList.remove('warn'), 1500);
        form.querySelector('input:invalid, textarea:invalid, select:invalid')?.focus();
        return;
      }
      if (!captchaDone) {
        check?.style.setProperty('border-color', '#f87171');
        setTimeout(() => check?.style.removeProperty('border-color'), 1500);
        return;
      }

      const selectedSubject = form.querySelector('#contactSubject')?.selectedOptions?.[0]?.textContent || '';
      form.querySelector('input[name="_subject"]').value = `GreenByte website: ${selectedSubject}`;

      if (submitBtn) submitBtn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('submit failed');
        localStorage.setItem('gb-form-ts', String(Date.now()));
        showSuccessPanel();
        setTimeout(hideSuccessPanel, 4200);
      } catch {
        if (submitBtn) submitBtn.disabled = false;
        captchaHint.textContent = T[localStorage.getItem('gb-lang') || 'en'].contact_error;
        captchaHint?.classList.add('warn');
        setTimeout(() => {
          captchaHint?.classList.remove('warn');
          const lang = localStorage.getItem('gb-lang') || 'en';
          captchaHint.textContent = T[lang].contact_captcha_hint;
        }, 3000);
      }
    });
  }

  function initReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  function markActiveNav() {
    const path = location.pathname.replace(/\/+$/, '');
    const page = path.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('.site-nav a, .mobile-nav a, .footer-links a').forEach(a => {
      const raw = (a.getAttribute('href') || '').split('?')[0].replace(/\/+$/, '');
      const link = raw.split('/').pop().replace('.html', '') || 'index';
      a.classList.toggle('active', link === page);
    });
  }

  function initAmbientBackground() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduceMotion || !finePointer) return;

    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.32;
    let tx = x;
    let ty = y;
    let raf = null;

    function update() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      document.documentElement.style.setProperty('--cursor-x', `${x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${y}px`);

      if (Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2) {
        raf = requestAnimationFrame(update);
      } else {
        raf = null;
      }
    }

    window.addEventListener('pointermove', (event) => {
      tx = event.clientX;
      ty = event.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const isLight = document.documentElement.classList.contains('light');
    setThemeIcons(isLight); // set correct icon after DOM ready
    initLang();
    initBurger();
    animateStats();
    initAccordion();
    initContactForm();
    initReveal();
    markActiveNav();
    initAmbientBackground();
  });

})();
