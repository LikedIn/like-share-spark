import { type FC } from "react";

const Privacy: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg">
            {/* Privacy policy content would go here */}
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Information We Collect</h2>
            {/* Content */}

            <h2>2. How We Use Your Information</h2>
            {/* Content */}

            <h2>3. Data Protection</h2>
            {/* Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
