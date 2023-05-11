import { Theme, CustomColorGroup, ColorGroup } from '@material/material-color-utilities/dist/utils/theme_utils'
import { Scheme as MdiScheme} from '@material/material-color-utilities/dist/scheme/scheme'
import { hexFromArgb } from "@material/material-color-utilities";

class Colors {
    'primary': string;
    'on-primary': string;
    'primary-container': string;
    'on-primary-container': string;

    'secondary': string;
    'on-secondary': string;
    'secondary-container': string;
    'on-secondary-container': string;

    'tertiary': string;
    'on-tertiary': string;
    'tertiary-container': string
    'on-tertiary-container': string

    'error': string;
    'on-error': string;
    'error-container': string;
    'on-error-container': string;

    'background': string;
    'on-background': string;

    'surface': string;
    'on-surface': string;
    'surface-variant': string;
    'on-surface-variant': string;

    'outline': string;
    'outline-variant': string;

    'scrim': string;
    'shadow': string;

    'inverse-surface': string;
    'inverse-on-surface': string;

    'info': string = '#2196F3';
    'success': string = '#4CAF50';
    'warning': string = '#FB8C00';

    constructor(scheme: MdiScheme) {
        this["primary"] = hexFromArgb(scheme.primary)
        this["on-primary"] = hexFromArgb(scheme.onPrimary)
        this["primary-container"] = hexFromArgb(scheme.primaryContainer)
        this["on-primary-container"] = hexFromArgb(scheme.onPrimaryContainer)

        this["secondary"] = hexFromArgb(scheme.secondary)
        this["on-secondary"] = hexFromArgb(scheme.onSecondary)
        this["secondary-container"] = hexFromArgb(scheme.secondaryContainer)
        this["on-secondary-container"] = hexFromArgb(scheme.onSecondaryContainer)

        this["tertiary"] = hexFromArgb(scheme.tertiary)
        this["on-tertiary"] = hexFromArgb(scheme.onTertiary)
        this["tertiary-container"] = hexFromArgb(scheme.tertiaryContainer)
        this["on-tertiary-container"] = hexFromArgb(scheme.onTertiaryContainer)

        this["error"] = hexFromArgb(scheme.error)
        this["on-error"] = hexFromArgb(scheme.onError)
        this["error-container"] = hexFromArgb(scheme.errorContainer)
        this["on-error-container"] = hexFromArgb(scheme.onErrorContainer)

        this["background"] = hexFromArgb(scheme.background)
        this["on-background"] = hexFromArgb(scheme.onBackground)

        this["surface"] = hexFromArgb(scheme.surface)
        this["on-surface"] = hexFromArgb(scheme.onSurface)
        this["surface-variant"] = hexFromArgb(scheme.surfaceVariant)
        this["on-surface-variant"] = hexFromArgb(scheme.onSurfaceVariant)

        this["outline"] = hexFromArgb(scheme.outline)
        this["outline-variant"] = hexFromArgb(scheme.outlineVariant)

        this["shadow"] = hexFromArgb(scheme.shadow)
        this["scrim"] = hexFromArgb(scheme.scrim)

        this["inverse-surface"] = hexFromArgb(scheme.inverseSurface)
        this["inverse-on-surface"] = hexFromArgb(scheme.inverseOnSurface)
    }

    public setCustom(colorGroup:ColorGroup, colorGroupName:string):void {
        this["custom-"+colorGroupName] = hexFromArgb(colorGroup.color);
        this["custom-on-"+colorGroupName] = hexFromArgb(colorGroup.onColor);
        this["custom-"+colorGroupName+"-container"] = hexFromArgb(colorGroup.colorContainer);
        this["custom-on-"+colorGroupName+"-container"] = hexFromArgb(colorGroup.onColorContainer);
    }
}

interface Scheme {
    dark: boolean;
    colors: Colors
}

export default class {
    light: Scheme
    dark: Scheme

    constructor(theme: Theme, ) {
        this.light = {
            dark: false,
            colors: new Colors(theme.schemes.light)
        };

        this.dark = {
            dark: true,
            colors: new Colors(theme.schemes.dark)
        };

        // @ts-ignore
        for (let item:CustomColorGroup of theme.customColors) {
            let { name } = item.color
            this.light.colors.setCustom(item.light, name)
            this.dark.colors.setCustom(item.dark, name)
        }
    }
}