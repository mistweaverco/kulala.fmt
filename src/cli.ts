import pkg from "./../package.json";
import { Command } from "commander";
import { check, format, convert } from "./lib/parser";
const program = new Command();

program
  .name("kulala-fmt")
  .description(
    "An opinionated 🦄 .http and .rest 🐼 files linter 💄 and formatter ⚡.",
  )
  .version(pkg.version);

program
  .command("format")
  .description("Format files")
  .argument("[files]", "files to include", null)
  .option("--body", "also format the body", true)
  .action(async (files, options) => {
    await format(files, options);
  });

program
  .command("check")
  .description("Check if files are well formatted")
  .argument("[files]", "files to include", null)
  .option("-v, --verbose", "enable verbose mode", false)
  .option("--body", "also format the body", true)
  .action(async (files, options) => {
    await check(files, options);
  });

program
  .command("convert")
  .description("Convert files to .http format")
  .argument("<files...>", "files to include")
  .option("--from <value>", "source format", "openapi")
  .option("--to <value>", "destination format", "http")
  .action(async (files, options) => {
    await convert(options, files);
  });

program.parse();
