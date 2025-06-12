
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const OrderFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    restaurantName: '',
    location: '',
    menuText: '',
    material: '',
    language: '',
    quantity: [50],
    contactEmail: '',
    specialRequests: ''
  });

  const steps = [
    { title: 'Restaurant Info', subtitle: 'Tell us about your space' },
    { title: 'Menu Details', subtitle: 'Share your menu content' },
    { title: 'Customization', subtitle: 'Choose materials & specs' },
    { title: 'Contact & Submit', subtitle: 'Complete your request' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return orderData.restaurantName && orderData.location;
      case 2:
        return orderData.menuText && orderData.language;
      case 3:
        return orderData.material && orderData.quantity[0] > 0;
      case 4:
        return orderData.contactEmail;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    console.log('Order submitted:', orderData);
    alert('Thank you! We\'ll contact you within 24 hours to begin your free braille menu creation.');
  };

  return (
    <section id="order-space" className="craft-section">
      <div className="craft-content max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-stone-800">
            Start Your Journey
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Transform your space into a beacon of accessibility. Completely free, forever.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            {steps.map((stepInfo, index) => (
              <div key={index} className="flex-1 text-center">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  step > index + 1 ? 'bg-craft-rust border-craft-rust text-stone-50' :
                  step === index + 1 ? 'border-craft-rust text-craft-rust bg-stone-50' :
                  'border-stone-300 text-stone-400 bg-stone-100'
                }`}>
                  {step > index + 1 ? '✓' : index + 1}
                </div>
                <div className="mt-3">
                  <div className="text-sm font-medium text-stone-800">{stepInfo.title}</div>
                  <div className="text-xs text-stone-500">{stepInfo.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-craft-rust to-craft-orange h-full transition-all duration-500 ease-out"
              style={{ width: `${(step / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className={`order-step ${step === 1 ? 'active' : ''} mb-8`}>
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-stone-800 mb-6">Restaurant Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block text-stone-700">Restaurant Name *</label>
                  <Input 
                    placeholder="Your restaurant name"
                    value={orderData.restaurantName}
                    onChange={(e) => handleInputChange('restaurantName', e.target.value)}
                    className="bg-stone-50 border-stone-300 focus:border-craft-rust"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-stone-700">Location *</label>
                  <Input 
                    placeholder="City, State"
                    value={orderData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-stone-50 border-stone-300 focus:border-craft-rust"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-stone-700">Type of Establishment</label>
                <Select onValueChange={(value) => handleInputChange('establishmentType', value)}>
                  <SelectTrigger className="bg-stone-50 border-stone-300 focus:border-craft-rust">
                    <SelectValue placeholder="Select restaurant type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fine-dining">Fine Dining</SelectItem>
                    <SelectItem value="casual">Casual Dining</SelectItem>
                    <SelectItem value="fast-casual">Fast Casual</SelectItem>
                    <SelectItem value="cafe">Café</SelectItem>
                    <SelectItem value="bar">Bar/Pub</SelectItem>
                    <SelectItem value="hotel">Hotel Restaurant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-stone-800 mb-6">Menu Content</h3>
              <div>
                <label className="text-sm font-medium mb-2 block text-stone-700">Menu Text *</label>
                <Textarea 
                  placeholder="Paste your menu content here, or describe what sections you'd like us to help with..."
                  className="min-h-40 bg-stone-50 border-stone-300 focus:border-craft-rust"
                  value={orderData.menuText}
                  onChange={(e) => handleInputChange('menuText', e.target.value)}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block text-stone-700">Primary Language *</label>
                  <Select value={orderData.language} onValueChange={(value) => handleInputChange('language', value)}>
                    <SelectTrigger className="bg-stone-50 border-stone-300 focus:border-craft-rust">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="bilingual">English + Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-stone-700">Menu Sections</label>
                  <Input 
                    placeholder="e.g., Appetizers, Mains, Desserts"
                    className="bg-stone-50 border-stone-300 focus:border-craft-rust"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-stone-800 mb-6">Material Selection</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { type: 'paper', name: 'Premium Paper', desc: 'Traditional, warm feel', best: 'Most Popular' },
                  { type: 'aluminum', name: 'Aluminum Plate', desc: 'Durable, professional', best: 'Long Lasting' },
                  { type: 'plastic', name: 'Plastic Card', desc: 'Waterproof, flexible', best: 'Easy Clean' }
                ].map((material) => (
                  <div 
                    key={material.type}
                    className={`craft-card p-6 cursor-pointer transition-all duration-300 ${
                      orderData.material === material.type ? 'ring-2 ring-craft-rust bg-earth-50' : 'hover:shadow-lg'
                    }`}
                    onClick={() => handleInputChange('material', material.type)}
                  >
                    <div className={`w-full h-24 rounded-lg mb-4 ${
                      material.type === 'paper' ? 'bg-gradient-to-br from-stone-100 to-earth-100' :
                      material.type === 'aluminum' ? 'bg-gradient-to-br from-stone-200 to-stone-300' :
                      'bg-gradient-to-br from-stone-150 to-earth-200'
                    }`} />
                    <div className="text-xs craft-gradient-text font-medium mb-1">{material.best}</div>
                    <h4 className="font-semibold text-stone-800 mb-2">{material.name}</h4>
                    <p className="text-sm text-stone-600">{material.desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <label className="text-sm font-medium mb-4 block text-stone-700">
                  Quantity: {orderData.quantity[0]} menus
                </label>
                <Slider
                  value={orderData.quantity}
                  onValueChange={(value) => handleInputChange('quantity', value)}
                  max={200}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-stone-500 mt-2">
                  <span>10</span>
                  <span>200</span>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-stone-800 mb-6">Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block text-stone-700">Email Address *</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={orderData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    className="bg-stone-50 border-stone-300 focus:border-craft-rust"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-stone-700">Phone (Optional)</label>
                  <Input 
                    placeholder="(555) 123-4567"
                    className="bg-stone-50 border-stone-300 focus:border-craft-rust"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-stone-700">Special Requests</label>
                <Textarea 
                  placeholder="Any special design requests or accessibility needs..."
                  value={orderData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  className="bg-stone-50 border-stone-300 focus:border-craft-rust"
                />
              </div>

              <div className="craft-card p-6 bg-earth-50 border-craft-rust/20">
                <h4 className="font-semibold text-stone-800 mb-4">Order Summary</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <div><strong>Restaurant:</strong> {orderData.restaurantName || 'Not specified'}</div>
                    <div><strong>Location:</strong> {orderData.location || 'Not specified'}</div>
                    <div><strong>Language:</strong> {orderData.language || 'Not selected'}</div>
                  </div>
                  <div className="space-y-2">
                    <div><strong>Material:</strong> {orderData.material || 'Not selected'}</div>
                    <div><strong>Quantity:</strong> {orderData.quantity[0]} menus</div>
                    <div><strong>Cost:</strong> <span className="craft-gradient-text font-bold">FREE</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="border-stone-400 hover:bg-stone-100"
          >
            Previous
          </Button>
          
          <div className="text-sm text-stone-500">
            Step {step} of {steps.length}
          </div>
          
          {step < steps.length ? (
            <Button 
              onClick={() => setStep(Math.min(steps.length, step + 1))}
              disabled={!isStepValid(step)}
              className="craft-button"
            >
              Continue
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              disabled={!isStepValid(step)}
              className="craft-button"
            >
              Submit Request
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderFlow;
