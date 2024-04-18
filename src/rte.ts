import type { Editor } from "grapesjs";
import { PluginOptions } from ".";

export default (editor: Editor, opts: Required<PluginOptions>) => {
  const { RichTextEditor } = editor;

  RichTextEditor.add("removeFormat", {
    name: "removeFormat",
    icon: "string",
    attributes: { title: "Remove format" },

    result: (rte) => {
      rte.exec("removeFormat");
    },
  });
};
