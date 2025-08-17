import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  currentSection: string;
  className?: string;
}

export const ProgressBar = ({ currentStep, totalSteps, currentSection, className }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{currentSection}</span>
        <span className="text-muted-foreground">{currentStep} of {totalSteps}</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xs text-muted-foreground text-center">
        {Math.round(progress)}% Complete
      </div>
    </div>
  );
};