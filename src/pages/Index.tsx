import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AssessmentFlow } from '@/components/assessment/AssessmentFlow';
import { BookOpen, Users, Target, Brain, Clock, Award } from 'lucide-react';
import heroImage from '@/assets/hero-assessment.jpg';

const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return <AssessmentFlow onComplete={() => setShowAssessment(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Language training and education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-assessment-purple/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🧠 AI-Powered Career Assessment
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Should I Become a
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Language Trainer?
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Discover your potential with our comprehensive, scientifically-backed assessment. 
                Get personalized insights into your fit for language training careers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => setShowAssessment(true)}
                className="animate-pulse-subtle"
              >
                Start Assessment
              </Button>
              <div className="text-white/80 text-sm">
                ⏱️ Takes 15-20 minutes • 📊 Instant results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-assessment bg-clip-text text-transparent">
              Comprehensive Career Assessment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our scientifically-designed assessment evaluates your fit across multiple dimensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card-soft hover:shadow-assessment transition-all duration-300">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-assessment-purple mx-auto mb-4" />
                <CardTitle>Psychometric Analysis</CardTitle>
                <CardDescription>
                  Evaluate your personality traits, emotional intelligence, and psychological fit for teaching
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card-soft hover:shadow-assessment transition-all duration-300">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-assessment-teal mx-auto mb-4" />
                <CardTitle>Technical Aptitude</CardTitle>
                <CardDescription>
                  Test your knowledge of language teaching methods, grammar, and instructional design
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card-soft hover:shadow-assessment transition-all duration-300">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-assessment-orange mx-auto mb-4" />
                <CardTitle>WISCAR Framework</CardTitle>
                <CardDescription>
                  Comprehensive evaluation of Will, Interest, Skill, Cognitive ability, and Real-world alignment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">What You'll Discover</h2>
            <p className="text-xl text-muted-foreground">
              Get actionable insights to guide your career decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Compatibility Score</h3>
                  <p className="text-muted-foreground">
                    Get a precise percentage indicating how well-suited you are for language training roles
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-assessment flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Learning Path</h3>
                  <p className="text-muted-foreground">
                    Receive specific recommendations for skills to develop and certifications to pursue
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-success flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alternative Career Matches</h3>
                  <p className="text-muted-foreground">
                    Discover related roles that might be an even better fit for your unique profile
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-assessment border-none bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <CardTitle className="text-center">Sample Result</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">82%</div>
                    <div className="text-muted-foreground">Compatibility Score</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Psychological Fit</span>
                      <Badge variant="secondary">78%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Technical Readiness</span>
                      <Badge variant="secondary">85%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Learning Motivation</span>
                      <Badge variant="secondary">90%</Badge>
                    </div>
                  </div>
                  
                  <Badge className="w-full justify-center bg-green-100 text-green-800 border-green-200">
                    ✅ Recommended: Proceed with Language Training
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-assessment text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Discover Your Teaching Potential?
          </h2>
          <p className="text-xl opacity-90">
            Join thousands who have used our assessment to make informed career decisions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => setShowAssessment(true)}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Begin Assessment Now
            </Button>
            <div className="flex items-center space-x-4 text-sm opacity-80">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>15-20 minutes</span>
              </div>
              <div>•</div>
              <div>No registration required</div>
              <div>•</div>
              <div>Instant results</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
