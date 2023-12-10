# React + Vite

J'ai utilisé la stack technique demandée avec React, Zod, Tailwind, useQuery et Vite.
A défaut d'utiliser Typescript que j'ai moins l'habitute d'utiliser, j'ai utilisé Zod et les propTypes qui assurent un minimum de typage.

N'ayant pas d'api fournie, j'ai mocké des données localement au format json que je GET avec fetch(). (J'utilise généralement Axios mais il ne permet pas de récupérer des données locales.)
Les données envoyées avec POST et PUT ne persistent pas sans api mais la mise en place est la même qu'avec une api réelle.

Pour l'UI j'ai utilisé Tailwind avec DaisyUI qui enrichit Tailwind de composants un peu comme Bootstrap pour éviter de réinventer la roue. J'ai reproduit une UI assez similaire même si c'est secondaire.

J'ai fait ce qui était demandé pour les dropdown de statut, modèles de risques et les évaluations.
Je n'ai pas compris cette précision : "D’autre part, aucune évaluation ne peut être créée si le modèle de risque n’est pas renseigné." Le modèle de risque n'est pas optionnel dans un projet, donc si on se trouve sur la page de détails d'un projet, un modèle de risque est forcément déjà renseigné.

Pour récupérer le manager, le programme et le domaine, je suis parti du principe qu'ils n'étaient pas exposées sur le GET du projet comme précisé, même si idéalement ils devraient l'être. Je les ai donc récupérés via leur propre fichier.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
