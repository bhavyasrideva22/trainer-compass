import { AssessmentSection } from '@/types/assessment';

export const assessmentSections: AssessmentSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Understanding the Language Trainer role',
    icon: '🎯',
    questions: [
      {
        id: 'intro-1',
        type: 'mcq',
        question: 'What best describes your current experience with language teaching?',
        section: 'introduction',
        options: [
          'No formal experience, but I love helping others learn',
          'Some informal tutoring or helping friends/family',
          'Formal teaching experience in other subjects',
          'Professional language teaching experience'
        ]
      },
      {
        id: 'intro-2',
        type: 'mcq',
        question: 'Which Language Trainer role interests you most?',
        section: 'introduction',
        options: [
          'ESL (English as Second Language) Trainer',
          'Corporate Communication Coach',
          'Academic Language Instructor',
          'Language Lab Coordinator',
          'Multilingual Facilitator'
        ]
      }
    ]
  },
  {
    id: 'psychometric',
    title: 'Personality & Traits',
    description: 'Assessing your psychological fit for language training',
    icon: '🧠',
    questions: [
      {
        id: 'psych-1',
        type: 'likert',
        question: 'I enjoy explaining complex concepts in simple terms',
        section: 'psychometric',
        scale: {
          min: 1,
          max: 5,
          labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        }
      },
      {
        id: 'psych-2',
        type: 'likert',
        question: 'I remain patient when others struggle to understand',
        section: 'psychometric',
        scale: {
          min: 1,
          max: 5,
          labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        }
      },
      {
        id: 'psych-3',
        type: 'likert',
        question: 'I adapt my communication style based on my audience',
        section: 'psychometric',
        scale: {
          min: 1,
          max: 5,
          labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        }
      },
      {
        id: 'psych-4',
        type: 'scenario',
        question: 'A student repeatedly makes the same grammar mistake despite your corrections. How do you respond?',
        section: 'psychometric',
        options: [
          'Find a different way to explain the rule using visual aids or examples',
          'Have them practice similar exercises until they master it',
          'Move on and address it later in a different context',
          'Ask other students to help explain it peer-to-peer'
        ]
      },
      {
        id: 'psych-5',
        type: 'likert',
        question: 'I genuinely enjoy learning about different cultures',
        section: 'psychometric',
        scale: {
          min: 1,
          max: 5,
          labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        }
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Knowledge',
    description: 'Testing your language teaching aptitude and knowledge',
    icon: '📐',
    questions: [
      {
        id: 'tech-1',
        type: 'mcq',
        question: 'Which method is most effective for teaching sentence stress?',
        section: 'technical',
        options: [
          'Having students clap while speaking to mark stressed syllables',
          'Only explaining the rules theoretically',
          'Using visual diagrams showing stress patterns',
          'Repeating sentences until students memorize them'
        ]
      },
      {
        id: 'tech-2',
        type: 'mcq',
        question: 'What does TPR stand for in language teaching?',
        section: 'technical',
        options: [
          'Total Physical Response',
          'Teaching Practice Resources',
          'Textbook Practice Routine',
          'Timed Performance Review'
        ]
      },
      {
        id: 'tech-3',
        type: 'scenario',
        question: 'A student says "I go to shopping yesterday." How do you correct this?',
        section: 'technical',
        options: [
          'Point out both the verb tense error and preposition error systematically',
          'Simply say "I went shopping yesterday" and move on',
          'Focus only on the more serious error (verb tense) first',
          'Have the student identify what sounds wrong to them'
        ]
      },
      {
        id: 'tech-4',
        type: 'mcq',
        question: 'Which is the most important factor in language acquisition?',
        section: 'technical',
        options: [
          'Memorizing vocabulary lists',
          'Meaningful interaction and communication',
          'Perfect grammar understanding',
          'Native-like pronunciation'
        ]
      }
    ]
  },
  {
    id: 'wiscar-will',
    title: 'Will & Persistence',
    description: 'Measuring your determination and grit',
    icon: '💪',
    questions: [
      {
        id: 'will-1',
        type: 'likert',
        question: 'I continue working to improve my teaching methods even when they seem effective',
        section: 'wiscar-will',
        scale: {
          min: 1,
          max: 5,
          labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        }
      },
      {
        id: 'will-2',
        type: 'scenario',
        question: 'After a lesson that didn\'t go well, what do you typically do?',
        section: 'wiscar-will',
        options: [
          'Immediately analyze what went wrong and plan improvements',
          'Take a break and try again tomorrow',
          'Ask for feedback from colleagues or mentors',
          'Feel discouraged but push through anyway'
        ]
      }
    ]
  },
  {
    id: 'wiscar-interest',
    title: 'Interest & Passion',
    description: 'Evaluating your genuine interest in language training',
    icon: '❤️',
    questions: [
      {
        id: 'interest-1',
        type: 'likert',
        question: 'I find myself excited about helping others improve their communication skills',
        section: 'wiscar-interest',
        scale: {
          min: 1,
          max: 5,
          labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        }
      },
      {
        id: 'interest-2',
        type: 'slider',
        question: 'How much time do you currently spend learning about languages or teaching methods?',
        section: 'wiscar-interest',
        scale: {
          min: 0,
          max: 20,
          labels: ['0 hours/week', '20+ hours/week']
        }
      }
    ]
  },
  {
    id: 'wiscar-skill',
    title: 'Current Skills',
    description: 'Assessing your existing communication and instructional abilities',
    icon: '🎯',
    questions: [
      {
        id: 'skill-1',
        type: 'mcq',
        question: 'How would you rate your own grammar knowledge?',
        section: 'wiscar-skill',
        options: [
          'Expert - I can explain complex grammar rules clearly',
          'Advanced - I know the rules but sometimes struggle to explain them',
          'Intermediate - I know basic grammar well',
          'Beginner - I often make grammar mistakes myself'
        ]
      },
      {
        id: 'skill-2',
        type: 'scenario',
        question: 'You need to design a 15-minute lesson on past tense. What\'s your approach?',
        section: 'wiscar-skill',
        options: [
          'Start with examples, identify patterns, practice with guided exercises',
          'Explain the rules first, then give examples and practice',
          'Use stories and real-life contexts to introduce past tense naturally',
          'Focus on common irregular verbs through repetition and drilling'
        ]
      }
    ]
  }
];

export const calculateResults = (answers: Record<string, any>) => {
  // Simplified scoring algorithm
  const psychometricScore = calculatePsychometricScore(answers);
  const technicalScore = calculateTechnicalScore(answers);
  const wiscarScores = calculateWiscarScores(answers);
  
  const overallScore = Math.round(
    (psychometricScore + technicalScore + 
     Object.values(wiscarScores).reduce((a, b) => a + b, 0) / 6) / 3
  );
  
  const confidence = Math.min(95, Math.max(60, overallScore + Math.random() * 10));
  
  return {
    overallScore,
    sectionScores: {
      psychometric: psychometricScore,
      technical: technicalScore,
      wiscar: wiscarScores
    },
    recommendation: (overallScore >= 75 ? 'yes' : overallScore >= 60 ? 'maybe' : 'no') as 'yes' | 'maybe' | 'no',
    confidence: Math.round(confidence),
    nextSteps: getNextSteps(overallScore),
    careerMatches: getCareerMatches(overallScore),
    skillGaps: getSkillGaps(answers, overallScore)
  };
};

function calculatePsychometricScore(answers: Record<string, any>): number {
  const psychQuestions = ['psych-1', 'psych-2', 'psych-3', 'psych-5'];
  const scenarioBonus = answers['psych-4'] === 0 ? 10 : 0; // First option is best
  
  const avgScore = psychQuestions.reduce((sum, id) => {
    return sum + (answers[id] || 0);
  }, 0) / psychQuestions.length;
  
  return Math.min(100, Math.round((avgScore / 5) * 100) + scenarioBonus);
}

function calculateTechnicalScore(answers: Record<string, any>): number {
  const correctAnswers = {
    'tech-1': 0, // TPR clapping method
    'tech-2': 0, // Total Physical Response
    'tech-3': 2, // Focus on serious error first
    'tech-4': 1  // Meaningful interaction
  };
  
  let score = 0;
  Object.entries(correctAnswers).forEach(([id, correct]) => {
    if (answers[id] === correct) score += 25;
  });
  
  return score;
}

function calculateWiscarScores(answers: Record<string, any>) {
  return {
    will: Math.min(100, ((answers['will-1'] || 0) / 5) * 100),
    interest: Math.min(100, ((answers['interest-1'] || 0) / 5) * 100),
    skill: Math.min(100, 
      answers['skill-1'] === 0 ? 100 : 
      answers['skill-1'] === 1 ? 80 : 
      answers['skill-1'] === 2 ? 60 : 40
    ),
    cognitive: 75, // Simplified
    abilityToLearn: 80, // Simplified
    realWorldAlignment: Math.min(100, ((answers['interest-2'] || 0) / 20) * 100)
  };
}

function getNextSteps(score: number): string[] {
  if (score >= 75) {
    return [
      'Enroll in a TESOL or CELTA certification program',
      'Start practicing with 1-on-1 tutoring sessions',
      'Join language teaching communities and forums',
      'Develop lesson planning skills through practice'
    ];
  } else if (score >= 60) {
    return [
      'Improve your grammar and phonetics knowledge',
      'Practice explaining concepts clearly to others',
      'Volunteer for language exchange programs',
      'Take courses in educational psychology or pedagogy'
    ];
  } else {
    return [
      'Consider alternative roles like content development or translation',
      'Develop stronger foundation in language mechanics',
      'Practice public speaking and presentation skills',
      'Explore if language training aligns with your core interests'
    ];
  }
}

function getCareerMatches(score: number): string[] {
  if (score >= 75) {
    return [
      'ESL Teacher',
      'Corporate Language Trainer',
      'Language Lab Coordinator',
      'Curriculum Developer',
      'International Training Specialist'
    ];
  } else if (score >= 60) {
    return [
      'Language Tutor',
      'Educational Content Writer',
      'Learning Assistant',
      'Cultural Liaison',
      'Language Exchange Coordinator'
    ];
  } else {
    return [
      'Translator',
      'Content Localizer',
      'Language Technology Specialist',
      'Cross-cultural Consultant',
      'Educational Technology Support'
    ];
  }
}

function getSkillGaps(answers: Record<string, any>, overallScore: number) {
  return [
    {
      skill: 'Grammar Expertise',
      current: answers['skill-1'] === 0 ? 95 : answers['skill-1'] === 1 ? 75 : 55,
      target: 85,
      action: 'Study advanced grammar texts and practice explanations'
    },
    {
      skill: 'Lesson Planning',
      current: Math.max(40, overallScore - 20),
      target: 80,
      action: 'Practice creating structured lesson plans with clear objectives'
    },
    {
      skill: 'Cultural Sensitivity',
      current: Math.max(50, overallScore - 10),
      target: 90,
      action: 'Learn about different cultures and communication styles'
    }
  ];
}