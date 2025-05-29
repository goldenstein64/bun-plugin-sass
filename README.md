# bun-plugin-sass

A Bun plugin for loading `.sass` and `.scss` files.

## Usage

There are two variants of this plugin:
- `preload`: for importing JS source
- `serve-static`: for serving CSS statically with the bundler.

You can set them both up from `bunfig.toml` or the `Bun.build` API.

```toml
preload = ["@goldenstein64/bun-plugin-sass/preload"]

[serve.static]
plugins = ["@goldenstein64/bun-plugin-sass/serve-static"]
```

You will also need to add the `sass.d.ts` file to your `tsconfig.json`:

```jsonc
{
    // add it to your "include" files
    "include": [".", "node_modules/@goldenstein64/bun-plugin-sass/sass.d.ts"]
}
```

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
