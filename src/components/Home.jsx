
import React, { useState, useEffect, useRef } from 'react';
import Tooltip from './Tooltip';
import { HexColorPicker } from 'react-colorful';
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
  const [theme, setTheme] = useState('light');
  const bgPickerRef = useRef(null);
  const textPickerRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) setTheme(savedTheme);
    else if (systemPrefersDark) setTheme('dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const [settings, setSettings] = useState({
    shape: 'rounded',
    trigger: 'hover',
    position: 'top',
    bgColor: '#2563eb',
    textColor: '#ffffff',
    fontSize: 'text-sm',
    width: 'w-48',
    icon: false,
    image: false,
  });

  const [showBgPicker, setShowBgPicker] = useState(false);
  const [showTextPicker, setShowTextPicker] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        bgPickerRef.current &&
        !bgPickerRef.current.contains(e.target) &&
        textPickerRef.current &&
        !textPickerRef.current.contains(e.target)
      ) {
        setShowBgPicker(false);
        setShowTextPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const generateCodeSnippet = () => `
<Tooltip
  shape="${settings.shape}"
  trigger="${settings.trigger}"
  position="${settings.position}"
  bgColor="${settings.bgColor}"
  textColor="${settings.textColor}"
  fontSize="${settings.fontSize}"
  width="${settings.width}"
  icon={${settings.icon}}
  image={${settings.image}}
>
  <button>Hover me</button>
</Tooltip>
`.trim();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCodeSnippet()).then(() => {
      toast.success('Copied to clipboard!');
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <Toaster position="top-center" />

      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        {theme === 'dark' ? <span role="img" className="text-yellow-300 text-xl">🌞</span> : <span role="img" className="text-gray-700 text-xl">🌜</span>}
      </button>

      <div className="w-full max-w-7xl p-6 bg-white dark:bg-gray-900 shadow rounded-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">Tooltips Sandbox</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-5">
            {/* Shape */}
            <label className="block">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Shape</span>
              <select name="shape" value={settings.shape} onChange={handleChange} className="block w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-white">
                <option value="rounded">Rounded</option>
                <option value="rectangle">Rectangle</option>
                <option value="bubble">Speech Bubble</option>
              </select>
            </label>

            {/* Trigger */}
            <label className="block">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Trigger</span>
              <select name="trigger" value={settings.trigger} onChange={handleChange} className="block w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-white">
                <option value="hover">Hover</option>
                <option value="click">Click</option>
                <option value="focus">Focus</option>
              </select>
            </label>

            {/* Position */}
            <label className="block">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Position</span>
              <select name="position" value={settings.position} onChange={handleChange} className="block w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-white">
                <option value="top">Top</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
              </select>
            </label>

            {/* Color Pickers */}
            <div ref={bgPickerRef}>
              <span className="font-semibold text-gray-700 dark:text-gray-200">Background Color</span>
              <button
                onClick={() => { setShowBgPicker(!showBgPicker); setShowTextPicker(false); }}
                className="w-full px-4 py-2 mt-1 border rounded"
                style={{ backgroundColor: settings.bgColor, color: '#fff' }}
              >
                Select Color
              </button>
              {showBgPicker && <div className="absolute z-50 mt-2"><HexColorPicker color={settings.bgColor} onChange={(color) => setSettings(prev => ({ ...prev, bgColor: color }))} /></div>}
            </div>

            <div ref={textPickerRef}>
              <span className="font-semibold text-gray-700 dark:text-gray-200">Text Color</span>
              <button
                onClick={() => { setShowTextPicker(!showTextPicker); setShowBgPicker(false); }}
                className="w-full px-4 py-2 mt-1 border rounded"
                style={{ backgroundColor: settings.textColor, color: '#000' }}
              >
                Select Color
              </button>
              {showTextPicker && <div className="absolute z-50 mt-2"><HexColorPicker color={settings.textColor} onChange={(color) => setSettings(prev => ({ ...prev, textColor: color }))} /></div>}
            </div>

            {/* Font Size */}
            <label className="block">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Font Size</span>
              <select name="fontSize" value={settings.fontSize} onChange={handleChange} className="block w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-white">
                <option value="text-xs">Small</option>
                <option value="text-sm">Medium</option>
                <option value="text-lg">Large</option>
              </select>
            </label>

            {/* Width */}
            <label className="block">
              <span className="font-semibold text-gray-700 dark:text-gray-200">Width</span>
              <select name="width" value={settings.width} onChange={handleChange} className="block w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-white">
                <option value="w-38">Narrow</option>
                <option value="w-42">Medium</option>
                <option value="w-48">Wide</option>
              </select>
            </label>

            {/* Checkboxes */}
            <label className="block">
              <input type="checkbox" name="icon" checked={settings.icon} onChange={handleChange} className="mr-2" /> Include Icon
            </label>
            <label className="block">
              <input type="checkbox" name="image" checked={settings.image} onChange={handleChange} className="mr-2" /> Include Image
            </label>
          </div>

          {/* Tooltip Preview + Code */}
          <div className="flex-1 flex flex-col items-center bg-amber-400 p-6 rounded-xl">
            <Tooltip {...settings}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                {`${settings.trigger} me`}
              </button>
            </Tooltip>

            <div className="w-full mt-8">
              <label className="font-semibold mb-2 block text-gray-800 dark:text-white">Generated Tooltip Code:</label>
              <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-4 rounded text-black dark:text-white overflow-x-auto">
                {generateCodeSnippet()}
              </pre>
              <button
                onClick={copyToClipboard}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;