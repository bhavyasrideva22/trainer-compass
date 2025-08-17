import { Question } from '@/types/assessment';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  answer: any;
  onAnswer: (answer: any) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard = ({
  question,
  answer,
  onAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  questionNumber,
  totalQuestions
}: QuestionCardProps) => {
  const renderQuestionInput = () => {
    switch (question.type) {
      case 'likert':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-2">
              {question.scale?.labels.map((label, index) => (
                <Button
                  key={index}
                  variant={answer === index + 1 ? "assessment" : "outline"}
                  size="sm"
                  onClick={() => onAnswer(index + 1)}
                  className="h-auto p-3 text-xs text-center whitespace-normal"
                >
                  <div>
                    <div className="font-semibold">{index + 1}</div>
                    <div className="mt-1">{label}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        );
      
      case 'mcq':
      case 'scenario':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <Button
                key={index}
                variant={answer === index ? "assessment" : "outline"}
                onClick={() => onAnswer(index)}
                className="w-full h-auto p-4 text-left justify-start whitespace-normal"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-1">{option}</div>
                </div>
              </Button>
            ))}
          </div>
        );
      
      case 'slider':
        return (
          <div className="space-y-6">
            <div className="px-4">
              <Slider
                value={[answer || 0]}
                onValueChange={(value) => onAnswer(value[0])}
                max={question.scale?.max || 100}
                min={question.scale?.min || 0}
                step={1}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground px-2">
              <span>{question.scale?.labels[0]}</span>
              <span className="font-semibold text-foreground">{answer || 0}</span>
              <span>{question.scale?.labels[1]}</span>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-card-soft animate-slide-up">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
          <span>Question {questionNumber} of {totalQuestions}</span>
        </div>
        <CardTitle className="text-xl font-bold leading-tight">{question.question}</CardTitle>
        {question.description && (
          <CardDescription className="text-base mt-2">{question.description}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="space-y-8">
        {renderQuestionInput()}
        
        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoPrevious}
          >
            Previous
          </Button>
          
          <Button
            variant="assessment"
            onClick={onNext}
            disabled={!canGoNext || answer === undefined}
            className="min-w-[120px]"
          >
            {questionNumber === totalQuestions ? 'Complete Assessment' : 'Next Question'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};