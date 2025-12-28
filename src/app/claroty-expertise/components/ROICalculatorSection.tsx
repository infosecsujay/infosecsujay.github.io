'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  employees: number;
  assets: number;
  incidents: number;
  downtime: number;
}

interface ROIResults {
  costSavings: number;
  timeReduction: number;
  riskMitigation: number;
  roi: number;
}

const ROICalculatorSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 100,
    assets: 500,
    incidents: 12,
    downtime: 24
  });
  const [results, setResults] = useState<ROIResults>({
    costSavings: 0,
    timeReduction: 0,
    riskMitigation: 0,
    roi: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      calculateROI();
    }
  }, [inputs, isHydrated]);

  const calculateROI = () => {
    const avgIncidentCost = 50000;
    const avgDowntimeCost = 10000;
    const securityStaffCost = 120000;
    
    const incidentReduction = inputs.incidents * 0.85;
    const downtimeReduction = inputs.downtime * 0.75;
    const efficiencyGain = inputs.employees * 0.15;
    
    const costSavings = (incidentReduction * avgIncidentCost) + 
                       (downtimeReduction * avgDowntimeCost) + 
                       (efficiencyGain * securityStaffCost);
    
    const timeReduction = (inputs.incidents * 48) * 0.85;
    const riskMitigation = (inputs.assets * 100) * 0.92;
    const investmentCost = 150000;
    const roi = ((costSavings - investmentCost) / investmentCost) * 100;
    
    setResults({
      costSavings: Math.round(costSavings),
      timeReduction: Math.round(timeReduction),
      riskMitigation: Math.round(riskMitigation),
      roi: Math.round(roi)
    });
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseInt(value) || 0;
    setInputs(prev => ({ ...prev, [field]: numValue }));
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Claroty ROI Calculator
            </h2>
          </div>
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="100"
                    disabled
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-4">Estimated Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Annual Cost Savings</span>
                      <span className="text-2xl font-bold text-success">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="CalculatorIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-primary text-sm font-semibold">ROI Analysis</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Claroty ROI Calculator
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Calculate your potential return on investment with Claroty deployment. Adjust the parameters below to see customized results for your organization
          </p>
        </div>
        
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 bg-surface">
              <h3 className="text-2xl font-bold text-text-primary mb-8">Your Organization</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="100"
                  />
                  <p className="text-xs text-text-secondary mt-1">Security and IT staff count</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Number of OT/ICS Assets
                  </label>
                  <input
                    type="number"
                    value={inputs.assets}
                    onChange={(e) => handleInputChange('assets', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="500"
                  />
                  <p className="text-xs text-text-secondary mt-1">Industrial control systems and devices</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Annual Security Incidents
                  </label>
                  <input
                    type="number"
                    value={inputs.incidents}
                    onChange={(e) => handleInputChange('incidents', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="12"
                  />
                  <p className="text-xs text-text-secondary mt-1">Average incidents per year</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Annual Downtime Hours
                  </label>
                  <input
                    type="number"
                    value={inputs.downtime}
                    onChange={(e) => handleInputChange('downtime', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="24"
                  />
                  <p className="text-xs text-text-secondary mt-1">Security-related downtime hours</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 bg-gradient-to-br from-primary to-secondary text-white">
              <h3 className="text-2xl font-bold mb-8">Estimated Results</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="CurrencyDollarIcon" size={24} variant="solid" />
                    <span className="text-sm font-semibold opacity-90">Annual Cost Savings</span>
                  </div>
                  <div className="text-4xl font-bold">${results.costSavings.toLocaleString()}</div>
                  <p className="text-sm opacity-80 mt-2">From reduced incidents and improved efficiency</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="ClockIcon" size={24} variant="solid" />
                    <span className="text-sm font-semibold opacity-90">Time Reduction</span>
                  </div>
                  <div className="text-4xl font-bold">{results.timeReduction.toLocaleString()} hours</div>
                  <p className="text-sm opacity-80 mt-2">Saved in incident response and investigation</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="ShieldCheckIcon" size={24} variant="solid" />
                    <span className="text-sm font-semibold opacity-90">Risk Mitigation Value</span>
                  </div>
                  <div className="text-4xl font-bold">${results.riskMitigation.toLocaleString()}</div>
                  <p className="text-sm opacity-80 mt-2">Potential breach cost avoidance</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="ChartBarIcon" size={24} variant="solid" />
                    <span className="text-sm font-semibold opacity-90">Return on Investment</span>
                  </div>
                  <div className="text-4xl font-bold">{results.roi}%</div>
                  <p className="text-sm opacity-80 mt-2">First-year ROI on Claroty investment</p>
                </div>
              </div>
              
              <button className="w-full mt-8 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-xl transition-smooth flex items-center justify-center space-x-2">
                <span>Get Detailed ROI Report</span>
                <Icon name="DocumentArrowDownIcon" size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-text-secondary">
            * Calculations based on industry averages and typical Claroty deployment outcomes. Actual results may vary based on organizational factors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;