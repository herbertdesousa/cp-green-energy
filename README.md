# FIAP GLOBAL SOLUTION 2/2024 - GREEN ENERGY
![image](https://github.com/user-attachments/assets/94685028-4eb7-4305-b863-324b41452b3f)


## Engenharia de Software - 2º SEMESTRE  
### Disciplina:  Front-End e Web Development

#### Integrantes do grupo:
- Alexandre Assis RM: 558927
- Gustavo Ramalho RM: 554582
- Herbert Souza RM: 555701

## 💥 Problema: 
O desperdício de energia em residências, especialmente devido ao uso desnecessário de iluminação, é uma realidade comum que impacta tanto as finanças dos consumidores quanto o meio ambiente. Muitas vezes, luzes permanecem acesas em cômodos vazios ou por tempo prolongado, gerando um consumo desnecessário que eleva o valor das contas de energia e contribui para emissões de carbono desnecessárias. Esse problema é agravado pela falta de monitoramento em tempo real e pela ausência de informações claras para os usuários sobre o impacto financeiro e ambiental do uso excessivo de energia elétrica.

Além disso, embora cada vez mais pessoas busquem reduzir seu impacto ambiental, muitos ainda têm dificuldade em adotar hábitos mais sustentáveis dentro de casa, devido à falta de ferramentas que facilitem a conscientização e o monitoramento do consumo. O resultado é um consumo energético ineficiente e insustentável, com um custo alto tanto para os indivíduos quanto para a sociedade em termos de recursos e impacto ambiental.

## 💡 Solução: Controle de Motor via MQTT
Este projeto implementa um sistema de monitoramento de energia integrado com inteligência artificial que vai te ajudar com a redução do gasto de energia diário. Com o Energi+, vamos integrar sensores IoT, inteligência artificial e técnicas de análise de dados para promover o uso consciente de energia. Este sistema oferece monitoramento em tempo real, alertas personalizados e uma interface prática para que os usuários acompanhem seu consumo e ajustem seus hábitos de forma a reduzir o desperdício energético. A solução será implementada em um protótipo de casa inteligente, com componentes controlados por Arduino que será conectado a um servidor MQTT para transferência de dados e ao Node RED para processamento de dados em tempo real.

---

## 🖥️ Plataforma Energi+
![image](https://github.com/user-attachments/assets/2b92f938-5384-4b48-8b51-65b0d159a490)
![image](https://github.com/user-attachments/assets/e66616b9-fffe-4754-b88b-1c2a72185abd)

Esta é a plataforma do Energi+, desenvolvida para que os usuários consigam acessar de forma simples e prática as informações sobre o consumo de energia de suas próprias casas em tempo real. Através da plataforma o usuário consegue ver seus gastos com energia, monitorar quais cômodos estão com luzes acesas no momento e também monitorar os eletrodomésticos que estão ligados atualmente. 

## 📚 Tecnologias utilizadas:
- HTML
- CSS
- Tailwind
- Javascript
- Typescript
- React

> [!Observação]
> Ao acessar a plataforma do Energi+ pela primeira vez, devido a ter ficado um período inativo, o sistema pode entregar as informações com uma certa lentidão. Isso ocorre devido ao fato da hospedagem estar sendo feita de forma gratuita e o servidor está desligado.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
