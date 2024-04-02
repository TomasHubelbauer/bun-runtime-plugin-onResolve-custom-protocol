import { plugin } from "bun";

await plugin({
  name: "test",
  async setup(build) {
    console.log("Plugin 1 loaded!", build);

    build.onResolve({ filter: /\.demo$/ }, (args) => {
      console.log("onResolve1", args);

      return {
        path: './demo1.ts'
      };
    });
  },
});
