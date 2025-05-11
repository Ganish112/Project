import { ArrowLeft } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const NotFoundPage = () => {
  return (
    <Section spacing="xl">
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          to="/" 
          variant="primary"
          icon={<ArrowLeft size={20} />}
        >
          Back to Homepage
        </Button>
      </div>
    </Section>
  );
};

export default NotFoundPage;
