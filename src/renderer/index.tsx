import { createRoot } from 'react-dom/client';
import App from './App';
import 'tailwindcss/tailwind.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <div className="bg-gray-900 w-full h-screen flex justify-center items-center font-sans">
    <App />
  </div>
);
