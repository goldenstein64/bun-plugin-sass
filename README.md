# bun-plugin-sass

> [!WARNING]
> Use `esbuild-sass-plugin` instead

A very small Bun plugin for bundling compiled `.sass` and `.scss` files with your builds.

## Usage

Pass the plugin into `Bun.build` or your `bunfig.toml`.

```ts
// build.ts
await Bun.build({
    // ...
    plugins: ["@goldenstein64/bun-plugin-sass"]
})
```

```toml
# bunfig.toml
[serve.static]
plugins = ["@goldenstein64/bun-plugin-sass"]
```

Now, any references to `.sass` and `.scss` files in the server or HTML will reference ordinary CSS.

```html
<link type="stylesheet" src="style.scss">

<!-- becomes -->

<link type="stylesheet" src="style-[hash].css">
```

Please note that importing these files from client-side JS does not work; it causes errors and crashes on Bun's side for reasons unbeknownst.


## Building

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
