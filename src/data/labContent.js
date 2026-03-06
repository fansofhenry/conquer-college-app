// ─── LAB CONTENT DATA ────────────────────────────────────────────────────────
// All text content, quiz questions, and workbook prompts for each lab.

export const labs = {
  lab1: {
    labKey: 'lab1',
    labNumber: 1,
    title: 'Schedule to Succeed',
    subtitle: 'Protect your time before your life fills it up',
    icon: '📅',
    color: '#e8a020',
    videoUrl: 'https://www.youtube.com/playlist?list=PLSt7rwoPGTy1nCtyRIX8rFmvtmOQxwXTu',
    videoTitle: 'Study Skills Activity 1 — Create Your Weekly Schedule',
    pdfUrl: 'http://www.appliedlinearalgebra.com/s/Conquering_College_Laboratory_1_Prompt_draft_v20231211.pdf',
    objectives: [
      'Build a weekly schedule that protects your deep study time',
      'Create a term calendar mapping every major deadline and exam',
      'Write a SMART goal for this academic term',
      'Connect your short-term work to a 50-year life vision',
    ],
    intro: `Time is your most precious non-renewable resource. Most students allow the demands of daily life — work shifts, social obligations, notifications, exhaustion — to fill every available hour, leaving study as an afterthought.

Jeff's research-backed approach is the inverse: you block your study time FIRST, before anything else, and defend it with the same seriousness you'd give a job shift.

This lab guides you to build two physical artifacts: a Weekly Schedule and a Term Calendar. Together, they form the scaffolding for everything else in this course.`,
    readingNote: `Before completing the workbook below, watch the playlist above and read the Lab 1 PDF (linked above). Pay close attention to the section on SMART goals and the Horizons of Focus model.`,
    workbookPrompts: [
      {
        id: 'studentName',
        label: 'What is your full name, college, and the term you are starting?',
        placeholder: 'e.g., Maria Reyes — Foothill College — Spring 2025',
        type: 'text',
      },
      {
        id: 'courses',
        label: 'List every class you are taking this term. For each, write the course name, credit hours, and the days/times it meets.',
        placeholder: 'e.g.,\nMath 1C — 5 units — Mon/Wed/Fri 9–10am\nEnglish 1A — 4 units — Tue/Thu 11am–12:30pm\n...',
        type: 'textarea',
      },
      {
        id: 'commitments',
        label: 'List ALL regular commitments outside class: work hours, family responsibilities, commute, sports, clubs, religious practice, etc. Be honest and complete.',
        placeholder: 'e.g.,\nWork: Tue/Thu/Sat 3–9pm at Starbucks\nChildcare: Mon/Wed 2–6pm\nCommute: ~45 min each way on BART\n...',
        type: 'textarea',
      },
      {
        id: 'peakEnergy',
        label: 'When during the day is your mental energy and focus at its HIGHEST? When is it at its lowest? What does this mean for when you should schedule deep study?',
        placeholder: 'e.g., I\'m sharpest from 8–11am. I crash around 2pm. So I should schedule hard math in the morning and save email/admin for afternoons...',
        type: 'textarea',
      },
      {
        id: 'smartGoal',
        label: 'Write one SMART goal for this academic term. It must be Specific, Measurable, Achievable, Relevant, and Time-bound.',
        placeholder: 'e.g., I will earn an A in Math 1C by attending every class, completing all suggested problems within 48 hours of each lecture, attending office hours at least twice per month, and forming a study group by Week 2 — all by the end of the Spring 2025 term.',
        type: 'textarea',
      },
      {
        id: 'lifeVision',
        label: 'Zoom out: What is your 5–10 year vision for your life? How does what you\'re studying right now connect to that vision?',
        placeholder: 'e.g., In 7 years I want to be a licensed civil engineer working on sustainable infrastructure in my hometown. This math course is foundational for engineering — every hour I invest here is an investment in that future...',
        type: 'textarea',
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        text: 'For every 1 credit hour of class time per week, research recommends approximately how many additional hours of outside study?',
        options: ['30 minutes', '1 hour', '2–3 hours', '5–6 hours'],
        answer: 2,
        explanation: 'The standard research-backed guideline is 2–3 hours of outside study per credit hour per week. For a 5-unit math class, that\'s 10–15 hours of study per week outside of class.',
      },
      {
        id: 'q2',
        text: 'What does the "S" in a SMART goal stand for?',
        options: ['Simple', 'Specific', 'Strategic', 'Structured'],
        answer: 1,
        explanation: 'SMART = Specific, Measurable, Achievable, Relevant, Time-bound. "Specific" means naming exactly what you will do, in what class, by what method.',
      },
      {
        id: 'q3',
        text: 'What is the PRIMARY reason Jeff recommends building your schedule BEFORE the term starts?',
        options: [
          'To show your professor you are organized',
          'To minimize total hours spent studying',
          'To protect your deep study time before other demands fill it',
          'To satisfy a course requirement',
        ],
        answer: 2,
        explanation: 'If you don\'t schedule study time proactively, the demands of daily life — work, family, social life — will fill every available hour. Your schedule is an act of self-advocacy.',
      },
      {
        id: 'q4',
        text: 'In Jeff\'s "Horizons of Focus" model, a 50-Year Plan is primarily designed to:',
        options: [
          'Plan every decision in your life in advance',
          'Connect your short-term coursework to your larger life vision and values',
          'Calculate your lifetime earnings',
          'Determine which electives to take',
        ],
        answer: 1,
        explanation: 'The 50-Year Plan is a reflective exercise — not a rigid roadmap. Its purpose is to help you see WHY today\'s work matters by connecting it to the life you want to build.',
      },
      {
        id: 'q5',
        text: 'Which of the following is the BEST example of a SMART goal?',
        options: [
          '"I want to do better in math this semester."',
          '"I will study more and come to class on time."',
          '"I will earn a B or higher in Calculus by completing all suggested problems within 48 hours of each lecture and attending office hours twice a month this term."',
          '"I want to graduate and get a good job someday."',
        ],
        answer: 2,
        explanation: 'Options A, B, and D are vague intentions — not measurable, not time-bound, no specific strategy. Option C names the grade, the method, the frequency, and the deadline.',
      },
    ],
  },

  lab2: {
    labKey: 'lab2',
    labNumber: 2,
    title: 'Prepare for Deep Learning',
    subtitle: 'Find your Sweet Spot and learn how to stay there',
    icon: '🔥',
    color: '#c94f2a',
    videoUrl: 'https://www.youtube.com/playlist?list=PLSt7rwoPGTy1nCtyRIX8rFmvtmOQxwXTu',
    videoTitle: 'Study Skills Activity 2 — Prepare for Deep Learning',
    pdfUrl: 'http://www.appliedlinearalgebra.com/s/Conquering_College_Laboratory_2_Prompt_draft_20231211.pdf',
    objectives: [
      'Understand the difference between shallow, survival, and deep learning zones',
      'Identify your intrinsic motivations for learning',
      'Design a deliberate practice session for your hardest subject',
      'Map your current learning habits honestly',
    ],
    intro: `Most students study in one of two broken modes: too easy (re-reading highlighted notes, watching YouTube summaries) or too hard (cramming the night before, passively absorbing without understanding).

Real learning happens in neither place. It happens in the *Sweet Spot* — a zone of productive challenge just beyond your current ability, where you are working hard enough to grow but not so overwhelmed that you shut down.

This lab, rooted in decades of cognitive science and the science of expertise, helps you identify YOUR Sweet Spot and build the deliberate practice habits that make deep mastery possible.`,
    readingNote: `Before completing the workbook, watch the playlist above and read the Lab 2 PDF. Reflect carefully on the "Three Learning Zones" diagram and the discussion of intrinsic vs. extrinsic motivation.`,
    workbookPrompts: [
      {
        id: 'sweetSpotMemory',
        label: 'Describe a time in your life — in any subject or skill — when you were clearly in your Sweet Spot. Learning was hard but exciting. What were you learning? What made it feel that way?',
        placeholder: 'e.g., Learning to play guitar chords — I kept getting it wrong but I could feel myself getting closer. Each small breakthrough felt huge. I practiced for 2 hours without noticing...',
        type: 'textarea',
      },
      {
        id: 'comfortZone',
        label: 'What does your Comfort Zone look like in your current courses? What do you do when you study that FEELS productive but probably isn\'t?',
        placeholder: 'e.g., Re-reading my textbook with a highlighter. Watching the lecture recording without pausing to test myself. Re-copying my notes without thinking about them...',
        type: 'textarea',
      },
      {
        id: 'survivalZone',
        label: 'Describe a Survival Zone experience in school. When have you felt so overwhelmed that you basically shut down or just "went through the motions"? What caused it?',
        placeholder: 'e.g., The week before finals when I had 4 exams and hadn\'t kept up all semester. I pulled two all-nighters and just crammed without understanding anything...',
        type: 'textarea',
      },
      {
        id: 'intrinsicMotivations',
        label: 'List your top 3 INTRINSIC motivations for earning this degree. What genuinely matters to YOU — not your parents, not society — about the work you\'re doing?',
        placeholder: 'e.g.,\n1. I want to understand how systems work — I find engineering genuinely fascinating\n2. I want to be someone my younger cousins can look up to in my community\n3. I want financial freedom so I can choose where I live and how I work\n...',
        type: 'textarea',
      },
      {
        id: 'dpSession',
        label: 'Design ONE deliberate practice session for this week in your hardest subject. Be specific: What will you practice? For how long? How will you get corrective feedback?',
        placeholder: 'e.g., Thursday 9–10:30am: Work 10 practice problems from Section 3.2 without looking at notes first. After each problem I get wrong, write out WHERE my thinking broke down and redo it. Then bring 3 remaining questions to Friday\'s office hours...',
        type: 'textarea',
      },
      {
        id: 'learningBeliefs',
        label: 'What is one limiting belief about your ability to learn that you are willing to challenge this term? Where did that belief come from?',
        placeholder: 'e.g., "I\'ve always been told I\'m just not a math person." This came from a teacher in 8th grade who made me feel stupid in front of the class. But I\'ve realized that belief was about her teaching, not my potential...',
        type: 'textarea',
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        text: 'According to the science of expertise, "deliberate practice" is best defined as:',
        options: [
          'Practicing skills you already know well so you don\'t forget them',
          'Focused practice just beyond your current ability with immediate corrective feedback',
          'Studying for long, uninterrupted hours without breaks',
          'Re-reading and re-watching material multiple times',
        ],
        answer: 1,
        explanation: 'Deliberate practice (Ericsson, 2016) requires three things: (1) working at the edge of your current ability, (2) full focus and intentionality, and (3) immediate corrective feedback so you can adjust.',
      },
      {
        id: 'q2',
        text: 'In Jeff\'s Three Zones model, where does the most effective and lasting learning occur?',
        options: [
          'In the Comfort Zone, where you feel relaxed and confident',
          'In the Survival Zone, when you\'re under pressure and stress',
          'In the Sweet Spot, just beyond your current comfort zone with manageable challenge',
          'In isolation, studying alone without distractions',
        ],
        answer: 2,
        explanation: 'The Sweet Spot is defined by productive struggle — difficult enough to require real effort and growth, but not so overwhelming that you shut down. The Comfort Zone produces no growth; the Survival Zone produces anxiety, not learning.',
      },
      {
        id: 'q3',
        text: 'Intrinsic motivation means you are primarily driven by:',
        options: [
          'Grades, scholarships, and external praise',
          'Fear of failing or disappointing others',
          'Internal curiosity, personal values, and genuine meaning in the work',
          'Competition with your classmates',
        ],
        answer: 2,
        explanation: 'Research by Deci & Ryan (Self-Determination Theory) shows that intrinsic motivation — doing something because it\'s meaningful or interesting to YOU — produces deeper learning and greater resilience than extrinsic rewards alone.',
      },
      {
        id: 'q4',
        text: 'The four stages of competence model (from unconscious incompetence to unconscious competence) teaches us that:',
        options: [
          'You should only practice things you are already good at',
          'Feeling confused and frustrated is a SIGN that learning is happening, not a sign to stop',
          'Once you master a skill, you never need to practice it again',
          'The best learners feel confident at all times',
        ],
        answer: 1,
        explanation: 'Stage 2 (Conscious Incompetence) — where you become aware of what you don\'t know — is the most uncomfortable AND the most important stage. It is the beginning of real growth. Many students quit here.',
      },
      {
        id: 'q5',
        text: 'Why does Jeff emphasize connecting your coursework to intrinsic motivations?',
        options: [
          'To make difficult classes feel magically easy',
          'Because grades are not actually important',
          'Because extrinsic rewards alone do not sustain the deep, disciplined effort that real mastery requires',
          'To avoid having to build study habits',
        ],
        answer: 2,
        explanation: 'When the work is connected to something you genuinely care about, you are far more likely to persist through difficulty, do the hard work of deliberate practice, and experience genuine satisfaction from the process.',
      },
    ],
  },

  lab3: {
    labKey: 'lab3',
    labNumber: 3,
    title: 'Build Your Note System',
    subtitle: 'Transform passive information into active understanding',
    icon: '🗒️',
    color: '#3a5c4a',
    videoUrl: 'https://www.youtube.com/playlist?list=PLSt7rwoPGTy1nCtyRIX8rFmvtmOQxwXTu',
    videoTitle: 'Study Skills Activity 3 — Create a Lecture Notes System',
    pdfUrl: 'http://www.appliedlinearalgebra.com/s/Conquering_College_Laboratory_3_Prompt_v20221003.pdf',
    objectives: [
      'Design a personal lecture note-taking and rewrite system',
      'Apply the 2-Minute Question technique to capture targeted questions during lectures',
      'Plan your deep learning environment for maximum focus',
      'Build a peer-teaching habit into your weekly routine',
    ],
    intro: `Taking notes is not the same as learning. Most students fill pages with words they don't understand, highlight sentences they can't explain, and then wonder why they feel unprepared for exams.

A real note SYSTEM has two phases: first capture (during lecture or video), then transformation (rewriting, questioning, and connecting ideas) within 24 hours. The transformation phase is where actual learning happens.

In Jeff's flipped classroom model, you encounter content BEFORE class — then class time is for problem-solving, discussion, and deepening. This lab teaches you to prepare for that kind of active learning environment.`,
    readingNote: `Before completing the workbook, watch the Lab 3 playlist and read the PDF. Pay special attention to the "2-Minute Question" technique and the note rewrite process.`,
    workbookPrompts: [
      {
        id: 'currentNoteSystem',
        label: 'Honestly describe your current note-taking system. What do you actually do during a lecture or when watching a video? What do you do with your notes afterward?',
        placeholder: 'e.g., I write things down as fast as I can during class, but then I rarely look at them again. Sometimes I type on my laptop but end up distracted. I almost never rewrite or review within 24 hours...',
        type: 'textarea',
      },
      {
        id: 'threeQuestions',
        label: 'Think of your last class or lecture. Write 3 specific questions you still have that were NOT fully answered. (Be precise — not "I don\'t understand Chapter 3" but the exact concept that confused you.)',
        placeholder: 'e.g.,\n1. In the eigenvalue decomposition, WHY does A = PDP⁻¹ hold only for diagonalizable matrices? What breaks down if A is not diagonalizable?\n2. How do I know when to use row reduction vs. Cramer\'s Rule?\n3. ...',
        type: 'textarea',
      },
      {
        id: 'rewriteSystem',
        label: 'Design your note REWRITE system. When will you rewrite your notes (day/time)? What will the rewrite process look like? How will you flag unanswered questions for follow-up?',
        placeholder: 'e.g., Every Tuesday and Thursday evening 7–8pm, I will rewrite my notes from that day\'s class using the Cornell method — main notes in the right column, key questions on the left, summary at the bottom. I\'ll circle anything I can\'t explain in my own words and bring those to office hours...',
        type: 'textarea',
      },
      {
        id: 'learningEnvironment',
        label: 'Describe your ideal deep learning environment. Where do you study best? What are the lighting, sound, temperature, tools, and conditions that help you focus? What destroys your focus?',
        placeholder: 'e.g., I focus best at the library (3rd floor, quiet section) in the morning before work. I need my phone in a different room, noise-canceling headphones with lo-fi music, graph paper, and a pencil (not laptop). Phone notifications kill my focus completely...',
        type: 'textarea',
      },
      {
        id: 'teachingPlan',
        label: 'Identify one peer — a classmate, friend, or study partner — you could TEACH a concept to this week. What concept will you teach? When and how will you do it?',
        placeholder: 'e.g., I\'ll teach Marcus the chain rule on Friday at 2pm in the library. I\'ll explain it from scratch without notes first, then work through 2 examples. Anywhere I get stuck or he has questions I can\'t answer = content I need to revisit...',
        type: 'textarea',
      },
      {
        id: 'systemNavigation',
        label: 'Jeff defines "system navigation" as protecting yourself from harmful educational policies so you can achieve your goals without internalizing the harm. Describe one way your current college or a specific class is failing to support your learning. How will you navigate around it?',
        placeholder: 'e.g., My professor posts lecture slides at 11pm the night before class, making it impossible to pre-read. To navigate this: I\'ll focus on reading the textbook section the night before instead, and use the slides as a reference after class rather than as my primary source...',
        type: 'textarea',
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        text: 'In a "flipped classroom," when do students first encounter new content?',
        options: [
          'During the in-class lecture, with the professor explaining everything',
          'The night before the exam while cramming',
          'Before class, through assigned videos or readings, so class time is used for active problem-solving',
          'Only during office hours with the instructor',
        ],
        answer: 2,
        explanation: 'In a flipped model, your first exposure to content happens at home (video, reading). Class time is then used for the harder cognitive work — applying, questioning, problem-solving — that benefits most from peer and instructor support.',
      },
      {
        id: 'q2',
        text: 'What is the most important thing to do with your notes within 24 hours of a class?',
        options: [
          'Re-read them once passively before bed',
          'Highlight the most important sentences',
          'Rewrite, reorganize, and flag any concepts you cannot explain in your own words',
          'Post them to a study group chat',
        ],
        answer: 2,
        explanation: 'The rewrite forces active processing. If you can\'t explain a concept in your own words, you don\'t actually understand it yet — and now you know exactly what to bring to office hours or a study group.',
      },
      {
        id: 'q3',
        text: 'Jeff\'s "2-Minute Question" technique refers to:',
        options: [
          'Only asking questions that can be explained in under 2 minutes',
          'Spending 2 minutes reviewing your notes before sleeping',
          'Pausing a video every few minutes to write a specific, targeted question about something you don\'t fully understand yet',
          'Writing at least 2 questions per page of class notes',
        ],
        answer: 2,
        explanation: 'The technique: every time you feel confused while watching a lecture, PAUSE and write a precise question. This prevents passive watching and gives you a concrete list of targeted questions for class, office hours, or peer study.',
      },
      {
        id: 'q4',
        text: 'Jeff defines "system navigation" as:',
        options: [
          'Learning to use your college\'s online course management system',
          'Protecting yourself from harmful educational policies so you can pursue your goals without internalizing the harm you encounter',
          'Navigating your college website to find course schedules',
          'Learning to work around your professor\'s grading system',
        ],
        answer: 1,
        explanation: 'System navigation is proactive self-advocacy. It means recognizing when a policy, professor, or institutional structure is working against your learning — and developing strategies to achieve your goals anyway, without giving up or being defeated.',
      },
      {
        id: 'q5',
        text: 'Why is teaching a concept to someone else one of the most powerful study strategies?',
        options: [
          'It impresses other students and builds your reputation',
          'It reduces the total amount of time you need to study',
          'Teaching forces you to identify gaps in your understanding — you can\'t fake fluency when explaining something live',
          'It shifts the work to someone else so you don\'t have to learn it yourself',
        ],
        answer: 2,
        explanation: 'The "Protégé Effect" (Chase et al.) shows that preparing to teach something produces deeper learning than preparing to be tested on it. You process more thoroughly and notice exactly where your understanding breaks down.',
      },
    ],
  },

  lab4: {
    labKey: 'lab4',
    labNumber: 4,
    title: 'Build Your Dream Binder',
    subtitle: 'Create the external brain that connects today\'s work to your future',
    icon: '📂',
    color: '#5c6bc0',
    videoUrl: 'https://www.youtube.com/watch?v=KH5vt3x5gBg',
    videoTitle: 'Study Skills Activity 4 — How to Organize Your Course Binder',
    pdfUrl: 'https://jeffandersonmath.files.wordpress.com/2023/01/conquering_college_laboratory_4_prompt.pdf',
    objectives: [
      'Design your 5-year academic plan connecting coursework to career goals',
      'Build a second-brain / capture system for ideas, tasks, and insights',
      'Create a scholarship and funding research tracker',
      'Plan your professor and mentor relationship-building strategy',
    ],
    intro: `A Dream Binder is your external brain — a living document system that holds your goals, plans, course materials, scholarships, and the reasons you are doing all of this. It connects the mundane work of daily studying to the bigger story of your life.

Without this system, most students spend four years reacting to deadlines rather than pursuing a vision. With it, you become someone who uses college deliberately — building specific skills, earning specific opportunities, and laying a foundation for a career and life you actually want.

This lab helps you build the core architecture of your Dream Binder.`,
    readingNote: `Before completing the workbook, read the Lab 4 PDF and review Jeff's "40+ Books" list at jeffandersonmath.wordpress.com. Think carefully about the 5-year plan section — the prompts below will ask you to be specific.`,
    workbookPrompts: [
      {
        id: 'careerVision',
        label: 'What career or life role do you envision for yourself 5 years after graduation? Be as specific as you can about: what you\'d be doing daily, where you\'d live, who you\'d serve, and what skills you\'d use.',
        placeholder: 'e.g., In 5 years I want to be a data scientist at a climate tech startup in the Bay Area. Daily I\'d be building predictive models on energy usage. I\'d serve engineers and city planners making infrastructure decisions. Key skills: Python, ML, communication with non-technical stakeholders...',
        type: 'textarea',
      },
      {
        id: 'fiveYearPlan',
        label: 'Draft your 5-Year Academic Plan. List the courses (or types of courses) you need to take each year/semester to reach your career vision. Include any certifications, projects, or experiences you want to build.',
        placeholder: 'e.g.,\nYear 1 (Current): Complete Math 1C, Stats 1, CS 50A. Goal: strong GPA foundation.\nYear 2: Linear Algebra, Data Structures, join Math Club. Apply for summer research internship.\nYear 3: Transfer to 4-yr + declare CS major. Build portfolio project.\nYear 4–5: Senior capstone, target Google or climate-tech companies...',
        type: 'textarea',
      },
      {
        id: 'funding',
        label: 'List 3–5 scholarships, internships, or work-study programs you will actively research and apply to this term. For each, note the deadline and required materials.',
        placeholder: 'e.g.,\n1. Hispanic Scholarship Fund — Deadline: Feb 15 — Needs: 2 essays, 1 rec letter, transcript\n2. Google STEP Internship — Deadline: Nov 1 — Needs: resume, 2 coding samples\n3. College\'s EOPS Work-Study — Deadline: Rolling — Needs: FAFSA + meeting with advisor\n...',
        type: 'textarea',
      },
      {
        id: 'mentors',
        label: 'List 2–3 professors, advisors, or professionals you want to build a genuine relationship with this term. For each, write HOW you\'ll make first contact and what you hope to learn from them.',
        placeholder: 'e.g.,\n1. Prof. Anderson — Will go to office hours Week 2 to ask about research on eigenvalues. Goal: letter of rec by Year 2.\n2. Career Center advisor — Schedule informational interview this month to map my path to tech.\n3. Engineer at local company — Ask my uncle to introduce me. Email to ask for 20-min call...',
        type: 'textarea',
      },
      {
        id: 'captureSystem',
        label: 'Describe your "second brain" / capture system. How will you organize your ideas, tasks, reading notes, and insights across all your courses? What tools will you use?',
        placeholder: 'e.g., I\'ll use a physical binder with tabbed sections for each course + a "Capture" section at the front for random ideas. I\'ll also keep a Notion workspace with a daily log and a "Someday/Maybe" list for opportunities I want to research later. Every Sunday I\'ll do a 30-min weekly review...',
        type: 'textarea',
      },
      {
        id: 'personalMission',
        label: 'Write your Personal Mission Statement — 3–5 sentences that capture WHY your education matters. Who do you want to become? What problems do you want to solve? Who will benefit from your expertise?',
        placeholder: 'e.g., I am earning my degree to become a civil engineer who builds sustainable infrastructure in underserved communities like the one I grew up in. I believe that technical expertise in the hands of people who love their communities is one of the most powerful forces for change. I want to be proof to the next generation that this path is possible...',
        type: 'textarea',
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        text: 'In Jeff\'s framework, earning a college degree is best described as:',
        options: [
          'The end of your education — proof you\'ve mastered what you need to know',
          'A guaranteed ticket to a high salary',
          'A "license to learn" — evidence that you can teach yourself anything you need to know',
          'A requirement with no deeper personal meaning',
        ],
        answer: 2,
        explanation: 'Jeff\'s phrase "license to learn" reframes the degree entirely. It\'s not the destination — it\'s proof of process. It says: I have learned HOW to learn at a sophisticated level, and I can apply that anywhere.',
      },
      {
        id: 'q2',
        text: 'How far in advance should you ideally start building a relationship with a professor BEFORE asking them for a letter of recommendation?',
        options: [
          'The week before you need the letter',
          'At the end of the semester you take their class',
          'One to two semesters — or more — before you actually need the letter',
          'The first day of their class',
        ],
        answer: 2,
        explanation: 'A strong letter of recommendation comes from a professor who knows your work, your growth, and your goals in detail. That relationship requires time. Start early — go to office hours, do excellent work, follow up — long before you need anything.',
      },
      {
        id: 'q3',
        text: '"Reverse engineering your career" means:',
        options: [
          'Switching careers after realizing your first choice was wrong',
          'Taking courses in reverse chronological order',
          'Starting with your desired future role and working backwards to identify what skills, experiences, and connections you need to build starting TODAY',
          'Applying for jobs before you graduate',
        ],
        answer: 2,
        explanation: 'Reverse engineering is strategic: you identify the destination first (specific role, skills required, companies that hire) and then design your academic and extracurricular choices to systematically build what that destination requires.',
      },
      {
        id: 'q4',
        text: 'According to Jeff\'s research, which funding source should students pursue FIRST when trying to minimize college debt?',
        options: [
          'Federal student loans at subsidized interest rates',
          'Private student loans from banks and credit unions',
          'Scholarships, grants, and paid internships — money that does not need to be repaid',
          'Credit card financing for short-term gaps',
        ],
        answer: 2,
        explanation: 'Loans create debt that follows you for decades. Scholarships and grants are free money — invest the time to find and apply for them aggressively. Paid internships build your resume AND your bank account simultaneously.',
      },
      {
        id: 'q5',
        text: 'What is the primary purpose of a "second brain" or capture system?',
        options: [
          'To replace your physical brain so you don\'t have to memorize anything',
          'To impress employers with your organizational skills',
          'To externalize ideas, tasks, and insights so your mind stays clear and nothing important is lost',
          'To create a backup of your class notes in case you lose them',
        ],
        answer: 2,
        explanation: 'The "second brain" concept (Forte) argues that your working memory is limited. By capturing everything externally — ideas, tasks, reading highlights, connections — you free your cognitive resources for the deep thinking and creativity that actually requires your brain.',
      },
    ],
  },
}

export const labOrder = ['lab1', 'lab2', 'lab3', 'lab4']
