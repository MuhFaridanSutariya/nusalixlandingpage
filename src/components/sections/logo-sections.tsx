import LogoLoop from '../LogoLoop';

// Import logo SVG kamu (letakkan di public/logos/)
const dataManagementLogos = [
  { node: <img src="/logos/postgre.svg" alt="PostgreSQL" className="w-12 h-12" />, title: "PostgreSQL", href: "#" },
  { node: <img src="/logos/mongodb.svg" alt="MongoDB" className="w-24 h-24" />, title: "MongoDB", href: "#" },
  { node: <img src="/logos/apcheairflow.svg" alt="MySQL" className="w-24 h-24" />, title: "MySQL", href: "#" },
  { node: <img src="/logos/excel.svg" alt="Redis" className="w-12 h-12" />, title: "Redis", href: "#" },
  { node: <img src="/logos/powerbi.svg" alt="Redis" className="w-24 h-24" />, title: "Redis", href: "#" },
];

const aiLogos = [
  { node: <img src="/logos/tensorflow.svg" alt="TensorFlow" className="w-24 h-24" />, title: "TensorFlow", href: "#" },
  { node: <img src="/logos/pytorch.svg" alt="PyTorch" className="w-24 h-24" />, title: "PyTorch", href: "#" },
  { node: <img src="/logos/openai.svg" alt="OpenAI" className="w-24 h-24" />, title: "OpenAI", href: "#" },
  { node: <img src="/logos/huggingface.svg" alt="Hugging Face" className="w-24 h-24" />, title: "Hugging Face", href: "#" },
  { node: <img src="/logos/CHROMA.svg" alt="ChromaDB" className="w-24 h-24" />, title: "ChromaDB", href: "#" },
  { node: <img src="/logos/elasticsearch.svg" alt="Elasticsearch" className="w-24 h-24" />, title: "Elasticsearch", href: "#" },
  { node: <img src="/logos/gemini.svg" alt="Gemini" className="w-24 h-24" />, title: "Gemini", href: "#" },
  { node: <img src="/logos/langchain.svg" alt="LangChain" className="w-24 h-24" />, title: "LangChain", href: "#" },
  { node: <img src="/logos/meta.svg" alt="Meta AI" className="w-24 h-24" />, title: "Meta AI", href: "#" },
  { node: <img src="/logos/NVIDIA.svg" alt="NVIDIA" className="w-12 h-12" />, title: "NVIDIA", href: "#" },
  { node: <img src="/logos/python.svg" alt="Python" className="w-12 h-12" />, title: "Python", href: "#" },
  { node: <img src="/logos/roboflow.svg" alt="Roboflow" className="w-24 h-24" />, title: "Roboflow", href: "#" },
  { node: <img src="/logos/tensorrt.svg" alt="TensorRT" className="w-12 h-12" />, title: "TensorRT", href: "#" },
];

const developmentLogos = [
  { node: <img src="/logos/docker.svg" alt="Docker" className="w-24 h-24" />, title: "Docker", href: "#" },
  { node: <img src="/logos/fastapi.svg" alt="FastAPI" className="w-24 h-24" />, title: "FastAPI", href: "#" },
  { node: <img src="/logos/flutter.svg" alt="Flutter" className="w-24 h-24" />, title: "Flutter", href: "#" },
  { node: <img src="/logos/nextjs.svg" alt="Next.js" className="w-24 h-24" />, title: "Next.js", href: "#" },
  { node: <img src="/logos/pytest.svg" alt="PyTest" className="w-24 h-24" />, title: "PyTest", href: "#" },
  { node: <img src="/logos/streamlit.svg" alt="Streamlit" className="w-24 h-24" />, title: "Streamlit", href: "#" },
  { node: <img src="/logos/tailwind.svg" alt="Tailwind CSS" className="w-24 h-24" />, title: "Tailwind CSS", href: "#" },
];

export default function LogoSections() {
  return (
    <section className="py-20 bg-black/50">
      <div className="w-full space-y-16">
        
        {/* Data Management */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Data Management
          </h3>
          <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
            <LogoLoop
              logos={dataManagementLogos}
              speed={50}
              direction="left"
              logoHeight={10}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#00000"
              ariaLabel="Data Management technologies"
            />
          </div>
        </div>

        {/* Artificial Intelligence */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Artificial Intelligence
          </h3>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
            <LogoLoop
              logos={aiLogos}
              speed={100}
              direction="right"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#00000"
              ariaLabel="AI technologies"
            />
          </div>
        </div>

        {/* Software Development */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Software Development
          </h3>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
            <LogoLoop
              logos={developmentLogos}
              speed={140}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#fffff"
              ariaLabel="Software Development technologies"
            />
          </div>
        </div>


      </div>
    </section>
  );
}