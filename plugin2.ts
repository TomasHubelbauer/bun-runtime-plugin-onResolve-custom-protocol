const [, file] = Bun.argv;
const url = new URL(file, import.meta.url);
const script = await (await fetch(url.href)).text();
const regexp = /(?<=['"])demo:\w+(?=['"])/g;
const matches = script.match(regexp);

import { plugin } from "bun";

for (const specifier of matches) {
  await plugin({
    name: specifier,
    async setup(build) {
      console.log("Plugin 2 loaded!", build);
      build.module(
        // The specifier, which can be any string - except a built-in, such as "buffer"
        specifier,
        async () => {
          console.log({ specifier });
          return {
            contents: `export default "Hi there, I am the '${specifier}' import!";`,
            loader: "ts",
          };
        },
      );
    },
  });
}
