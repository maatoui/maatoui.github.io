# M. Amine Atoui — Personal site

## What changed in this round

1. **Full publication list** — all 61 works now on the site (journal
   articles published / in process, conference papers, workshop
   contributions, technical reports & theses), replacing the earlier
   4-item curated version. Citations themselves are left in their
   original published form (never translated, even in the French
   version — that's standard academic practice).
2. **Removed aggregate money figures** — the €2.8M/€3.4M glance-banner
   stats, the funding sentence in the Research paragraph, and the
   3-number summary strip at the top of Projects are all gone. Money now
   appears only inside each individual project's own card (Green Bridge
   Island's €100,000, Solbruk's €2,703,457, etc.) — exactly where you
   asked for it to live.
3. **Removed the "9 countries" framing** — both the glance-banner stat
   and the Collaboration subheading. The actual list of institutions in
   Collaboration is unchanged; only the count/framing is gone.
4. **French version added** — `index-fr.html`, a full translation of the
   English page. Publication citations, project names, institution
   proper nouns and technical acronyms are kept as-is (translating a
   paper's actual title would misrepresent it); everything else — nav,
   headers, prose, table entries — is translated. A language switcher
   (EN/FR) sits at the end of the nav on both pages.
5. **Fixed a sync bug while in here**: the site still said "Ph.D. in
   Applied Mathematics for Engineering," which we corrected to "Ph.D. in
   Engineering Sciences (spécialité Productique)" in your CV several
   rounds ago but never carried over to the website. Both language
   versions now match the CV.

## Structure
```
index.html           English version
index-fr.html        French version (language switcher links between them)
css/style.css         Styling (dark theme, shared by both languages)
js/main.js            Mobile nav toggle, footer year, active-section nav highlight
assets/Atoui_CV.pdf   Current CV PDF
assets/favicon.svg    Site icon
assets/projects/      Where per-project images go (create this folder)
```

## Adding a new publication or news item later
- Publications: add a `<tr>` inside the relevant `.rec-table` under
  `#publications`, matching the existing row format. Do this in **both**
  `index.html` and `index-fr.html` (citation text is identical in both).
- News: add a `<li class="news-item">` under `#news`. This one does need
  translating separately in each file, since it's prose, not a citation.

## Publish it on GitHub Pages
1. Unzip locally first, don't upload the `.zip` itself.
2. Create a repo, upload the files keeping `css/`, `js/`, `assets/` as
   subfolders and both HTML files at the root.
3. Settings → Pages → Source: Deploy from a branch → `main` → `/ (root)`.
