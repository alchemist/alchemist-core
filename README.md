# Alchemist Core Library

Underlying core library for building your own Alchemist code generation plugins.

![alchemist-image](https://avatars1.githubusercontent.com/u/43213226?s=64&v=4)

[![Npm Version][npm-version-image]][npm-version-url]
[![Npm Downloads][npm-downloads-image]][npm-version-url]
[![Join Discord Chat][discord-image]][discord-url]

For more about Alchemist go look at: [Alchemist Application](https://github.com/alchemist/alchemist-application)

## Core parts

The library contains some key components and functionality such as:

- `NodeContainer` Component (Provides the basic container for visual nodes)

- `NodeRegistry` (Provides all the available node types)
- `NodeGeneratorRegistry` (Provides all the generators for node types)
- `CodeProcessorRegistry` (Provides all the code processors)

- `ProjectRegistry` (Provides all the project types)
- `ProjectGeneratorRegistry` (Provides all the generators for project types)

- `IFileSystem` (Provides an abstraction on the file system)

## How do I use it?

Just add a dependency to `@alchemist/core` and then include the parts you care about in your code.

You can use the `@alchemist/dotnet` and `@alchemist/ecsrx` repositories as examples of making your own plugins.

## Blurb

This library is still very much a work in progress so the docs will be sparse and if you want to know more head on over to the discord channel.




[npm-version-image]: https://badge.fury.io/js/%40alchemist%2Fcore.svg
[npm-version-url]: https://www.npmjs.com/package/%40alchemist%2Fcore
[npm-downloads-image]: https://img.shields.io/npm/dm/alchemist.svg?maxAge=2592000
[discord-image]: https://img.shields.io/discord/488609938399297536.svg
[discord-url]: https://discord.gg/bS2rnGz