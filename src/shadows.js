export function getDefaultBackgroundColor(shadowVariant) {
    switch (shadowVariant) {
        case 'light':
            return '#111';
        case 'dark':
            return '#fff';
        default:
            return null;
    }
}

export function getShadowStyle(backgroundColor, shadowVariant) {
    if (!shadowVariant || shadowVariant === 'off' || !backgroundColor) {
        return {};
    }

    const fromColor = shadowVariant === 'light' ? '255, 255, 255' : '0, 0, 0';
    const toColor = shadowVariant === 'light' ? '0, 0, 0' : '255, 255, 255';

    return {
        overflow: 'auto',
        backgroundPosition: 'left center, right center, left center, right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px 100%, 20px 100%, 10px 100%, 10px 100%',
        backgroundAttachment: 'local, local, scroll, scroll',
        backgroundImage:
            `linear-gradient(to right, ${backgroundColor}, ${backgroundColor}),` +
            `linear-gradient(to right, ${backgroundColor}, ${backgroundColor}),` +
            `linear-gradient(to right, rgba(${fromColor}, 0.25), rgba(${toColor}, 0)),` +
            `linear-gradient(to left, rgba(${fromColor}, 0.25), rgba(${toColor}, 0))`,
    };
}
