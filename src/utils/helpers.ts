/* eslint-disable radix */
export function toPersianAlphabetic(number: number) {
  let Delimiter = " و ";
  let Zero = "صفر";
  let Letters = [
    ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
    [
      "ده",
      "یازده",
      "دوازده",
      "سیزده",
      "چهارده",
      "پانزده",
      "شانزده",
      "هفده",
      "هجده",
      "نوزده",
      "بیست",
    ],
    ["", "", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
    [
      "",
      "یکصد",
      "دویست",
      "سیصد",
      "چهارصد",
      "پانصد",
      "ششصد",
      "هفتصد",
      "هشتصد",
      "نهصد",
    ],
    [
      "",
      " هزار",
      " میلیون",
      " میلیارد",
      " بیلیون",
      " بیلیارد",
      " تریلیون",
      " تریلیارد",
      "کوآدریلیون",
      " کادریلیارد",
      " کوینتیلیون",
      " کوانتینیارد",
      " سکستیلیون",
      " سکستیلیارد",
      " سپتیلیون",
      "سپتیلیارد",
      " اکتیلیون",
      " اکتیلیارد",
      " نانیلیون",
      " نانیلیارد",
      " دسیلیون",
      " دسیلیارد",
    ],
  ];
  const rialPart = +number.toString().charAt(number.toString().length - 1);
  const tomanPart = Math.floor(number / 10);
  let PrepareNumber = function PrepareNumber(num: string | number) {
    let Out = num;

    if (typeof Out === "number") {
      Out = Out.toString();
    }

    let NumberLength = Out?.length % 3;

    if (NumberLength === 1) {
      Out = "00".concat(Out);
    } else if (NumberLength === 2) {
      Out = "0".concat(Out);
    } // Explode to array

    return Out?.replace(/\d{3}(?=\d)/g, "$&*").split("*");
  };
  let ThreeNumbersToLetter = function ThreeNumbersToLetter(num: string) {
    // return Zero
    if (parseInt(num, 0) === 0) {
      return "";
    }

    let parsedInt = parseInt(num, 0);

    if (parsedInt < 10) {
      return Letters[0][parsedInt];
    }

    if (parsedInt <= 20) {
      return Letters[1][parsedInt - 10];
    }

    if (parsedInt < 100) {
      let _one = parsedInt % 10;

      let _ten = (parsedInt - _one) / 10;

      if (_one > 0) {
        return Letters[2][_ten] + Delimiter + Letters[0][_one];
      }

      return Letters[2][_ten];
    }

    let one = parsedInt % 10;
    let hundreds = (parsedInt - (parsedInt % 100)) / 100;
    let ten = (parsedInt - (hundreds * 100 + one)) / 10;
    let out = [Letters[3][hundreds]];
    let SecondPart = ten * 10 + one;

    if (SecondPart > 0) {
      if (SecondPart < 10) {
        out.push(Letters[0][SecondPart]);
      } else if (SecondPart <= 20) {
        out.push(Letters[1][SecondPart - 10]);
      } else {
        out.push(Letters[2][ten]);

        if (one > 0) {
          out.push(Letters[0][one]);
        }
      }
    }

    return out.join(Delimiter);
  };

  // return Zero
  if (parseInt(number?.toString(), 0) === 0) {
    return Zero;
  }

  if (number?.toString()?.length > 66) {
    return "خارج از محدوده";
  } // Split to sections

  let SpitedNumber = PrepareNumber(tomanPart); // Fetch Sections and convert

  let Output = [];
  let SplitLength = SpitedNumber?.length;
  if (tomanPart > 0) {
    for (let i = 0; i < SplitLength; i += 1) {
      let SectionTitle = Letters[4][SplitLength - (i + 1)];
      let converted = ThreeNumbersToLetter(SpitedNumber[i]);
      if (converted !== "") {
        Output.push(converted + SectionTitle);
      }
    }
    const lstElement = `${Output.pop()} تومان`;
    Output.push(lstElement);
  }

  if (rialPart > 0) Output.push(`${Letters[0][rialPart]} ریال `);
  return Output.join(Delimiter);
}

export function toPersianNumberic(number: number): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

  // Convert the number to a string for processing
  const numberStr = number.toString();

  // Extract the last digit as the 'rial' part
  const rialPart = parseInt(numberStr.slice(-1));

  // The rest of the number represents the 'toman' part
  const tomanPart = parseInt(numberStr.slice(0, -1));

  // Handle billions, millions, and thousands
  const billions = Math.floor(tomanPart / 1000000000);
  const remainingAfterBillions = tomanPart % 1000000000;

  const millions = Math.floor(remainingAfterBillions / 1000000);
  const remainingAfterMillions = remainingAfterBillions % 1000000;

  const thousands = Math.floor(remainingAfterMillions / 1000);
  const hundreds = remainingAfterMillions % 1000;

  // Convert the numbers to Persian numerals
  const persianBillions =
    billions > 0
      ? `${convertNumberToPersian(billions, persianDigits)} میلیارد`
      : "";
  const persianMillions =
    millions > 0
      ? `${convertNumberToPersian(millions, persianDigits)} میلیون`
      : "";
  const persianThousands =
    thousands > 0
      ? `${convertNumberToPersian(thousands, persianDigits)} هزار`
      : "";
  const persianHundreds =
    hundreds > 0 ? convertNumberToPersian(hundreds, persianDigits) : "";
  const persianRial = rialPart > 0 ? `${persianDigits[rialPart]} ریال` : "";

  // Construct the final string
  let result = "";
  if (persianBillions) {
    result += persianBillions;
  }
  if (persianMillions) {
    if (result) result += " و ";
    result += persianMillions;
  }
  if (persianThousands) {
    if (result) result += " و ";
    result += persianThousands;
  }
  if (persianHundreds) {
    if (result) result += " و ";
    result += `${persianHundreds} تومان`;
  } else if (result) {
    result += " تومان";
  }

  if (persianRial && !hundreds) {
    result += `${persianRial}`;
  } else if (persianRial) {
    result += ` و ${persianRial}`;
  }

  return result || "صفر تومان";
}

function convertNumberToPersian(number: number, persianDigits: string): string {
  return number
    .toString()
    .split("")
    .map((digit) => persianDigits[parseInt(digit)])
    .join("");
}
