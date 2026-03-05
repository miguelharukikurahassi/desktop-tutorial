# Bald Hero Adventure 🕹️

Um jogo de plataforma 2D pixelado desenvolvido para GitHub Pages.

## 🚀 Como Executar Localmente

1. Como o jogo usa módulos ES6, você precisa de um servidor local.
2. Se você tem o VS Code com a extensão **Live Server**, basta clicar em "Go Live" no `index.html`.
3. Ou use o Python: `python -m http.server` na pasta raiz.

## 🛠️ Tecnologias
- **HTML5/CSS3**
- **Vanilla JavaScript (ES6)**
- **Canvas API**

## 📦 Estrutura de Pastas
- `/assets`: Sprites e sons.
- `/src`: Lógica do jogo (Player, Map, Input).
- `index.html`: Entrada principal.

## 🌐 Deploy no GitHub Pages
1. Suba os arquivos para um repositório no GitHub.
2. Vá em **Settings > Pages**.
3. Escolha a branch `main` e a pasta `/ (root)`.
4. Clique em Save e aguarde alguns minutos.

## 📝 Melhores Práticas Seguidas
- **Nomes de arquivos**: Minúsculos e sem espaços.
- **Caminhos**: Relativos (`./assets/...`) para compatibilidade com subpastas do GitHub Pages.
- **Pixel Art**: Renderização otimizada via CSS (`image-rendering: pixelated`).
