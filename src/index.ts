import type { Component, Plugin } from "grapesjs";
import juice from "juice";
import loadBlocks from "./blocks";
import loadCommands from "./commands";
import loadPanels from "./panels";
import loadTraits from "./traits";
import loadRte from "./rte";

export interface PluginOptions {
  /**
   * Which blocks to add.
   */
  blocks?: string[];

  /**
   * Add custom block options, based on block id.
   * @default (blockId) => ({})
   * @example (blockId) => blockId === 'quote' ? { attributes: {...} } : {};
   */
  block?: (blockId: string) => {};

  /**
   * Which OST blocks are in use.
   */
  usedOstBlockTypes?: string[];

  /**
   * Custom style for table blocks.
   */
  tableStyle?: Record<string, string>;

  /**
   * Custom style for table cell blocks.
   */
  cellStyle?: Record<string, string>;

  /**
   * Import command id.
   * @default 'gjs-open-import-template'
   */
  cmdOpenImport?: string;

  /**
   * Get inlined HTML command id.
   * @default 'gjs-get-inlined-html'
   */
  cmdInlineHtml?: string;

  /**
   * Title for the import modal.
   * @default 'Import template'
   */
  modalTitleImport?: string;

  /**
   * Title for the export modal.
   * @default 'Export template'
   */
  modalTitleExport?: string;

  /**
   * Label for the export modal.
   * @default ''
   */
  modalLabelExport?: string;

  /**
   * Label for the import modal.
   * @default ''
   */
  modalLabelImport?: string;

  /**
   * Label for the import button.
   * @default 'Import'
   */
  modalBtnImport?: string;

  /**
   * Label for the Trait.
   * @default ''
   */
  traitBlkValue?: string;

  /**
   * Template as a placeholder inside import modal.
   * @default ''
   */
  importPlaceholder?: string;

  /**
   * If `true`, inlines CSS on export.
   * @default true
   */
  inlineCss?: boolean;

  /**
   * Update Style Manager with more reliable style properties to use for newsletters.
   * @default true
   */
  updateStyleManager?: boolean;

  /**
   * Show the Style Manager on component change.
   * @default true
   */
  showStylesOnChange?: boolean;

  /**
   * Show the Block Manager on load.
   * @default true
   */
  showBlocksOnLoad?: boolean;

  /**
   * Show the Traits Manager on load.
   * @default true
   */
  showTraitsOnLoad?: boolean;

  /**
   * Show the outline option on load.
   * @default true
   */
  showOutlineOnLoad?: boolean;

  /**
   * Code viewer theme.
   * @default 'hopscotch'
   */
  codeViewerTheme?: string;

  /**
   * Custom options for `juice` HTML inliner.
   * @default {}
   */
  juiceOpts?: juice.Options;

  /**
   * Toolbar clone.
   * @default 'Clone list element'
   */
  ostToolbarClone?: string;

  /**
   * Toolbar delete.
   * @default 'Delete list element'
   */
  ostToolbarDelete?: string;

  /**
   * Toolbar up.
   * @default 'Move list element up'
   */
  ostToolbarUp?: string;

  /**
   * Toolbar down.
   * @default 'Move list element down'
   */
  ostToolbarDown?: string;

  /**
   * Toolbar down.
   * @default 'View components'
   */
  cmdBtnDesktopLabel?: string;

  /**
   * Toolbar down.
   * @default 'Desktop'
   */
  cmdBtnTabletLabel?: string;

  /**
   * Toolbar down.
   * @default 'Tablet'
   */
  cmdBtnMobileLabel?: string;

  /**
   * Toolbar down.
   * @default 'Mobile'
   */
  cmdBtnViewCompLabel?: string;

  /**
   * Toolbar down.
   * @default 'Undo'
   */
  cmdBtnUndoLabel?: string;

  /**
   * Toolbar down.
   * @default 'Redo'
   */
  cmdBtnRedoLabel?: string;

