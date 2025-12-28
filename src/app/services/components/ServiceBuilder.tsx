'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface BuilderStep {
  id: string;
  title: string;
  options: string[];
}

interface ServiceBuilderProps {
  steps: BuilderStep[];
}

export default function ServiceBuilder({ steps }: ServiceBuilderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelection = (stepId: string, option: string) => {
    setSelections({ ...selections, [stepId]: option });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setSelections({});
    setCurrentStep(0);
  };

  const isComplete = Object.keys(selections).length === steps.length;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-white/50 transition-smooth"
      >
        <div className="flex items-center gap-2">
          <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary" />
          <span className="font-semibold text-text-primary">Custom Service Builder</span>
        </div>
        <Icon
          name={isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={20}
          className="text-text-secondary"
        />
      </button>

      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-sm text-text-secondary mb-4">
            Build a custom engagement tailored to your specific needs
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">
                Step {currentStep + 1} of {steps.length}
              </span>
              <button
                onClick={handleReset}
                className="text-sm text-primary hover:underline"
              >
                Reset
              </button>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`${
                  index === currentStep ? 'block' : 'hidden'
                }`}
              >
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  {step.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelection(step.id, option)}
                      className={`p-4 rounded-md border text-left transition-smooth ${
                        selections[step.id] === option
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-text-primary">
                          {option}
                        </span>
                        {selections[step.id] === option && (
                          <Icon
                            name="CheckCircleIcon"
                            size={20}
                            variant="solid"
                            className="text-primary flex-shrink-0"
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {isComplete && (
            <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-md">
              <div className="flex items-start gap-3">
                <Icon
                  name="CheckCircleIcon"
                  size={24}
                  variant="solid"
                  className="text-success flex-shrink-0"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-text-primary mb-2">
                    Your Custom Engagement
                  </h5>
                  <ul className="space-y-1 mb-4">
                    {steps.map((step) => (
                      <li key={step.id} className="text-sm text-text-secondary">
                        <span className="font-medium">{step.title}:</span> {selections[step.id]}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-2 bg-cta text-cta-foreground rounded-md hover:shadow-cta transition-smooth text-sm font-semibold">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}