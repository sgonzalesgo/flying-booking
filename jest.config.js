module.exports = {
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js"
    },
    transform: {
        "^.+\\.svg$": "jest-svg-transformer",
        '^.+\\.jsx?$': 'babel-jest',
     },
     transformIgnorePatterns: [
         "/node_modules/"
     ]
}