# Bun runtime plugin `onResolve`

In this repository, I am experimenting with Bun's runtime plugins and the
`onResolve` hook and its ability to handle custom protocols specifically.

The repository containts two runtime plugin implementations, `plugin1.ts` and
`plugin2.ts`.

`plugin1.ts` filters imports ending in `.demo`.
`plugin2.ts` aims to filter imports starting with `demo:` (a custom protocol).

It seems that `onResolve` only works with `file:` protocol local path imports.
The `onResolve` method of `plugin2` is never called and instead the module
resolution looks for a package by the name of `demo:2`.

Bun runtime plugins have the ability to override packages using virtual modules:
https://bun.sh/docs/runtime/plugins#virtual-modules

However, this ability does not allow for import specifier path filtering, but
rather a replacement based on exact and full name, which led me to experiment
with `onResolve`.

`onResolve` not working with non-`file:` protocols might be intentional.
I will close the bug I will report for this if that ends up being the case.

## Bun GitHub bug

https://github.com/oven-sh/bun/issues/9863

## See also

I have also discovered an issue with asynchronous imports in conjunction with
`onResolve`:

- https://github.com/TomasHubelbauer/bun-runtime-plugin-onResolve-sync-async-import
- https://github.com/oven-sh/bun/issues/9862

