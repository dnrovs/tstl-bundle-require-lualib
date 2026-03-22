# TSTL Bundle Require LuaLib

Require external `lualib_bundle` instead of including it in the code when bundling with TypeScriptToLua.

## Example
tsconfig.json
```json
{
    "compilerOptions": { },
    "tstl": {
        "luaBundle": "Main.lua",
        "luaBundleEntry": "src/Main.ts",
        "luaLibImport": "none",
        "luaPlugins": [
          {
              "name": "tstl-bundle-require-lualib",

              "luaLibName": "optional_custom_require_name"
          }
        ]
    }
}
```
