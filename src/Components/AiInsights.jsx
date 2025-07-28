const AiInsights = () => {
  const insights = [
    "📈 Revenue increased by 12% this week, likely driven by higher weekend traffic and returning users.",
    "👥 User growth of 5% suggests increased engagement with recent features.",
    "📉 Slight dip in sessions (-3%) could indicate slower mid-week activity.",
    "⚠️ Errors rose by 1% — investigate recent deployment or user feedback."
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4">AI-Generated Insights</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        {insights.map((insight, idx) => (
          <li key={idx}>{insight}</li>
        ))}
      </ul>
    </div>
  );
};

export default AiInsights;
