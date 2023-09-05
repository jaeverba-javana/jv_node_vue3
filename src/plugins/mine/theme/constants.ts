class THEME {
    typography: TypographyTheme_ = {
        labelSmall: {
            fontSize: (1 / 7) * 5,
            fontFamily: 'Nunito',
        },
        labelMedium: {
            fontSize: (1 / 7) * 6,
            fontFamily: 'Nunito',
        },
        labelLarge: {
            fontSize: 1,
            fontFamily: 'Nunito',
        },
        bodySmall: {
            fontSize: 0.9,
            fontFamily: 'Nunito',
        },
        bodyMedium: {
            fontSize: 1,
            fontFamily: 'Nunito',
        },
        bodyLarge: {
            fontSize: 1.05,
            fontFamily: 'Nunito',
        },
        titleSmall: {
            fontSize: 1.2,
            fontFamily: 'Nunito'
        },
        titleMedium: {
            fontSize: 1.6,
            fontFamily: 'Alegreya',
        },
        titleLarge: {
            fontSize: 2,
            fontFamily: 'Alegreya',
        },
        displaySmall: {
            fontSize: 2.5,
            fontFamily: 'Alegreya',
        },
        displayMedium: {
            fontSize: 3,
            fontFamily: 'Alegreya',
        },
        displayLarge: {
            fontSize: 3.5,
            fontFamily: 'Alegreya',
        },
    }
}

export default new THEME

export declare interface TypographyTheme_ {
    labelSmall?: Typography_,
    labelMedium?: Typography_,
    labelLarge?: Typography_,
    bodySmall?: Typography_,
    bodyMedium?: Typography_,
    bodyLarge?: Typography_,
    titleSmall?: Typography_,
    titleMedium?: Typography_,
    titleLarge?: Typography_,
    displaySmall?: Typography_,
    displayMedium?: Typography_,
    displayLarge?: Typography_,
}

export declare interface Typography_ {
    fontSize?: number,
    fontFamily?: string,
}