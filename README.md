# Pashto Lorem

Pashto placeholder text for VS Code and Cursor. The included sample prose is written in Pashto and can be used in mockups, documents, and interface layouts.

Created by [Jailan Samun](https://github.com/iamjailan).

## Use

1. Open a text file.
2. Run **Pashto Lorem: Insert Pashto Lorem** from the Command Palette.
3. Choose paragraphs, sentences, or words, then enter an amount from 1 to 100. Selected text is replaced; with multiple cursors, text is inserted at each cursor.

In plain text, Markdown, or HTML, type `plorem` and accept the snippet suggestion to insert one paragraph. The command works in any editable text file.

Change `pashtoLorem.defaultCount` and `pashtoLorem.defaultUnit` in Settings to adjust the suggested amount and unit.

## Install locally

Run `npm install` and `npm run package`, then install the generated `.vsix` from **Extensions: Install from VSIX...** in either VS Code or Cursor. To develop the extension, run `npm install`, open this folder in either editor, and press F5 to build and launch an Extension Development Host.

## License

MIT
