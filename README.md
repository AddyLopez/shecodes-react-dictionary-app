# React Dictionary Application

**_View this project:_** [https://imaginative-unicorn-d2aba6.netlify.app/](https://imaginative-unicorn-d2aba6.netlify.app/)

## Description

Student project for SheCodes React coding workshop.

**_Learning objective:_** To create a dictionary application using React. This application integrates with a dictionary API and the Pexels API to display images based on the word submitted.

## Baseline Features

- Built from scratch entirely in React
- Well-organized React components with discrete purposes that would be easy to discern for developers who had never seen my code
- React hooks and states
- Clean JSX using semantic HTML tags (conscientiously coded with accessibility concerns, SEO, legibility, and maintainability in mind)
- Responsive CSS, with extensive testing for devices of all sizes (in both portrait and landscape modes) using the toggle device toolbar in Google Chrome's DevTools
- Bootstrap grid
- Integration with the Free Dictionary API (for the definitions) and the Pexels API (for the images) using AJAX
- Use of the terminal, Node.js, and NPM
- Prototyping in the browser and debugging with Google Chrome's DevTools and React extension.
- Use of accessibility tools included in Google Chrome's DevTools, to ensure sufficient contrast ratios on par with the standard Web Content Accessibility Guidelines.
- Accessibility rating by Lighthouse audit: 91/100 for desktop, 91/100 for mobile devices
- Professional product development planning, using InVision's whiteboarding tool to design a wireframe (see below) prior to coding
- Coded in VS Code using professional development workflow tools, such GitHub Desktop, and processes, such as continuous deployment, with hosting on Netlify
- A polished README using Markdown

## Special Features I Designed

- Detailed textual styling for maximal intelligibility, including proper numerical indices for each definition, clear indications of and partitions for each part of speech, differentiation between definitions and example sentences, consistent indentations, and keyword emphasis (see below)
- More about keyword emphasis: Whenever a word is searched, wherever it appears in an example sentence, it is rendered in boldface. This is a special and complicated feature that I designed on my own to lend greater star power to the search word. My code accounts for most instances of the keyword: when it is capitalized, when it appears more than once in an example sentence, and when it is used in a different verb tense. The exception is when the verb tense transforms the root form of the word.
- Informed typography. The chosen font, imported from the Google Fonts library, suggests the Gothic aesthetic character of a medieval manuscript. It is appropriate for a dictionary application because the carefully rendered serifs indicate respect--if not reverence--for the written word. Each letter of this font conveys the dignity and authority of print that one expects of a dictionary, without sacrificing legibility to ostentatious flourishes characteristic of other serif fonts. Legibility further aided by a half-pixel of added spacing between letters. A different but well-paired font is used for the phonetics to ensure that all special characters will be rendered to all users for any word searched.
- Audio icons for React from the Font Awesome library programmed with audio clips of the phonetics using Howler JS, which I discovered and learned how to use independently for an improved UI/UX. The advantages of this method are a clean design and a seamless user experience, with the clip playing from the same page without interference. By contrast, my instructor's demo (see below) of this project did not use Howler JS to program an audio icon; instead, it opened the mp3 file in a separate tab, an experience which I consider both cumbersome and pesky to users.

## Wireframe

Created using InVision, a whiteboarding tool useful for planning product design.

![InVision Wireframe for React Dictionary Application](src/wireframe/react-dictionary-application-wireframe.png)

## Preview

![Screenshot preview of React Dictionary Application](react-dictionary-application.png)

## Attributions

**_For comparison:_** Design inspired by the SheCodes React demo: [https://www.dictionary.shecodes.io/)](https://www.dictionary.shecodes.io/)

**_Free Dictionary API:_** [https://github.com/meetDeveloper/freeDictionaryAPI](https://github.com/meetDeveloper/freeDictionaryAPI)

**\_Pexels API:** [https://www.pexels.com/api/](https://www.pexels.com/api/)
