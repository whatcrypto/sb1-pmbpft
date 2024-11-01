// Historical price patterns based on typical crypto market cycles
export const generateHistoricalPrices = (timeframe: string, startValue: number = 10000) => {
  // Key market events and cycles
  const events = {
    '1Y': [
      { month: 0, multiplier: 1 },
      { month: 3, multiplier: 1.25 }, // Q1 rally
      { month: 6, multiplier: 0.85 }, // Mid-year correction
      { month: 9, multiplier: 1.45 }, // Q3 recovery
      { month: 12, multiplier: 1.15 }, // Year-end consolidation
    ],
    '3Y': [
      { month: 0, multiplier: 1 },
      { month: 12, multiplier: 2.5 }, // Year 1 bull run
      { month: 24, multiplier: 1.8 }, // Year 2 bear market
      { month: 36, multiplier: 3.2 }, // Year 3 recovery
    ],
    '5Y': [
      { month: 0, multiplier: 1 },
      { month: 20, multiplier: 3.5 }, // First major cycle peak
      { month: 40, multiplier: 2.2 }, // Extended bear market
      { month: 60, multiplier: 4.8 }, // New cycle high
    ],
    '10Y': [
      { month: 0, multiplier: 1 },
      { month: 36, multiplier: 5.5 }, // First major bull cycle
      { month: 72, multiplier: 3.8 }, // Multi-year consolidation
      { month: 120, multiplier: 8.2 }, // Long-term growth
    ],
  };

  const timeframeEvents = events[timeframe as keyof typeof events];
  const months = parseInt(timeframe) * 12;
  const data = [];
  const labels = [];

  for (let i = 0; i <= months; i++) {
    const date = new Date();
    date.setMonth(date.getMonth() - (months - i));
    labels.push(date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));

    // Find surrounding events
    let prevEvent = timeframeEvents[0];
    let nextEvent = timeframeEvents[timeframeEvents.length - 1];

    for (let j = 0; j < timeframeEvents.length - 1; j++) {
      if (i >= timeframeEvents[j].month && i < timeframeEvents[j + 1].month) {
        prevEvent = timeframeEvents[j];
        nextEvent = timeframeEvents[j + 1];
        break;
      }
    }

    // Calculate progress between events
    const progress = (i - prevEvent.month) / (nextEvent.month - prevEvent.month);
    const multiplier = prevEvent.multiplier + (nextEvent.multiplier - prevEvent.multiplier) * progress;

    // Add some realistic volatility
    const volatility = 0.02; // 2% daily volatility
    const randomFactor = 1 + (Math.random() * volatility * 2 - volatility);
    
    data.push(startValue * multiplier * randomFactor);
  }

  return { data, labels };
};

// Benchmark data typically follows similar patterns but with less volatility
export const generateBenchmarkPrices = (timeframe: string, portfolioData: number[]) => {
  return portfolioData.map(value => {
    const underperformance = 0.85 + (Math.random() * 0.3); // Benchmark typically underperforms by 0-30%
    return value * underperformance;
  });
};