import React, { useState } from 'react';
import { Search, Grid, List, X } from 'lucide-react';

const startupData = [
  {
    name: "Perfat Technologies",
    website: "https://perfat.com/",
    description: "Perfat Technologies is transforming the food industry with our breakthrough healthy solid fats that directly replace unhealthy alternatives like butter, palm oil, and coconut oil. Our innovative approach delivers the same taste and texture without the negative health impacts.",
    keyContact: "Jyrk Lee-Korhonen"
  },
  {
    name: "Multi4",
    website: "https://www.multi4.se/",
    description: "Imagine a world where cancer treatment is no longer a daunting and invasive experience. At Multi4, we've developed a revolutionary technology that is transforming the way we detect and treat cancer, making it less invasive and more effective.",
    keyContact: "Miden Melle-Hannah"
  },
  {
    name: "Mvmnt-X, Inc.",
    website: "https://www.linkedin.com/in/sarah-young-2433661/",
    description: "Mvmnt-X is revolutionizing carbon capture and nutrient removal in agriculture through advanced microalgae cultivation technology. Our innovative photobioreactors achieve the highest efficiency rates in the industry while producing valuable byproducts.",
    keyContact: "Sarah Young"
  },
  {
    name: "Materium Technologies",
    website: "www.materiumtech.com",
    description: "Materium Technologies is revolutionizing advanced materials development through our unique combination of machine learning and precision manufacturing. Our proprietary algorithms predict optimal material compositions for specific applications.",
    keyContact: "Scott Daniel"
  },
  {
    name: "Quanscient Oy",
    website: "quanscient.com",
    description: "Quanscient is transforming complex engineering simulations through advanced cloud and quantum computing technologies. Our cloud-based software delivers immediate performance improvements while our quantum algorithms prepare clients for the next computing revolution.",
    keyContact: "Ully Rinni"
  },
  {
    name: "Detectivio",
    website: "https://www.detectivio.com/",
    description: "Every second counts in healthcare. Yet measuring vital signs – the most fundamental health indicators – still requires physical contact and multiple devices. Detectivio has pioneered contactless vital sign monitoring using advanced radar technology.",
    keyContact: "Péter Rónai"
  },
  {
    name: "Pause Biosolutions",
    website: "N/A",
    description: "Pause Biosolutions is pioneering the next generation of circular economy solutions through innovative biochemical technologies. We transform waste biomass and wastewater into high-value biochemicals and biofuels, creating sustainable alternatives to petroleum-based products.",
    keyContact: "Alec Brown"
  },
  {
    name: "Outer Rim Exploration Inc.",
    website: "https://www.ore.space/",
    description: "Outer Rim Exploration is accelerating the renewable energy transition by revolutionizing how we discover critical minerals. Our breakthrough muon sensor technology enables non-invasive deep earth imaging to find the minerals essential for batteries and clean energy.",
    keyContact: "Balajitam Sambanam"
  }
];

const StartupDatabase = () => {
  const [view, setView] = useState('gallery');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStartups = startupData.filter(startup => 
    startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.keyContact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-blue-800 p-2 rounded mr-3">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <h1 className="text-xl font-bold">Spring 2025 Projects Master Database - ENG 274</h1>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-500 p-2 rounded mx-1">
            <span className="text-sm">Help</span>
          </button>
          <button className="bg-white text-blue-600 p-2 rounded mx-1">
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
      
      {/* Subheader */}
      <div className="bg-white border-b flex items-center justify-between p-3">
        <div className="flex items-center">
          <span className="font-medium">Deep Tech Startups Spring 2025</span>
        </div>
        <div>
          <span className="text-sm">Extensions</span>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="bg-white flex items-center p-3 border-b">
        <div className="flex items-center mr-4">
          <span className="mr-2">Views</span>
          <div className="flex">
            <button 
              className={`p-2 mx-1 rounded ${view === 'gallery' ? 'bg-blue-100 text-blue-600' : ''}`}
              onClick={() => setView('gallery')}
            >
              <Grid size={18} />
            </button>
            <button 
              className={`p-2 mx-1 rounded ${view === 'list' ? 'bg-blue-100 text-blue-600' : ''}`}
              onClick={() => setView('list')}
            >
              <List size={18} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search startups..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setSearchTerm('')}
            >
              <X size={16} className="text-gray-400" />
            </button>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 overflow-auto">
        {view === 'gallery' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredStartups.map((startup, index) => (
              <div key={index} className="bg-white rounded-lg shadow border overflow-hidden">
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{startup.name}</h2>
                  
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Website</div>
                    <a href={startup.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      {startup.website}
                    </a>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Brief Description</div>
                    <p className="text-sm">{startup.description}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Key Contact Name</div>
                    <p className="text-sm">{startup.keyContact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Contact</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStartups.map((startup, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{startup.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href={startup.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                        {startup.website}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md truncate">{startup.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{startup.keyContact}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupDatabase;
