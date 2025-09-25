import { useEffect } from "react";

const codeSnippets = [
  'const store = {};',
  'const context = =>;',
  'const api = {};',
  'const hook = .then();',
  'const component = ();',
  'const api = .then();',
  'const app = [];',
  'const utils = {};',
  'const data = =>;',
  'const component = async();',
  'const utils = =>;',
  'const context = async();',
  'const utils = .then();',
  'const store = await;',
  'const hook = await;',
  'const component = new Map();',
  'const store = new Map();',
  'const hook = =>;',
  'const context = async();',
  'const hook = [];',
  'const app = ();',
  'const component = await;',
  'const context = new Map();',
  'const app = {};',
  'const data = .then();',
  'const hook = ();',
  'const hook = await;',
  'const store = [];',
  'const data = await;',
  'const data = ();'
];

export default function AnimatedCodeBackground() {
  useEffect(() => {
    const codeBg = document.getElementById('codeBg');
    if (!codeBg) return;

    function addCodeLine() {
      if (!codeBg) return;
      
      const line = document.createElement('div');
      line.className = 'code-line';
      line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      line.style.left = Math.random() * window.innerWidth + 'px';
      line.style.top = Math.random() * window.innerHeight + 'px';
      line.style.animationDelay = Math.random() * 2 + 's';
      line.style.animationDuration = (3 + Math.random() * 2) + 's';
      
      codeBg.appendChild(line);
      
      setTimeout(() => {
        if (line.parentNode) {
          line.parentNode.removeChild(line);
        }
      }, 8000);
    }

    // Create initial lines
    for (let i = 0; i < 20; i++) {
      setTimeout(addCodeLine, i * 200);
    }

    // Keep adding lines
    const interval = setInterval(addCodeLine, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="code-bg" id="codeBg" data-testid="animated-code-background" />;
}
