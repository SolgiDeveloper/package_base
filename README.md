# [to persian letter currency](https://reactjs.org/)

**to-persian-letter-currency** is an npm package that converts numeric currency values to their equivalent Persian text. It simplifies the process of displaying Persian letter currency in applications, ensuring proper localization and readability.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [Author](#author)

## Installation

Install with [npm](https://www.npmjs.com/@hosseintaromi/video_player):

```sh
npm install to-persian-letter-currency
```

Install with [yarn](https://yarnpkg.com/package?q=%40hosseintaromi&name=%40hosseintaromi%2Fvideo_player):

```sh
yarn add to-persian-letter-currency
```

## Usage

Here is a basic example of how to use the package:
```tsx
import { toPersianLetterCurrency } from 'to-persian-letter-currency';

const number = 123456;
const persianCurrency = toPersianLetterCurrency(number);

console.log(persianCurrency); // Outputs: دوازده هزار و سیصد و چهل و پنج تومان و شش ریال

```

## api

###

**toPersianLetterCurrency(number)**

number: number - The numeric value to be converted to Persian letter currency.

### for big int numbers the input number must be string

returns: string - The equivalent Persian letter currency.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

## Author

&nbsp;&middot;&nbsp;
[github/SolgiDeveloper](https://github.com/solgiDeveloper)

&nbsp;&middot;&nbsp;
[linkedin/MohammadSolgi](https://www.linkedin.com/in/mohammad-solgi/)


## License
This project is licensed under the ISC License.