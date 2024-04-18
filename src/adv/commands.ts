import type { Editor } from 'grapesjs';
import { PluginOptions } from '.';
import { cmdDeviceDesktop, cmdDeviceMobile, cmdDeviceTablet } from './consts';

export default (editor: Editor, opts: Required<PluginOptions>) => {
    const { Commands } = editor;

    Commands.add(cmdDeviceDesktop, {
      run: (ed) => ed.setDevice('Desktop'),
      stop: () => {},
    });

    Commands.add(cmdDeviceTablet, {
      run: (ed) => ed.setDevice('Tablet'),
      stop: () => {},
    });

    Commands.add(cmdDeviceMobile, {
      run: (ed) => ed.setDevice('Mobile portrait'),
      stop: () => {},
    });
};