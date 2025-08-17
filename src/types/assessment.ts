export interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  answers: Record<string, any>;
  isComplete: boolean;
  results?: AssessmentResults;
}

export interface Question {
  id: string;
  type: 'likert' | 'mcq' | 'scenario' | 'slider' | 'open';
  question: string;
  description?: string;
  options?: string[];
  scale?: {
    min: number;
    max: number;
    labels: string[];
  };
  section: string;
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export interface AssessmentResults {
  overallScore: number;
  sectionScores: {
    psychometric: number;
    technical: number;
    wiscar: {
      will: number;
      interest: number;
      skill: number;
      cognitive: number;
      abilityToLearn: number;
      realWorldAlignment: number;
    };
  };
  recommendation: 'yes' | 'no' | 'maybe';
  confidence: number;
  nextSteps: string[];
  careerMatches: string[];
  skillGaps: Array<{
    skill: string;
    current: number;
    target: number;
    action: string;
  }>;
}