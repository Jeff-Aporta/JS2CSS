import { merger, build_SASS_rollup, build_rollup, next_version } from "merger-client-static-jsx";

await build_rollup();

merger({
    folderRoot: "./static/jsx",
    output: "./static/js/appdoc.client.merged.min.js",
});

// await next_version();
