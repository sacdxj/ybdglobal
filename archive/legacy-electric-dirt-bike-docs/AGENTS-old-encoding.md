# Project Notes

## 易错点记�?
- Windows PowerShell may block `npm.ps1` because of the local execution policy. Run project scripts with `npm.cmd`, for example `npm.cmd run build`, instead of changing the machine execution policy.
- In restricted environments Astro may fail while creating its telemetry config under the user profile. Set `ASTRO_TELEMETRY_DISABLED=1` for build and check commands.
- Astro templates render plain HTML, so React-only `key` attributes must not be added to ordinary elements. Also keep navigation item shapes aligned with the properties read by the template.
- Source files contain some legacy mojibake characters. Avoid using corrupted glyph lines as large patch anchors; patch around stable ASCII context and verify the rendered output.
- Astro content collection schema lives at `src/content/config.ts`, not `src/content.config.ts`; locate the existing file before inspecting or changing collection fields.
- If the Node REPL tool fails because sandbox metadata lacks `sandboxPolicy`, use the project-local `node` command for read-only encoding or source audits instead of retrying the same tool.
- Use `Ovkara` as the organization/brand name. Treat `electric dirt bike` as the category and SEO phrase, not the company name. The positioning is an American electric dirt bike decision brand that helps riders choose with confidence.
- Large multi-file patches against an external drive may stall in restricted sessions. Stage the required text files inside the writable workspace, patch them there, then sync only the explicitly changed files back to the project.
- Browser plugin cache versions can change between sessions; locate the current `control-in-app-browser/SKILL.md` instead of hardcoding the previous version directory.
- If the in-app browser runtime exits with `EPERM` while resolving `C:\Users\Administrator\AppData`, record visual QA as not completed and use production HTML checks for links, images, canonicals, and metadata; do not claim browser validation passed.
- Do not assume `winget` is installed on the deployment machine. If GitHub CLI is missing, use the official portable release inside the writable workspace instead of repeatedly trying system package installation.
- In PowerShell, avoid combining several quote-sensitive `rg` patterns in one command. Run simpler searches separately so embedded single and double quotes cannot terminate the command unexpectedly.
- If a PowerShell command fails while searching with a complex regex, do not keep tuning the same one-liner. Split the audit into multiple plain `rg` searches and continue from the simpler evidence.
- When changing the site's color system, update both `src/layouts/MainLayout.astro` CSS variables and `tailwind.config.mjs`; Tailwind utility classes compile from the config, so changing only CSS variables will leave old colors in the generated site.
- For this terminal-components site, avoid overcorrecting the palette into all-brown/all-brass. The better visual direction is precision engineering blue-black as the base, with brass used as a restrained manufacturing accent.
- When a small legacy file is mostly mojibake, rebuild that file with an `apply_patch` delete/add operation instead of matching corrupted comment lines in an update hunk.
- If the generic web fetch tool returns an environment-side 403 for a Vercel site, verify deployment with a direct PowerShell `Invoke-WebRequest` call and a cache-busting query parameter instead of retrying the same fetch path.
- PowerShell variable names are case-insensitive, and `$HOME` is read-only. In deployment checks, use names such as `$homeResponse` rather than `$home`.
