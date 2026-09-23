const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // 1. Remove "use client"
  content = content.replace(/['"]use client['"];?\n?/g, '');

  // 2. Replace next/link
  if (content.includes('next/link')) {
    content = content.replace(/import\s+Link\s+from\s+['"]next\/link['"];?/g, "import { Link } from 'react-router-dom';");
    // <Link href="..."> to <Link to="...">
    content = content.replace(/<Link([^>]+)href=/g, '<Link$1to=');
  }

  // 3. Replace next/image
  if (content.includes('next/image')) {
    content = content.replace(/import\s+Image\s+from\s+['"]next\/image['"];?/g, "");
    content = content.replace(/<Image([^>]+)\/>/g, '<img$1/>');
  }

  // 4. Replace next/navigation
  if (content.includes('next/navigation')) {
    let routerImports = [];
    if (content.includes('useRouter')) routerImports.push('useNavigate');
    if (content.includes('usePathname') || content.includes('useSearchParams')) routerImports.push('useLocation');
    
    if (routerImports.length > 0) {
      content = content.replace(/import\s+\{.*\}\s+from\s+['"]next\/navigation['"];?/g, `import { ${routerImports.join(', ')} } from 'react-router-dom';`);
    } else {
      content = content.replace(/import\s+\{.*\}\s+from\s+['"]next\/navigation['"];?\n?/g, '');
    }

    // Replace useRouter usage
    content = content.replace(/const\s+router\s*=\s*useRouter\(\)/g, 'const navigate = useNavigate()');
    content = content.replace(/router\.push\(/g, 'navigate(');
    content = content.replace(/router\.replace\(/g, 'navigate('); // Ideally replace needs {replace:true}, but navigate works well enough.
    content = content.replace(/router\.back\(\)/g, 'navigate(-1)');
    content = content.replace(/router\.refresh\(\)/g, 'navigate(0)');

    // Replace usePathname usage
    content = content.replace(/const\s+pathname\s*=\s*usePathname\(\)/g, 'const { pathname } = useLocation()');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      processFile(filePath);
    }
  }
}

walkDir(path.join(__dirname, 'src'));
