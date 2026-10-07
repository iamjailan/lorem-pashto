# Publishing Pashto Lorem

The same VSIX is intended for the Visual Studio Marketplace (VS Code) and the Open VSX Registry (Cursor). Keep the extension ID `iamjailan.pashto-lorem` the same in both registries.

## Prepare the release

1. Run `npm ci`, `npm test`, and `npm run package`.
2. Inspect `pashto-lorem-<version>.vsix` and check that the README, icon, snippets, and compiled `dist/src` files are included.
3. Push the matching source commit to the public [repository](https://github.com/iamjailan/lorem-pashto).

## VS Code Marketplace

Create or use the `iamjailan` publisher at the [Visual Studio Marketplace management page](https://marketplace.visualstudio.com/manage/publishers/). Its display name can be **Jailan Samun**. Upload the prepared VSIX there, or use `vsce publish --packagePath pashto-lorem-<version>.vsix` with a Marketplace Manage credential. The publisher ID must match the `publisher` field in `package.json`.

See the [official VS Code publishing guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

## Open VSX for Cursor

Sign in to [Open VSX](https://open-vsx.org/) with the `iamjailan` GitHub account, connect an Eclipse account, and sign the Publisher Agreement. Create the `iamjailan` namespace and an access token. Publish the same VSIX with `ovsx publish pashto-lorem-<version>.vsix` using the `OVSX_PAT` environment variable. The namespace must match the `publisher` field.

See the [official Open VSX publishing guide](https://github.com/eclipse-openvsx/openvsx/wiki/Publishing-Extensions) and [Cursor's extension documentation](https://prod.cursor.com/help/customization/extensions). Cursor's marketplace proxy may take additional time to surface a new Open VSX listing.

Keep tokens out of the repository and command arguments. Use the registries' account pages or a local secret manager to store them.
