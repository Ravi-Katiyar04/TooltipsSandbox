// import React, { useState, useEffect } from 'react';
// import Tooltip from './Tooltip'
// import { HexColorPicker } from 'react-colorful';

// const Home = () => {

//     const [theme, setTheme] = useState('light');

//     useEffect(() => {
//         const savedTheme = localStorage.getItem('theme');
//         const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//         if (savedTheme) {
//             setTheme(savedTheme);
//         } else if (systemPrefersDark) {
//             setTheme('dark');
//         }
//         console.log('Theme initialized:', savedTheme || (systemPrefersDark ? 'dark' : 'light'));
    
//     }, []);

//     useEffect(() => {
//         const html = document.documentElement;
//         html.setAttribute('data-theme', theme);
//         localStorage.setItem('theme', theme);
        
//     }, [theme]);

//     const toggleTheme = () => {
//         setTheme(theme === 'light' ? 'dark' : 'light');
//     };
//   const [settings, setSettings] = useState({
//     shape: 'rounded',
//     trigger: 'hover',
//     position: 'top',
//     bgColor: '#2563eb',
//     textColor: '#ffffff',
//     fontSize: 'text-sm',
//     width: 'w-48',
//     icon: false,
//     image: false,
//   });

//   const [showBgPicker, setShowBgPicker] = useState(false);
//   const [showTextPicker, setShowTextPicker] = useState(false);



//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.relative')) {
//         setShowBgPicker(false);
//         setShowTextPicker(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setSettings((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleColorClick = () => {
//     setShowBgPicker(false);
//     setShowTextPicker(false);
//   };

//   return (
    
//       <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
//         <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="absolute top-6 right-6 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">

//             {theme === 'dark' ? (
//                 <span role="img" className="text-yellow-300 text-xl">🌞</span>
//             ) : (
//                 <span role="img" aria-label="text-gray-700 text-xl">🌜</span>
//             )}

