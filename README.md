# [to persian letter currency](https://github.com/SolgiDeveloper/package_base/tree/toPersianLetterCurrency)

**to-persian-letter-currency** is an npm package that converts numeric currency values to their equivalent Persian text. It simplifies the process of displaying Persian letter currency in applications, ensuring proper localization and readability.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [Author](#author)

## Installation

Install with [npm](https://www.npmjs.com/package/to-persian-letter-currency):

```sh
npm install to-persian-letter-currency
```

Install with [yarn]():

```sh
yarn add to-persian-letter-currency
```

## Usage

Here is a basic example of how to use the package:
```tsx
import { toPersianAlphabetic } from 'to-persian-letter-currency';

const number = 123456;
const persianCurrency = toPersianAlphabetic(number);

console.log(persianCurrency); // Output: دوازده هزار و سیصد و چهل و پنج تومان و شش ریال

console.log(toPersianNumberic(234568999998)); // Output:  234 میلیارد و 568 میلیون و 999 هزار و 999 تومان و 8 ریال

```

## api

###

**toPersianAlphabetic(number)**

number: number - The numeric value to be converted to Persian letter currency.

### for big int numbers the input number must be string

returns: string - The equivalent Persian letter currency.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/SolgiDeveloper/package_base/tree/toPersianLetterCurrency).

## Author

&nbsp;&middot;&nbsp;
[github/SolgiDeveloper](https://github.com/solgiDeveloper)

&nbsp;&middot;&nbsp;
[linkedin/MohammadSolgi](https://www.linkedin.com/in/mohammad-solgi/)


## License
This project is licensed under the ISC License.