module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-no-undef": 2,
        "react/jsx-no-undef": 2,
        "react/display-name": 0,
        "react/jsx-sort-props": 0,
        "react/no-multi-comp": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-unknown-property": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/self-closing-comp": 2,
        "react/jsx-wrap-multilines": 2
    }
};