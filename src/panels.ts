import type { Editor } from "grapesjs";
import { PluginOptions } from ".";
import { cmdDeviceDesktop, cmdDeviceMobile, cmdDeviceTablet } from "./consts";

export default (editor: Editor, opts: Required<PluginOptions>) => {
  const { Panels } = editor;
  const openTraits = "open-tm";
  const openBlocks = "open-blocks";
  const activateOutline = "sw-visibility";
  const iconStyle = 'style="display: block; max-width: 22px"';

  // Turn off default devices select and create new one
  editor.getConfig().showDevices = false;

  Panels.getPanels().reset([
    {
      id: "commands",
      buttons: [{}],
    },
    {
      id: "devices-c",
      buttons: [
        {
          id: cmdDeviceDesktop,
          command: cmdDeviceDesktop,
          active: true,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`,
        },
        {
          id: cmdDeviceTablet,
          command: cmdDeviceTablet,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`,
        },
        {
          id: cmdDeviceMobile,
          command: cmdDeviceMobile,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`,
        },
      ],
    },
    {
      id: "options",
      buttons: [
        {
          id: activateOutline,
          command: activateOutline,
          context: activateOutline,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />
    </svg>`,
        },
        {
          id: "undo",
          command: "core:undo",
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
        </svg>`,
        },
        {
          id: "redo",
          command: "core:redo",
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
        </svg>`,
        },
      ],
    },
    {
      id: "views",
      buttons: [
        {
          id: openTraits,
          command: openTraits,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
      </svg>`,
        },
      ],
    },
  ]);

  // Do stuff on load
  editor.onReady(() => {
    if (opts.showBlocksOnLoad) {
      const btn = Panels.getButton("views", openBlocks);
      btn?.set("active", true);
    }
    
    if (opts.showTraitsOnLoad) {
      const btn = Panels.getButton("views", openTraits);
      btn?.set("active", true);
    }
  });
};
