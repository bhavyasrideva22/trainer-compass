import { AssessmentResults } from '@/types/assessment';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle, BookOpen, Target, Users, Lightbulb } from 'lucide-react';

interface ResultsPageProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export const ResultsPage = ({ results, onRestart }: ResultsPageProps) => {
  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'yes':
        return <CheckCircle className="h-12 w-12 text-green-500" />;
      case 'maybe':
        return <AlertCircle className="h-12 w-12 text-yellow-500" />;
      case 'no':
        return <XCircle className="h-12 w-12 text-red-500" />;
    }
  };

  const getRecommendationText = () => {
    switch (results.recommendation) {
      case 'yes':
        return {
          title: '✅ Great Fit!',
          description: 'You show strong potential for becoming a successful Language Trainer.',
          color: 'text-green-700'
        };
      case 'maybe':
        return {
          title: '🤔 Promising with Development',
          description: 'You have good foundations but would benefit from targeted skill development.',
          color: 'text-yellow-700'
        };
      case 'no':
        return {
          title: '💭 Consider Alternatives',
          description: 'Based on your responses, you might be better suited for related roles.',
          color: 'text-red-700'
        };
    }
  };

  const recommendation = getRecommendationText();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Your Assessment Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive analysis of your Language Trainer potential
          </p>
        </div>

        {/* Overall Score & Recommendation */}
        <Card className="shadow-assessment">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              {getRecommendationIcon()}
            </div>
            <CardTitle className={`text-2xl font-bold ${recommendation.color}`}>
              {recommendation.title}
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              {recommendation.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">{results.overallScore}%</div>
              <div className="text-muted-foreground">Overall Compatibility Score</div>
            </div>
            <div className="space-y-2">
              <Progress value={results.confidence} className="h-3" />
              <div className="text-sm text-muted-foreground">
                {results.confidence}% Confidence Level
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-assessment-purple" />
                <span>Psychological Fit</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Personality Alignment</span>
                <Badge variant="secondary">{results.sectionScores.psychometric}%</Badge>
              </div>
              <Progress value={results.sectionScores.psychometric} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-assessment-teal" />
                <span>Technical Readiness</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Knowledge & Skills</span>
                <Badge variant="secondary">{results.sectionScores.technical}%</Badge>
              </div>
              <Progress value={results.sectionScores.technical} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* WISCAR Framework */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-assessment-orange" />
              <span>WISCAR Framework Analysis</span>
            </CardTitle>
            <CardDescription>
              Comprehensive evaluation across six key dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(results.sectionScores.wiscar).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <Badge variant="outline">{value}%</Badge>
                  </div>
                  <Progress value={value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Career Matches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-assessment-purple" />
              <span>Recommended Career Paths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.careerMatches.map((career, index) => (
                <Badge key={index} variant="secondary" className="p-3 text-center">
                  {career}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>🚀 Your Next Steps</CardTitle>
            <CardDescription>
              Personalized recommendations to advance your Language Trainer journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {results.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/50">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1">{step}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Gaps */}
        <Card>
          <CardHeader>
            <CardTitle>📊 Skill Development Areas</CardTitle>
            <CardDescription>
              Focus areas to maximize your success potential
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {results.skillGaps.map((gap, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{gap.skill}</h4>
                    <div className="text-sm text-muted-foreground">
                      {gap.current}% → {gap.target}%
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={gap.current} className="h-3" />
                    <div 
                      className="absolute top-0 h-3 w-1 bg-green-500" 
                      style={{ left: `${gap.target}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{gap.action}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-center space-x-4">
          <Button variant="outline" onClick={onRestart} size="lg">
            Retake Assessment
          </Button>
          <Button variant="success" size="lg">
            Download Results
          </Button>
        </div>
      </div>
    </div>
  );
};