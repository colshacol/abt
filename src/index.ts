import * as fs from 'fs'
import * as ramda from 'ramda'
import * as prompts from 'prompts'

type Pkg = {
  scripts: PkgScripts
}

type PkgScripts = {
  [name: string]: string
}

const cwd = process.cwd()

const buildPkgPath = (filename) => filename ? `${cwd}/package.json` : undefined

const findPkgFilename = (cwdFiles: string[]): boolean => cwdFiles.includes('package.json')

const getScriptsFromPkg = (pkg: Pkg): PkgScripts => pkg.scripts || {}

const handleMissingPkg = () => console.error('No package.json in cwd.')

const createPrompt = (choices) => prompts({
  type: 'select',
  name: 'script',
  initial: 0,
  message: 'Which script would you like to run?',
  choices,
})

const chooseLength = (final, [ name ]) => name.length > final ? name.length : final

const getLongestScriptName = (scripts) => scripts.reduce(chooseLength, 0) + 5

const formatScripts = (scripts) => scripts.reduce(formatScript(getLongestScriptName(scripts)), [])

const formatScript = titleLength => (final, [ name, script ]) => {
  final.push({
    title: `${name}${Array(titleLength - name.length).fill(' ').join('')}${script}`,
    value: script
  })
  
  return final
}

const getCwdFiles = fs.readdirSync

const handlePkgPath = (pkgPath) => pkgPath || handleMissingPkg

const readPkg = (pkgPath) => JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

const getScriptsArrays = (scripts) => Object.entries(scripts)

const response = ramda.compose(
  createPrompt,
  formatScripts,
  getScriptsArrays,
  getScriptsFromPkg,
  readPkg,
  handlePkgPath,
  buildPkgPath,
  findPkgFilename,
  getCwdFiles,
)(cwd)