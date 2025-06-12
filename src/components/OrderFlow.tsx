
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
    menuText: '',
    material: '',
    language: '',
    quantity: [50],
    estimatedPrice: 0
  });

  const calculatePrice = () => {
    const basePrices = { paper: 2.5, aluminum: 4.2, plastic: 3.1 };
    const materialPrice = basePrices[orderData.material as keyof typeof basePrices] || 0;
    const total = materialPrice * orderData.quantity[0];
    setOrderData(prev => ({ ...prev, estimatedPrice: total }));
  };

  const steps = [
    { title: 'Restaurant Info', subtitle: 'Tell us about your space' },
    { title: 'Menu Content', subtitle: 'Upload or paste your menu' },
    { title: 'Material & Style', subtitle: 'Choose your preferred materials' },
    { title: 'Review & Order', subtitle: 'Confirm your details' }
  ];

  return (
    <section id="order-space" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Order for Your Space</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A guided journey to create the perfect braille menus for your restaurant.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((stepInfo, index) => (
              <div key={index} className={`flex-1 text-center ${index < steps.length - 1 ? 'border-r border-border' : ''}`}>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  step > index + 1 ? 'bg-primary border-primary text-primary-foreground' :
                  step === index + 1 ? 'border-primary text-primary' :
                  'border-border text-muted-foreground'
                }`}>
                  {step > index + 1 ? '✓' : index + 1}
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium">{stepInfo.title}</div>
                  <div className="text-xs text-muted-foreground">{stepInfo.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-border h-2 rounded-full">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8 mb-8">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Restaurant Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Restaurant Name</label>
                  <Input 
                    placeholder="Enter your restaurant name"
                    value={orderData.restaurantName}
                    onChange={(e) => setOrderData(prev => ({ ...prev, restaurantName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input placeholder="City, State" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Type of Establishment</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select restaurant type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fine-dining">Fine Dining</SelectItem>
                    <SelectItem value="casual">Casual Dining</SelectItem>
                    <SelectItem value="fast-casual">Fast Casual</SelectItem>
                    <SelectItem value="cafe">Café</SelectItem>
                    <SelectItem value="bar">Bar/Pub</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Menu Content</h3>
              <div>
                <label className="text-sm font-medium mb-2 block">Menu Text</label>
                <Textarea 
                  placeholder="Paste your menu content here or describe what you'd like us to help with..."
                  className="min-h-40"
                  value={orderData.menuText}
                  onChange={(e) => setOrderData(prev => ({ ...prev, menuText: e.target.value }))}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Primary Language</label>
                  <Select value={orderData.language} onValueChange={(value) => setOrderData(prev => ({ ...prev, language: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Menu Sections</label>
                  <Input placeholder="e.g., Appetizers, Mains, Desserts" />
                </div>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <p className="text-sm">
                  <strong>Tip:</strong> We can help optimize your menu layout for braille readability. 
                  Our team will review and suggest improvements during the design process.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Material & Specifications</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { type: 'paper', name: 'Soft Paper', desc: 'Traditional, warm feel', price: '$2.50' },
                  { type: 'aluminum', name: 'Aluminum Plate', desc: 'Durable, professional', price: '$4.20' },
                  { type: 'plastic', name: 'Plastic Card', desc: 'Waterproof, flexible', price: '$3.10' }
                ].map((material) => (
                  <Card 
                    key={material.type}
                    className={`p-6 cursor-pointer transition-all duration-200 ${
                      orderData.material === material.type ? 'ring-2 ring-primary' : 'hover:shadow-lg'
                    }`}
                    onClick={() => {
                      setOrderData(prev => ({ ...prev, material: material.type }));
                      calculatePrice();
                    }}
                  >
                    <div className={`w-full h-32 rounded-lg mb-4 ${
                      material.type === 'paper' ? 'material-paper' :
                      material.type === 'aluminum' ? 'material-aluminum' :
                      'material-plastic'
                    }`}></div>
                    <h4 className="font-semibold mb-2">{material.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{material.desc}</p>
                    <p className="font-bold text-primary">{material.price} per menu</p>
                  </Card>
                ))}
              </div>

              <div>
                <label className="text-sm font-medium mb-4 block">
                  Quantity: {orderData.quantity[0]} menus
                </label>
                <Slider
                  value={orderData.quantity}
                  onValueChange={(value) => {
                    setOrderData(prev => ({ ...prev, quantity: value }));
                    calculatePrice();
                  }}
                  max={500}
                  min={10}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {orderData.material && (
                <div className="p-6 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Estimated Price</h4>
                  <div className="text-3xl font-bold text-primary">
                    ${orderData.estimatedPrice.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Includes design, production, and shipping
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Review Your Order</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold">Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Restaurant:</span>
                      <span>{orderData.restaurantName || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <span className="capitalize">{orderData.material || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Language:</span>
                      <span className="capitalize">{orderData.language || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span>{orderData.quantity[0]} menus</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total:</span>
                      <span>${orderData.estimatedPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">What Happens Next?</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Our design team reviews your menu content</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>We create a detailed preview for your approval</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Production begins (typically 3-5 business days)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Your braille menus are shipped to your location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="tactile-button"
          >
            Previous
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Step {step} of {steps.length}
          </div>
          
          {step < steps.length ? (
            <Button 
              onClick={() => setStep(Math.min(steps.length, step + 1))}
              className="tactile-button"
            >
              Continue
            </Button>
          ) : (
            <Button className="tactile-button bg-primary">
              Submit Order
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderFlow;
