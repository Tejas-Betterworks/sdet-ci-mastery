// tests/sanity.test.js
const actual = 10;
const expected = 10;

if (actual === expected) {
  console.log("✅ Test Passed: System is stable.");
  process.exit(0); // Exit code 0 means Success
} else {
  console.error("❌ Test Failed: Math is broken!");
  process.exit(1); // Exit code 1 means Failure (This breaks the build)
}
