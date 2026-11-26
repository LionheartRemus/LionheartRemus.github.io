// Portfolio copy lives here so that projects and responsibilities can be edited
// without changing the layout. Company history comes from the supplied CV;
// project descriptions and individual contributions come from the Miro board.
const L = (ru, en, es = SPANISH[en] ?? en) => ({ru, en, es});
const MIRO = 'https://miro.com/app/board/uXjVKrHaB3s=/';
const PROJECTS = [
  {
    slug:'narrative-levels', title:L('От схемы к игровой локации','From layout to playable location'),
    subtitle:L('Нарративная кампания · Левелдизайн и координация','Narrative campaign · Level design & coordination'),
    category:L('Левелдизайн','Level design'), cover:'frosty-final-1', diagram:'frosty-layout-1',
    summary:L('Схемы под нарратив, сайд-квесты, баланс и сопровождение сборки локаций.','Narrative-driven layouts, side quests, balance and support throughout level production.'),
    role:L('Левелдизайн, курирование ГД и сборка отдельных локаций','Level design, designer coordination & selected level implementation'),
    focus:L('Маршруты · Пейсинг · Квесты','Routes · Pacing · Quests'), frame:'3458764663067693017',
    brief:L('Спроектировать локации под нарратив кампании и довести их до игровой сборки. Связать маршрут игрока, сайд-квесты, баланс и визуальный облик каждой локации.','Design locations around the campaign narrative and carry them through production. Connect player routes, side quests, balance and each location’s visual direction.'),
    contributions:[
      L('Создавал схемы локаций под нарратив, продумывал сайд-квесты и рассчитывал баланс.','Created narrative-driven level layouts, designed side quests and calculated balance.'),
      L('Курировал геймдизайнеров при сборке: формировал вижен, давал фидбек и помогал с правками пейсинга.','Coordinated designers during implementation: established the vision, gave feedback and supported pacing revisions.'),
      L('Согласовывал визуальное направление с арт-отделом, заказывал VFX и помогал со сборкой.','Aligned visual direction with the art team, requested VFX and supported level assembly.'),
      L('Для замка и мини-локации выполнял сборку, настраивал логику и режиссуру катсцен. Для замка также прорабатывал сайд-квесты и ивентовую обвязку.','Implemented the castle and mini-location, configured logic and directed cutscenes. Also worked on castle side quests and event integration.')
    ],
    reading:L('Сначала изучите схему: связи проходов, ответвления и расположение зон. Затем переключитесь на игровую сборку, чтобы сопоставить планировку с финальной локацией.','Start with the layout: connected paths, branches and zone placement. Then switch to the in-game version to compare the plan with the implemented location.'),
    pairs:[
      {name:L('Зимняя локация','Winter location'),layout:'frosty-layout-1',final:'frosty-final-1'},
      {name:L('Локация с несколькими биомами','Multi-biome location'),layout:'frosty-layout-2',final:'frosty-final-2'},
      {name:L('Вертикальная локация','Vertical location'),layout:'frosty-layout-3',final:'frosty-final-3'},
      {name:L('Замок','Castle'),layout:'castle-layout',final:'castle-final'}
    ],
    gallery:[{id:'library-final',title:L('Мини-локация: сборка, логика и катсцены','Mini-location: implementation, logic & cutscenes')}],
    note:L('Схемы и игровые сборки показаны как этапы работы над локациями. Художественные ассеты — результат работы команды; мой вклад описан выше.','Layouts and in-game images show stages of level production. Art assets are team work; my individual contribution is described above.')
  },
  {
    slug:'time-travel', title:L('Одна местность. Три времени.','One place. Three timelines.'),
    subtitle:L('Нарративная кампания · Пространственная преемственность','Narrative campaign · Spatial continuity'),
    category:L('Маршруты и структура','Routes & structure'),cover:'time-layout-1',diagram:'time-layout-2',
    summary:L('Три схемы одной местности: сохранить ключевые ориентиры при изменении баланса и развитии сюжета.','Three layouts of the same place, preserving key landmarks as balance and narrative change.'),
    role:L('Создание схем локаций под нарративный вижен','Level layout design for the narrative vision'),
    focus:L('Пространство · Ориентиры · Баланс','Space · Landmarks · Balance'),frame:'3458764663067377880',
    brief:L('Сюжет подразумевает прыжки во времени в одной и той же местности. Требовалось сохранить основные крафтовые точки и точки интереса на одних местах между локациями при разном балансе.','The story moves through time within the same area. The task was to preserve major crafting stations and points of interest in the same positions across locations while their balance changed.'),
    contributions:[
      L('Создавал схемы трёх локаций под нарративный вижен кампании.','Created three level layouts aligned with the campaign’s narrative vision.'),
      L('Работал с ограничением на расположение основных крафтовых точек и точек интереса.','Worked within the constraint of maintaining the positions of key crafting stations and points of interest.'),
      L('Учитывал разный баланс локаций при сохранении узнаваемой пространственной структуры.','Accounted for different level balance while retaining a recognizable spatial structure.')
    ],
    reading:L('Переключайте три версии и сравнивайте конфигурацию проходов и положение ключевых зон. Полноэкранный просмотр помогает рассмотреть каждую схему в исходном разрешении.','Switch between the three versions to compare path configurations and key zone placement. Open the full-screen viewer to inspect each layout at its original resolution.'),
    variants:[{id:'time-layout-1',title:L('Локация 1','Location 1')},{id:'time-layout-2',title:L('Локация 2','Location 2')},{id:'time-layout-3',title:L('Локация 3','Location 3')}],
    gallery:[],note:L('Мой вклад — схемы локаций и работа с пространственной структурой под нарратив кампании. Художественные ассеты созданы командой проекта.','My contribution is level layout design and spatial structure supporting the campaign narrative. Art assets were created by the project team.')
  },
  {
    slug:'campaign-ownership',title:L('Кампания от замысла до релиза','A campaign from concept to release'),
    subtitle:L('Ивентовая кампания · Полное ведение','Event campaign · End-to-end ownership'),
    category:L('Ведение кампании','Campaign ownership'),cover:'campaign-final-1',
    summary:L('Вижен, сборка всех локаций, игровая логика, катсцены, UI и баланс — в рамках одной кампании.','Vision, all level implementation, gameplay logic, cutscenes, UI and balance within one campaign.'),
    role:L('Единственный геймдизайнер кампании','Sole game designer on the campaign'),focus:L('Вижен · Сборка · Логика','Vision · Implementation · Logic'),frame:'3458764663067693143',
    brief:L('Полностью провести большую ивентовую кампанию от препродакшена до релиза как единственный ГД. Для проекта это был эксперимент: раньше подобный контент собирали три геймдизайнера.','Own a large event campaign from pre-production to release as its sole game designer. This was an experiment for the project: comparable content had previously been assembled by three game designers.'),
    contributions:[
      L('Формировал общий вижен и вёл кампанию как лид ГД.','Established the overall vision and led the campaign’s game design.'),
      L('Продумывал и заказывал эффекты и арт, давал обратную связь нарративной и художественной командам.','Planned and requested effects and art, and gave feedback to narrative and art teams.'),
      L('Полностью собирал все локации, настраивал логику и катсцены.','Implemented all locations, gameplay logic and cutscenes.'),
      L('Настраивал UI, запуск кампании и подключение фичей, рассчитывал баланс.','Configured UI, campaign launch and feature integration, and calculated balance.')
    ],reading:L('Крупные виды локаций позволяют проследить общую структуру пространства. Откройте изображения, чтобы рассмотреть проходы, размещение контента и переходы между зонами.','Large level views reveal the overall spatial structure. Open each image to inspect paths, content placement and transitions between areas.'),
    gallery:[{id:'campaign-final-1',title:L('Общий вид локации','Location overview')},{id:'campaign-final-2',title:L('Другая локация кампании','Another campaign location')},{id:'campaign-final-3',title:L('Зоны и связующие проходы','Zones and connecting paths')},{id:'campaign-mini',title:L('Мини-локация кампании','Campaign mini-location')}],
    note:L('Единственный ГД кампании — роль в геймдизайне, а не единственный участник разработки. Арт, эффекты и другие дисциплины выполнялись совместно с командой.','Sole game designer describes the design role, not sole authorship of the game. Art, effects and other disciplines were delivered with the team.')
  },
  {
    slug:'first-sessions',title:L('Первые сессии игрока','The player’s first sessions'),
    subtitle:L('Хаб и стартовые локации · Онбординг','Hub & early locations · Onboarding'),
    category:L('Пейсинг и онбординг','Pacing & onboarding'),cover:'onboarding-1',
    summary:L('Поток игрока, точки интереса, баланс стартового контента и подключение туториалов.','Player flow, points of interest, early content balance and tutorial integration.'),
    role:L('Пейсинг, сборка и интеграция контента','Pacing, level assembly & content integration'),focus:L('Player flow · Туториалы · Баланс','Player flow · Tutorials · Balance'),frame:'3458764663065674792',
    brief:L('Организовать хаб и локации первых игровых сессий: выстроить поток игрока и точки интереса, распределить контент по балансу и подключить фичи и туториалы.','Work on the hub and early-session locations: shape player flow and points of interest, distribute content according to balance, and integrate features and tutorials.'),
    contributions:[
      L('Работал над пейсингом, потоком игрока и точками интереса в хабе и стартовых локациях.','Worked on pacing, player flow and points of interest in the hub and early locations.'),
      L('Собирал стартовую локацию, подключал анимации и арт, создавал таймлайны.','Assembled an early location, integrated animations and art, and created timelines.'),
      L('Балансировал контент под первые сессии, подключал и настраивал фичи и туториалы.','Balanced content for the first sessions and integrated and configured features and tutorials.'),
      L('Пересобирал одну из локаций под обновлённый вижен; работал с запуском и UI ивентов.','Rebuilt a location for an updated vision and worked on event launch and UI integration.')
    ],reading:L('Рассмотрите расположение контента и связи между зонами. У каждой локации сохранён полный кадр: изображение можно увеличить и перемещать, чтобы изучить детали.','Explore content placement and connections between areas. Each location is shown uncropped and can be zoomed and panned to inspect details.'),
    gallery:[{id:'hub',title:L('Хаб: поток игрока и точки интереса','Hub: player flow & points of interest')},{id:'onboarding-1',title:L('Стартовая локация: сборка и пейсинг','Early location: implementation & pacing')},{id:'onboarding-2',title:L('Пересборка локации под обновлённый вижен','Location rebuilt for an updated vision')}],
    note:L('Мой вклад — геймдизайн и интеграция контента. Представленные художественные материалы созданы командой проекта.','My contribution is game design and content integration. The artwork shown was created by the project team.')
  }
];
const EXPERIENCE = [
  {company:'Perfect Play / Playrix',period:'2023 — 2026',location:'Yerevan / Valencia',
   intro:L('Локации, игровая логика и производство контента в Unity.','Locations, gameplay logic and content production in Unity.'),
   roles:[{title:'Senior Content Game Designer',date:L('Январь 2024 — март 2026','January 2024 — March 2026'),points:[L('Полный цикл проектирования и реализации около 10 изометрических локаций.','Full-cycle design and implementation of approximately 10 isometric locations.'),L('Игровая логика и катсцены в NodeCanvas, оптимизация стартового контента и внутренних инструментов.','Gameplay logic and cutscenes in NodeCanvas; optimization of early content and internal tools.'),L('Взаимодействие Design / Art, документация и наставничество 2–3 геймдизайнеров.','Design / Art collaboration, documentation and mentorship of 2–3 game designers.')]},
   {title:'Content Game Designer',date:L('Июнь — декабрь 2023','June — December 2023'),points:[L('Полировка старого контента, исправление ошибок и техническая оптимизация.','Legacy content polish, bug fixing and technical optimization.'),L('Интеграция новых фичей в существующие локации и улучшение пайплайна.','Integration of new features into existing locations and pipeline improvements.')]}]},
  {company:'Nexters',period:'2022 — 2023',location:'Yerevan',intro:L('Технический геймдизайн, системы и баланс.','Technical game design, systems and balance.'),
   roles:[{title:'Technical Game Designer',date:L('Июнь 2022 — май 2023','June 2022 — May 2023'),points:[L('Конфигурация контента через клиентские системы и реляционные базы данных.','Content configuration through client-side systems and relational databases.'),L('Проектирование игровых систем и пересмотр принципов баланса с учётом retention.','Gameplay systems design and revision of balance principles informed by retention metrics.'),L('Ведение фичей от идеи до реализации, координация группы из 6–8 разработчиков и QA.','Feature ownership from idea to implementation, coordinating a group of 6–8 developers and QA.'),L('Система оценки визуальной ценности наград в привязке к балансу, техническая документация.','A system for estimating the visual value of rewards in relation to balance; technical documentation.')]}]},
  {company:'Perfect Play / Playrix',period:'2021 — 2022',location:'Moscow',intro:L('Начало работы с контентом и визуальным скриптингом.','Early work in content implementation and visual scripting.'),roles:[{title:'Junior Game Designer',date:L('Июль 2021 — июнь 2022','July 2021 — June 2022'),points:[L('Исправление ошибок и улучшение существующих локаций.','Bug fixes and improvements to existing locations.'),L('Прототипирование и оптимизация игровой логики.','Prototyping and optimization of gameplay logic.'),L('Игровая логика в NodeCanvas, техническая документация и улучшение внутренних инструментов Unity.','Gameplay logic in NodeCanvas, technical documentation and improvements to internal Unity tools.')]}]}
];
