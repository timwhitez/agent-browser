#!/usr/bin/env node

const message = `
╔═══════════════════════════════════════════════════════════════════════════╗
║ agent-browser was installed successfully!                                 ║
║ Please run the following command to download browser binaries:            ║
║                                                                           ║
║     npx agent-browser install                                             ║
║                                                                           ║
║ On Linux, include system dependencies with:                               ║
║                                                                           ║
║     npx agent-browser install --with-deps                                 ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
`;

console.log(message);
