import { plugin } from "bun";

await plugin({
  name: "test",
  async setup(build) {
    console.log("Plugin 2 loaded!", build);

    build.onResolve({ filter: /^demo:/ }, (args) => {
      console.log("onResolve2", args);

      return {
        path: './demo2.ts'
      };
    });
  },
});