//         </button>
//         <div className="min-h-screen w-full p-6 bg-gray-100 dark:bg-gray-900">
//           <h1 className="text-3xl font-bold mb-6">Tooltips Sandbox</h1>
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Settings Panel */}
//             <div className="flex-1 space-y-4">
//               <label className="block">
//                 Shape:
//                 <select name="shape" value={settings.shape} onChange={handleChange} className="block w-full mt-1 p-2 border  dark:bg-gray-950 rounded">
//                   <option value="rounded">Rounded</option>
//                   <option value="rectangle">Rectangle</option>
//                   <option value="bubble">Speech Bubble</option>
//                 </select>
//               </label>
//               <label className="block">
//                 Trigger:
//                 <select name="trigger" value={settings.trigger} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
//                   <option value="hover">Hover</option>
//                   <option value="click">Click</option>
//                   <option value="focus">Focus</option>
//                 </select>
//               </label>
//               <label className="block">
//                 Position:
//                 <select name="position" value={settings.position} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
//                   <option value="top">Top</option>
//                   <option value="right">Right</option>
//                   <option value="bottom">Bottom</option>
//                   <option value="left">Left</option>
//                 </select>
//               </label>
//               {/* Background Color Picker */}
//               <div className="relative">
//                 <label className="block mb-1 font-medium">Background Color</label>
//                 <button
//                   onClick={() => setShowBgPicker(!showBgPicker)}
//                   className="w-full px-4 py-2 border rounded"
//                   style={{ backgroundColor: settings.bgColor, color: '#fff' }}
//                 >
//                   {'Select Color'}
//                 </button>
//                 {showBgPicker && (
//                   <div className="absolute z-50 mt-2" onClick={handleColorClick}>
//                     <HexColorPicker
//                       color={settings.bgColor}
//                       onChange={(color) =>
//                         setSettings((prev) => ({ ...prev, bgColor: color }))
//                       }
//                     />
//                   </div>
//                 )}
//               </div>
//               {/* Text Color Picker */}
//               <div className="relative">
//                 <label className="block mb-1 font-medium">Text Color</label>
//                 <button
//                   onClick={() => setShowTextPicker(!showTextPicker)}
//                   className="w-full px-4 py-2 border rounded"
//                   style={{ backgroundColor: settings.textColor, color: '#000' }}
//                 >
//                   {'Select Color'}
//                 </button>
//                 {showTextPicker && (
//                   <div className="absolute z-50 mt-2" onClick={handleColorClick}>
//                     <HexColorPicker
//                       color={settings.textColor}
//                       onChange={(color) =>
//                         setSettings((prev) => ({ ...prev, textColor: color }))
//                       }
//                     />
//                   </div>
//                 )}
//               </div>
//               <label className="block">
//                 Font Size:
//                 <select name="fontSize" value={settings.fontSize} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
//                   <option value="text-xs">Small</option>
//                   <option value="text-sm">Medium</option>
//                   <option value="text-lg">Large</option>
//                 </select>
//               </label>
//               <label className="block">
//                 Width:
//                 <select name="width" value={settings.width} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950  rounded">
//                   <option value="w-38">Narrow</option>
//                   <option value="w-42">Medium</option>
//                   <option value="w-48">Wide</option>
//                 </select>
//               </label>
//               <label className="block">
//                 <input type="checkbox" name="icon" checked={settings.icon} onChange={handleChange} className="mr-2" /> Include Icon
//               </label>
//               <label className="block">
//                 <input type="checkbox" name="image" checked={settings.image} onChange={handleChange} className="mr-2" /> Include Image
//               </label>
//             </div>
//             {/* Tooltip Preview */}
//             <div className="flex-1 flex items-center bg-amber-400 justify-center">
//               <Tooltip {...settings} className='border-4 border-b-green-700'>
//                 <div role="button" className="px-4 py-2 relative bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
//                   Hover me
//                 </div>
//               </Tooltip>
             
 
//             </div>
//           </div>
//         </div>
//       </section>
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import Tooltip from './Tooltip';
import { HexColorPicker } from 'react-colorful';
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
      if (!e.target.closest('.relative')) {
        setShowBgPicker(false);
        setShowTextPicker(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleColorClick = () => {
    setShowBgPicker(false);
    setShowTextPicker(false);
  };

  const generateCodeSnippet = () => {
    return `
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
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCodeSnippet()).then(() => {
      toast.success('Copied to clipboard!');
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 🔔 Toast Renderer */}
      <Toaster position="top-center" />

      {/* 🌗 Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="absolute top-6 right-6 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {theme === 'dark' ? (
          <span role="img" className="text-yellow-300 text-xl">🌞</span>
        ) : (
          <span role="img" className="text-gray-700 text-xl">🌜</span>
        )}
      </button>

      <div className="min-h-screen w-full p-6 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-6">Tooltips Sandbox</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* ⚙️ Settings Panel */}
          <div className="flex-1 space-y-4">
            <label className="block">
              Shape:
              <select name="shape" value={settings.shape} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
                <option value="rounded">Rounded</option>
                <option value="rectangle">Rectangle</option>
                <option value="bubble">Speech Bubble</option>
              </select>
            </label>

            <label className="block">
              Trigger:
              <select name="trigger" value={settings.trigger} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
                <option value="hover">Hover</option>
                <option value="click">Click</option>
                <option value="focus">Focus</option>
              </select>
            </label>

            <label className="block">
              Position:
              <select name="position" value={settings.position} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
                <option value="top">Top</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
              </select>
            </label>

            {/* 🎨 Background Color Picker */}
            <div className="relative">
              <label className="block mb-1 font-medium">Background Color</label>
              <button
                onClick={() => setShowBgPicker(!showBgPicker)}
                className="w-full px-4 py-2 border rounded"
                style={{ backgroundColor: settings.bgColor, color: '#fff' }}
              >
                Select Color
              </button>
              {showBgPicker && (
                <div className="absolute z-50 mt-2" onClick={handleColorClick}>
                  <HexColorPicker
                    color={settings.bgColor}
                    onChange={(color) => setSettings((prev) => ({ ...prev, bgColor: color }))}
                  />
                </div>
              )}
            </div>

            {/* 📝 Text Color Picker */}
            <div className="relative">
              <label className="block mb-1 font-medium">Text Color</label>
              <button
                onClick={() => setShowTextPicker(!showTextPicker)}
                className="w-full px-4 py-2 border rounded"
                style={{ backgroundColor: settings.textColor, color: '#000' }}
              >
                Select Color
              </button>
              {showTextPicker && (
                <div className="absolute z-50 mt-2" onClick={handleColorClick}>
                  <HexColorPicker
                    color={settings.textColor}
                    onChange={(color) => setSettings((prev) => ({ ...prev, textColor: color }))}
                  />
                </div>
              )}
            </div>

            <label className="block">
              Font Size:
              <select name="fontSize" value={settings.fontSize} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
                <option value="text-xs">Small</option>
                <option value="text-sm">Medium</option>
                <option value="text-lg">Large</option>
              </select>
            </label>

            <label className="block">
              Width:
              <select name="width" value={settings.width} onChange={handleChange} className="block w-full mt-1 p-2 border dark:bg-gray-950 rounded">
                <option value="w-38">Narrow</option>
                <option value="w-42">Medium</option>
                <option value="w-48">Wide</option>
              </select>
            </label>

            <label className="block">
              <input type="checkbox" name="icon" checked={settings.icon} onChange={handleChange} className="mr-2" /> Include Icon
            </label>

            <label className="block">
              <input type="checkbox" name="image" checked={settings.image} onChange={handleChange} className="mr-2" /> Include Image
            </label>
          </div>

          {/* 🧪 Tooltip Preview and Code */}
          <div className="flex-1 flex flex-col items-center justify-center bg-amber-400 p-6 rounded-md space-y-6">
            <Tooltip {...settings}>
              <div role="button" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">

                {settings.trigger} me
                
              </div>
            </Tooltip>

            <div className="w-full mt-6">
              <label className="font-semibold mb-2 block">Generated Tooltip Code:</label>
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
