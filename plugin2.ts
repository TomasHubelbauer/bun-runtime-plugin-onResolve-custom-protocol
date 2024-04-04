import { plugin } from "bun";

await plugin({
  name: "test2",
  async setup(build) {
    console.log("Plugin 2 loaded!", build);
    build.module(
      // The specifier, which can be any string - except a built-in, such as "buffer"
      "demo:2",
      async () => {
        const metaURL = new URL(await import.meta.resolve("./demo2.ts"), import.meta.url);
        return {
          contents: await (await fetch(metaURL.href)).text(),
          loader: "ts",
        };
      }
    )
/*
    build.onResolve({ filter: /^demo:/ }, (args) => {
      console.log("onResolve2", args);

      return {
        path: './demo2.ts'
      };
    });
*/
  },
});
