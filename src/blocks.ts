import type { Editor, BlockProperties } from 'grapesjs';
import { PluginOptions } from '.';

export default function(editor: Editor, opts: Required<PluginOptions>) {
  const bm = editor.Blocks;

  const addBlock = (id: string, blockDef: BlockProperties) => {
    opts.blocks.indexOf(id)! >= 0 && editor.Blocks.add(id, {
      select: true,
      ...blockDef,
      ...opts.block(id),
    });
  }

  bm.getAll().reset();

  console.log("Test")

};
