# Justin Delabarre — CV Professionnel

CV bilingue (FR/EN) de Data Analyst / Data Scientist, hébergé sur GitHub Pages et généré automatiquement en PDF via GitHub Actions.

🔗 **[Voir le CV en ligne](https://justindelabarre.github.io/)**

---

## Structure

```
├── index.html              # CV — version française
├── index.en.html           # CV — version anglaise
├── style.css               # Styles partagés (FR + EN)
├── cv.fr.pdf               # PDF français (auto-généré)
├── cv.en.pdf               # PDF anglais (auto-généré)
├── generate-pdf.js         # Script Node.js de génération PDF
└── .github/workflows/
    ├── static.yml          # Déploiement GitHub Pages
    └── generate-pdf.yml    # Génération automatique des PDFs
```

## Stack

- **HTML / CSS** — vanilla, aucun framework
- **GitHub Pages** — hébergement gratuit
- **GitHub Actions** — CI/CD pour la génération des PDFs
- **Puppeteer** — headless browser pour la capture PDF

## Modifier le CV

1. Éditer `index.html` (FR) et/ou `index.en.html` (EN)
2. `git add . && git commit -m "Update CV" && git push`
3. GitHub Actions génère automatiquement les PDFs mis à jour
