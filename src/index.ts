import { LuaLibImportKind, Plugin } from 'typescript-to-lua'

export default function (options: { luaLibName?: string }): Plugin {
    const luaLibName = options.luaLibName || 'lualib_bundle'

    return {
        beforeEmit(program, options, emitHost, result) {
            if (!options.luaBundle) return

            options.luaLibImport = LuaLibImportKind.None

            const file = result[0]

            const injection = `local lualib_bundle = require('${luaLibName}')

setmetatable(_G, {__index = lualib_bundle})

`
            file.code = injection + file.code
        }
    }
}