  /**
   * Toolbar down.
   * @default 'Open Parameter'
   */
  openTmBtnTitle?: string;
}

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor, opts: Partial<PluginOptions> = {}) => {
  let config = editor.getConfig();

  const options: RequiredPluginOptions = {
    blocks: [],
    block: () => ({}),
    juiceOpts: {},
    usedOstBlockTypes: [],
    cmdOpenImport: "gjs-open-import-template",
    cmdInlineHtml: "gjs-get-inlined-html",
    modalTitleImport: "Import template",
    modalTitleExport: "Export template",
    modalLabelImport: "",
    modalLabelExport: "",
    modalBtnImport: "Import",
    codeViewerTheme: "hopscotch",
    traitBlkValue: "",
    importPlaceholder: "",
    inlineCss: true,
    cellStyle: {
      padding: "0",
      margin: "0",
      "vertical-align": "top",
    },
    tableStyle: {
      height: "150px",
      margin: "0 auto 10px auto",
      padding: "5px 5px 5px 5px",
      width: "100%",
    },
    updateStyleManager: true,
    showStylesOnChange: true,
    showBlocksOnLoad: false,
    showTraitsOnLoad: true,
    showOutlineOnLoad: true,

    ostToolbarClone: "Clone list element",
    ostToolbarDelete: "Delete list element",
    ostToolbarUp: "Move list element up",
    ostToolbarDown: "Move list element down",

    cmdBtnDesktopLabel: "Desktop",
    cmdBtnTabletLabel: "Tablet",
    cmdBtnMobileLabel: "Mobile",
    cmdBtnViewCompLabel: "View components",
    cmdBtnUndoLabel: "Undo",
    cmdBtnRedoLabel: "Redo",
    openTmBtnTitle: "Open Parameter",
    ...opts,
  };

  // Change some config
  config.devicePreviewMode = true;

  loadCommands(editor, options);
  loadBlocks(editor, options);
  loadPanels(editor, options);
  loadRte(editor, options);
  loadTraits(editor, options);

  // Beautify tooltips
  var titles = document.querySelectorAll("*[data-tooltip-pos]");

  for (var i = 0; i < titles.length; i++) {
    var el = titles[i];
    var title = el.getAttribute("title");
    title = title ? title.trim() : "";
    if (!title) break;
    el.setAttribute("data-tooltip", title);
    el.setAttribute("title", "");
  }

  // On selected components
  editor.on("component:selected", () => {
    var selected = editor.getSelected();

    if (selected != undefined) {
      selected.set({ draggable: false, removable: false, copyable: false });

      if (selected.is("ulistitem")) {
        showOstToolbar(selected);
      } else if (selected.isChildOf("ulistitem")) {
        showOstToolbar(selected.closestType("ulistitem"));
      } else if (selected.getEl()?.tagName === "LI") {
        // If list element empty replace with placeholder text (M&E case:)
        if (selected.components().length === 0 && !selected.get("content")) {
          var selectedPosition = selected.index();
          var newComponent = selected.parent()?.append("<li>Text</li>", { at: selectedPosition });
          selected.remove();
          editor.select(newComponent);
          selected = editor.getSelected();
        }
        showOstToolbar(selected);
      } else if (isChildOfElement(selected.getEl(), "LI")) {
        showOstToolbar(selected.closest("li"));
      }
    }
  });

  // On deselected components
  editor.on("component:deselected", () => {
    var ostToolbar = document.querySelector(".gjs-ost-toolbar");
    ostToolbar?.classList.remove("show");
  });

  function isChildOfElement(element: HTMLElement | undefined, tag: string) {
    while (element?.parentNode) {
      element = element.parentNode as HTMLElement;
      if (element.tagName === tag) return element;
    }
    return false;
  }

  function showOstToolbar(listItem: Component | undefined) {
    var elPos = listItem?.index();
    var elLast = listItem?.parent()?.getLastChild().index();

    var ostToolbar = document.querySelector(".gjs-ost-toolbar");
    if (ostToolbar != undefined) {
      ostToolbar.innerHTML = "";

      // Add clone button
      const cBtn = document.createElement("div");
      cBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18zm-1.3 3.88h2.6v3.82h3.82v2.6H13.3v3.82h-2.6V13.3H6.88v-2.6h3.82z"/></svg>';
      cBtn.classList.add("gjs-ost-toolbar-item", "clone");
      cBtn.title = options.ostToolbarClone;
      cBtn.addEventListener("click", () => {
        if (elPos) {
          listItem?.parent()?.append(listItem?.clone(), { at: elPos + 1 });
        }
      });
      ostToolbar.appendChild(cBtn);

      //Add delete button
      const dBtn = document.createElement("div");
      dBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm5.12 7.7v2.6H6.88v-2.6z"/></svg>';
      dBtn.title = options.ostToolbarDelete;
      dBtn.classList.add("gjs-ost-toolbar-item", "del");
      if (elLast != 0) {
        dBtn.addEventListener("click", () => {
          listItem?.remove();
          ostToolbar?.classList.remove("show");
        });
      } else {
        dBtn.classList.add("disable");
      }
      ostToolbar.appendChild(dBtn);

      // Add move up button
      const upBtn = document.createElement("div");
      upBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M1.9 20.75 12 3.25l10.1 17.5Z"/></svg>';
      upBtn.title = options.ostToolbarUp;
      upBtn.classList.add("gjs-ost-toolbar-item", "up");
      upBtn.addEventListener("click", () => {
        if (elPos && listItem?.parent() != undefined) {
          let parent = listItem.parent();
          if (parent) {
            listItem?.move(parent, { at: elPos - 1 });
          }
          editor.selectRemove(listItem);
          editor.select(listItem);
        }
      });
      ostToolbar.appendChild(upBtn);

      // Add move down button
      const dwnBtn = document.createElement("div");
      dwnBtn.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.4 3.25 12 20.75 1.6 3.25Z"/></svg>';
      dwnBtn.title = options.ostToolbarDown;
      dwnBtn.classList.add("gjs-ost-toolbar-item", "down");
      if (elPos) {
        var toPos = elPos + 2;
        if (elPos == elLast) {
          toPos = 0;
        }
        dwnBtn.addEventListener("click", () => {
          if (toPos && listItem?.parent() != undefined) {
            let parent = listItem.parent();
            if (parent) {
              listItem.move(parent, { at: toPos });
            }
            editor.selectRemove(listItem);
            editor.select(listItem);
          }
        });
        ostToolbar.appendChild(dwnBtn);
      }

      // Add show
      ostToolbar.classList.add("show");
    }
  }
};

export default plugin;
