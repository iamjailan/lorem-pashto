# Pashto Lorem

Generate Pashto placeholder text for mockups, documents, and interface layouts in VS Code and Cursor. Choose a precise number of paragraphs, sentences, or words, or insert a quick snippet.

Created by [Jailan Samun](https://github.com/iamjailan).

## Use

1. Open an editable text file.
2. Run **Pashto Lorem: Insert Pashto Lorem** from the Command Palette.
3. Choose paragraphs, sentences, or words, then enter an amount from 1 to 100. Selected text is replaced; with multiple cursors, the text is inserted at each cursor.

For example, one generated sentence is:

> د سهار په رڼا کې ښار ورو ورو له خوبه راویښېږي.

In plain text, Markdown, or HTML, type `plorem` (or `pashtolorem`) and accept the **Pashto Lorem paragraph** snippet suggestion. Type `sLorem` for one sentence. The command works in any editable text file. Built-in `lorem` suggestions generate Latin text; choose the Pashto Lorem suggestion by name.

Change `pashtoLorem.defaultCount` and `pashtoLorem.defaultUnit` in Settings to adjust the suggested amount and unit.

## Install from a VSIX

Download a release `.vsix` and choose **Extensions: Install from VSIX...** in VS Code or Cursor.

## Development

Run `npm ci`, then `npm test` to build and test the extension. Run `npm run package` to make a VSIX. To debug, open this folder in VS Code or Cursor and launch **Run Extension** from the Run and Debug view.

Report problems or request features in [GitHub Issues](https://github.com/iamjailan/lorem-pashto/issues).

## License

MIT
