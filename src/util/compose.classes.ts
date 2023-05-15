export function classes(...args: (undefined | string | number | null)[]) {
    return args.filter(value => value != null).join(' ')
}