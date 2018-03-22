# abt

> A CLI tool to get easy info from your `package.json`.

```
npm i -g abt
```

## Usage

abt takes only one argument, being the `.dotNoted` reference to the part of your `package.json` that you wish to fetch. When called with no arguments at all, abt will present you with your `.scripts` by default. When called with multiple arguments, abt will only use the first. abt also provides shortcuts. (See below.)

### Examples

Given the command `abt` or `abt .scripts`, abt will give you your `package.json`'s `scripts` value:

```json
["<path/to/projectRoot>/package.json"].scripts == {
	"start": "node bin",
	"test": "jest"
}
```

Given the command `abt .dependencies`, abt will give you the `dependencies` value found in your `package.json`:

```json
["<path/to/projectRoot>/package.json"].dependencies == {
   "ink": "^0.4.1",
   "ink-spaces": "^0.0.1",
   "ink-spinner": "^1.0.0",
   "node-jq": "^1.2.0",
   "yargs": "^11.0.0"
}
```

Given the command `abt .version`, abt will give you the `version` value found in your `package.json`:

```json
["<path/to/projectRoot>/package.json"].version == "0.0.2"
```

## Shortcuts

| arg   | same as             |
| ----- | ------------------- |
| `.DD` | '.devDependencies'  |
| `.PD` | '.peerDependencies' |
| `.D`  | '.dependencies'     |
| `.V`  | '.version'          |

_Example: `abt .DD` -> `abt .devDependencies`_

## Notes

_abt is not guaranteed to work on Node < 8.1_
