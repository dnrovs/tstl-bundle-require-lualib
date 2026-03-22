# TSTL Bundle Require LuaLib

Require external `lualib_bundle` instead of including it in the code when bundling with TypeScriptToLua.

## Example
tsconfig.json
```json
{
    "compilerOptions": { /* ... */ },
    "tstl": {
        "luaBundle": "Main.lua",
        "luaBundleEntry": "src/Main.ts",
        "luaPlugins": [
          {
              "name": "tstl-bundle-require-lualib",
            
              // optional, custom name for lualib bundle to require
              "luaLibName": "custom_lualib_bundle"
          }
        ]
    }
}
```
