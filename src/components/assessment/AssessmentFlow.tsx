import { useState, useEffect } from 'react';
import { AssessmentState, Question } from '@/types/assessment';
import { assessmentSections, calculateResults } from '@/data/assessment-data';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';
import { ResultsPage } from './ResultsPage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AssessmentFlowProps {
  onComplete?: () => void;
}

export const AssessmentFlow = ({ onComplete }: AssessmentFlowProps) => {
  const [state, setState] = useState<AssessmentState>({
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    isComplete: false
  });

  // Flatten all questions for easier navigation
  const allQuestions: Question[] = assessmentSections.flatMap(section => section.questions);
  const totalQuestions = allQuestions.length;
  
  const currentQuestion = allQuestions[state.currentQuestion];
  const currentSectionInfo = assessmentSections.find(section => 
    section.questions.some(q => q.id === currentQuestion?.id)
  );

  const updateAnswer = (answer: any) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer
      }
    }));
  };

  const goToNext = () => {
    if (state.currentQuestion < totalQuestions - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      // Complete assessment
      const results = calculateResults(state.answers);
      setState(prev => ({
        ...prev,
        isComplete: true,
        results
      }));
    }
  };

  const goToPrevious = () => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const restartAssessment = () => {
    setState({
      currentSection: 0,
      currentQuestion: 0,
      answers: {},
      isComplete: false
    });
  };

  if (state.isComplete && state.results) {
    return <ResultsPage results={state.results} onRestart={restartAssessment} />;
  }

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Language Trainer Assessment
          </h1>
          <p className="text-muted-foreground">
            Should I Become a Language Trainer?
          </p>
        </div>

        {/* Progress */}
        <ProgressBar 
          currentStep={state.currentQuestion + 1}
          totalSteps={totalQuestions}
          currentSection={currentSectionInfo?.title || ''}
        />

        {/* Section Header */}
        {state.currentQuestion === 0 || 
         (state.currentQuestion > 0 && 
          allQuestions[state.currentQuestion - 1]?.section !== currentQuestion.section) ? (
          <Card className="border-l-4 border-l-primary shadow-card-soft animate-slide-up">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{currentSectionInfo?.icon}</div>
              <CardTitle className="text-xl">{currentSectionInfo?.title}</CardTitle>
              <CardDescription>{currentSectionInfo?.description}</CardDescription>
            </CardHeader>
          </Card>
        ) : null}

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          answer={state.answers[currentQuestion.id]}
          onAnswer={updateAnswer}
          onNext={goToNext}
          onPrevious={goToPrevious}
          canGoNext={true}
          canGoPrevious={state.currentQuestion > 0}
          questionNumber={state.currentQuestion + 1}
          totalQuestions={totalQuestions}
        />
      </div>
    </div>
  );
};