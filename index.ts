import type { BunPlugin } from "bun";
import { compileAsync, Logger } from "sass-embedded";

const sassPlugin: BunPlugin = {
  name: "SASS",
  setup(build) {
    build.onLoad({ filter: /\.(sass|scss)$/ }, async (args) => {
      const { css } = await compileAsync(args.path, { logger: Logger.silent });
      return { loader: "css", contents: css };
    });
  },
};

export default sassPlugin;
