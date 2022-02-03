# electron-icon-memory-usage-bug

1. Run the project and note memory usage
2. Close app
3. Navigate to ./build/icon and delete all variations besides the `@1x` variant
4. Run the project again and note the large decrease in memory usage (around 300mb)

NOTE: Tested on Windows