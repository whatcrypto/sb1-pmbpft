export const cryptoSectorsCourse = {
  id: 'crypto-sectors',
  title: 'Understanding Crypto Sectors',
  description: 'Master the fundamentals of the five major sectors in the cryptocurrency ecosystem and how they work together to create value.',
  duration: '2 hours',
  modules: [
    {
      id: 1,
      title: 'Introduction to Crypto Classification',
      description: 'Learn the basics of how cryptocurrencies are classified',
      lessons: [
        {
          id: 1,
          title: 'Evolution of Digital Assets',
          content: `
            <div class="space-y-4">
              <h2 class="text-2xl font-bold mb-4">Evolution of Digital Assets</h2>
              <p class="mb-4">Throughout history, revolutionary technologies have transformed society. From the discovery of fire to the invention of Gutenberg's printing press, technological advancements have pushed the boundaries of human capabilities.</p>
              
              <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 class="font-bold mb-2">Key Historical Developments:</h3>
                <ul class="list-disc pl-6 space-y-2">
                  <li>First Industrial Revolution (Late 1700s): Mechanical production, steam engines</li>
                  <li>Second Industrial Revolution (1800s): Internal combustion engine, industrial machinery</li>
                  <li>Third Industrial Revolution (Mid-1900s): Digital computing, internet</li>
                  <li>Fourth Industrial Revolution (Present): AI, blockchain, autonomous systems</li>
                </ul>
              </div>

              <p class="mb-4">Blockchain and cryptocurrency represent the next evolution in this technological journey, offering new ways to transfer value and interact with digital assets.</p>

              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-bold mb-2">💡 Key Insight:</h3>
                <p>Cryptocurrencies are more than just digital money - they represent a fundamental shift in how we think about and transfer value in the digital age.</p>
              </div>
            </div>
          `,
          quiz: {
            question: "Which industrial revolution are cryptocurrencies most associated with?",
            options: [
              "First Industrial Revolution",
              "Second Industrial Revolution",
              "Third Industrial Revolution",
              "Fourth Industrial Revolution"
            ],
            correctAnswer: 3,
            explanation: "Cryptocurrencies are part of the Fourth Industrial Revolution, alongside AI, blockchain, and other emerging technologies that are blending digital, physical, and biological innovations."
          }
        }
      ]
    }
  ]
};