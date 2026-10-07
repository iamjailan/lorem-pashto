import * as vscode from "vscode";
import type { Unit } from "./text";
import { parseCount } from "./utils/count";
import { generate } from "./utils/generate";

interface UnitOption extends vscode.QuickPickItem {
  value: Unit;
}

const units: readonly UnitOption[] = [
  { label: "Paragraphs", value: "paragraphs" },
  { label: "Sentences", value: "sentences" },
  { label: "Words", value: "words" },
];

async function insert(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    void vscode.window.showInformationMessage(
      "Open a text file before inserting Pashto Lorem.",
    );
    return;
  }

  const configuration = vscode.workspace.getConfiguration("pashtoLorem");
  const defaultUnit = configuration.get<Unit>("defaultUnit", "paragraphs");
  const defaultCount = configuration.get<number>("defaultCount", 3);
  const choice = await vscode.window.showQuickPick(
    units.map((unit) => ({ ...unit, picked: unit.value === defaultUnit })),
    { placeHolder: "Choose the amount of Pashto text" },
  );
  if (!choice) return;

  const input = await vscode.window.showInputBox({
    prompt: `How many ${choice.value}?`,
    value: String(defaultCount),
    validateInput(value): string | undefined {
      return parseCount(value) !== undefined
        ? undefined
        : "Enter a whole number from 1 to 100.";
    },
  });
  if (input === undefined) return;

  const count = parseCount(input);
  if (count === undefined) return;

  const content = generate(choice.value, count);
  await editor.edit((builder) => {
    for (const selection of editor.selections) {
      builder.replace(selection, content);
    }
  });
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand("pashtoLorem.insert", insert),
  );
}
