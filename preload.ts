import { plugin, type BunPlugin } from "bun";
import { compileAsync, Logger } from "sass-embedded";

const sassImportPlugin: BunPlugin = {
  name: "SASS",
  setup(build) {
    build.onLoad({ filter: /\.(sass|scss)$/ }, async (args) => {
      const { css } = await compileAsync(args.path, { logger: Logger.silent });
      return { loader: "object", exports: { default: css } };
    });
  },
};

plugin(sassImportPlugin);

export default sassImportPlugin;
