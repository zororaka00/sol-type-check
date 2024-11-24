# sol-type-check

A lightweight JavaScript library to validate Solidity data types like `int`, `uint`, `bytes`, and Ethereum-specific types such as addresses and transaction hashes.

## Features

- Validate signed and unsigned integers (`int`, `uint`) with customizable bit sizes.
- Validate Solidity `bytes` types (1, 2, 4, 8, 16, 32).
- Validate Ethereum addresses and transaction hashes.
- Provides simple and easy-to-use functions.

## Installation

To install the library, run the following command:

```bash
npm install sol-type-check
```

## Usage

### Importing the Library

You can import the library in your project like this:

```javascript
const { isInt, isUint, isBytes, isAddress, isHash } = require('sol-type-check');
```

### Example Functions

#### `isInt(bits, value)`

Checks if a value is a signed integer within the range for a given bit size.

```javascript
isInt(32, 123); // true
isInt(8, -130); // false
```

#### `isUint(bits, value)`

Checks if a value is an unsigned integer within the range for a given bit size.

```javascript
isUint(32, 4294967295); // true
isUint(8, -1); // false
```

#### `isBytes(value, bytes)`

Checks if a value is a valid bytes array of the specified size.

```javascript
isBytes("0xabcdef", 4); // true
isBytes("0x12345", 2); // false
```

#### `isAddress(value)`

Checks if a value is a valid Ethereum address.

```javascript
isAddress("0x32Be343B94f860124dC4fEe278FDCBD38C102D88"); // true
isAddress("0xInvalidAddress"); // false
```

#### `isHash(value)`

Checks if a value is a valid Ethereum transaction hash.

```javascript
isHash("0x5c504ed7d413568f857eeb70f9f70e0d8b6b7469c9a7f325d9776de08e850635"); // true
isHash("0xInvalidHash"); // false
```

## API

- **`isInt(bits, value)`**  
  Validates a signed integer for the specified bit size.  
  - **`bits`**: An integer (8, 16, 32, 64, 128, or 256) representing the bit size.
  - **`value`**: A number to check if it is within the valid range.

- **`isUint(bits, value)`**  
  Validates an unsigned integer for the specified bit size.  
  - **`bits`**: An integer (8, 16, 32, 64, 128, or 256) representing the bit size.
  - **`value`**: A number to check if it is within the valid range.

- **`isBytes(value, bytes)`**  
  Validates a bytes array of a specified size.  
  - **`value`**: A string representing the bytes in hexadecimal format (prefixed with `0x`).
  - **`bytes`**: An integer (1, 2, 4, 8, 16, or 32) representing the expected byte size.

- **`isAddress(value)`**  
  Validates an Ethereum address.  
  - **`value`**: A string representing the Ethereum address (must start with `0x` and be 40 hexadecimal characters).

- **`isHash(value)`**  
  Validates an Ethereum transaction hash.  
  - **`value`**: A string representing the Ethereum transaction hash (must start with `0x` and be 64 hexadecimal characters).

## Contributing

If you would like to contribute to this project, feel free to fork the repository and create a pull request. We welcome bug reports, suggestions, and improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Author: Raka Widhi Antoro  
- Email: rakawidhiantoro@gmail.com  