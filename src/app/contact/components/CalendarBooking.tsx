'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface CalendarBookingProps {
  className?: string;
}

const CalendarBooking: React.FC<CalendarBookingProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [consultationType, setConsultationType] = useState<string>('strategic');
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '12:00 PM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: false },
    { time: '05:00 PM', available: true }
  ];

  const consultationTypes = [
    { id: 'strategic', name: 'Strategic Consultation', duration: '60 min', icon: 'LightBulbIcon' },
    { id: 'technical', name: 'Technical Deep-Dive', duration: '90 min', icon: 'CogIcon' },
    { id: 'assessment', name: 'Security Assessment Review', duration: '45 min', icon: 'ClipboardDocumentCheckIcon' },
    { id: 'emergency', name: 'Emergency Response', duration: '30 min', icon: 'ExclamationTriangleIcon' }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      setSelectedTime('');
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking confirmed for ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
    }
  };

  if (!isHydrated) {
    return (
      <div className={`bg-card border border-border rounded-lg p-6 ${className}`}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-surface rounded w-3/4"></div>
          <div className="h-64 bg-surface rounded"></div>
        </div>
      </div>
    );
  }

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className={`bg-card border border-border rounded-lg p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <Icon name="CalendarDaysIcon" size={24} className="text-primary" />
        <h3 className="text-xl font-semibold text-text-primary">Schedule Immediate Consultation</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Consultation Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {consultationTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setConsultationType(type.id)}
                className={`p-4 rounded-lg border-2 transition-smooth text-left ${
                  consultationType === type.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon name={type.icon as any} size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-text-primary text-sm">{type.name}</p>
                    <p className="text-xs text-text-secondary mt-1">{type.duration}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-text-primary">{monthName}</h4>
            <div className="flex gap-2">
              <button
                onClick={handlePreviousMonth}
                className="p-2 hover:bg-surface rounded-lg transition-smooth"
                aria-label="Previous month"
              >
                <Icon name="ChevronLeftIcon" size={20} className="text-text-secondary" />
              </button>
              <button
                onClick={handleNextMonth}
                className="p-2 hover:bg-surface rounded-lg transition-smooth"
                aria-label="Next month"
              >
                <Icon name="ChevronRightIcon" size={20} className="text-text-secondary" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-xs font-medium text-text-secondary py-2">
                {day}
              </div>
            ))}
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(day)}
                disabled={!day || day < new Date()}
                className={`aspect-square p-2 rounded-lg text-sm transition-smooth ${
                  !day
                    ? 'invisible'
                    : day < new Date()
                    ? 'text-text-secondary/30 cursor-not-allowed'
                    : selectedDate?.toDateString() === day.toDateString()
                    ? 'bg-primary text-white font-semibold' :'hover:bg-surface text-text-primary'
                }`}
              >
                {day?.getDate()}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Available Time Slots - {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {timeSlots.map(slot => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg border-2 text-sm font-medium transition-smooth ${
                    !slot.available
                      ? 'border-border bg-surface text-text-secondary/50 cursor-not-allowed'
                      : selectedTime === slot.time
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-text-primary'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedDate && selectedTime && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-success mb-2">Selected Appointment</p>
                <div className="space-y-1 text-xs text-text-secondary">
                  <p>Type: {consultationTypes.find(t => t.id === consultationType)?.name}</p>
                  <p>Date: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  <p>Time: {selectedTime} (IST)</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleBooking}
              className="w-full mt-4 px-6 py-3 bg-cta text-cta-foreground rounded-lg font-semibold hover:shadow-cta transition-smooth flex items-center justify-center gap-2"
            >
              <Icon name="CheckIcon" size={20} />
              <span>Confirm Booking</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarBooking;